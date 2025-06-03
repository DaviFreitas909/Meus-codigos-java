class arma {
    constructor(capacidadeTotal, capacidadeAtual) {
    this.capacidadeTotal = capacidadeTotal
    this.capacidadeAtual = capacidadeAtual
    }
    disparar() {
        if (this.capacidadeAtual > 0) {
            this.capacidadeAtual--;
            console.log("Bang! voce disparou, balas restantes:" + this.capacidadeAtual);
        } else {
            console.log("estou sem balas, preciso recarregar!")
        }
        }
    
    recarregar() {
        this.capacidadeAtual = this.capacidadeTotal
        console.log("armas recarregada! balas atuais;" + this.capacidadeAtual);
    }
}
let minhaArma = new arma(10, 10)

minhaArma.disparar()
minhaArma.disparar()
minhaArma.disparar()
minhaArma.disparar()
minhaArma.disparar()
minhaArma.disparar()
minhaArma.disparar()
minhaArma.disparar()
minhaArma.disparar()
minhaArma.disparar()
minhaArma.disparar()
minhaArma.recarregar()