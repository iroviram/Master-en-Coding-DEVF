/* //HACEMOS IMPORT DE NUESTRA CLASE LARGOMETRAGE
const {Largometraje} = require('./Largometrajes') */

class Sala{
    constructor(numSala,cantGente,Largometraje){
        this.numSala = numSala;
        this.cantGente = cantGente;
        this.Largometraje = Largometraje;
    }

    //METODO (SET)
    setMovie(){
        return "Se esta reproduciendo: " + this.Largometraje.getTitle() + "Duracion " + this.Largometraje.getDuration();
    }

    //METODO (GET)
    getPeople(){
        return this.cantGente
    }

    getSalaNumber(){
        return this.numSala
    }
}

//EXPORTAMOS NUESTRA PLANTILLA (CODIGO)
module.exports = {Sala}