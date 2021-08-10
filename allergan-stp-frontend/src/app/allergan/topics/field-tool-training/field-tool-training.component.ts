import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User, AssetJourneyRequestParams } from '../../../models';
import { HomeService, CommonService } from '../../../services';
import * as $ from 'jquery';


@Component({
  selector: 'app-field-tool-training',
  templateUrl: './field-tool-training.component.html',
  styleUrls: ['./field-tool-training.component.css']
})
export class FieldToolTrainingComponent implements OnInit {

  loadAll: boolean = false;
  basecampTrue:boolean=false;
  mouseOvered1: boolean = false;
  mouseOvered2: boolean = false;
  mouseOvered3: boolean = false;
  mouseOvered4: boolean = false;
  mouseOvered5: boolean = false;
  assetloader:boolean=false;

  completedStatus: boolean = false;
  showNotCompleted: boolean = false;
  completedAssets: boolean = false;

  count: number = 0;
  queryUrl: string = "";
  currentUser: User;
  url: string;

  countCompleted: number;
  decrCount: number;

  lengthForData: [{
    asset: {
      title: "",
      awardPoints: 0
    }
  }];

  assetUserJourney: [{
    id: 0,
    assetCompletionStatus: null,
    asset: { id: 0, title: "", fileName: "", description: "", mandatory: false, contentType: {id:0,name:"",image:""} },
    assetAssignmentDate: Date,
    dueDays: 0,
    ssetDueDate: "",
    pontsRewarded: 0
  }];


  constructor(private route: ActivatedRoute, private router: Router, private homeService: HomeService, private commonService: CommonService, private ngZone: NgZone) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.basecampTrue=true;
    this.url = this.commonService.getPreviousUrl();
    this.route.queryParams.subscribe(params => {
      this.queryUrl = params['queryUrl'];
      this.homeService.getOrderedAssetsFor(new AssetJourneyRequestParams(Number(params['userId']), Number(params['assetsTypeId']), Number(params['taId']), Number(params['productId']), Number(params['disId'])))
        .pipe()
        .subscribe(
          data => {
            this.route.paramMap.subscribe(params => {
              this.showNotCompleted = false;
              this.assetUserJourney = data.data;
              if (Number(this.assetUserJourney.length) >= 1) {
                this.showNotCompleted = true;
              }
              // if (!this.showNotCompleted) this.decrCount = 4;
              // else this.decrCount = 3;
              this.decrCount = 4;
              this.count = Number(this.assetUserJourney.length);
            },
              error => {
              });

            this.homeService.getCompletedAssets(params['userId'], params['assetsTypeId'], params['productId'], params['disId'], params['taId'])
              .pipe()
              .subscribe(
                data => {
                  this.lengthForData = data.data;
                  this.showNotCompleted = false;
                  if (Number(this.lengthForData.length) >= 1) {
                    this.showNotCompleted = true;
                    this.decrCount = 3;

                  }
                },
                error => {

                });

          });
    });
  }

  ngOnInit() { }

  openAsset(assetUserJourney: any) {
    this.commonService.openAsset(this, assetUserJourney);
  }

  markAsComplete(assetJourneyId: string) {
    this.commonService.markAssetCompleted(this, assetJourneyId);

  }

  completed(url: String) {
    this.commonService.showCompletedAssets(this, url);
  }

  unAssignedAssets(url: String) {
    this.commonService.showUnAssignedAssets(this, url);

  }
  // assignedAssets(count:number,url:string){
  //      this.route.queryParams.subscribe(params => {    
  //     this.router.navigate(['/notshown/assigned/assets'], { queryParams:  {
  //       "unshowncount" :count,
  //       "url"   :url,
  //       "userId":params['userId'],
  //       "queryUrl":params['queryUrl'],
  //       "assetsTypeId":params['assetsTypeId'],
  //      "productId":params['productId'],
  //       "disId":params['disId'],
  //       "taId":params['taId']     
  //     }, skipLocationChange: true});
  //   })
  // }

  getAssetImage(assetImage: number) {
    return this.commonService.getAssetImage(assetImage);
  }

  getJourneyImage(count: number, assetUserJourney: any, mouseovered: boolean,showNotCompleted:boolean) {
    return this.commonService.getJourneyImage(count, assetUserJourney, mouseovered,showNotCompleted);
  }

  isClicked(event) {
    this.getQueuedAssets(this.url);
    event.stopPropagation();
  }
  isMouseHover(event) {
    event.stopPropagation();
  }
  getQueuedAssets(assetType: String) {
    this.commonService.getQueuedAssets(this, assetType);
  }
}
