import {Country} from './country'
export class EditUser {
    id:Number;
    etype:string;
    firstName:string;
    lastName:string;
    email:string;
    homeCountry:string;
    title:string;
    status:boolean=true;
    groups:Object[]=[{id:'',name:''}];
    userGroups:Object[]=[{id:'',name:''}];
    country:Object[]=[{id:'',name:''}];
    manager:Object[]=[{id:'',name:'',email:''}];
    item:any=[{item_id:0,item_text:""}];
    product:any=[{item_id:0,item_text:""}];
    diseasestate:any=[{item_id:0,item_text:""}];
    userRoles:Object[]=[{id:0,name:""}];
    roles:Object[]=[{id:0,name:""}];
    region:any=[{item_id:0,item_text:"",country:[]}];
    therapeuticArea:any=[{id:0,name:"",product:[{id:0,name:""}],disState:[{id:0,name:""}]}];

}