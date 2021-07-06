/*
    P = mgh / t ; Donde:
    P es potencia (kW);
    m es masa (kg);
    g es gravedad (m/s2);
    h es altura (m);
    t es el tiempo (s);
*/

// Problema 
// Una masa de 40 kg se eleva hasta 20 metros en 3 segundos.
// Que potencia promedio se ha utilizado?

/* Paso 1: Defino mis variables */
var masa = parseInt(prompt('Cual es la masa? (kg)'));
const gravedad = 9.8;
var altura = parseInt(prompt('Cual es la altura? (m)'));
var tiempo = parseInt(prompt('En cuanto tiempo lo hace? (s)'));

/* Paso 2: Realizo la operacion */

var potencia = (masa * gravedad * altura) / tiempo;

/* Paso 3: Muestro el resultado */
console.log(potencia);