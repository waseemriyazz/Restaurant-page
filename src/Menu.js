

export default function loadMenu(){
    const container = document.querySelector("#content");
    const menu = document.createElement("div");
    container.appendChild(menu);
    const list = document.createElement("ul");
    list.innerHTML="<li>Tea</li><li>Milk</li><li>Cookies</li>"
    menu.appendChild(list);



    
}