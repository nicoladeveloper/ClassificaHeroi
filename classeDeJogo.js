class heroi{
    constructor(nome,classe,idade, tipo, ataque) {
        this.nome = nome
        this.classe = classe
        this.idade = idade
        this.tipo = tipo
        this.ataque = ataque
    }
    escrever() {
        console.log(`O heroi ${this.nome} tem ${this.idade} anos é do tipo ${this.tipo} estar na classe ${this.classe}`)
    }
    atacar() {
        console.log(`O tipo ${this.tipo} atacou usando ${this.ataque}`)
    }
    tipoAtaque() {
        if (this.ataque === "soco") {
            console.log(`${this.nome} Usou artes maciais`)
        }
        else if (this.ataque === "cajado") {
            console.log(`${this.nome} Usou magia`)
        }
    }
}

let heroi1 = new heroi("Saitama", "SS", "21", "guerreiro", "soco");
let heroi2 = new heroi("Frieri", "SS", "1000", "maga", "cajado");

heroi1.escrever();
heroi1.atacar();
heroi1.tipoAtaque();

heroi2.escrever();
heroi2.atacar();
heroi2.tipoAtaque();