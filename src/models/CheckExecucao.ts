import { Acao } from "./Acao";
import { Squad } from "./Squad";
import { Usuario } from "./Usuario";

export class CheckExecucao {

    usuario: Usuario;
    squad: Squad;
    acoes: Array<Acao>;
    dataCriacao: Date;

    constructor(usuario:Usuario, squad:Squad, acoes:Array<Acao>, dataCriacao:Date){
        this.usuario = usuario;
        this.squad = squad;
        this.acoes = acoes;
        this.dataCriacao = dataCriacao;
    }
};