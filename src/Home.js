export default function loadHome(){
    const container = document.querySelector("#content");
    const div = document.createElement("div");
    container.appendChild(div);
     const img = document.createElement("img");
     img.src="/src/img/restaurant.jpg"
     div.appendChild(img);

}