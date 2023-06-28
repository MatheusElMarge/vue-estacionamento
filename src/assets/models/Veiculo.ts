import { AbstractEntity } from "./AbstractEntity";
import {Cor} from "./enums/cor";
import { Modelo } from "./Modelo";
import { Tipo } from "./enums/tipo";

export class Veiculo extends AbstractEntity {
    placa! : string
    modelo! : Modelo
    cor! : Cor
    tipo! : Tipo
    ano! : number

    constructor(){
        super()
        this.ativo = true
    }
}