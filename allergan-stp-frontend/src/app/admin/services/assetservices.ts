import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpParams, HttpClient,HttpHeaders   } from '@angular/common/http';
import { ResponseContentType } from '@angular/http';
import { from } from 'rxjs';
import { Group } from '../model/group';
import { AdminAsset } from '../model/AdminAsset';
import { Search } from '../model/Search';

@Injectable()
export class AssetService {
  constructor(private http: HttpClient) { }

  getAssetTypes() {
      return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/assets-types`);
  }
  getTherapeuticAreas(assetTypeId:Number){
      return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/therapeutic-area/therapeutic-areas/`+Number(assetTypeId));
  }
  getDiseaseStateForTA(taId :Number){
     return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/therapeutic-area/diseasestate/`+taId);
  }
  getProductsForTA(taId :Number){
    return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/therapeutic-area/products/`+taId);
  }
  getContentTypes(){
    return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/content-type/content-types`);
   }
  getSources(){
    return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/source/sources`);
  }
  getQuizes(){
    return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/get-all-quiz`);
  }
  

  getRegion() {
    return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/region/regions`);
  }
  getCountries(regionId :Number) {
    return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/country/countries/`+regionId);
  }
  
  getAssets(id:Number){
        return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/asset/assets`);
  }
  getAsset(assetId:Number,userId:Number){
    return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/asset/asset/`+assetId+"/"+userId);
}
  
  
  
  
  getdiseaseStatesProducts(userid:Number,id:Number){
   
    return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/user/`+userid+"/"+id);
  }
  changeAssetStatus(assetId:Number,status:boolean){
      return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/asset/status/`+assetId+"/"+status);
    }

    deleteAsset(assetId:Number){
      return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/asset/remove/`+assetId);
 }
 
 addAsset(formData: FormData){
  return this.http.post<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/asset/add-asset`, formData);
}


fechDetails(idNumber:Number,search:Search){
  return this.http.post<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/asset/search/`+idNumber, search);
}





  getGroups() {
     return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/get-all-group`);
  }

  insertGroup(grp: Group){
    let group=new Group();
    group.name=grp.name;
    group.description=grp.description;
    group.status= 'true';
    
   return this.http.post(`${environment.apiUrl}/api/allergan/stp/v4/admin/create-group`, group);
  }
    
  changeStatus(status:string,Id:Number){
    return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/change-group-status/`+Id+"/"+status);
  }

  deleteGroup(Id:Number){
    return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/delete-group/`+Id);
  }

  findGroupById(Id:Number){
    return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/get-group-ById/`+Id);
  }

  editGroup(grp: Group){
    let group=new Group();
    group.id=grp.id;
    group.name=grp.name;
    group.description=grp.description;
    group.status= 'true';
    
   return this.http.post(`${environment.apiUrl}/api/allergan/stp/v4/admin/update-group`, group);
  }

  userGroupMapping(){
    
  }
  
}
