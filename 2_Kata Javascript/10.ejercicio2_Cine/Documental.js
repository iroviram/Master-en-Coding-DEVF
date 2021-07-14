//HACEMOS IMPORT DE NUESTRA CLASE LARGOMETRAGE
const {Largometraje} = require('./Largometrajes')

//SUBCLASE DOCUMENTAL
class Documental extends Largometraje{
    constructor(titulo,duracion,autor){
        //super() Indica que atributos de mi clase padre va a heredar
        super(titulo,duracion);
        this.autor = autor;
    }

    //METODO(GET)
    getAuthor(){
        return this.autor
    }
}

//EXPORTAMOS NUESTRA PLANTILLA (CODIGO)
module.exports = {Documental}