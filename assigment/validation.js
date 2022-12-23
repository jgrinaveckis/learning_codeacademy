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
            changed = input.charAt(0).toUpperCase() + input.slice(1)
            break;
        case "firstLower":
            changed = input.charAt(0).toLowerCase() + input.slice(1)
            break;
        default:
            console.error("Provide something useful to cast!");
            break;
    }
    element.value = changed;
}
pageChecker();