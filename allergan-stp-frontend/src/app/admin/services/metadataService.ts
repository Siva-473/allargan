import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable()
export class MetaDataService {
  constructor(private http: HttpClient) { }

  getAllAssetTypes(){
    return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/get/assets-types`);
  }

  getTherapeuticAreas(assetTypeId:Number){
    return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/therapeutic-areas/`+assetTypeId);
  } 

  getAssets(){
    return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/get-all-assets`);
  }

  getNonAutoAssignedAssets(){
    return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/asset/get-NonAutoAssigned-Assets`);
  }

  getTherapeuticAreaMap(){
    return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/therapeuticAreaMap`);
  }

  userGroupMapping(grpId : number, userList:  Array<number>){
    if(userList.length > 0){
      return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/userToGroup-mapping/`+grpId+"/"+userList);
    }else{
      return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/userToGroup-unmapping/`+grpId);
    }  
  }

  assetGroupMapping(grpId : number, assetList:  Array<number>){
    if(assetList.length > 0){
      return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/assetToGroup-mapping/`+grpId+"/"+assetList);
    }else{
      return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/assetToGroup-unmapping/`+grpId);
    }
  }

  getMappedUsers(grpId : number){
    return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/get-all-user-group-mapping/`+grpId);
  }

  getMappedAssets(grpId : number){
    return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/get-all-asset-group-mapping/`+grpId);
  }
}   