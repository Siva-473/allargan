import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User, Update } from '../models';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    // getAll() {
    //     return this.http.get<User[]>(`${environment.apiUrl}/users`);
    // }
    register(user: User) {
        let role=new User();
        role.role.push("user");
        role.username=user.username;
        role.password=user.password;
        role.name=user.name;
        return this.http.post(`${environment.apiUrl}/api/allergan/stp/signup`, role);
    }

    update(userId:number,update:Update){
        return this.http.put(`${environment.apiUrl}/api/allergan/stp/v4/user/update/`+userId, update);

    }
}