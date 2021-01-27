export class Collaborator {

    id: String | undefined;
    idSquad: String | undefined;
    name: String;
    email: String;
    role: String;
    beginDate: Date = new Date();
    updateDate: Date | undefined;

    constructor(name:String, email:String, role:String){
        this.name = name;
        this.email = email;
        this.role = role;
    }
};