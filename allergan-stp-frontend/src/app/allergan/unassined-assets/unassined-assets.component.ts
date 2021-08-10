import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { HomeService} from '../../services';
import{User} from '../../models';

@Component({
  selector: 'app-unassined-assets',
  templateUrl: './unassined-assets.component.html',
  styleUrls: ['./unassined-assets.component.css']
})
export class UnassinedAssetsComponent implements OnInit {
  isSearchActive = false;
  url:string;
  courses:[{asset:{title:"",awardPoints:0}}];
 unassinedIds = new Array();
 currentUser: User;
 unassinedAssets:boolean=true;
 toData:string = "min_contner silde_14 ht100";
 unassinedAssetsFlag: boolean= true;
  constructor(private route: ActivatedRoute,private router: Router,private homeService: HomeService) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
  ngOnInit() {

    
  
this.route.queryParams.subscribe(params => {
  this.unassinedAssets=true;
  this.url=params['url'];
  if(params['queryUrl'] == 'Core Product Training'){   
    this.toData  = "min_contner scenario_05 dragbalsc";
  }else if(params['queryUrl'] == 'Core Disease Training' ){ 
    this.toData  = "min_contner scenario_02  dragbalsc";
  }else if(params['queryUrl'] == 'Core Training' ){ 
    this.toData  = "min_contner scenario_03 dragbalsc";
  }else if(params['queryUrl'] == 'Key Field Tool Training'){  
    this.toData  = "min_contner scenario_03 dragbalsc";
  }else if(params['queryUrl'] == 'Launch Training'){ 
    this.toData  = "min_contner scenario_04 dragbalsc";
  }else if(params['queryUrl'] == 'Hot Topics'){ 
    this.toData  = "min_contner silde_14 scenario_01";
  }else if(params['queryUrl'] == "New Hire Training") { 
    this.toData  = "min_contner scenario_08 dragbalsc";
  }else if(params['queryUrl'] == 'Medical Meetings'){
    this.toData  = "min_contner scenario_06 dragbalsc";
  }

     this.homeService.getUnassignedAssetsFor(params['userId'],params['assetsTypeId'],params['productId'],params['disId'],params['taId'])
      .pipe()
       .subscribe(
           data => {
           
            this.courses=data.data;
          //  alert(this.courses.length);
          if(Number(this.courses.length)>0){
            this.unassinedAssets=false;
            this.unassinedAssetsFlag = false;
          }
              
           },
           error => {
           
           });
 })

  }

  onCheckboxChagen(event, value) {
    this.unassinedIds.push(Number(value));
    if(Number(this.unassinedIds.length)>0){
      this.unassinedAssets=false;
    }

  }
  cancel(url:String){
    this.route.queryParams.subscribe(params => {
     
      this.router.navigate([url], { queryParams:  {
        "userId":this.currentUser.id,
        "queryUrl":params['queryUrl'],
        "assetsTypeId":params['assetsTypeId'],
        "productId":params['productId'],
        "disId":params['disId'],
        "taId":params['taId']


      }, skipLocationChange: true});
    })

  }

  goBack(url:String){
    this.route.queryParams.subscribe(params => {
     
      this.router.navigate([url], { queryParams:  {
        "userId":this.currentUser.id,
        "queryUrl":params['queryUrl'],
        "assetsTypeId":params['assetsTypeId'],
        "productId":params['productId'],
        "disId":params['disId'],
        "taId":params['taId']


      }, skipLocationChange: true});
    })
  }
  
  updateAll(){
   
    if(Number(this.unassinedIds.length)==0){
      this.unassinedAssets=true;
      return;
    }
    this.homeService.unAssigenedAssets(this.unassinedIds,this.currentUser.id).subscribe(
      data => {
       
        
this.route.queryParams.subscribe(params => {
  this.unassinedAssets=true;
     this.homeService.getUnassignedAssetsFor(params['userId'],params['assetsTypeId'],params['productId'],params['disId'],params['taId'])
      .pipe()
       .subscribe(
           data => {
           
            this.courses=data.data;
          //  alert(this.courses.length);
          if(Number(this.courses.length)>0){
            this.unassinedAssets=false;
          }

          this.route.queryParams.subscribe(params => {
     
            this.router.navigate([this.url], { queryParams:  {
              "userId":this.currentUser.id,
              "queryUrl":params['queryUrl'],
              "assetsTypeId":params['assetsTypeId'],
              "productId":params['productId'],
              "disId":params['disId'],
              "taId":params['taId']
      
      
            }, skipLocationChange: true});
          })

          
              
           },
           error => {
           
           });
 })
      },
      error => {
      
      });
  }
}
