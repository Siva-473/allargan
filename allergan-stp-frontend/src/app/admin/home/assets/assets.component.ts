import { Component, OnInit } from '@angular/core';
import { AlertService } from '../../../services';
import { User } from '../../../models';
import { AssetService } from '../../services/assetservices';
@Component({
  selector: 'app-assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./assets.component.css']
})
export class AssetsComponent implements OnInit {
  currentUser: User;
  addAssetShow:boolean = false;
  assets:  [{id:0,title:"",description:"",status:0,
               assetType:{userName:""},
               therapeuticArea:{name:""},
               product:{name:""},
               diseaseState:{name:""}
                       
            }];
  constructor(
     private alertService: AlertService,
     private assetService:AssetService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.assetService.getAssets(this.currentUser.id).pipe().subscribe(assets => {      
      this.assets = assets.data;
      console.log(this.assets);
  });
  
}

  ngOnInit() {
    // $(function(){
    //   console.log($(".wmd-view-topscroll"))
    //   $(".wmd-view-topscroll").scroll(function(){
    //       $(".wmd-view")
    //           .scrollLeft($(".wmd-view-topscroll").scrollLeft());
    //   });
    //   $(".wmd-view").scroll(function(){
    //       $(".wmd-view-topscroll")
    //           .scrollLeft($(".wmd-view").scrollLeft());
    //   });
  // });

  setTimeout(() => {
    // var table = <HTMLElement>document.querySelector('.table');
    // var tableWidth = table.clientWidth;
    // var topScroll = <HTMLElement>document.querySelector('.scroll-div1');
    // topScroll.style.width = tableWidth + 'px';
    // topScroll.style.height = 5 + 'px';



    $(function(){
        $(".wmd-view-topscroll").scroll(function(){
            $(".wmd-view")
                .scrollLeft($(".wmd-view-topscroll").scrollLeft());
            
        });
        $(".wmd-view").scroll(function(){
            $(".wmd-view-topscroll")
                .scrollLeft($(".wmd-view").scrollLeft());
        });
    });




  }, 5000);
  
}


  

  addAsset() {
    this.addAssetShow=true;
      
  }
  assetStatus($event, assetId:Number){
   
    let status=false;
        if($event.target.checked==false){
        status=true;
        }
      this.assetService.changeAssetStatus(assetId,status).pipe().subscribe(assets => {      
      this.assets = assets.data;
    });
  }
  onDeleteAsset($event, assetId:Number){
   
    this.assetService.deleteAsset(assetId).pipe().subscribe(assets => {      
      this.assets = assets.data;
    });
  }
}
