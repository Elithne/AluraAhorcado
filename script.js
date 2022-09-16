let fondo = document.getElementById("tablero").getContext("2d");
let palabraEscogida = "HTML";
let palabrasSecretas = ["HTML", "WEB","JAVASCRIPT","ALURA"];
let cantidadGuiones = 0;
let perdiste = 5;
let contadorPerdida = 0;
let teclasIncorrectas = [];
let indice = 0;


function empezarJuego(){
    document.getElementById("iniciar-juego").style.display = "none";
    borrarLetras();
    actualizarPantalla();   
    dibujarGuiones(escogerPalabraSecreta()); 
}

function escogerPalabraSecreta(){
    palabraEscogida = palabrasSecretas[Math.floor(Math.random() * palabrasSecretas.length)]
    console.log(palabraEscogida); 
}

function getPalabraEscogida(){
    return palabraEscogida;
}

function borrarLetras(){
    teclasIncorrectas = [];
    indice = 0;
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
    let encontrada = false;
    for(let i = 0; i < palabra.length; i++){
        if(tecla == palabra[i]){
            dibujarLetraCorrecta(palabra[i])
            encontrada = true;
            break;
        }
    }
    if(!encontrada){
        teclasIncorrectas[indice] = tecla;
        indice++;
        //contadorPerdida++;
        dibujarLetraIncorrecta(teclasIncorrectas);
        } 
}   

function dibujarLetraCorrecta(letraCorrecta){
    let palabra = getPalabraEscogida();
    let letra = letraCorrecta;
    console.log(letra);
    for(let i = 0; i < palabra.length; i++){
        if(letraCorrecta == palabra[i]){
            document.getElementById('letrasCorrectas').innerHTML = letra;
        } else {
            document.getElementById('letrasCorrectas').innerHTML = " ";
        }
    }
}

function dibujarLetraIncorrecta(letrasIncorrectas){
    let letras = letrasIncorrectas;
    document.getElementById('letrasIncorrectas').innerHTML = letras;
}

//El evento 'keydown' dispara cuando una letra se presiona, el parámetro e contiene información
//sobre la acción ocasionada 
document.addEventListener("keydown", e=>{
    verificarTeclaPresionada(e.key)
});
empezarJuego()