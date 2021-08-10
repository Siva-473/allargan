import { Component, OnInit } from '@angular/core';
import { User,AssetJourneyRequestParams } from '../../models';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute,Router} from '@angular/router';
import { HomeService, CommonService} from '../../services';


@Component({
  selector: 'app-completed-courses',
  templateUrl: './completed-courses.component.html',
  styleUrls: ['./completed-courses.component.css']
})
export class CompletedCoursesComponent implements OnInit {
  courses:[{asset:{title:"",awardPoints:0,contentType:""}}];
  loadHide:Boolean=false;
  error:Boolean=false;
  clients: any[];
  url:String="";
  assetUserJourney:[{
    id:0,
    assetCompletionStatus:null,
    asset:{id:0,title:"",fileName:"",description:"",mandatory:false},
    assetAssignmentDate:Date,
    dueDays:0,
	  ssetDueDate:"",
	  pontsRewarded:0
  }]
  count:number=0;
  queryUrl:String="";
  assetsTypeId:string="";
  currentUser: User;
  thisContainerClass:string = "min_contner silde_14 silde_22";
  constructor(private route: ActivatedRoute,private router: Router,private homeService: HomeService,private commonService:CommonService) {  
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')); 
    
this.route.queryParams.subscribe(params => {
  this.assetsTypeId=params['assetsTypeId']
  this.url=params['url'];
  this.updateBg(params);
  this.homeService.getCompletedAssets(params['userId'],params['assetsTypeId'],params['productId'],params['disId'],params['taId'])
    .pipe()
     .subscribe(
         data => {
          this.courses=data.data;
        
         },
         error => {
         
         });

})
  }



openAsset(assetUserJourney:any){
  this.commonService.openAsset(this, assetUserJourney)
}
 

  goBack(urls:String){   
    this.route.queryParams.subscribe(params => {  
      this.router.navigate([urls], { queryParams:  {
        "userId":this.currentUser.id,
        "queryUrl":params['queryUrl'],
        "assetsTypeId":params['assetsTypeId'],
        "productId":params['productId'],
        "disId":params['disId'],
        "taId":params['taId']


      }, skipLocationChange: true});
    })
  }

  ngOnInit() {
    
  }

	updateBg(params:any){
	   if(params['queryUrl'] == 'Core Product Training'){   
	      this.thisContainerClass  = "min_contner scenario_05 dragbalsc";
	    }else if(params['queryUrl'] == 'Core Disease Training' ){ 
	      this.thisContainerClass  = "min_contner scenario_02  dragbalsc";
	    }else if(params['queryUrl'] == 'Core Training' ){ 
	      this.thisContainerClass  = "min_contner scenario_03 dragbalsc";
	    }else if(params['queryUrl'] == 'Key Field Tool Training'){  
	      this.thisContainerClass  = "min_contner scenario_03 dragbalsc";
	    }else if(params['queryUrl'] == 'Launch Training'){ 
	      this.thisContainerClass  = "min_contner scenario_04 dragbalsc";
	    }else if(params['queryUrl'] == 'Hot Topics'){ 
	      this.thisContainerClass  = "min_contner silde_14 scenario_01";
	    }else if(params['queryUrl'] == "New Hire Training") { 
	      this.thisContainerClass  = "min_contner scenario_08 dragbalsc";
	    }else if(params['queryUrl'] == 'Medical Meetings'){
	      this.thisContainerClass  = "min_contner scenario_06 dragbalsc";
	    }
	}


}
