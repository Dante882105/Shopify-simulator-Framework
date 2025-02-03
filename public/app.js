let ofert = document.querySelector(".ofert");
let info_ofert = document.createElement("div");
info_ofert.className = "message";
for (let i = 0; i < 11; i++) {
    let strong = document.createElement("strong");
    let p = document.createElement("p");
    strong.innerText = "FREE SHIPPING FOR ORDERS OVER $100";
    strong.style = "color: white; font-size: 7px; margin: auto 5px ";
    p.innerText = "♦";
    p.style = "color:rgb(152, 100, 250)"
    info_ofert.appendChild(p);
    info_ofert.appendChild(strong);
}
ofert.appendChild(info_ofert);


