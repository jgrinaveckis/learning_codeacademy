const form = document.getElementById("id");

form.addEventListener('submit', function(event) {
    event.preventDefault();
    fetch('app.php').then(alert(response.text))
});