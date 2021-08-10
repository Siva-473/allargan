import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpParams, HttpClient,HttpHeaders   } from '@angular/common/http';
import { ResponseContentType } from '@angular/http';
import { from } from 'rxjs';
import { EditUserName } from '../model/editUserName';
import { ManagerDto } from '../model/managerDTO';
import { TaDto } from '../model/taDto';
import { EditUser } from '../model';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http: HttpClient) { }
  getUsers() {
     return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/users`);
  }

  getManagerUsers(id:Number){
    return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/user/`+id);
  }

  remove(Id:Number){
    return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/user/remove/`+Id);
  }

  statusChange(status:boolean,Id:Number){
    return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/user/status/`+Id+"/"+status);
  }

  editUser(Id:Number){
    return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/user/edit/`+Id);
  }

  editUserService(Id:Number,user:EditUserName,manager:ManagerDto,taDto:TaDto,userRoles:any,userGroups:any){  
    return this.http.post<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/user/edit/service/`+Id, {"user":user,"manager":manager,"area":taDto,"userRoles":userRoles,"userGroups":userGroups});
  }
  
}
