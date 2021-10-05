// CONSTRUIR NUESTRO OBJETO
//acabamos de construir nuestro primer objeto
/* let mascota = {
    nombre: "Scott",
    tipo: "canino",
    color: "cafe",
    edad: 5,
    macho: true
}

console.log(mascota.nombre)
console.log(mascota.edad) */

//Notacion por corchetes
/* let mascota = {
    nombre: "Scott",
    tipo: "canino",
    color: "cafe",
    edad: 5,
    macho: true
}

console.log(mascota['nombre'])
console.log(mascota['edad'])
console.log(mascota['color']) */

//Metodos en un objeto
/* let mascota = {
    nombre: "Scott",
    tipo: "canino",
    color: "cafe",
    edad: 5,
    macho: true,
    //METODOS LOS PODEMOS TRABAJAR CON FUNCIONES
    //UNA PEQUENA ACCION QUE REALICE ESE OBJETO
    ladrar: function(){
        return (`${this.nombre} puede ladrar`)//this sirve como apuntador
    },
    correr: function(){
        return (`${nombre} puede correr muy rapido`)
    }
}

console.log(mascota.ladrar())
console.log(mascota.correr()) */

// INSERTAR UN VALOR A NUESTRO OBJETO

/* let mascota = {
    nombre: "Scott",
    tipo: "canino",
    color: "cafe",
    edad: 5,
    macho: true,
    //METODOS LOS PODEMOS TRABAJAR CON FUNCIONES
    //UNA PEQUENA ACCION QUE REALICE ESE OBJETO
    ladrar: function(){
        return (`${this.nombre} puede ladrar`)//this sirve como apuntador
    },
    correr: function(){
        return (`${nombre} puede correr muy rapido`)
    }
}
mascota.edad = 8;
console.log(mascota) */


// ELIMINACION DE UNA CLAVE O ATRIBUTO
let mascota = {
    nombre: "Scott",
    nombrecompleto: "Scott travis",
    tipo: "canino",
    color: "cafe",
    edad: 5,
    macho: true,
    //METODOS LOS PODEMOS TRABAJAR CON FUNCIONES
    //UNA PEQUENA ACCION QUE REALICE ESE OBJETO
    ladrar: function(){
        return (`${this.nombre} puede ladrar`)//this sirve como apuntador
    },
    correr: function(){
        return (`${nombre} puede correr muy rapido`)
    }
}
delete mascota.nombrecompleto;
console.log(mascota)
