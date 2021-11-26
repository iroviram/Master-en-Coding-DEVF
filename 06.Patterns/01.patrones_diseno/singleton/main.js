// SINGLETON ESTE PATRON NOS PERMITE OBTENER SIEMPRE UNA UNICA INSTANCIA DE UNA CLASE
// POR ENDE CADA NUEVA "INSTANCIA" DE LA CLASE TERMINARA DEVOLVIENDO LA PRIMER INSTANCIA CREADA ORIGINALMENTE

class Unica{
    constructor(nombre){
         //Lo hacemos para saber si una instancia ya fue creada this.creada = true;
        
        // esto es verdadero porque solo estamos creando las instancias
        //console.log(Unica.instancia)
        if(Unica.instancia){
            console.log("CREADA")
            return Unica.instancia
        }

        this.nombre = nombre;
        //en this vive la instancia que se esta creando
        Unica.instancia = this;
    }
}

//VAMOS A CREAR NUESTRAS INSTANCIAS DE ESTA CLASE
// COMO AUN ESTAMOS UTILIZANDO LA LOGICA DEL PATRON SINGLETON

// a se crea con el nombre: a;
// b se crea con el nombre: b;

const a = new Unica('a');
const b = new Unica('b');
const c = new Unica('c');