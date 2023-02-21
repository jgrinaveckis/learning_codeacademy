const redirectButton = document.getElementById('button-redirect');
const urlInput = document.getElementById('input-url');

redirectButton.addEventListener('click', function () {
    fetchAndSendData();
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
        addToTable(respData.results);
    } else if (respData.status == 'duplicate') {
        alert('Url already shortened to: ' + respData.results);
    } else {
        alert(respData.message);
    }
}

function addToTable(data){
    let tbody = document.getElementById('tbody');
    let tr = document.createElement('tr');
    let thURL = document.createElement('th');
    let codeTh = document.createElement('th');
    tr.scope='row';
    codeTh.textContent = data.code;
    thURL.textContent = data.url;
    tr.append(thNumber,thID,thURL);
    tbody.append(tr);
}


