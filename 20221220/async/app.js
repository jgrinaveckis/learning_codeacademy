function getPosts(url) {
    return fetch(url)
            .then((response) => response.json())
            .then((data) => {
                let table = document.getElementById('tbl1');
                data.forEach(element => {
                    let row = document.createElement("tr");
                    for (const key in element) {
                        let item = element[key];
                        let cell = document.createElement("td");
                        cell.textContent = item;
                        row.append(cell);
                    }
                    table.append(row)
                });
            })
            .catch((error) => {
                console.error('Error:', error);
            })
}

getPosts('https://jsonplaceholder.typicode.com/posts');
