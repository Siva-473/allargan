import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { HomeService, CommonService} from '../../services';
import { User,AssetJourneyRequestParams } from '../../models';
@Component({
  selector: 'app-not-shown-assigned-assets',
  templateUrl: './not-shown-assigned-assets.component.html',
  styleUrls: ['./not-shown-assigned-assets.component.css']
})
export class NotShownAssignedAssetsComponent implements OnInit {
    isSearchActive = true;
    url:string;
    courses:[{asset:{title:"",awardPoints:0}}];
    currentUser: User;
    unshowncount:number;
    showncount:number;
    thisContainerClass:string = "min_contner dragbalsc";
    showNotCompleted: boolean;
    assetUserJourney:[{
      id: 0,
      assetCompletionStatus: null,
      asset: { id: 0, title: "", fileName: "", description: "", mandatory: false, contentType: {id:0,name:"",image:""} },
      assetAssignmentDate: Date,
      dueDays: 0,
      ssetDueDate: "",
      pontsRewarded: 0
    }];

  userID: number;
  assetsTypeId: number;
  taId: number;
  productId: number;
  disId: number;

    constructor(private route: ActivatedRoute,private router: Router,private homeService: HomeService,private commonService:CommonService) { 
      this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
      this.url=this.commonService.getPreviousUrl();
      this.route.queryParams.subscribe(params => {
        this.unshowncount=params['unshowncount'];
        console.log("unsh: "+this.unshowncount);
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
       // getOnlyQueuedAssets()
        this.userID= Number(params['userId']);
        this.assetsTypeId=Number(params['assetsTypeId']);
        this.taId=Number(params['taId']);
        this.productId=Number(params['productId']);
        this.disId=Number(params['disId']);
        this.homeService.getOrderedAssetsFor(new AssetJourneyRequestParams(Number(params['userId']),Number(params['assetsTypeId']),Number(params['taId']),Number(params['productId']),Number(params['disId'])))
           .pipe()
             .subscribe(
                 data => {
                    this.courses =data.data;                  
                    // console.log(this);
                    this.showNotCompleted = false;                  
                    //  console.log(this.assetUserJourney);
                      if (Number(this.courses.length) >= 1) {
                        this.showNotCompleted = true;
                      }
                     // console.log("this.unshowncount"+this.unshowncount);
                      this.showncount = Number(this.courses.length) - this.unshowncount;
                     //for(let i=0;i<Number(this.showncount);i++) {
                     this.courses.splice(0,this.showncount);
                    //  j--;                   
                    // }
                  },
                 error => {
                 
                 });
       })

    }
    ngOnInit() {
     
   }
    

   cancel(){
    this.route.queryParams.subscribe(params => {
      this.url =params['url'];
      this.router.navigate([this.url], { queryParams:  {
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
  // goBack(){
    
  //   this.route.queryParams.subscribe(params => {
  //     this.url =params['url'];
  //     this.router.navigate([this.url], { queryParams:  {
  //       "userId":this.currentUser.id,
  //       "queryUrl":params['queryUrl'],
  //       "assetsTypeId":params['assetsTypeId'],
  //       "productId":params['productId'],
  //       "disId":params['disId'],
  //       "taId":params['taId']


  //     }, skipLocationChange: true});
  //   })
  // }

  getAssetImage(assetImage:number){ 
    return this.commonService.getAssetImage(assetImage);
   }

  openAsset(assetUserJourney:any){  
    this.commonService.openAsset(this, assetUserJourney);   
  }

   markAsComplete(assetJourneyId: string,event:any) {     
    this.commonService.markAssetCompleted(this, assetJourneyId);  
    event.StopPropagation();  
  }

 }
