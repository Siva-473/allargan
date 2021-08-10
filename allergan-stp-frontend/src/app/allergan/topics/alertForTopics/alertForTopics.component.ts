import { Component, OnInit } from '@angular/core';
import { User } from '../../../models';
@Component({
  selector: 'app-alerts',
  templateUrl: './alertForTopics.component.html',
  styleUrls: ['./alertForTopics.component.css']
})
export class AlertForTopicsComponent implements OnInit {
  myVar:boolean =false; 
  currentUser: User;
  constructor( ) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }


  ngOnInit() {
  }
 
  hide(){
    this.myVar=true;
   
  }
}
