//? Ejercicios ordenamiento

//* 3. Crear una clase Alumno con los siguientes datos:
//*     a. Nombre y calificaciones(arreglo de 5 números) y tiene un método para obtener el promedio
//*     b. Crear otra clase llamada Salon que tenga un método que ordene alumnos de mayor a menor promedio

class Alumno{
    constructor(nombre,calificaciones){
        this.nombre = nombre;
        this.calificaciones = [];
    }

    promedio(calificaciones){
        let numCalif = calificaciones.length
        let sumaCalif = 0;
        for (let i = 0; i < numCalif; i++) {
            sumaCalif += calificaciones[i];
        }
        return sumaCalif/numCalif;
    }

}

class Salon{
    constructor(){
        this.lista=[];
    }

    addStudent(nombre,calificaciones){
        this.lista = new Alumno(nombre,calificaciones);
        this.lista.push(nombre,calificaciones);
    }

    ordena(data){

    }

    print(){
        console.log(this.lista)
    }

}

const calificaciones = [9,5,2,7,10];
const alumno = new Alumno();

console.log(alumno.promedio(calificaciones));

const salon = new Salon();

salon.addStudent("Ramiro",[1,2,3,4,5]);
salon.addStudent("Juan",[6,7,8,9,10]);
salon.addStudent("Beto",[3,4,5,6,7]);
salon.print();