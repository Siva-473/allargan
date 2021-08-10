import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user'
@Component({
  selector: 'app-admin-side-nav',
  templateUrl: './admin-side-nav.component.html',
  styleUrls: ['./admin-side-nav.component.css']
})
export class AdminSideNavComponent implements OnInit {
  currentUser: User;
  rolePresent:boolean=false;
  constructor() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.currentUser.role.find(x => x['name'] == "ROLE_ADMIN" ) != undefined ) {
      this.rolePresent = true;
    }
   }

  ngOnInit() {
  }

  status: boolean = false;
  navClick($event){
    console.log($event)
    $event.stopPropagation();
    $event.preventDefault();
    // this.status = !this.status;
    $event.target.parentElement.classList.add('active')
  }

 
}
