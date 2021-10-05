//? 01.Crear una función que dado un año determine si es un año bisiesto o no. Ej---> isLeap(2016) Resultado ----> true

var year = 2016;

//* Primer Forma
function isLeap(year){
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

console.log(isLeap(year))

//* Segunda Forma
const isLeap2 = (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0)) ? "Es bisiesto" : "No es bisiesto";

console.log(isLeap2)

//* Tercer Forma
const isLeap3 = year => new Date(year, 1, 29).getDate() === 29;

console.log(isLeap3(year))

//* Cuarta Forma
function isLeap4(year)
{
    return (year & 3) == 0 && ((year % 25) != 0 || (year & 15) == 0);
}

console.log(isLeap4(year))