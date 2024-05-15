let puntosUsuario = 0;
let puntosPc = 0;


let instrucciones = document.querySelector("#isntrucciones");
let contenedorPuntosUsuario = document.querySelector("#puntos-usuario");
let contenedorPuntosPc = document.querySelector("#puntos-computadora");
let mensaje = document.querySelector("#mensaje")
let contenedorGanaPunto = document.querySelector("#gana-punto");
let elijeTuArma = document.querySelector("#elije-tu-arma");


let contenedorEleccionUsuario = document.querySelector("#eleccion-usuario");
let contenedorEleccionPc = document.querySelector("#eleccion-computadora");


let botonesArmas = document.querySelectorAll(".arma");
botonesArmas.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
});

function iniciarTurno(e) {
    
    let eleccionPc = Math.floor(Math.random() * 3);
    let eleccionUsuario = e.currentTarget.id;

    if (eleccionPc === 0) {
        eleccionPc = "piedra🪨";
    } else if (eleccionPc === 1) {
        eleccionPc = "papel📋"
    } else if (eleccionPc === 2) {
        eleccionPc = "tijera✂️"
    }
    
    if (
        (eleccionUsuario === "piedra🪨" && eleccionPc === "tijera✂️") ||
        (eleccionUsuario === "tijera✂️" && eleccionPc === "papel📋") ||
        (eleccionUsuario === "papel📋" && eleccionPc === "piedra🪨") 
    ) {
        ganaUsuario();
    } else if (
        (eleccionPc === "piedra🪨" && eleccionUsuario === "tijera✂️") ||
        (eleccionPc === "tijera✂️" && eleccionUsuario === "papel📋") ||
        (eleccionPc === "papel📋" && eleccionUsuario === "piedra🪨") 
    ) {
        ganaPc();
    } else {
        empate();
    }

    mensaje.classList.remove("disabled");
    contenedorEleccionUsuario.innerText = eleccionUsuario;
    contenedorEleccionPc.innerText = eleccionPc;


    if (puntosUsuario === 5 || puntosPc === 5) {
        
        if (puntosUsuario === 5) {
            alert("Ganaste el Juego");
        }

        if (puntosPc === 5) {
            alert("La Computadora Gano el Juego");
        }

        elijeTuArma.classList.add("disabled");
        reiniciar.classList.remove("disabled");
        reiniciar.addEventListener("click", reiniciarJuego);
    }

}


function ganaUsuario() {
    puntosUsuario++;
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorGanaPunto.innerText = "Ganaste un Punto!"
}

function ganaPc() {
    puntosPc++;
    contenedorPuntosPc.innerText = puntosPc;
    contenedorGanaPunto.innerText = "¡La Computadora gano un Punto"
}

function empate() {
    contenedorGanaPunto.innerText = "¡Empate!"
}

function reiniciarJuego() {
    reiniciar.classList.add("disabled");
    elijeTuArma.classList.remove("disabled");
    mensaje.classList.add("disabled");

    puntosUsuario = 0;
    puntosPc = 0;

    contenedorEleccionUsuario.innerText =puntosUsuario;
    contenedorEleccionPc.innerText = puntosPc;

}
