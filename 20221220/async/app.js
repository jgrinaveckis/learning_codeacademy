function getResponse(url) {
    return fetch(url)
            .then((response) => response.json())
            .catch((error) => {
                console.error('Error:', error);
            })
}

function parseUsers(data) {
    let info = {};
    
    data.forEach((element) => {
        info[element.id] = element.name;
    });
    return info;
}

function updateTable(posts, users) {
    let table = document.getElementById("tbl1");
    let tableHead = document.createElement("thead");
    table.append(tableHead);

    let tableHeadRow = document.createElement("tr");
    let postHeaders = Object.keys(posts[0]);

    let nameOfPosterHead = document.createElement("th");
    nameOfPosterHead.textContent = "Name";

    tableHeadRow.append(nameOfPosterHead);
    postHeaders.forEach(header => {
        let newHeader = document.createElement("th");
        newHeader.textContent = header;
        tableHeadRow.append(newHeader);
    });

    tableHead.append(tableHeadRow);
    let tableBody = document.createElement("tbody");
    table.append(tableBody);

    posts.forEach(element => {
        let row = document.createElement("tr");
        let nameCell = document.createElement("td");
        nameCell.textContent = users[element.userId];
        row.append(nameCell);

        for (const key in element) {
            let item = element[key];
            let cell = document.createElement("td");
            cell.textContent = item;
            row.append(cell);
        }
        table.append(row)
    });
}

getResponse('https://jsonplaceholder.typicode.com/users')
        .then(usersData => parseUsers(usersData))
        .then(users => {
            getResponse('https://jsonplaceholder.typicode.com/posts')
            .then(postsData => { updateTable(postsData, users) })
        });
