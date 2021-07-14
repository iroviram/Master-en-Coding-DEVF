//CLASE PADRE

class Largometraje{
    constructor(titulo,duracion) {
        this.titulo = titulo;
        this.duracion = duracion;
    }

    //METODOS (GET)

    getTitle(){
        return this.titulo
    }

    getDurarion(){
        return this.duracion
    }
}

//EXPORTAMOS NUESTRA PLANTILLA (CODIGO)
module.exports = {Largometraje}