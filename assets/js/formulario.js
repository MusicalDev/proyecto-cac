document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    const errors = {
        firstname: document.getElementById('firstnameError'),
        lastname: document.getElementById('lastnameError'),
        phone: document.getElementById('phoneError'),
        email: document.getElementById('emailError'),
        message: document.getElementById('messageError'),
    };

    const regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    const regexComments = /^.{1,255}$/;
    const regexPhone = /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/;

    const validate = (form) => {
        let isValid = true;
        clearErrors();


        if (!form.firstname.value.trim()) {
            errors.firstname.textContent = "El nombre es requerido.";
            isValid = false;
        } else if (!regexName.test(form.firstname.value)) {
            errors.firstname.textContent = "El nombre solo puede contener letras y espacios.";
            isValid = false;
        }

        if (!grecaptcha.getResponse()) {
            alert('Por favor, active el reCAPTCHA.');
            isValid = false;
        }

        return isValid;
    };

    const clearErrors = () => {
        for (let error in errors) {
            errors[error].textContent = "";
        }
    };

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validate(form)) {
            submitBtn.disabled = true;
            fetch('https://formspree.io/f/meqywrzo', {
                method: 'POST',
                body: new FormData(form),
                headers: {
                    'Accept': 'application/json'
                }
            }).then(response => {
                if (response.ok) {
                    alert('Mensaje enviado correctamente');
                    form.reset();
                } else {

                    response.json().then(data => {
                        if (Object.hasOwn(data, 'errors')) {
                            alert(data["errors"].map(error => error["message"]).join(", "));
                        } else {
                            alert('Error al enviar el formulario');
                        }
                    });
                }
            }).catch(error => {
                alert('Error al enviar el formulario');
            }).finally(() => {
                submitBtn.disabled = false;
            });
        }
    })
});