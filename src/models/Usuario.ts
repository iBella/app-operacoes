import { Squad } from "./Squad";

export class Usuario {

    nome: String;
    email: String;
    squads: Array<Squad>;
    dataCriacao: Date;

    constructor(nome:String, email:String, squads:Array<Squad>, dataCriacao:Date){
        this.nome = nome;
        this.email = email;
        this.squads = squads;
        this.dataCriacao = dataCriacao;
    }

    adicionarSquad(squad:Squad)
    {
        this.squads.push(squad);
        return this.squads;
    }

    removerSquad(squad:Squad)
    {
        var posicao = this.squads.indexOf(squad);
        this.squads = this.squads.splice(posicao, 1);
        return this.squads;
    }
};