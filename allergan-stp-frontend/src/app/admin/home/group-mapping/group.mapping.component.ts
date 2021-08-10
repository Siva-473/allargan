import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { GroupService } from '../../services/groupservice';
import { UserService } from '../../services/userservices';
import { sharedservice } from '../../services/sharedservice';
import { MetaDataService } from '../../services/metadataService';
import { FormBuilder } from '@angular/forms';
import { AlertService } from 'src/app/services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-group-mapping',
  templateUrl: './group.mapping.component.html',
  styleUrls: ['./group.mapping.component.css']
})
export class GroupMappingComponent implements OnInit {
  userNav_show : boolean = true;
  assetNav_show : boolean = false;
  fullData: boolean = true;
  filterData :  boolean = false;
  
  groups:  [{id:0,name:"",description:"",status:false}];
  users:  [{id:0,firstName:"",emailID:"",status:false, roleName:""}];
  assetTypes : [{id:0, userName:""}];
  assets: [{id:0, userName:"", assetType:{id:0, userName:""}, therapeuticArea:{id:0, name:""}, diseaseState:{id:0, name:""}, product:{id:0, name:""} }];

  grpName: string;
  grpId: number;
  userIDList: Array<number> = [];
  assetIDList: Array<number> = [];
 
  // therapeuticAreaList: Array<string> = [];
  // diseaseList: Array<string> = [];
  // productList: Array<string> = [];

  therapeuticAreaMap = new Map();
  diseaseMap= new Map();
  productMap= new Map();

  resultList: Array<Object> = [];
  mappedUserList: Array<any> = []; 

  // mappedUserIDs : Array<number> = [];

  userResultList: Array<Object> = [];
  message:string="";

  constructor(
    private groupService:GroupService,
    private userService:UserService,
    private service:sharedservice,
    private metaService: MetaDataService,
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private router: Router
    ) { 
      this.grpName=service.getGrpName();
      this.grpId = service.getGrpID();
    }

  model: any = {};

  ngOnInit() {
    this.groupService.getGroups().pipe(first()).subscribe(groups => {      
        this.groups = groups.data;                
    });
    this.userService.getUsers().pipe(first()).subscribe(users => {
      users.data.forEach(u => {
        if(u.groups.length == 0 ){////getting unmapped group users
          this.userResultList.push(u); 
        }
      });         
    });
    this.metaService.getAllAssetTypes().pipe(first()).subscribe(assetTypes => {  
        this.assetTypes = assetTypes.data;
    });
    this.metaService.getNonAutoAssignedAssets().pipe(first()).subscribe(assets => { 
      this.assets = assets.data;
    });
    this.metaService.getMappedUsers(this.grpId).pipe(first()).subscribe(users => {  
      users.data.forEach(u => {
        this.userIDList.push(u.id);
        this.userResultList.push(u); ////getting mapped users in selected grp
      });
    });
    this.metaService.getTherapeuticAreaMap().pipe(first()).subscribe(TA => { 
        TA.data.forEach(ta => {
            this.therapeuticAreaMap.set(ta.id, ta.name);
            ta.products.forEach(prod => {
              this.productMap.set(prod.id,prod.name);
            });
            ta.diseaseStates.forEach(disease => {
              this.diseaseMap.set(disease.id, disease.name);
            });
        });
    }); 
  }

  assetNavClick($event){
    this.userNav_show = $event.target.value === '1' ? true : false;
    this.assetNav_show = $event.target.value === '2' ? true : false;

    if($event.target.value === '2'){
      this.metaService.getMappedAssets(this.grpId).pipe(first()).subscribe(assets => {  
        assets.data.forEach(a => {
           this.assetIDList.push(a.id);
         });
       });
    }
  }

  addToUserList (userId,$event){
    if(this.userIDList.indexOf(userId) > -1){
      this.userIDList.splice(this.userIDList.indexOf(userId), 1);
    }else{
      this.userIDList.push(userId);
    }
  }

  addToAssetList(assetId,$event){
    if(this.assetIDList.indexOf(assetId) > -1){
      this.assetIDList.splice(this.assetIDList.indexOf(assetId), 1);
    }else{
      this.assetIDList.push(assetId);
    }
  }

  userGroupMap(id: number){    
    console.log(this.userIDList.length);
    // if(this.userIDList.length > 0){
      this.metaService.userGroupMapping(id,this.userIDList).pipe(first()).subscribe(data => {  
        this.alertService.success(data.data);
        window.scroll(0,0);
      },
      error => {
        this.alertService.error(error);
        window.scroll(0,0);
      });
    // }else{
    //     this.alertService.error('Please select user/s to map.');
    //     window.scroll(0,0);
    // }
   
  }

  userAssetMap(id: number){
    this.metaService.assetGroupMapping(id,this.assetIDList).pipe(first()).subscribe(data => { 
      this.alertService.success(data.data);
       window.scroll(0,0);
    },
    error => {
      this.alertService.error(error);
      window.scroll(0,0);
    });
  }

  shareGrpDetails(grpID){
    this.grpId = grpID;

    this.assetIDList = [];
    this.userIDList = [];
    this.userResultList = [];

    this.metaService.getMappedAssets(this.grpId).pipe(first()).subscribe(assets => {  
      assets.data.forEach(a => {
          this.assetIDList.push(a.id);
        });
      });

    this.metaService.getMappedUsers(this.grpId).pipe(first()).subscribe(users => {  
      users.data.forEach(u => {
          this.userIDList.push(u.id);
          this.userResultList.push(u);
        });
      });

    this.userService.getUsers().pipe(first()).subscribe(users => {
      users.data.forEach(u => {
        if(u.groups.length == 0 ){
          this.userResultList.push(u);
        }
      });         
    });
  }

  getThearpeuticAreas(assetTypeId){
    this.therapeuticAreaMap.clear()
    this.metaService.getTherapeuticAreas(assetTypeId).pipe(first()).subscribe(therapeutic => { 
        therapeutic.data.forEach(ta => {
          this.therapeuticAreaMap.set(ta.id, ta.name);
        });
    });
  }

  getdiseaseAndProducts(taName){
    this.metaService.getTherapeuticAreaMap().pipe(first()).subscribe(TA => { 
      TA.data.forEach(ta => {
        if(taName === ta.name){
          this.productMap.clear();
          this.diseaseMap.clear();
          ta.products.forEach(prod => {
            this.productMap.set(prod.id,prod.name);
          });
          ta.diseaseStates.forEach(disease => {
            this.diseaseMap.set(disease.id, disease.name);
          });
        }                
      });
    });    
  }

              

  applyFIlter(asseType, ta, dis, prod){
    this.resultList = [];
    this.fullData = false;
    this.filterData = true    
    console.log(asseType+'--'+ta+'--'+dis+'--'+prod)   
      this.assets.forEach(asset => {        
        if(prod > 1 && asset.product != null && asset.diseaseState != null && asset.therapeuticArea != null){
          if(asset.product.id == prod && asset.diseaseState.id == dis && asset.therapeuticArea.id == ta && asset.assetType.id == asseType){
            this.resultList.push(asset);
          }
        }  
        else if(dis > 1 && asset.diseaseState != null && asset.therapeuticArea != null){
          console.log(asset.diseaseState.id);
          if(asset.diseaseState.id == dis && asset.therapeuticArea.id == ta && asset.assetType.id == asseType){
              this.resultList.push(asset);
          }
        } 
        else if(ta > 1 && asset.therapeuticArea != null){
          if(asset.therapeuticArea.id == ta && asset.assetType.id == asseType){
              this.resultList.push(asset);
          }
        }  
        else if(asseType > 1){
          if(asset.assetType.id == asseType){            
              this.resultList.push(asset);
          }
        }
      });
      if(asseType==0&&ta==0&&dis==0&&prod==0) {this.message="Apply atleast one filter"}
      else {this.message="Couldn't find assets";}
  }
  
}
