import './style/contact.css'


const main_content = document.getElementById('content')

const loadContact = () => {
    const contact_content_div = document.createElement('div')
    const contact_div = document.createElement('div')
    const h1 = document.createElement('h1')
    contact_content_div.classList.add('contact-content')
    contact_div.classList.add('contact')

    const digits = document.createElement('p')
    const digits2 = document.createElement('p')
    const digits3 = document.createElement('p')
    const addr = document.createElement('p')

    const mail = document.createElement('p')
    digits.textContent = "200-179-8931"
    digits2.textContent = "200-567-8910"
    digits3.textContent = "200-537-7941"
    addr.textContent = "4385, The place ave, DoesNotExist"
    mail.textContent = "orderFromUs@today.com"
    h1.textContent = "Reach Us"

    contact_div.appendChild(h1)
    contact_div.appendChild(digits)
    contact_div.appendChild(digits2)
    contact_div.appendChild(digits3)

    contact_div.appendChild(mail)
    contact_div.appendChild(addr)
    contact_content_div.appendChild(contact_div)
    main_content.appendChild(contact_content_div)

}

export default loadContact
