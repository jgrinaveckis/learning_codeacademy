function handleResponseData(data) {
    console.log(data)
}

function collectAsFormData() {
    const formData = new FormData();

    document.querySelectorAll('#profile [name]').forEach(function(el) {
        const elAttrType = el.getAttribute('type');

        if (elAttrType == 'checkbox' && el.checked == false) {
            return;
        }

        if (elAttrType == 'file') {
            if (el.files[0]) {
                formData.append(el.name, el.files[0]);
            }
        } else {
            formData.append(el.name, el.value);
        }
    });

    return formData;
}

window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelector('#submit')?.addEventListener('click', async function() {
        [...document.querySelectorAll('.is-invalid')].forEach(el => el.classList.remove('is-invalid'));
        [...document.querySelectorAll('span.is-invalid-helper')].forEach(el => el.remove());

        const response = await fetch('/?page=generate', {
            method: 'POST',
            cache: 'no-cache',
            headers: {
                'X-Requested-With': 'XMLHttpRequest',
                'Accept': 'application/json'
            },
            body: collectAsFormData()
        });

        const data = await response.json();

        if (response.status == 422 && Object.keys(data.errors).length > 0) {
            for (let name in data.errors) {
                const el = document.querySelector(`[name=${name}]`);

                if (!el) {
                    alert(data.errors[name]);

                    continue;
                }

                el.classList.add('is-invalid');

                let span = document.createElement('span');
                    span.classList.add('ms-2', 'text-danger', 'is-invalid-helper');
                    span.innerText = data.errors[name];

                el.after(span);
            }
        } else if (response.status == 201) {
            console.log(data.data);
        }

    });
});