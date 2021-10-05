// INTRODUCCION A HERENCIA
// HERENCIA SIMPLE, DONDE UNA SUBCLASE PUEDE HEREDAR ATRIBUTOS O METODOS DE UNA SUPER CLASE
// METODOS GET(TER) O SET(TER)

// EL NOMBRE DE LAS CLASES MAYUSCULAS
// EL NOMBRE DE LOS ATRIBUTOS minuscula y despues con una Mayuscula

    //CLASE PADRE
class Telefono {
    constructor(marca){
        this.marca = marca;
    }

    //METODO
    getAnuncio(){
        return "Ha llegado el nuevo telefono de: " + this.marca
    }
}

// AQUI VAMOS A EMPEZAR A TRABAJAR LA HERENCIA

    //SUBCLASE - HEREDA ATRIBUTOS Y METODOS DE CLASE PADRE Telefono
class Modelo extends Telefono {
    constructor(marca,modelo){
        super(marca) 
        this.modelo = modelo;
    }

    //METODO
    getAnuncionCompleto(){
        return this.getAnuncio() + "\nEL MODELO QUE LLEGO ES: " + this.modelo
    }
}

//INSTANCIAR OBJETOS
const miTelefono = new Modelo("XIAOMI","REDMI NOTE 10 PRO")
console.log(miTelefono.getAnuncionCompleto())