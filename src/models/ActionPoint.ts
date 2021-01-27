import { ActionType, ActionResponsability, ActionPriority, ActionStatus } from "../enums/enums";

export class ActionPoint {
    
    id: String | undefined;
    idExecutionCheck: String | undefined;
    actionType: ActionType;
    responsability: ActionResponsability;
    description: String;
    count: Number;
    priority: ActionPriority;
    status: ActionStatus;
    beginDate: Date = new Date();
    updateDate: Date | undefined;

    constructor(actionType:ActionType, responsability:ActionResponsability, description:String, count:Number, priority:ActionPriority, status:ActionStatus){

        this.actionType = actionType;
        this.responsability = responsability;
        this.description = description;
        this.count = count;
        this.priority = priority;
        this.status = status;
    }
};