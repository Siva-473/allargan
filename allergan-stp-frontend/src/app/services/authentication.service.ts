import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User } from '../models';


@Injectable()
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    constructor(private http: HttpClient) {
       // alert(JSON.stringify(localStorage.getItem('currentUser')));
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    currentUsers: User;
    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    } 
    login(username: string, password: string) {
        ///users/authenticate
        return this.http.post<any>(`${environment.apiUrl}/api/allergan/stp/login`, { username: username, password: password })
            .pipe(map(user => {
                if (user && user.token) {
                   
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }
                return user;
            }));
    }

    logout() {
     //   this.nav.hide();
        localStorage.removeItem('currentUser');
    }
}