(()=>{"use strict";function e(){const e=document.querySelector("#content"),t=document.createElement("div");e.appendChild(t);const n=document.createElement("img");n.src="/src/img/restaurant.jpg",t.appendChild(n)}let t=0;function n(){if(console.log(t),t>0){const e=document.querySelector("#content");e.removeChild(e.lastChild),t--}}function c(){t++}!function(){const t=document.querySelector("#content"),o=document.createElement("h1");o.textContent="Modern Foods",t.appendChild(o);const d=document.createElement("h3");d.textContent="We're simply the best",t.appendChild(d),function(){const t=document.querySelector("#content"),o=document.createElement("button");o.textContent="home",t.appendChild(o);const d=document.createElement("button");d.textContent="menu",t.appendChild(d);const l=document.createElement("button");l.textContent="contact",t.appendChild(l),o.addEventListener("click",(()=>{n(),e(),c()})),d.addEventListener("click",(()=>{n(),function(){const e=document.querySelector("#content"),t=document.createElement("div");e.appendChild(t);const n=document.createElement("ul");n.innerHTML="<li>Tea</li><li>Milk</li><li>Cookies</li>",t.appendChild(n)}(),c()})),l.addEventListener("click",(()=>{n(),function(){const e=document.querySelector("#content"),t=document.createElement("div");e.appendChild(t);const n=document.createElement("ul");n.innerHTML="<li>Phone number: 1234567890</li><li>Email: abc@123.com</li><li>Address: 1st street 2nd road</li>",t.appendChild(n)}(),c()}))}()}(),e(),c()})();