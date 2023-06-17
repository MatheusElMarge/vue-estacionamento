import { AbstractEntity } from "./AbstractEntity";

export class Condutor extends AbstractEntity{
    name! : string
    cpf! : string
    telefone! : string
    tempoPago! : number
    tempoDesconto! : Date
    
    constructor(){
        super()
        this.ativo = true
    }
}
