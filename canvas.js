function actualizarPantalla(){
    fondo.lineWidth = 8;
    fondo.lineCap = "round";
    fondo.lineJoin = "round";
    fondo.fillStyle = "#F3F5F6";
    fondo.strokeStyle = "#0A3871";
    fondo.fillRect(0,0,1200,860);
    fondo.beginPath();
    fondo.moveTo(300, 500);
    fondo.lineTo(900, 500);
    fondo.stroke();
    fondo.closePath();
}

function dibujarGuiones(){
    let cantidadGuiones = palabraEscogida.length;
    fondo.lineWidth = 6;
    fondo.lineCap = "round";
    fondo.lineJoin = "round";
    fondo.fillStyle = "#F3F5F6";
    fondo.strokeStyle = "#0A3871";

    let ancho = 600/cantidadGuiones;

    for(let i=0; i<cantidadGuiones; i++){
        fondo.moveTo(325+(ancho*i), 640)
        fondo.lineTo(365 + (ancho*i), 640)
    }
    console.log(cantidadGuiones);
    fondo.stroke();
    fondo.closePath();
}