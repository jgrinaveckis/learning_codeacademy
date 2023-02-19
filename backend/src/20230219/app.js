const redirectButton = document.getElementById('button-redirect');
const urlInput = document.getElementById('input-url');

redirectButton.addEventListener('click', function () {
    sendData();
});

async function fetchAndSendData(){
    const formData = new FormData();
    formData.append('urlForRedirection', urlInput.value);
    const resp = await fetch("urlhandler.php", {
        method: 'POST',
        cache: 'no-cache',
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Accept': 'application/json'
        },
        body: formData
    });

    const respData = resp.json()
    if(respData.status == 'success'){
        addToTable(responseData.results);
    } else if (responseData.status == 'duplicate') {
        alert('Url already shortened to: ' + responseData.results);
    } else {
        alert('Error: ' + responseData.message);
    }
}

function addToTable(data){
    let tbody = document.getElementById('tbody');
    let tr = document.createElement('tr');
    let thURL = document.createElement('th');
    let thID = document.createElement('th');
    let thNumber = document.createElement('th');
    tr.scope='row';
    thNumber.textContent = parseInt(tbody.lastElementChild.firstElementChild.textContent) + 1;
    thID.textContent = data.id;
    thURL.textContent = data.url;
    tr.append(thNumber,thID,thURL);
    tbody.append(tr);
}


