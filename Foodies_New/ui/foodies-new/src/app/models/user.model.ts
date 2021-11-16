export class UserModel{
    _id:string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    saltSecret: string;

    constructor(firstname:string, lastname:string, email:string, password:string, saltSecret:string){
        this.firstName=firstname;
        this.lastName=lastname;
        this.email=email;
        this.password=password;
        this.saltSecret=saltSecret;
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
    getSaltSecret():string{
        return this.saltSecret;
    }
    
}