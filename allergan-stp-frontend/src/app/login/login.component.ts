import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { AlertService, AuthenticationService } from '../services';
import { User } from '../models';

@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    isLoggedIn$: boolean=false;
    loginForm: FormGroup;
    
    loading = false;
    submitted = false;
    returnUrl: string;
    
    currentUser: User;
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) {}

    ngOnInit() {
        

        this.loginForm = this.formBuilder.group({
            username: ['', [Validators.required,Validators.minLength(3)]],
            password: ['', [Validators.required,Validators.minLength(5)]]
        });
        this.authenticationService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
           .pipe(first())
            .subscribe(
                data => {
                    this.isLoggedIn$=true;
                    this.authenticationService.currentUser.subscribe(x => {
                        this.currentUser = x
                    });
                    this.router.navigate([this.returnUrl]);
                    
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
