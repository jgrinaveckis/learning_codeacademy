const form = document.getElementById("id");

form.addEventListener('submit', function(event) {
    event.preventDefault();
    fetch('app.php')
        .then(async function(response) {
            const text = await response.text();
            alert(text);
        });
});