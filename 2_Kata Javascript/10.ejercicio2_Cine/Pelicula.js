//HACEMOS IMPORT DE NUESTRA CLASE LARGOMETRAGE
const {Largometraje} = require('./Largometrajes')

//SUBCLASE (PELICULAS)
class Pelicula extends Largometraje {
    constructor(titulo,duracion,genero){
        super(titulo,duracion)
        this.genero = genero;
    }

    //METODO(GET)
    getGender(){
        return this.genero
    }

}

//EXPORTAMOS NUESTRA PLANTILLA (CODIGO)
module.exports = {Pelicula}