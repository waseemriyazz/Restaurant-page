
import loadContact from "./Contact";
import loadMenu from "./Menu";
import loadHome from "./Home";
import clear, { flagUp } from "./clear";
export default function createButtons(){
    const container = document.querySelector("#content");


    const home = document.createElement("button");
    home.textContent = "home";
    container.appendChild(home);

    const menu = document.createElement("button");
    menu.textContent = "menu";
    container.appendChild(menu);

    const contact = document.createElement("button");
    contact.textContent = "contact";
    container.appendChild(contact);

    
    home.addEventListener("click", ()=>{
        clear();
        loadHome();
        flagUp();
        
    });
    
    menu.addEventListener("click", ()=>{
        clear();
        loadMenu();
        flagUp();
    });
    contact.addEventListener("click", ()=>{
        clear();
        loadContact();
        flagUp();
    });
}