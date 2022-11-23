

//ARRANCANDO EL AUTO

const autico = document.querySelector("#claveauto");
const urll = "https://www.autoshopping.cl/dinamicos/contenidos/sucursal-auto.png";
const img = document.createElement("img");
img.setAttribute("src", urll);
img.className="imglol"
autico.append(img);

const respt = document.querySelector("#respuesta");

let eleccion = 0;

function eventos1() {
    eleccion++
    if (eleccion == 1) {
        respt.innerHTML = "✔️";
    } else {
        respt.innerHTML = "❌"
        eleccion = 0;
    }
    console.log(eleccion);
}

function eventos2() {
    eleccion++
    if (eleccion == 2) {
        respt.innerHTML = "✔️"
    } else {
        respt.innerHTML = "❌"
        eleccion = 0
    }
    console.log(eleccion);
}

function eventos3() {
    eleccion++
    if (eleccion == 3) {
        respt.innerHTML = "✔️"
        alert("nivel de agua bajo!")
    } else if (eleccion == 6) {
        respt.innerHTML = "✔️"
        alert("nivel de combustible bajo!")
    } else if (eleccion == 9) {
        respt.innerHTML = "✔️"
    } else {
        respt.innerHTML = "❌"
        eleccion = 0
    }
    console.log(eleccion);
}

function eventos4() {
    eleccion++
    if (eleccion == 4) {
        respt.innerHTML = "✔️"
    } else if (eleccion == 7) {
        respt.innerHTML = "✔️"
    } else {
        respt.innerHTML = "❌"
        eleccion = 0
    }
    console.log(eleccion);
}

function eventos5() {
    eleccion++
    if (eleccion == 5) {
        respt.innerHTML = "✔️"
    } else {
        respt.innerHTML = "❌"
        eleccion = 0
    }
    console.log(eleccion);
}

function eventos6() {
    eleccion++
    if (eleccion == 8) {
        respt.innerHTML = "✔️"
        alert("2 pasos mas para qatar!!!")
    } else {
        respt.innerHTML = "❌"
        eleccion = 0
    }
    console.log(eleccion);
}

function eventos7() {
    eleccion++
    if (eleccion == 10) {
        respt.innerHTML = "AYA VAMOS 🏆"
    } else {
        respt.innerHTML = "AUN FALTA PARA LLEGAR 😅..."
        eleccion = 0
    }
    console.log(eleccion);
}