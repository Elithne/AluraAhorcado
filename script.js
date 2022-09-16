let palabraEscogida = "HTML";
let palabrasSecretas = ["HTML", "WEB","JAVASCRIPT","ALURA"];
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
let letrasIncorrectas = document.getElementById('letrasIncorrectas');

function dibujarAhorcado(){
    actualizarPantalla()
    dibujarGuiones(contarGuiones(escogerPalabraSecreta()))
}

function escogerPalabraSecreta(){
    palabraEscogida = palabrasSecretas[Math.floor(Math.random() * palabrasSecretas.length)]
    console.log(palabraEscogida); 
}

function getPalabraEscogida(){
    return palabraEscogida;
}

function contarGuiones(palabraEscogida){
    palabraEscogida = getPalabraEscogida();
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

function verificarTeclaPresionada(teclaPresionada){
    let tecla = teclaPresionada;    
        if(tecla.toLowerCase() !== tecla.toUpperCase()){
            //console.log("La tecla es una letra válida");
            verificarLetraEnPalabra(teclaPresionada);
            return tecla;
        } else {
            console.log("la tecla no es una letra válida")
        }      
}

function verificarLetraEnPalabra(teclaPresionada){
    let tecla = teclaPresionada.toUpperCase();
    let palabra = getPalabraEscogida();
    for(let i = 0; i < palabra.length; i++){
        if(tecla == palabra[i]){
            dibujarLetraCorrecta(palabra[i]);
        } else{
            dibujarLetraIncorrecta();

        }
    }   
}
function dibujarLetraCorrecta(letraCorrecta){
    let letra = letraCorrecta;
    console.log(letra);
}

function dibujarLetraIncorrecta(){
    console.log("_");

}

//El evento 'keydown' dispara cuando una letra se presiona, el parámetro e contiene información
//sobre la acción ocasionada 
document.addEventListener("keydown", e=>{
    verificarTeclaPresionada(e.key)
});
dibujarAhorcado()