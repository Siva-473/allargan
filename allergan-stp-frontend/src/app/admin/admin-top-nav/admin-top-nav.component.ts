import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user'
import { from } from 'rxjs';
@Component({
  selector: 'app-admin-top-nav',
  templateUrl: './admin-top-nav.component.html',
  styleUrls: ['./admin-top-nav.component.css']
})
export class AdminTopNavComponent implements OnInit {
  currentUser: User;
  constructor() { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

   
  }

  ngOnInit() {
  }

}
