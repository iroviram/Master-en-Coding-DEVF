//? 03.Escribe una función que reciba un string como parametro y regrese el string con "Py" al principio, si el string ya tiene "Py" regresar el string original Ej ---> addPy("hola") resultado ---> "Pyhola"

function myString(word){
    const stringRegex = /Py/;
    if (stringRegex.test(word) === true) {
        return word;
    } else {
        return "Py" + word;
    }
}

console.log(myString("holaPy"))