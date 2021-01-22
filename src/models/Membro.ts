export class Membro {

    nome: String;
    email: String;
    funcao: String;
    dataCriacao: Date;

    constructor(nome:String, email:String, funcao:String, dataCriacao:Date){
        this.nome = nome;
        this.email = email;
        this.funcao = funcao;
        this.dataCriacao = dataCriacao;
    }
};