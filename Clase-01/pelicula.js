const {Largometraje} = require("./clases")

class pelicula extends Largometraje {
    constructor(titulo, duracion, director, reparto){
        super(titulo, duracion, director)
        this.reparto = reparto
    }
    getReparto(){
        this.reparto = reparto
    }
}