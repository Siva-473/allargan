import { Component, OnInit  } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models';
import { UserService , HomeService} from '../services';

@Component(
    {
        selector: 'home-coponent',
        templateUrl: 'home.component.html',
        styleUrls: ['./home.component.css']
    }
    )
export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    // region:Array<any>=[];

    constructor(private userService: UserService,private homeService: HomeService, private router: Router) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
      
    }


    logout(){
        localStorage.removeItem('currentUser');
        localStorage.clear();
        location.reload();
      // alert(localStorage.getItem('currentUser'));
       // this.router.navigate(['/login']);
    }
    onUpdateProfile() {
       
        this.homeService.updateProfile(this.currentUser.id)
           .pipe(first())
            .subscribe(
                data => {
                    if(data.data.status==false){
                       //this.region.push(data.data.region);
                       
                        this.router.navigate(['/update/profile']);
                    }else{
                        this.router.navigate(['/basecamp']);
                    }
                    
                },
                error => {
                
                });
    }


    

}