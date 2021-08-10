import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import{UserService} from './services/userservices'
import { User } from '../models';
//import { UserService } from '@/_services';

@Component({ templateUrl: 'admin.component.html' })
export class AdminComponent implements OnInit {
//[{id:0,firstName:"",emailID:"",role:[{id:0,name:""}],status:false}];
    users=[{id:0,firstName:"",emailID:"",role:[{id:0,name:""}],status:false}];
    checkedValue:boolean=false;
    currentUser= new User();
    constructor(private userService:UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        
        if (this.currentUser.role.find(x => x['name'] == "ROLE_ADMIN" ) != undefined ) {
            this.userService.getUsers().pipe(first()).subscribe(users => {
                this.users = users.data;        
            });
          }
          else{
            this.userService.getManagerUsers(this.currentUser.id).pipe(first()).subscribe(users => {
                this.users = users.data;  
                this.users      
            });
          }

        
    }
     remove(Id:number){
         this.userService.remove(Id).pipe(first()).subscribe(users => {
             this.users = users.data;
          
         });
     }
    status($event,Id:number){
       
        let status=false;
        if($event.target.checked==false){
        status=true;
        }
       
        this.userService.statusChange(status,Id).pipe(first()).subscribe(users => {
            this.users = users.data;
          
        });
        
    }

    
}