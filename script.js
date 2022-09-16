let palabraEscogida = "HTML";
let palabrasSecretas = ["HTML", "Web","JavaScript","Alura"];
let cantidadGuiones = 0;
let pantalla = document.querySelector("canvas");
let fondo = pantalla.getContext("2d"); 
let colorFondo = 'grey'
fondo.fillStyle = 'grey';
fondo.fillRect(0,0,600,400);
let posicionLineaInicial = 150
let posicionLineaActual = posicionLineaInicial;
let baseLinea = 20;
let alturaLinea = 5;
let espacioEntreLineas = 50;

function escogerPalabraSecreta(){
    palabraEscogida = palabrasSecretas[Math.floor(Math.random() * palabrasSecretas.length)]
    console.log(palabraEscogida);
    actualizarPantalla()
    dibujarGuiones(contarGuiones(palabraEscogida));
    
}

function contarGuiones(palabraEscogida){
    let cantidadGuiones = palabraEscogida.length;
    return cantidadGuiones;
}

function dibujarGuiones(cantidadGuiones){
    for(let i=0; i<cantidadGuiones; i++){
        fondo.fillStyle = "white";
        fondo.fillRect(posicionLineaActual,300,baseLinea,alturaLinea);
        posicionLineaActual+=espacioEntreLineas;
    }
    posicionLineaActual = posicionLineaInicial;
}
function actualizarPantalla(){
    fondo.fillStyle = colorFondo;
    fondo.fillRect(0, 0, 600, 400);
}

function verificarTeclaPresionada(){

}

function dibujarLetraCorrecta(){

}

function dibujarLetraIncorrecta(){

}