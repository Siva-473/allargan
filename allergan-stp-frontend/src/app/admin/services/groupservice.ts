import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpParams, HttpClient,HttpHeaders   } from '@angular/common/http';
import { ResponseContentType } from '@angular/http';
import { from } from 'rxjs';
import { Group } from '../model/group';

@Injectable()
export class GroupService {
  constructor(private http: HttpClient) { }
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
  
}
