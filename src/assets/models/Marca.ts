import { AbstractEntity } from "./AbstractEntity";

export class Marca extends AbstractEntity {
    nome! : string
    
    constructor(){
        super()
        this.ativo = true
    }
}