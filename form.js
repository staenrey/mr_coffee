let contactForm = document.querySelector(".contact-form")

let overlay = document.querySelector("#overlay")

let closeButton = document.querySelector("#close-popup")

function openPopup() {
    overlay.style.display="block"
}

function closePopup() {
    overlay.style.display="none"
}

function formSubmit(event) {
    
    event.preventDefault()

    let lastName = contactForm["last-name"].value
    let firstName = contactForm["first-name"].value
    let phoneNumber = contactForm["phone"].value
    let email = contactForm["email"].value
    let message = contactForm["message"].value

    if( lastName.length > 0 &&
        firstName.length > 0 &&
        email.length > 0 &&
        /.@./.test(email) &&
        message.length > 0 &&
        (phoneNumber.length === 0 ||
        /^[0-9]+$/.test(phoneNumber))

        ) {

        console.log("Last Name: " +lastName + " First Name: " + firstName + " Phone Number: " + phoneNumber + " E-mail: " + email + " Message: " + message)

        openPopup()
    }
}

contactForm.addEventListener("submit", formSubmit)

closeButton.addEventListener("click", closePopup)