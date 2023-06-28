import { AbstractEntity } from "./AbstractEntity";
import { Marca } from "./Marca";

export class Modelo extends AbstractEntity {
    nome! : string
    marca! : Marca

    constructor(){
        super()
        this.ativo = true
    }
}