import createButtons from "./buttons";

export default function pageload(){
    const container = document.querySelector("#content");
    const heading = document.createElement('h1');
    heading.textContent="Modern Foods";
    container.appendChild(heading);
    const subHeading = document.createElement('h3');
    subHeading.textContent= "We're simply the best";
    container.appendChild(subHeading);

    createButtons();
    
    
}

    