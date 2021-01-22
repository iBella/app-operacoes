import { Membro } from "./Membro";

export class Squad {

    nome: String;
    cliente: String;
    equipe: Array<Membro>;
    dataCriacao: Date;

    constructor(nome:String, cliente:String, equipe:Array<Membro>, dataCriacao:Date){
        this.nome = nome;
        this.cliente = cliente;
        this.equipe = equipe;
        this.dataCriacao = dataCriacao;
    }

    adicionarMembroEquipe(membro:Membro)
    {
        this.equipe.push(membro);
        return this.equipe;
    }

    removerMembroEquipe(membro:Membro)
    {
        var posicao = this.equipe.indexOf(membro);
        this.equipe = this.equipe.splice(posicao, 1);
        return this.equipe;
    }
};