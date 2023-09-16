export default function loadContact(){
    const container = document.querySelector("#content");
    const contact = document.createElement("div");
    container.appendChild(contact);
    const contactInfo = document.createElement("ul");
    contactInfo.innerHTML="<li>Phone number: 1234567890</li><li>Email: abc@123.com</li><li>Address: 1st street 2nd road</li>"
    contact.appendChild(contactInfo);
}