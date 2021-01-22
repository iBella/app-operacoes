import { TipoAcao, ResponsavelAcao, PrioridadeAcao } from "../enums/enums";

export class Acao {
    
    tipo: TipoAcao;
    responsavel: ResponsavelAcao;
    acao: String;
    ocorrencia: Number;
    prioridade: PrioridadeAcao;
    dataCriacao: Date;

    constructor(tipo:TipoAcao, responsavel:ResponsavelAcao, acao:String, ocorrencia:Number, prioridade:PrioridadeAcao, dataCriacao:Date){
        this.tipo = tipo;
        this.responsavel = responsavel;
        this.acao = acao;
        this.ocorrencia = ocorrencia;
        this.prioridade = prioridade;
        this.dataCriacao = dataCriacao;
    }
};