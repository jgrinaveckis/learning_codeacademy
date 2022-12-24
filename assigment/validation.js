function pageChecker() {
    document.getElementById("btn-alert").addEventListener("click", () => {
        alert ("Hello World!"); 
    });

    let elementForChange = document.getElementById("textToChange");
    let changeButtons = [
        "toUpperCaseButton", "toLowerCaseButton",
        "firstUpperCaseButton", "firstLowerCaseButton"
    ];
    
    for (let i = 0; i < changeButtons.length; i++) {
        let button = document.getElementById(changeButtons[i]);
        button.addEventListener("click", () => { 
            changeText(elementForChange, button.value);
        })
    }

    const buttonSave = document.getElementById("buttonSave");
    const insertEmail = document.getElementById("insertEmail");
    const validateEmail = document.getElementById("validateEmail");
    const insertPhone = document.getElementById("insertPhone");
    const validatePhone = document.getElementById("validatePhone");

    buttonSave.addEventListener("click", () => {
        clearValidationErrors();

        if (!emailValidation(insertEmail)) {
            validateEmail.removeAttribute("hidden");
            insertEmail.classList.add("border-danger");
        }

        if (!phoneValidation(insertPhone)) {
            validatePhone.removeAttribute("hidden");
            insertPhone.classList.add("border-danger");
        }
    });

    const inputToBlock = document.getElementById("blockUnblockInput");
    const blockButton = document.getElementById("blockButton");
    const unblockButton = document.getElementById("unblockButton");

    blockButton.addEventListener("click", () => {
        inputToBlock.disabled = true;
    });
    
    unblockButton.addEventListener("click", () => {
        inputToBlock.disabled = false;
    });

    const imageChange = document.getElementById("imageChange");
    imageChange.addEventListener("mouseover", () => {
        imageChange.src = "https://i.imgur.com/0DElr0H.jpg";
    });

    imageChange.addEventListener("mouseout", () => {
        imageChange.src = "https://i.imgur.com/PLDVxza.jpg";
    });

    const blockToChange = document.getElementById("divToChange");

    const listOfCursors = document.getElementById("listOfCursors");
    let cursorsChildren = [...listOfCursors.children];
    cursorsChildren.forEach(child => {
        child.firstChild.addEventListener("click", () => {
            document.querySelector("body").style.cursor = child.firstChild.value;
        });
    });

    const listOfColors = document.getElementById("listOfColors");
    let colorsChildren = [...listOfColors.children];
    colorsChildren.forEach(child => {
        child.firstChild.addEventListener("click", () => {
            blockToChange.style.color = child.firstChild.value;
        });
    });

    const listOfBorders = document.getElementById("listOfBorders");
    let bordersChildren = [...listOfBorders.children];
    bordersChildren.forEach(child => {
        child.firstChild.addEventListener("click", () => {
            console.log("3px solid" + child.firstChild.value);
            blockToChange.style.border = "2px dotted " + child.firstChild.value;
        });
    });

}

function changeText(element, type) {
    const input = element.value;
    let changed = "";
    switch (type) {
        case "upper":
            changed = input.toUpperCase();
            break;
        case "lower":
            changed = input.toLowerCase();
            break;
        case "firstUpper":
            changed = input.charAt(0).toUpperCase() + input.slice(1);
            break;
        case "firstLower":
            changed = input.charAt(0).toLowerCase() + input.slice(1);
            break;
        default:
            console.error("Provide something useful to cast!");
            break;
    }
    element.value = changed;
}

function emailValidation(element) {
    // pattern for email
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!element.value.match(mailFormat)){
        return false;
    }
    //Just check if element value is not null, e.g. if something was entered
    if(!element.value){
        return false;
    }
    return true;
}

function phoneValidation(element) {
    if (element.value.length <= 1) {
        return false;
    }
    //Just check if phone value is not null, e.g. if something was entered
    if(!element.value){
        return false;
    }
    return true;
}

function clearValidationErrors(){
    // Hide error messages
    let errorTexts = document.querySelectorAll(".my-form .text-danger");
    errorTexts.forEach(input => { input.hidden = true; });

    // Clear danger borders
    let errorBorders = document.querySelectorAll(".my-form .border-danger");
    errorBorders.forEach(input => { input.classList.remove("border-danger"); });
}
pageChecker();