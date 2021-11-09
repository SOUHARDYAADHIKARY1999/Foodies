export class UserModel{
    _id:string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    isAdmin: boolean;

    constructor(firstname:string, lastname:string, email:string, password:string, isadmin:boolean){
        this.firstName=firstname;
        this.lastName=lastname;
        this.email=email;
        this.password=password;
        this.isAdmin=isadmin;
    }

    getfirstName():string{
        return this.firstName;
    }
    getlastName():string{
        return this.lastName;
    }
    getEmail():string{
        return this.email;
    }
    getPassword():string{
        return this.password;
    }
    getRole():boolean{
        return this.isAdmin;
    }
    
}