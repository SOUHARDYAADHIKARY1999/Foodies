export class UserModel{
    phoneNumber:string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    admin:boolean

    constructor(phoneNumber:string,firstname:string, lastname:string, email:string, password:string,admin:boolean){
        this.phoneNumber=phoneNumber;
        this.firstName=firstname;
        this.lastName=lastname;
        this.email=email;
        this.password=password;
        this.admin=admin;
    }
    
}