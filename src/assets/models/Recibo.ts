import { Condutor } from "./Condutor"
import { Veiculo } from "./Veiculo"

export class Recibo{
    entrada! : Date
    saida! : Date
    condutor! : Condutor
    veiculo! : Veiculo
    horas! : number
    horasDesconto! : number
    valor! : number
    desconto! : number

}