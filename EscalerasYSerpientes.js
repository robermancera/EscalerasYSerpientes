// Dado, jugador (posicion), tablero, juego(controlador principal)

class Dado
{
    lanzar(){
        return Math.floor(Math.random() * (6 - 1)) + 1
    }
}

class Tablero{
    constructor(){
        this.casillas = []
        for(let i = 0; i <= 100; i++){
            this.casillas[i] = i
        }
        this.serpienteEscaleras = [
            new SerpienteEscalera(5,58,false),
            new SerpienteEscalera(51,10,true),
            new SerpienteEscalera(14,49,false),
            new SerpienteEscalera(38,20,true),
            new SerpienteEscalera(53,72,false),
            new SerpienteEscalera(76,54,true),
            new SerpienteEscalera(64,83,true),
            new SerpienteEscalera(97,61,true),
            new SerpienteEscalera(91,73,true)
        ]
        this.jugador = new Jugador("Roberto")
        this.dado = new Dado()
    }   

    jugar(){
        if(this.jugador.Posicion === 100){
            console.log("Felicidades, ganaste!!")
            return
        }
        let valor = this.dado.lanzar()
        console.log('dado:' + valor)
        this.jugador.avanzar(valor)
        console.log('jugador: '+ this.jugador.nombre+':' + this.jugador.Posicion)
        let posJugador = this.jugador.Posicion
        for(let i = 0; i < this.serpienteEscaleras.length; i++)
        {
            // console.log("Serpiente o Escalera:", this.serpienteEscaleras[i].Inicio, this.serpienteEscaleras[i].Fin, this.serpienteEscaleras[i].isSerpiente)
            if (this.jugador.Posicion === this.serpienteEscaleras[i].Inicio) 
            {
                this.jugador.Posicion = this.serpienteEscaleras[i].Fin
                console.log("Serpiente o Escalera:", this.serpienteEscaleras[i].Inicio, this.serpienteEscaleras[i].Fin, this.serpienteEscaleras[i].isSerpiente)
                console.log(this.jugador.Posicion)
            }
            
        }
    }
}

class SerpienteEscalera{
    constructor(inicio, fin, serpiente){
        this.inicio = inicio
        this.fin = fin
        this.serpiente = serpiente
    }

    set Fin(x){
        this.fin = x
    }

    set Inicio(x){
        this.inicio = x
    }

    get Inicio(){
        return this.inicio
    }

    get Fin(){
        return this.fin
    }

    isSerpiente(){
        return serpiente === true
    }

}

class Jugador{
    constructor(nombre){
        this.nombre = nombre
        this.posicion = 0
    }

    set Nombre(nom){
        this.nombre = nom
    }

    get Nombre(){
        return this.nombre
    }

    set Posicion(x){
        this.posicion = x
    }
    
    get Posicion(){
        return this.posicion
    }

    avanzar(casillas)
    {
        if(this.posicion + casillas > 100){

            let avanzar = 100 - this.posicion
            let atras = casillas - avanzar
            this.posicion = 100 - atras
        }
        else{
            this.posicion += casillas
        }
        
    }
    
}
let tablero = new Tablero()
