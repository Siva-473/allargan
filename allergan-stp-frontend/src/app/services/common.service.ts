import { Injectable } from '@angular/core';
import { stringify } from '@angular/core/src/util';
import { Router, NavigationEnd, ResolveEnd } from '@angular/router';
import { AssetJourneyRequestParams } from '../models/AssetJourneyRequestParams';

let currentCrumb = "";
@Injectable()
export class CommonService {

  private _breadCrumb: string = ""
  private previousUrl: string = undefined;
  private currentUrl: string = undefined;
 rootList = [{id: 1, title: 'Basecamp',routerLink : '/basecamp', urlLink:'/basecamp',userId:"", assetsTypeId :""}];
 public userId : string;
 getRootList(){
   return this.rootList;
 }
  constructor(private router: Router) {
    this.currentUrl = this.router.url;
    router.events.subscribe(event => {
      //   if (event instanceof NavigationEnd) {        
      //     this.previousUrl = this.currentUrl;
      //     this.currentUrl = event.url;
      //   };
      if (event instanceof ResolveEnd) {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
      };
    });
  }

 clearRootList(){
   this.rootList.splice(0, this.rootList.length);
 }
 addElementToRootList(indexType:number,input:string,routerLink:string, urlLink:string,userId,assetsTypeId){
  if(input != undefined){
    var elementupdated = true;
    for(var R = 0; R < this.rootList.length; R++){
      var currentElement = this.rootList[R];
      if(currentElement.id == indexType ){
        elementupdated = false;
        currentElement.title = input;
        currentElement.userId = userId
        currentElement.routerLink = routerLink
        currentElement.urlLink = urlLink
        currentElement.assetsTypeId = assetsTypeId
      } 
    }
    if(elementupdated){
      this.rootList.push({id: indexType,   title: input, routerLink:routerLink,  urlLink:urlLink, userId: userId,  assetsTypeId:assetsTypeId});
    }
   // alert(elementupdated);
   }
 }
 getRootUrlList(){
  return this.rootList;
}

  get breadCrumb(): string {
    return this._breadCrumb;
  }

  set breadCrumb(breadCrumb: string) {

    this._breadCrumb = breadCrumb;

  }

  getAssetImage(assetImage: number) {
    if (assetImage >=0) {
      if (assetImage == 1 || assetImage == 6) { return "ppt"; }     
      else if (assetImage == 2 || assetImage == 3) { return "doc"; }
      else if (assetImage == 4 ) { return "pdf"; }      
      else if (assetImage == 5 ) { return "video"; }
      else if (assetImage == 7 ) { return "txt"; }
      else if (assetImage == 8 ) { return "quiz"; }
      else if (assetImage == 9 ||  assetImage == 10) { return "xls"; }
      else if (assetImage == 11) { return "link"; }
      else if (assetImage == 12) { return "zip"; }      
    }
  }

  // getAssetImage(assetImage: String) {
  //   if (assetImage != null) {
  //     if (assetImage.indexOf('.pdf') > -1) { return "pdf"; }
  //     else if (assetImage.indexOf('.mp4') > -1) { return "video"; }
  //     else if (assetImage.indexOf('.doc') > -1 || assetImage.indexOf('.docx') > -1) { return "doc"; }
  //     else if (assetImage.indexOf('.doc') > -1 || assetImage.indexOf('.docx') > -1) { return "doc"; }
  //     else if (assetImage.indexOf('.xls') > -1 || assetImage.indexOf('.xlsx') > -1) { return "xls"; }
  //     else if (assetImage.indexOf('.ppt') > -1 || assetImage.indexOf('.pptx') > -1) { return "ppt"; }
  //     else if (assetImage.indexOf('.txt') > -1) { return "txt"; }
  //     else if (assetImage.indexOf('.zip') > -1) { return "zip"; }
  //     else { return "quiz"; }
  //   }
  // }
  getJourneyImage(count: number, assetUserJourney: any, mouseOvered: boolean,showNotCompleted:boolean): String {

    let journeyClass: String = " ";
    if ((count >= 1 || count >= 2 || count >= 3 || count >= 4) && assetUserJourney) {
      if (assetUserJourney.asset.contentType.id != 8 && (assetUserJourney.asset.mandatory === false || !showNotCompleted)) { journeyClass += " upcoming "; }
      if (assetUserJourney.asset.mandatory === true && assetUserJourney.asset.contentType.id != 8) { journeyClass += " mandatory "; }
      if (assetUserJourney.asset.contentType.id != 8 && mouseOvered && assetUserJourney.asset.mandatory === false) { journeyClass += " inprogressred "; }
      if (mouseOvered && assetUserJourney.asset.mandatory === true && assetUserJourney.asset.contentType.id != 8) { journeyClass += " inprogress "; }
      if (mouseOvered) { journeyClass += " active "; }
      if (assetUserJourney.asset.contentType.id == 8 && (assetUserJourney.asset.mandatory === true || assetUserJourney.asset.mandatory === false) ) { journeyClass += " quiz inprogressquiz"; }
    }
    //   if(count>=1 && assetUserJourney && assetUserJourney.asset.mandatory===false){
    //    journeyClass +=" upcoming ";
    //   }
    //   if(assetUserJourney && assetUserJourney.asset.mandatory===true && assetUserJourney.asset.contentType.id!=8){
    //    journeyClass +=" mandatory ";
    //   }
    //   if(count>0 && mouseOvered && assetUserJourney &&assetUserJourney.asset.mandatory===false){
    //    journeyClass +=" inprogressred ";
    //   }
    //   if(count>0 && mouseOvered && assetUserJourney &&assetUserJourney.asset.mandatory===true && assetUserJourney.asset.contentType.id!=8){
    //    journeyClass +=" inprogress ";
    //   }
    //   if(count>0 && mouseOvered){
    //    journeyClass +=" active ";
    //   }
    //   if(count>0 && assetUserJourney && assetUserJourney.asset.mandatory===true  && assetUserJourney.asset.contentType.id==8){
    //    journeyClass +=" quiz inprogressquiz";
    //   }
    return journeyClass;
  }

  public getPreviousUrl() {
    if (this.previousUrl != null) return this.previousUrl = this.previousUrl.substr(0, this.previousUrl.indexOf('?'));
    else return this.previousUrl = "/main";
  }

   openAsset(thisInst: any, assetUserJourney: any) {
    //alert("kkkkk");
    thisInst.loadHide=true;
    thisInst.error=false;
    thisInst.assetloader=true;
   // console.log("journy id: " + assetUserJourney.id)
   // console.log("assetUserJourney.asset.contentType.id:"+JSON.stringify(assetUserJourney));
   console.log("this.currentUrl : "+this.currentUrl);
   console.log("this.previousUrl : "+this.previousUrl);
   if(assetUserJourney.asset.contentType.id == 11){
      window.open("https://"+assetUserJourney.asset.deepLink,'_blank');
      thisInst.assetloader=false;
     
      thisInst.homeService.changeAssetStatusAsInprogress(thisInst.currentUser.id, assetUserJourney.id)
        .pipe().subscribe(content => {
          thisInst.route.queryParams.subscribe(params => {

            thisInst.homeService.getOrderedAssetsFor(new AssetJourneyRequestParams(Number(params['userId']), Number(params['assetsTypeId']), Number(params['taId']), Number(params['productId']), Number(params['disId'])))
            .pipe().subscribe(data => {
                    thisInst.route.paramMap.subscribe(params => {
                    thisInst.assetUserJourney = data.data;
                    thisInst.count = Number(thisInst.assetUserJourney.length);
                    if(this.currentUrl.indexOf('/notshown/assigned/assets')>-1){
                      thisInst.courses=data.data;                       
                      thisInst.showNotCompleted = false;                  
                     console.log("In show not complete: "+thisInst.courses);
                     if (Number(thisInst.courses.length) >= 1) {
                      thisInst.showNotCompleted = true;
                     }
                    // console.log("this.unshowncount"+this.unshowncount);
                    thisInst.showncount = Number(thisInst.courses.length) - thisInst.unshowncount;
                    //for(let i=0;i<Number(this.showncount);i++) {
                      thisInst.courses.splice(0,thisInst.showncount);
                    }
                 },
                  error => {                     
                    thisInst.assetloader=false;
                  });
               },
              error => {
                thisInst.assetloader=false;
                }
            );
        });
     });
    } else if (assetUserJourney.asset.contentType.id == 8) {
      thisInst.route.queryParams.subscribe(params => {
        thisInst.router.navigate(['/quiz/assets'], {
          queryParams: {
            "url": assetUserJourney.asset.assetType,
            "userId": params['userId'],
            "quizId": assetUserJourney.asset.fileName,
            "journeyId": assetUserJourney.id,
            "queryUrl": params['queryUrl'],
            "assetsTypeId": params['assetsTypeId'],
            "productId": params['productId'],
            "disId": params['disId'],
            "taId": params['taId']
          }, skipLocationChange: true
        });
        
      });

      thisInst.assetloader=false;

    } else {
   
       thisInst.homeService.openAsset(thisInst.currentUser.id, assetUserJourney.id)
        .pipe()
        .subscribe(content => {
          
          if (navigator.userAgent.indexOf('Edge') >= 0){  // for Edge
            console.log('Edge');
            var blob = new Blob([content], { type: content.type });
            window.navigator.msSaveOrOpenBlob(blob, assetUserJourney.asset.fileName);
            thisInst.assetloader=false;
          }


          if (navigator.appVersion.toString().indexOf('.NET') > 0) { // for IE browser
            var blob = new Blob([content], { type: content.type });
            window.navigator.msSaveBlob(blob, assetUserJourney.asset.fileName);
            thisInst.assetloader=false;
          } else {
            var blob = new Blob([content], { type: content.type }),
              url = window.URL.createObjectURL(blob);
            window.open(url);
            thisInst.assetloader=false;
          }
          
           thisInst.route.queryParams.subscribe(params => {

              thisInst.homeService.getOrderedAssetsFor(new AssetJourneyRequestParams(Number(params['userId']), Number(params['assetsTypeId']), Number(params['taId']), Number(params['productId']), Number(params['disId'])))
              .pipe()
              .subscribe(

                data => {                 
                   thisInst.route.paramMap.subscribe(params => {
                   thisInst.assetUserJourney = data.data;
                    if(this.currentUrl.indexOf('/notshown/assigned/assets')>-1){
                      thisInst.courses=data.data;                       
                      thisInst.showNotCompleted = false;                  
                     console.log(thisInst.courses);
                     if (Number(thisInst.courses.length) >= 1) {
                      thisInst.showNotCompleted = true;
                     }
                    // console.log("this.unshowncount"+this.unshowncount);
                    thisInst.showncount = Number(thisInst.courses.length) - thisInst.unshowncount;
                    //for(let i=0;i<Number(this.showncount);i++) {
                      thisInst.courses.splice(0,thisInst.showncount);
                    }
                    thisInst.count = Number(thisInst.assetUserJourney.length);                    
                    thisInst.loadHide=false;
                     

                  },
                    error => {                     
                      thisInst.assetloader=false;
                      thisInst.loadHide=false;  
                      thisInst.error=true;
                    });
                },
                error => {
                  thisInst.assetloader=false;
                  thisInst.loadHide=false;
                  thisInst.error=true;
                 
                }
                
                );
          }
          );
        },
        error => {
         
          thisInst.assetloader=false;
          thisInst.loadHide=false;
          thisInst.error=true;
        }
       
        );
    }
  }

  showCompletedAssets(thisInst: any, url: String) {
    thisInst.route.queryParams.subscribe(params => {
      thisInst.router.navigate(['completed/courses'], {
        queryParams: {
          "userId": params['userId'],
          "url": url,
          "queryUrl": thisInst.queryUrl,
          "assetsTypeId": params['assetsTypeId'],
          "productId": params['productId'],
          "disId": params['disId'],
          "taId": params['taId']

        }, skipLocationChange: true
      });
    })
  }

  showUnAssignedAssets(thisInst: any, url: String) {
    thisInst.route.queryParams.subscribe(params => {
      thisInst.router.navigate(['/unassigned/assets'], {
        queryParams: {
          "userId": params['userId'],
          "url": url,
          "queryUrl": params['queryUrl'],
          "assetsTypeId": params['assetsTypeId'],
          "productId": params['productId'],
          "disId": params['disId'],
          "taId": params['taId']
        }, skipLocationChange: true
      });
    })
  }

  getQueuedAssets(thisInst: any, assetType: String) {
    thisInst.route.queryParams.subscribe(params => {
      thisInst.router.navigate(['/notshown/assigned/assets'], {
        queryParams: {
          "userId": params['userId'],
          "url": assetType,
          "queryUrl": params['queryUrl'],
          "assetsTypeId": params['assetsTypeId'],
          "productId": params['productId'],
          "disId": params['disId'],
          "taId": params['taId'],
          "unshowncount": (thisInst.assetUserJourney.length - thisInst.decrCount)
        }, skipLocationChange: true
      });
    })
  }

  markAssetCompleted(thisInst: any, assetJourneyId: string) {
    console.log("assetJourneyId: "+assetJourneyId);
    thisInst.homeService.completeJourney(assetJourneyId, String(thisInst.currentUser.id))
      .pipe()
      .subscribe(
        data => {
          if (data.data) {
            thisInst.loadAll = true;
            thisInst.route.queryParams.subscribe(params => {

              thisInst.homeService.getOrderedAssetsFor(new AssetJourneyRequestParams(Number(params['userId']), Number(params['assetsTypeId']), Number(params['taId']), Number(params['productId']), Number(params['disId'])))
                .pipe()
                .subscribe(
                  data => {
                    thisInst.route.paramMap.subscribe(params => {
                      thisInst.loadAll = false;
                      thisInst.showNotCompleted = false;
                      thisInst.assetUserJourney = data.data;                      
                      if (Number(thisInst.assetUserJourney.length) >= 1) {
                        thisInst.showNotCompleted = true;
                      }
                      if(this.currentUrl.indexOf('/notshown/assigned/assets')>-1){
                        thisInst.courses=data.data;                       
                        thisInst.showNotCompleted = false;                  
                       console.log("In show not complete: "+thisInst.courses);
                       if (Number(thisInst.courses.length) >= 1) {
                        thisInst.showNotCompleted = true;
                       }
                      // console.log("this.unshowncount"+this.unshowncount);
                      thisInst.showncount = Number(thisInst.courses.length) - thisInst.unshowncount;
                      //for(let i=0;i<Number(this.showncount);i++) {
                        thisInst.courses.splice(0,thisInst.showncount);
                      }
                      thisInst.count = Number(thisInst.assetUserJourney.length);
                    },
                      error => {

                      });



                    thisInst.homeService.getCompletedAssets(params['userId'], params['assetsTypeId'], params['productId'], params['disId'], params['taId'])
                      .pipe()
                      .subscribe(
                        data => {
                          thisInst.lengthForData = data.data;

                          console.log("lengthForData: "+thisInst.lengthForData);
                          thisInst.showNotCompleted = false;
                          //this.completedStatus=true;
                          if (Number(thisInst.lengthForData.length) >= 1) {
                            // this.completedStatus=false;
                            thisInst.showNotCompleted = true;

                          }

                        },
                        error => {

                        });

                  });
            });


          }

        },
        error => {

        });
  }
}

