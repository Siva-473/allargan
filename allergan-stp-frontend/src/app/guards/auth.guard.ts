import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services';
import { User } from '../models';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router,private authenticationService: AuthenticationService) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
         const currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
          JSON.stringify(currentUser.roles)
            if (route.data.roles  && route.data.roles.indexOf(currentUser.roles.admin) === -1) {
                this.router.navigate(['/']);
                return false;
            }
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}