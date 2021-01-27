import { Squad } from "./Squad";

export class Tribe {

    id: String | undefined;
    idAlliance: String | undefined;
    name: String;
    squads: Array<Squad> = [];
    clients: String;
    beginDate: Date = new Date();
    updateDate: Date | undefined;

    constructor(name:String, clients:String){
        this.name = name;
        this.clients = clients;
    }
};