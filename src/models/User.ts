export class User {

    name: String;
    email: String;
    company: String;
    alliance: String | undefined;
    access: String;
    beginDate: Date = new Date();
    updateDate: Date | undefined;

    constructor(name:String, email:String, company:String, access: String){
        this.name = name;
        this.email = email;
        this.company = company;
        this.access = access;
    }
};