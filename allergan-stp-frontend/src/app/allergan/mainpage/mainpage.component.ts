import { Component,ViewChild, NgZone,OnInit } from '@angular/core';
import { User,ProductAndDiseaseIds } from '../../models';
import { Router, ActivatedRoute } from '@angular/router';
import { HomeService} from '../../services';
import {constants} from '../../../environments/constants'
@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  currentUser: User;
  success:Boolean=true;
  show:Boolean=false;
  searchActive:boolean=false;
  isCollapsed: boolean = true;
  navClick:boolean=false;
  navbarCollapsed:boolean = false;
  collapse:string = "closed";
  assetsType:[{id:0,userName:"",total:0,completed:0,started:0,notStarted:0}];
  constructor(private homeService: HomeService,private router: Router,private ngZone: NgZone,private route: ActivatedRoute) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.homeService.getAssets(this.currentUser.id)
    .pipe()
     .subscribe(
         data => {
            this.assetsType=data.data;
           // alert(JSON.stringify(data.data));
           
             
         },
         error => {
         
         });
   }

  ngOnInit() {
  }
  
  

  toggleCollapse() {
   this.searchActive=!this.searchActive;
  }

  onSuccess(event: ProductAndDiseaseIds){
    this.success=false;
    this.show=true;
    this.route.queryParams.subscribe(params => {
     let url='';
      if(params['urls']==="Core Product Training"){
        url='/cpt'
      }
      if(params['urls']==="Key Field Tool Training"){
        url='/ftt'
      }
      if(params['urls']==="Hot Topics"){
        url='/topic'
      }
      if(params['urls']==="Core Disease Training"){
        url='/cdt'
      }

      if(params['urls']==="Compliance Wire"){
        url='/cw'
      }
      if(params['urls']==="New Hire Training"){
        url='/nht'
      }if(params['urls']==="Launch Training"){
        url='/lt'
      }if(params['urls']==="Medical Meetings"){
        url='/mm'
      }if(params['urls']==="Core Training"){
        url='/ct'
      }
      this.router.navigate([url], { queryParams:  {
        "userId":this.currentUser.id,
        "assetsTypeId":params['assetsTypeId'],
        "productId":event.productId,
        "disId":event.diseaseId,
        "taId":event.taId,
        "queryUrl":event.queryUrl

      }, skipLocationChange: true});
    })

   
  }


  navBarActive(){
    this.navClick=!this.navClick;
  }
    
  onClickedOutside() {
    this.navClick=false;
  }
}
