window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('#submitButton')?.addEventListener('click', function() {
        const formData = new FormData();

        document.querySelectorAll('form[name]').forEach(function(el) {
            if (el.checked == false) {
                return;
            }
            formData.append(el.name, el.value);
        });

        fetch('app.php', {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
            },
            body: formData
        });
    });
});