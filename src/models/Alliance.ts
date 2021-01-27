import { Tribe } from "./Tribe";

export class Alliance {

    id: String | undefined;
    name: String;
    company: String;
    tribes: Array<Tribe> = [];
    beginDate: Date = new Date();
    updateDate: Date | undefined;

    constructor(name:String, company:String){
        this.name = name;
        this.company = company;
    }
};