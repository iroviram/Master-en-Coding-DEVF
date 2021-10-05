//? (ejercicio bonus)
//* 3.- Crear una clase llamada  Contacto con los siguientes datos
/*
Nombre 
Apellidos
Telefono
Después crear una clase que sea ListaContactos la cual tendrá dos métodos
Agregar un contacto
Buscar un contacto por nombre

Prueba que tus clases funcionen correctamente
*/

class Contacto{
    constructor(nombre,apellidos,telefono){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.telefono = telefono;
        this.next = null;
    }
}

class ListaContactos{
    constructor(){
        this.lista = null;
        this.length=0;
    }

    agregarContacto(nombre,apellidos,telefono){
        let listaDeContactos = this.lista;
        listaDeContactos = new Contacto(nombre,apellidos,telefono);
        console.log(listaDeContactos);
    }

    addStart(nombre,apellidos,telefono){
        const node = new Contacto(nombre,apellidos,telefono)
        if(!this.lista){
        this.lista=node;
        }else{
            node.next=this.lista;
            this.lista=node;
        }
        this.length++
    }

    buscarContacto(){

    }

}

const listaContactos = new ListaContactos();

listaContactos.addStart("Ramiro","Villarreal",123456);
