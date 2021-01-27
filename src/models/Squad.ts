import { ExecutionCheck } from "./ExecutionCheck";
import { Collaborator } from "./Collaborator";

export class Squad {

    id: String | undefined;
    idTribe: String | undefined;
    name: String;
    collaborators: Array<Collaborator> = [];
    executionChecks: Array<ExecutionCheck> = [];
    smCompany!: Boolean;
    poCompany!: Boolean;
    beginDate: Date = new Date();
    updateDate: Date | undefined;

    constructor(name:String){
        this.name = name;
    }
};