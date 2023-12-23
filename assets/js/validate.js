const usernameRegex = /^([a-zA-Z0-9]{4,12}$)/
        const passwordRegex = /^([a-zA-Z0-9]{8,}$)/

        let usernameInp = document.querySelector('input#username');
        let passwordInp = document.querySelector('input#password');

        usernameInp.addEventListener('blur', (e) => {
            const value = e.target.value;

            if (!usernameRegex.test(value)) {
                if (usernameInp.classList.contains('is-valid')) {
                    usernameInp.classList.add('is-invalid')
                    usernameInp.classList.remove('is-invalid')
                } else {
                    usernameInp.classList.add('is-invalid')
                }
            } else {
                if (usernameInp.classList.contains('is-invalid')) {
                    usernameInp.classList.add('is-valid')
                    usernameInp.classList.remove('is-invalid')
                } else {
                    usernameInp.classList.add('is-valid')
                }
            }
        })
        passwordInp.addEventListener('blur', (e) => {
            const value = e.target.value;

            if (!passwordRegex.test(value)) {
                if (passwordInp.classList.contains('is-valid')) {
                    passwordInp.classList.add('is-invalid')
                    passwordInp.classList.remove('is-invalid')
                } else {
                    passwordInp.classList.add('is-invalid')
                }
            } else {
                if (passwordInp.classList.contains('is-invalid')) {
                    passwordInp.classList.add('is-valid')
                    passwordInp.classList.remove('is-invalid')
                } else {
                    passwordInp.classList.add('is-valid')
                }
            }
        })