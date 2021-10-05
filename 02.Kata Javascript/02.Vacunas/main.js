/*
Para que yo me pueda vacunar, necesito cumplir alguno de los siguientes requisitos:
1) Mayores de 18 anos que residen en un municipio fronterizo del Norte del pais.
2) Embarazadas mayores de 18 anos con mas de 9 semanas de gestacion.
3) Personas que cumplen 30 anos o mas en este ano.
*/

// Paso #1: Definir las variables que necesitamos

var edad = parseInt(prompt("Que edad tienes?"));
var fronterizo = prompt("Vives en una ciudad fronteriza del norte del Pais? - si o no").toLowerCase();
var embarazada = prompt("Estas embarazada? si o no").toLowerCase();
var semanasGestacion = parseInt(prompt("En caso de estar embarazada, cuantas semanas de gestacion tienes? Si no es el caso, contesta 0"));

// Paso #2: Validar la primera condicion

if (edad >= 18 && fronterizo == "si"){
    document.write("Si te puedes vacunar, por ser mayor de 18 anos y vivir en un municipio fronterizo del Norte del pais.")
} else if (edad >=18 && embarazada == "si" && semanasGestacion >= 9){
    document.write("Si te puedes vacunar, por ser embarazada mayor de 18 anos con mas de 9 semanas de gestacion.")
} else if (edad >=30){
    document.write("Si te puedes vacunar, por tener 30 anos o mas")
} else {
    document.write("Lo sentimos, aun no te puedes vacunar, espera proximos avisos - Game Over")
}

