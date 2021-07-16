//VAMOS A TRABAJAR FUNCIONES

//DOM
function green(){
    if(document.getElementById('green').checked){
        fondo.style.background = "#2cbb40";
        titulo.style.color = "white";
    }
}

/* function green(){
    if(document.querySelector('#green').checked){
        fondo.style.background = "#2cbb40";
        titulo.style.color = "white";
    }
} */

function purple(){
    if(document.getElementById('purple').checked){
        fondo.style.background = "#56307C";
        titulo.style.color = "white";
    }
}

function blue(){
    if(document.getElementById('blue').checked){
        fondo.style.background = "#6FB1FC";
        titulo.style.color = "white";
    }
}

//CSSOM
function warning() {
    fondo.style.background = "#ffc107";
    titulo.style.color = "white";
}

function warningOut(){
    fondo.style.background = "white";
    titulo.style.color = "black";
}


function secondary() {
    fondo.style.background = "#6c757d";
    titulo.style.color = "white";
}