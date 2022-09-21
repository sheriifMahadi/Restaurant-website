import loadpage from "./home"
import menu from "./menu";
import contact from "./contact";


loadpage()

const main_content = document.getElementById('content')
const btns = document.querySelectorAll(".nav-btn")

function switchTabs() {
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (e.target.id == 'home-btn') {
               main_content.innerHTML = ""
               loadpage()
            }
            else if (e.target.id == 'menu-btn') {
                main_content.innerHTML = ""
                menu()
            }
            else if (e.target.id == 'contact-btn') {
                main_content.innerHTML = ""
                contact()
            }
            else{}
        })
    })
}

switchTabs()

