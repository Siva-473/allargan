import { Role } from "./role";

export class User {
    id: number;
    firstName:string;
    email:string;
    username: string;
    password: string;
    name: string;
    role:Array<Object>=[{id:0,name:""}];
    roles:Role;
    token?: string;
    roleName:string;
    groups:Object[]=[{"id":0,"name":""}];    
}