// CREAR UN OBJETO

/* const estudianteUno = {
    nombre: "Eduardo",
    apellido: "Perez",
    califFinal: 8,
    inscrito: true
}

// DESESTRUCTURACION

const {nombre, apellido, califFinal, inscrito} = estudianteUno;
console.log(`Hola ${nombre} ${apellido} aprobaste la materia, calificacion final: ${califFinal}`) */

// PROGRAMACION ORIENTADA A OBJETOS
// VAMOS A TENER DOS CLASES - 1)ESTUDIANTES 2)PROFESORES
// CREAR NUESTRA PLANTILLA

class estudiantes{

    // CREAR NUESTRO CONSTRUCTOR
    constructor (nombre, apellido, califFinal, inscrito) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.califFinal = califFinal;
        this.inscrito = inscrito;
    }

    // LOS METODOS USUALMENTE NECESITAN HACER ALGO CON LO QUE FUE LLAMADO NUESTRO 
    aprobado(){
        if(this.califFinal >= 7.6){
            return "Aprobado " + Math.round(this.califFinal)
        }else if (this.califFinal <= 7.5){
            return "Reprobado " + Math.round(this.califFinal)
        }else {
            return "ERROR EN EL SISTEMA CONSULTAR MAS TARDE"
        }
    }

    inscrito(){
        if(this.inscrito === true){
            return "EL ALUMNO SI ESTA INSCRITO EN EL SEMESTRE"
        }else if (this.inscrito === false) {
            return "EL ALUMNO NO ESTA INSCRITO EN EL SEMESTRE"          
        }else {
            return "ERROR EN EL SISTEMA CONSULTAR MAS TARDE"
        }
    }
}

// CREACION DE NUESTROS OBJETOS
const estudianteUno = new estudiantes("JUAN","GOMEZ",8.2,true)
const estudianteDos = new estudiantes("ERICK","RODRIGUEZ",7.2,false)

console.log(estudianteUno.nombre, estudianteUno.apellido, estudianteUno.aprobado(), estudianteUno.inscrito())
console.log(estudianteDos.nombre, estudianteDos.apellido, estudianteDos.aprobado(), estudianteDos.inscrito())