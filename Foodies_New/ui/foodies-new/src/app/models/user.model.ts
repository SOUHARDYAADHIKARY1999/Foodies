export class UserModel{
    firstName: string;
    lastName: string;
    email: string;
    password: string;

    constructor(firstname:string, lastname:string, email:string, password:string){
        this.firstName=firstname;
        this.lastName=lastname;
        this.email=email;
        this.password=password;
    }
    
}