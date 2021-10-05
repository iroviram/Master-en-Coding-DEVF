//? 02.Crear una función que genere un numero aleatorio entre 1 y 10, esta función recibe un numero como parametro si el numero es igual al numero generado aleatoriamente regresara "Buen Trabajo" de lo contrario regresara "Intenta de nuevo". Ej ---> randomGuess(7) resultado ---> "Buen trabajo" o "Intenta de Nuevo"

var numero = 7;
var randomNumber = Math.floor((Math.random()*(10))+1);
console.log(randomNumber)