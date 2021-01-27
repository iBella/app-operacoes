import { ActionPoint } from "./ActionPoint";

export class ExecutionCheck {

    id: String | undefined;
    idSquad: String | undefined;
    actionPoints: Array<ActionPoint>;
    beginDate: Date = new Date();
    updateDate: Date | undefined;

    constructor(actionPoints:Array<ActionPoint>){
        this.actionPoints = actionPoints;
    }
};