import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services';
import { User } from 'src/app/models';

@Component({
  selector: 'points-badges',
  templateUrl: './points-badges.component.html',
  styleUrls: ['./points-badges.component.css']
})
export class PointsBadgesComponent implements OnInit {
  private currentUser=new User();
  myBadges:boolean=true;
  showLoder:boolean=true;
  overAllTop=new Array<Object>()
  overAllGroupTop=new Array<User>()
  leaderShow:boolean=false;
  points:number=0;
  showLoderGroup:boolean=true;
  currentUserTop= new User();
  percentage:number=0;
  prograsessBar:number=0;
  pointsActivate:boolean=true;
  constructor(private homeService: HomeService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit() {
  //  alert(this.currentUser.id);
    this.homeService.getPointsAndBadges(Number(this.currentUser.id)).pipe().subscribe(data=>{
        this.points=data.data;
        this.percentage=((630*this.points)/25000);
       
        this.prograsessBar=((100*this.points)/25000);
       

       
    },error=>{

    })
    
  }

  badgeShow(){
    this.myBadges=true;
    this.leaderShow=false;
    
  }

  leadersShow() {
    this.myBadges=false;
    this.leaderShow=true;
   // this.showLoder=true;
    this.homeService.leadersShow(Number(this.currentUser.id)).pipe().subscribe(data=>{
      this.showLoder=false;
      this.showLoderGroup=false;
        this.overAllTop=data.data.users
        this.overAllGroupTop=data.data.usersGrouplist;
        this.overAllGroupTop.filter(x => x.id === this.currentUser.id).forEach(i=>{
          this.currentUserTop=i;
        });
        this.overAllGroupTop = this.overAllGroupTop.filter(x => x.id !== this.currentUser.id);  
      
    });

  }
}
