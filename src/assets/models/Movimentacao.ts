import { AbstractEntity } from "./AbstractEntity";
import { Condutor } from "./Condutor";
import { Veiculo } from "./Veiculo";

export class Movimentacao extends AbstractEntity {
    veiculoId! : Veiculo
    condutorId! : Condutor
    entrada! : Date
    saida! : Date
    tempo! : number
    tempoDesconto! : Date
    tempoMulta! : Date
    valorDesconto! : number
    valorMulta! : number
    valorTotal! : number
    valorHora! : number
    valorHoraMulta! : number

    constructor(){
        super()
        this.ativo = true
    }
}