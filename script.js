const inputField = document.querySelectorAll('.input_field')

// divs surrounding input field
const emailContainer = document.getElementById('email-container')
const fNameContainer = document.getElementById('first-name-container')
const lNameContainer = document.getElementById('last-name-container')
const passwordContainer = document.getElementById('password-container')

// input fields
const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const btn = document.getElementById('btn')

// regex requirements for each input field
const regexEmail = /^([a-z A-Z 0-9 \. _]+)@([a-z A-Z]+).([a-z A-Z]{2,6})(.[a-z]{2,6})?$/
const regexName = /^[a-zA-Z]*$/
const regexPassword = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/



// functions that display if input fields do not meet requirements
function firstNameValid() {
    const alert = document.createElement('p')
    alert.textContent = 'please enter a valid first name'
    fNameContainer.appendChild(alert)
}

function lastNameValid() {
    const alert = document.createElement('p')
    alert.textContent = 'please enter a valid last name'
    lNameContainer.appendChild(alert)
}

function emailValidation() {
    const alert = document.createElement('p')
    email.value = 'email@example.com'
    email.classList.add('email_alert')
    alert.textContent = "please enter a valid email"
    emailContainer.appendChild(alert)
}

function passwordCheck() {
    const alert = document.createElement('p')
    alert.textContent = 'please create a pssword 6 to 10 characters long'
    passwordContainer.appendChild(alert)   
}


function validation(form) {
    inputField.forEach(field => {
        const alert = document.createElement('p')
        
        // checks if input field is empty
        if (field.value.trim() === '') {
            let text
            // icon image
            field.setAttribute('class', 'input_background')
            // checks for blank input fields and displays error message
            switch(field.attributes[1].value) {
                case 'First Name':
                    text = 'First Name cannot be empty'
                    firstName.setAttribute('placeholder', ' ')
                    break;
                case 'Last Name':
                    text = 'Last Name cannot be empty'
                    lastName.setAttribute('placeholder', ' ')
                    break;
                case 'Email Address':
                    email.setAttribute('placeholder', 'email@example.com')
                    email.classList.add('email_alert')
                    text = 'Looks like this is not an email'
                    break;
                case 'Password':
                    text = 'Password cannot be empty'
                    password.setAttribute('placeholder', ' ')
                    break;
            }

            alert.textContent = text
            field.parentElement.appendChild(alert)
        }  
    })

    // checks if requirements are met adn displays error message
    if (!regexName.test(firstName.value) && firstName.value != '') {
        event.preventDefault()
        firstNameValid()
    }

    if (!regexName.test(lastName.value) && lastName.value != '') {
        event.preventDefault()
        lastNameValid()
    }

    if (!regexEmail.test(email.value) && email.value != '') {
        event.preventDefault()
        emailValidation()
        return false
    }

    if (!regexPassword.test(password.value) && password.value != '') {
        event.preventDefault()
        passwordCheck()
        return false
    }
}

btn.addEventListener('click', validation)