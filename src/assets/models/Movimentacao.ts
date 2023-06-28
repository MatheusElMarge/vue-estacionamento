import { AbstractEntity } from "./AbstractEntity";
import { Condutor } from "./Condutor";
import { Veiculo } from "./Veiculo";

export class Movimentacao extends AbstractEntity {
    veiculo! : Veiculo
    condutor! : Condutor
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