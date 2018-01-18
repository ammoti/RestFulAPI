import { Address } from "./address";
import { Company } from "./company";

export class Users{
    id:number;
    name:string;
    username:string;
    email:string;
    address:Address;
    phone:string;
    website:string;
    company:Company;
    constructor(){
        this.address=new Address();
        this.company=new Company();
    }
}

export interface IUsers{
    Users:Users[];
}
