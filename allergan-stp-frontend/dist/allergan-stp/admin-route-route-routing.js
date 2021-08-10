(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-route-route-routing"],{

/***/ "./src/app/admin/admin-side-nav/admin-side-nav.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/admin/admin-side-nav/admin-side-nav.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".left_panel.left_panel_list .nav_list > li > a.router-link-active {\r\n    color: #555;\r\n    background-color:red;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4tc2lkZS1uYXYvYWRtaW4tc2lkZS1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxvQkFBb0I7RUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9hZG1pbi1zaWRlLW5hdi9hZG1pbi1zaWRlLW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlZnRfcGFuZWwubGVmdF9wYW5lbF9saXN0IC5uYXZfbGlzdCA+IGxpID4gYS5yb3V0ZXItbGluay1hY3RpdmUge1xyXG4gICAgY29sb3I6ICM1NTU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJlZDtcclxuICB9Il19 */"

/***/ }),

/***/ "./src/app/admin/admin-side-nav/admin-side-nav.component.html":
/*!********************************************************************!*\
  !*** ./src/app/admin/admin-side-nav/admin-side-nav.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <!-- sidebar  start -->\n    <aside class=\"left_panel\">\n        <div class=\"left_panel_list\">\n            <ul class=\"nav_list\">\n                <li class=\"users\" (click)=\"navClick($event)\"  routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\"  ><a \n                    \n                     class='clickpopa' data-attr=\"1\" [routerLink]=\"['/admin']\">Users</a></li>\n                <li class=\"groups\" (click)=\"navClick($event)\"  routerLinkActive=\"active\"  >\n                    <a class='clickpopa' data-attr=\"2\" [routerLink]=\"['/admin/group']\" >Groups</a>\n                </li>\n                <li class=\"assets\" (click)=\"navClick($event)\"  routerLinkActive=\"active\"  >\n                    <a class='clickpopa' data-attr=\"3\" [routerLink]=\"['/admin/asset']\">Assets</a>\n                </li>\n                <li class=\"question\" (click)=\"navClick($event)\" routerLinkActive=\"active\" >\n                    <a class='clickpopa' data-attr=\"3\" [routerLink]=\"['/admin/questionBank']\" >Question Bank</a>\n                </li>\n                <li class=\"quiz\" (click)=\"navClick($event)\" routerLinkActive=\"active\" >\n                    <a class='clickpopa'  data-attr=\"6\" [routerLink]=\"['/admin/quiz']\" >QUIZ</a>\n                </li>\n \t\t\t\t<li class=\"import\" (click)=\"navClick($event)\" routerLinkActive=\"active\"  >\n                     <a class='clickpopa' data-attr=\"5\" [routerLink]=\"['/admin/batchimport']\" >Batch Import</a>\n                    </li>\n                <!-- <li class=\"meta_deta dropdown\"><a href=\"#\" class=\" dropdown-toggle\" data-toggle=\"dropdown\">Meta Data<i class=\"fas fa-angle-down\"></i></a>\n                    <div class=\"dropdown-menu\">\n                        <ul>\n                            <li><a href=\"#\">Link 1</a></li>\n                            <li><a href=\"#\">Link 2</a></li>\n                            <li><a href=\"#\">Link 3</a></li>\n                        </ul>\n                    </div>\n                </li>\n                <li class=\"reports dropdown\"><a href=\"#\" class=\" dropdown-toggle\" data-toggle=\"dropdown\">Reports <i class=\"fas fa-angle-down\"></i></a>\n                    <div class=\"dropdown-menu\">\n\n\n                        <ul>\n                            <li><a href=\"#\">Link 1</a></li>\n                            <li><a href=\"#\">Link 2</a></li>\n                            <li><a href=\"#\">Link 3</a></li>\n                        </ul>\n                    </div>\n                </li> -->\n              \n            </ul>\n        </div>\n    </aside><!-- sidebar  end -->"

/***/ }),

/***/ "./src/app/admin/admin-side-nav/admin-side-nav.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-side-nav/admin-side-nav.component.ts ***!
  \******************************************************************/
/*! exports provided: AdminSideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSideNavComponent", function() { return AdminSideNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminSideNavComponent = /** @class */ (function () {
    function AdminSideNavComponent() {
        this.status = false;
    }
    AdminSideNavComponent.prototype.ngOnInit = function () {
    };
    AdminSideNavComponent.prototype.navClick = function ($event) {
        console.log($event);
        $event.stopPropagation();
        $event.preventDefault();
        // this.status = !this.status;
        $event.target.parentElement.classList.add('active');
    };
    AdminSideNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-side-nav',
            template: __webpack_require__(/*! ./admin-side-nav.component.html */ "./src/app/admin/admin-side-nav/admin-side-nav.component.html"),
            styles: [__webpack_require__(/*! ./admin-side-nav.component.css */ "./src/app/admin/admin-side-nav/admin-side-nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminSideNavComponent);
    return AdminSideNavComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin-top-nav/admin-top-nav.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/admin/admin-top-nav/admin-top-nav.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLXRvcC1uYXYvYWRtaW4tdG9wLW5hdi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/admin-top-nav/admin-top-nav.component.html":
/*!******************************************************************!*\
  !*** ./src/app/admin/admin-top-nav/admin-top-nav.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"container\">\n    <div class=\"dash_header\">\n        <div class=\"row align-items-center\">\n            <div class=\"col-sm-6 col-md-6 col-lg-6\">\n                <div class=\"logo\">\n                    <a href=\"\"><img src=\"assets/images/logo.png\"></a>\n                </div>\n            </div>\n            <div class=\"col-sm-6 col-md-6 col-lg-6 \">\n                <div class=\"header_right text-right\">\n                    <p>Welcome <span>{{currentUser.name || currentUser.firstName}}</span>!</p>\n                    <a href=\"\" id=\"home_btn\"><span></span></a>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</div>\n\n\n<!-- header end -->"

/***/ }),

/***/ "./src/app/admin/admin-top-nav/admin-top-nav.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/admin/admin-top-nav/admin-top-nav.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminTopNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminTopNavComponent", function() { return AdminTopNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminTopNavComponent = /** @class */ (function () {
    function AdminTopNavComponent() {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    AdminTopNavComponent.prototype.ngOnInit = function () {
    };
    AdminTopNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-top-nav',
            template: __webpack_require__(/*! ./admin-top-nav.component.html */ "./src/app/admin/admin-top-nav/admin-top-nav.component.html"),
            styles: [__webpack_require__(/*! ./admin-top-nav.component.css */ "./src/app/admin/admin-top-nav/admin-top-nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminTopNavComponent);
    return AdminTopNavComponent;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n \n<app-admin-top-nav></app-admin-top-nav>\n<router-outlet></router-outlet>\n    <!-- Page section start -->\n    <main class=\"main_container\">\n        <div class=\"container\">\n            <div class=\"main_con_inner\">\n          \n\n                <app-admin-side-nav></app-admin-side-nav>\n\n                <!-- right section  start -->\n                <section class=\"right_panel\">\n                      <div class=\"users_box hide_tab active\" id=\"pop_1\" >\n                            <div class=\"right_panel_inner\">\n                                  <div class=\"rph_header\">\n                                      <div class=\"row\">\n                                          <div class=\"col-sm-6 col-md-6 col-lg-6 rph_left\">\n                                              <h5>Users</h5>\n                                          </div>\n\n                                          <div class=\"col-sm-6 col-md-6 col-lg-6\">\n                                              <div class=\"rph_right\">\n                                                  <form class=\"serach_form\">\n                                                    \n                                                      <!-- <button type=\"button\" class=\"search_btn\"><i class=\"fas fa-search\"></i>\n                                                        <div class=\"serach_box\"><input type=\"text\" placeholder=\"Search..\"></div>\n                                                      </button> -->\n\n                                                  </form>\n                                              </div>\n                                          </div>\n                                      </div>\n                                  </div>\n                                  <div class=\"right_panel_box\">\n                                    <div class=\"table-responsive\">\n                                      <table class=\"table\">\n                                          <thead>\n                                              <tr>\n                                                  <th>First Name</th>\n                                                  <th>Email ID</th>\n                                                  <th>Job Title</th>\n                                                  <th>System Roles</th>\n                                                  <th></th>\n                                                  <th></th>\n                                                  <!-- <th></th> -->\n                                              </tr>\n                                          </thead>\n                                          <tbody>\n                                              <tr *ngFor=\"let user of users ; index as i\">\n                                                  <td>\n                                                      <!-- <a routerLink=\"{{'/admin/user/edit/'+user.id}}\"> -->\n                                                        {{user.firstName}}\n                                                    <!-- </a> -->\n                                                  </td>\n                                                  <!-- <td>{{user.lastName}}</td> -->\n                                                  <td>{{user.emailID}}</td>\n                                                  <td>{{user.roleName}}</td>\n                                                  <td><div *ngFor=\"let role of user.role;\">{{role.name.replace('ROLE_', '')+\",\"|lowercase}}</div></td>\n                                                  <!-- <td *ngIf=\"user.status==true\" [ngClass]=\"{ 'approved' : true}\">Approved</td>\n                                                  <td  *ngIf=\"user.status!=true\" [ngClass]=\"{'pending':true}\">Pending</td> -->\n                                                  <td>\n                                                      <div class=\"custom-switch custom-switch-label-onoff pl-0\">\n                                                          <input class=\"custom-switch-input\" id=\"{{'btn_0'+i}}\" [checked]=\"(user.status==true) ? false: true\"  (change) =\"status($event,user.id)\" type=\"checkbox\">\n                                                          <label class=\"custom-switch-btn\" for=\"{{'btn_0'+i}}\"></label>\n                                                      </div>\n                                                  </td>\n                                                  <td>\n                                                      <div class=\"info_btn\"><button type=\"button\" routerLink=\"{{'/admin/user/edit/'+user.id}}\"><img src=\"assets/images/query_icon.png\" ></button></div>\n                                                  </td>\n                                                  <!-- <td>\n                                                       <button type=\"button\" class=\"delete\" (click)=\"remove(user.id)\"><i class=\"far fa-trash-alt\"></i></button>\n                                                  </td> -->\n                                              </tr>\n                                          </tbody>\n                                      </table>\n                                      </div>\n                                  </div>\n                            </div>\n                             \n\n                      </div>\n\n                <!--------- Users Details ---------->\n\n                     \n                      \n\n\n                </section> <!-- Right Panel End Here -->\n            </div>\n        </div>\n    </main>\n    <footer class=\"fot_main\">\n      <div class=\"container\">\n        <div class=\"fot_inner\">\n          <div class=\"row\"><div class=\"col-sm-12 col-md-12\"><p>© ALLERGAN 2019</p></div></div>\n        </div>\n      </div>\n    </footer>\n  "

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_userservices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/userservices */ "./src/app/admin/services/userservices.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { UserService } from '@/_services';
var AdminComponent = /** @class */ (function () {
    function AdminComponent(userService) {
        this.userService = userService;
        this.checkedValue = false;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (users) {
            _this.users = users.data;
            //    alert(JSON.stringify(this.users));
        });
    };
    AdminComponent.prototype.remove = function (Id) {
        var _this = this;
        this.userService.remove(Id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (users) {
            _this.users = users.data;
        });
    };
    AdminComponent.prototype.status = function ($event, Id) {
        var _this = this;
        var status = false;
        if ($event.target.checked == false) {
            status = true;
        }
        this.userService.statusChange(status, Id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (users) {
            _this.users = users.data;
        });
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html") }),
        __metadata("design:paramtypes", [_services_userservices__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/home/add-question/add-question.component.css":
/*!********************************************************************!*\
  !*** ./src/app/admin/home/add-question/add-question.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invalid-select {\r\n    border-color: #dc3545;\r\n}\r\n.invalid-txt {\r\n    width: 100%;\r\n    margin-top: .25rem;\r\n    font-size: 80%;\r\n    color: #dc3545;\r\n}\r\n.invalid-feedback {\r\n    text-align: left;\r\n}\r\n.invalid-answer-error {\r\n    padding-left: 130px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vaG9tZS9hZGQtcXVlc3Rpb24vYWRkLXF1ZXN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vaG9tZS9hZGQtcXVlc3Rpb24vYWRkLXF1ZXN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW52YWxpZC1zZWxlY3Qge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xyXG59XHJcbi5pbnZhbGlkLXR4dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IC4yNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbn1cclxuLmludmFsaWQtZmVlZGJhY2sge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uaW52YWxpZC1hbnN3ZXItZXJyb3Ige1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMzBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/home/add-question/add-question.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/admin/home/add-question/add-question.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-top-nav></app-admin-top-nav>\r\n<router-outlet></router-outlet>\r\n    <!-- Page section start -->\r\n    <main class=\"main_container\">\r\n        <div class=\"container\">\r\n            <div class=\"main_con_inner\">\r\n          \r\n\r\n                <app-admin-side-nav></app-admin-side-nav>\r\n   <!-- right section  start -->\r\n   <section class=\"right_panel\">\r\n <!-- Question Bank Starts -->\r\n                      \r\n <div class=\"question_bank\"  id=\"pop_4\">\r\n        \r\n        <!-- Add Questions Starts-->\r\n        <div class=\"question_bank_Inner\">\r\n            <div class=\"rph_header\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6 col-md-6 col-lg-6 rph_left\">\r\n                        <h5>Add Question</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"right_panel_box2\">\r\n                <form class=\"user_fileds\" name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6 col-md-6 col-lg-6\">\r\n                      <div class=\"form-group row\">\r\n                        <div class=\"col-sm-4 col-md-4 col-lg-4\">\r\n                          <label for=\"lastname\">Title</label>\r\n                        </div>\r\n                        <div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n                          <input type=\"text\" class=\"form-control\" placeholder=\"\" name=\"title\" [(ngModel)]=\"model.title\" #title=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && title.invalid }\" required minlength=\"3\" maxlength=\"30\">\r\n                            <div *ngIf=\"f.submitted && title.invalid\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"title.errors.required\">Title is required</div>\r\n                            </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group row\">\r\n                            <div class=\"col-sm-4 col-md-4 col-lg-4\">\r\n                              <label for=\"lastname\">Question</label>\r\n                            </div>\r\n                            <div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n                              <textarea rows=\"4\" cols=\"50\" class=\"form-control\" placeholder=\"\" name=\"question\" [(ngModel)]=\"model.question\" #question=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && question.invalid }\" required></textarea>\r\n                                <div *ngIf=\"f.submitted && question.invalid\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"question.errors.required\">Question is required</div>\r\n                                </div>\r\n                            </div>\r\n                          </div>\r\n\r\n                      <div class=\"form-group row\">\r\n                        <div class=\"col-sm-4 col-md-4 col-lg-4\">\r\n                          <label >Asset Type</label>\r\n                        </div>\r\n                        <div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n                            <select class=\"custom-select slects_option\"  #assetType=\"ngModel\" (change)=\"getThearpeuticAreas($event.target.value)\" name=\"assetType\" [(ngModel)]=\"model.assetTypeId\" [ngClass]=\"{ 'is-invalid': f.submitted && assetType.invalid }\" required>\r\n                                <option selected=\"\" value = \"0\">Select</option>\r\n                                <option *ngFor=\"let assetType of assetTypes ; index as i\" [value]=\"assetType.id\">{{assetType.userName}}</option>\r\n                          </select>\r\n                          <div *ngIf=\"assetTypeMessage\" class=\"invalid-txt\">\r\n                            <div *ngIf=\"assetTypeMessage\">Asset Type is required</div>\r\n                          </div> \r\n                          <div *ngIf=\"f.submitted && assetType.invalid\" class=\"invalid-feedback\">\r\n                              <div *ngIf=\"assetType.errors.required\">Asset Type is required</div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group row\">\r\n                        <div class=\"col-sm-4 col-md-4 col-lg-4\">\r\n                          <label >Select TA</label>\r\n                        </div>\r\n                        <div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n                            <select class=\"custom-select slects_option\"  #ta=\"ngModel\"  (change)=\"getdiseaseAndProducts($event.target.value)\" name=\"ta\" [(ngModel)]=\"model.therapeuticAreaId\" [ngClass]=\"{ 'is-invalid': f.submitted && ta.invalid }\" required>\r\n                                <option selected=\"\" value = \"0\">Select</option>\r\n                                <!-- <option *ngFor=\"let ta of therapeuticAreaList ; index as i\" [value]=\"ta\">{{ta}}</option> -->\r\n                                <option *ngFor=\"let ta of therapeuticAreaMap | keyvalue\" [value]=\"ta.key\">{{ta.value}}</option>\r\n                            </select>  \r\n                            <div *ngIf=\"taMessage\" class=\"invalid-txt\">\r\n                              <div *ngIf=\"taMessage\">TA is required</div>\r\n                            </div> \r\n                            <div *ngIf=\"f.submitted && ta.invalid\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"ta.errors.required\">TA is required</div>\r\n                            </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group row\">\r\n                        <div class=\"col-sm-4 col-md-4 col-lg-4\">\r\n                          <label >Disease state</label>\r\n                        </div>\r\n                        <div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n                            <select class=\"custom-select slects_option\" #disease name=\"disease\" [(ngModel)]=\"model.diseaseStateId\">\r\n                                <option selected=\"\" value = \"0\">Select</option>\r\n                                <!-- <option *ngFor=\"let dis of diseaseList ; index as i\" [value]=\"dis\">{{dis}}</option> -->\r\n                                <option *ngFor=\"let dis of diseaseMap | keyvalue\" [value]=\"dis.key\">{{dis.value}}</option>\r\n                            </select> \r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group row\">\r\n                        <div class=\"col-sm-4 col-md-4 col-lg-4\">\r\n                          <label >Product</label>\r\n                        </div>\r\n                        <div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n                            <select class=\"custom-select slects_option\" #product name=\"product\" [(ngModel)]=\"model.productId\">\r\n                                <option selected=\"\" value = \"0\">Select</option>\r\n                                <!-- <option *ngFor=\"let prod of productList ; index as i\" [value]=\"prod\">{{prod}}</option> -->\r\n                                <option *ngFor=\"let prod of productMap | keyvalue\" [value]=\"prod.key\">{{prod.value}}</option>\r\n                            </select> \r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group row\">\r\n                        <div class=\"col-sm-4 col-md-4 col-lg-4\">\r\n                          <label >Question Type</label>\r\n                        </div>\r\n                        <div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n                            <select class=\"custom-select slects_option\" name=\"QType\" [(ngModel)]=\"model.QType\" #QType=\"ngModel\" (change)=\"typeSection($event.target.value)\" [ngClass]=\"{ 'is-invalid': f.submitted && QType.invalid }\" required>\r\n                              <option value=\"SINGLE_CHOICE\">Single Choice</option>\r\n                              <option value=\"MULTIPLE_CHOICE\">Multiple Choice</option>\r\n                          </select>\r\n                          <div *ngIf=\"f.submitted && QType.invalid\" class=\"invalid-feedback\">\r\n                              <div *ngIf=\"QType.errors.required\">Question Type is required</div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <!-- <div class=\"form-group row\">\r\n                        <div class=\"col-sm-4 col-md-4 col-lg-4\">\r\n                          <label >Region</label>\r\n                        </div>\r\n                        <div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n                            <select class=\"custom-select slects_option\">\r\n                              <option ></option>\r\n                              <option value=\"1\">Region</option>\r\n                              <option value=\"2\">Region</option>\r\n                              <option value=\"3\">Region</option>\r\n                            </select>\r\n                        </div>\r\n                      </div> -->\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-12 col-md-12 col-lg-12 rph_left\">\r\n                    <span class=\"invalid-txt\">{{ansMessage}}</span>\r\n                    <h5>Answers</h5>\r\n                    <div class=\"form-group row\" *ngFor=\"let div of nameArray; let i = index\">\r\n                      <div class=\"col-sm-12 col-md-12 col-lg-12 feedBackWrap\">\r\n                        <label [for]=\"div.name\">{{div.name}}</label>\r\n                        <span>\r\n                          <input type =\"radio\" [id]=\"div.name\" [value]=\"div.name\" name=\"radio-group\" *ngIf=\"radioDisplay\" [(ngModel)]=\"radioSelected\" (click)=\"onItemChange(div)\"/>\r\n                          <input type=\"checkbox\" name=\"check-group\"  [id]=\"div.name\" [value]=\"div.name\" *ngIf=\"checkBoxDisplay\"  [(ngModel)]=\"div.checked\" (click)=\"onItemChange(div)\"/>\r\n                        </span>\r\n                            <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"\" name=\"{{'ans' + i}}\" [(ngModel)]=\"div.val\" #text=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && text.invalid }\" required>\r\n                            \r\n                            <span (click)=\"onRemoveRow(div.index)\" class=\"delete\"><i class=\"far fa-trash-alt\"></i></span>\r\n                            <div *ngIf=\"f.submitted && text.invalid\" class=\"invalid-feedback invalid-answer-error\">\r\n                                <div *ngIf=\"text.errors.required\">Text is required</div>\r\n                            </div>\r\n                      </div>\r\n                    </div>\r\n\r\n                    \r\n                    <div class=\"feedBack_btns row\">\r\n                      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 feedBack_btn1\">\r\n                        <span class=\"btn btn_feedback\" (click)=\"onAddRow()\">Add Answer</span>\r\n                      </div>\r\n                      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 feedBack_btn2\">\r\n                          <button class=\"btn btn_feedback btn_feedback_cancel\" (click)=\"cancelAddQuestion()\">Cancel</button>\r\n                          <!-- <button class=\"btn btn_feedback\">Save & Add Another</button> -->\r\n                          <button class=\"btn btn_feedback btn_feedback_save\">Save</button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n         </div>\r\n      </div>\r\n\r\n\r\n\r\n    <!-- Question Bank Ends -->\r\n\r\n</section> <!-- Right Panel End Here -->\r\n</div>\r\n</div>\r\n</main>\r\n<footer class=\"fot_main\">\r\n<div class=\"container\">\r\n<div class=\"fot_inner\">\r\n<div class=\"row\"><div class=\"col-sm-12 col-md-12\"><p>© ALLERGAN 2019</p></div></div>\r\n</div>\r\n</div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/admin/home/add-question/add-question.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/home/add-question/add-question.component.ts ***!
  \*******************************************************************/
/*! exports provided: AddQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQuestionComponent", function() { return AddQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_metadataService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/metadataService */ "./src/app/admin/services/metadataService.ts");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var _services_questionbankservice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/questionbankservice */ "./src/app/admin/services/questionbankservice.ts");
/* harmony import */ var _model_AnswerData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model/AnswerData */ "./src/app/admin/model/AnswerData.ts");
/* harmony import */ var _model_Answer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model/Answer */ "./src/app/admin/model/Answer.ts");
/* harmony import */ var _model_Question__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../model/Question */ "./src/app/admin/model/Question.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AddQuestionComponent = /** @class */ (function () {
    function AddQuestionComponent(formBuilder, metaService, alertService, questionBankService, fb, router) {
        this.formBuilder = formBuilder;
        this.metaService = metaService;
        this.alertService = alertService;
        this.questionBankService = questionBankService;
        this.fb = fb;
        this.router = router;
        this.correctFlag = [];
        this.therapeuticAreaMap = new Map();
        this.diseaseMap = new Map();
        this.productMap = new Map();
        this.radioDisplay = true;
        this.checkBoxDisplay = false;
        this.choiceLetters = ['A', 'B', 'C', 'D', 'E', 'F'];
        this.taMessage = false;
        this.assetTypeMessage = false;
        this.ansMessage = '';
        this.nameArray = [
            {
                'index': 0,
                'name': 'A',
                'val': ''
            },
            {
                'index': 1,
                'name': 'B',
                'val': ''
            }
            // ,
            // {
            //   'index' : 2,
            //   'name': 'C',
            //   'val': ''
            // },
            // {
            //   'index' : 3,
            //   'name': 'D',
            //   'val': ''
            // }
        ];
        this.model = {};
    }
    AddQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.metaService.getAllAssetTypes().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (assetTypes) {
            _this.assetTypes = assetTypes.data;
        });
    };
    AddQuestionComponent.prototype.getThearpeuticAreas = function (assetTypeId) {
        var _this = this;
        console.log('assetTypeId' + assetTypeId);
        this.assetTypeMessage = false;
        if (assetTypeId == 0) {
            this.assetTypeMessage = true;
        }
        else {
            this.therapeuticAreaMap.clear();
            this.metaService.getTherapeuticAreas(assetTypeId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (therapeutic) {
                therapeutic.data.forEach(function (ta) {
                    _this.therapeuticAreaMap.set(ta.id, ta.name);
                });
            });
        }
    };
    AddQuestionComponent.prototype.getdiseaseAndProducts = function (taID) {
        var _this = this;
        this.taMessage = false;
        if (taID == 0) {
            this.taMessage = true;
        }
        else {
            this.metaService.getTherapeuticAreaMap().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (TA) {
                TA.data.forEach(function (ta) {
                    if (taID == ta.id) {
                        _this.productMap.clear();
                        _this.diseaseMap.clear();
                        ta.products.forEach(function (prod) {
                            _this.productMap.set(prod.id, prod.name);
                        });
                        ta.diseaseStates.forEach(function (disease) {
                            _this.diseaseMap.set(disease.id, disease.name);
                        });
                    }
                });
            });
        }
    };
    AddQuestionComponent.prototype.typeSection = function (type) {
        if (type === 'SINGLE_CHOICE') {
            this.checkBoxDisplay = false;
            this.radioDisplay = true;
            this.correctFlag = [];
        }
        else {
            this.checkBoxDisplay = true;
            this.radioDisplay = false;
            this.correctFlag = [];
        }
    };
    AddQuestionComponent.prototype.onItemChange = function (a) {
        console.log(this.model.QType);
        if (this.model.QType === 'SINGLE_CHOICE') {
            this.correctFlag = [];
            this.correctFlag.push(a.index);
        }
        else {
            if (this.correctFlag.indexOf(a.index) > -1) {
                this.correctFlag.splice(this.correctFlag.indexOf(a.index), 1);
            }
            else {
                this.correctFlag.push(a.index);
            }
        }
        console.log(this.correctFlag);
    };
    AddQuestionComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.correctFlag.length == 0) {
            this.ansMessage = 'Please select atleast one Answer.';
        }
        else {
            this.assetTypeMessage = false;
            this.taMessage = false;
            var qsData = new _model_AnswerData__WEBPACK_IMPORTED_MODULE_7__["QSData"]();
            var answerArray_1 = [];
            this.nameArray.forEach(function (n) {
                if (n.val.length > 0) {
                    var answer = new _model_Answer__WEBPACK_IMPORTED_MODULE_8__["Answer"]();
                    if (_this.correctFlag.indexOf(n.index) > -1) {
                        answer.correct = true;
                    }
                    else {
                        answer.correct = false;
                    }
                    answer.text = n.val;
                    answerArray_1.push(answer);
                }
            });
            qsData.answers = answerArray_1;
            console.log(qsData.answers);
            qsData.questionType = this.model.QType;
            qsData.question = this.model.question;
            var question = new _model_Question__WEBPACK_IMPORTED_MODULE_9__["Question"]();
            question.title = this.model.title;
            if (this.model.assetTypeId > 0) {
                question.assetTypeId = this.model.assetTypeId;
            }
            else {
                this.assetTypeMessage = true;
            }
            if (this.model.therapeuticAreaId > 0) {
                question.therapeuticAreaId = this.model.therapeuticAreaId;
            }
            else {
                this.taMessage = true;
            }
            question.diseaseStateId = this.model.diseaseStateId;
            question.productId = this.model.productId;
            question.status = 'true';
            question.qsData = qsData;
            console.log(qsData.answers);
            if (question.assetTypeId > 0 && question.therapeuticAreaId > 0) {
                this.questionBankService.addQuestion(question).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (questionss) {
                    _this.questionBankService.getAllQuestions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (questionss) {
                        _this.questions = questionss.data;
                    });
                    _this.router.navigate(['/admin/questionBank']);
                    _this.alertService.success('Successfully Added.');
                    window.scroll(0, 0);
                }, function (error) {
                    _this.alertService.error(error);
                    window.scroll(0, 0);
                });
            }
        }
    };
    AddQuestionComponent.prototype.cancelAddQuestion = function () {
        this.router.navigate(['/admin/questionBank']);
    };
    AddQuestionComponent.prototype.onAddRow = function () {
        var obj;
        var last = this.nameArray[this.nameArray.length - 1];
        if (last == undefined) {
            obj = {
                'index': 0,
                'name': this.choiceLetters[0],
                'val': ''
            };
        }
        else {
            obj = {
                'index': last.index + 1,
                'name': this.choiceLetters[last.index + 1],
                'val': ''
            };
        }
        if (this.choiceLetters[last.index + 1] != undefined) {
            this.nameArray.push(obj);
        }
    };
    AddQuestionComponent.prototype.onRemoveRow = function (rowIndex) {
        var _this = this;
        var i;
        console.log(rowIndex);
        console.log(this.nameArray);
        this.nameArray.forEach(function (n) {
            if (n.index == rowIndex) {
                i = _this.nameArray.indexOf(n);
            }
        });
        console.log(i);
        this.nameArray.splice(i, 1);
    };
    AddQuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-add-question',
            template: __webpack_require__(/*! ./add-question.component.html */ "./src/app/admin/home/add-question/add-question.component.html"),
            styles: [__webpack_require__(/*! ./add-question.component.css */ "./src/app/admin/home/add-question/add-question.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_metadataService__WEBPACK_IMPORTED_MODULE_4__["MetaDataService"],
            src_app_services__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _services_questionbankservice__WEBPACK_IMPORTED_MODULE_6__["QuestionBankService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddQuestionComponent);
    return AddQuestionComponent;
}());



/***/ }),

/***/ "./src/app/admin/home/add-quiz/add-quiz.component.css":
/*!************************************************************!*\
  !*** ./src/app/admin/home/add-quiz/add-quiz.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2hvbWUvYWRkLXF1aXovYWRkLXF1aXouY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/home/add-quiz/add-quiz.component.html":
/*!*************************************************************!*\
  !*** ./src/app/admin/home/add-quiz/add-quiz.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-top-nav></app-admin-top-nav>\r\n<main class=\"main_container\">\r\n  <div class=\"container\">\r\n      <div class=\"main_con_inner\">\r\n    \r\n\r\n          <app-admin-side-nav></app-admin-side-nav>\r\n\r\n          <!-- right section  start -->\r\n          <section class=\"right_panel\">\r\n<!-- Quiz Starts -->\r\n                      \r\n<div class=\"quiz_wrap hide_tab active\"  id=\"pop_6\">\r\n    \r\n     <div class=\"quiz_Inner\">\r\n        <div class=\"rph_header\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6 col-md-6 col-lg-6 rph_left\">\r\n                    <h5>Add Quiz</h5>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"right_panel_box2\">\r\n          <form class=\"user_fileds\" name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6 col-md-6 col-lg-6\">\r\n                  <div class=\"form-group row\">\r\n                    <div class=\"col-sm-4 col-md-4 col-lg-4\">\r\n                      <label for=\"lastname\">Title</label>\r\n                    </div>\r\n                    <div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"\" name=\"title\" [(ngModel)]=\"model.title\" #title=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && title.invalid }\" required>\r\n                      <div *ngIf=\"f.submitted && title.invalid\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"title.errors.required\">Title is required</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>                 \r\n                </div>\r\n            </div>\r\n          \r\n\r\n          <!-- <div class=\"applyFilers mt-4 \" name=\"domain\">\r\n                <select class=\"custom-select slects_option\"  #assetType (change)=\"getThearpeuticAreas($event.target.value)\" >\r\n                      <option selected=\"\">Select AT’s</option>\r\n                      <option *ngFor=\"let assetType of assetTypes ; index as i\" [value]=\"assetType.id\">{{assetType.userName}}</option>\r\n                </select>\r\n                <select class=\"custom-select slects_option\" #ta  (change)=\"getdiseaseAndProducts($event.target.value)\">\r\n                    <option selected=\"\">Select TA’s</option>\r\n                    <option *ngFor=\"let ta of therapeuticAreaList ; index as i\" [value]=\"ta\">{{ta}}</option>\r\n                </select>    \r\n                <select class=\"custom-select slects_option\" #disease >\r\n                    <option selected=\"\">Select DS’s</option>\r\n                    <option *ngFor=\"let dis of diseaseList ; index as i\" [value]=\"dis\">{{dis}}</option>                        \r\n                </select>    \r\n                <select class=\"custom-select slects_option\" #product>\r\n                    <option selected=\"\">Select Product</option>\r\n                    <option *ngFor=\"let prod of productList ; index as i\" [value]=\"prod\">{{prod}}</option>\r\n                </select> \r\n           </div> -->\r\n\r\n          <div class=\"row questSelectedWrap\">\r\n            <div class=\"col-12 col-sm-12 questSelected\">\r\n              <div class=\"questHeader\">\r\n                <h2><span class=\"questCount\">{{questionCount}}</span> Questions Selected</h2>\r\n                <h3>Title</h3>\r\n              </div>\r\n              <div class=\"questChecked\">\r\n                <ul>\r\n                  <li class=\"questList\" *ngFor=\"let question of questions ; index as i\">\r\n                    <input type=\"checkbox\" value=\"{{question.id}}\" id=\"{{'quest'+i}}\" (change)=\"onCheckboxChange(question.id,$event)\">\r\n                    <label for=\"{{'quest'+i}}\">{{question.qsData.question}}</label>\r\n                  </li>\r\n                  \r\n                </ul>\r\n                <button class=\"btn quizBtn\">Submit</button>\r\n                <button class=\"btn quizCancel\"  (click)=\"cancelQuiz()\">cancel</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        </div>\r\n    </div> \r\n\r\n    \r\n</div>\r\n\r\n<!-- Quiz Ends -->\r\n</section> <!-- Right Panel End Here -->\r\n\r\n               \r\n</div>\r\n</div>\r\n</main>\r\n<footer class=\"fot_main\">\r\n<div class=\"container\">\r\n<div class=\"fot_inner\">\r\n<div class=\"row\"><div class=\"col-sm-12 col-md-12\"><p>© ALLERGAN 2019</p></div></div>\r\n</div>\r\n</div>\r\n</footer>"

/***/ }),

/***/ "./src/app/admin/home/add-quiz/add-quiz.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/admin/home/add-quiz/add-quiz.component.ts ***!
  \***********************************************************/
/*! exports provided: AddQuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQuizComponent", function() { return AddQuizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_quizservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/quizservice */ "./src/app/admin/services/quizservice.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_metadataService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/metadataService */ "./src/app/admin/services/metadataService.ts");
/* harmony import */ var _services_questionbankservice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/questionbankservice */ "./src/app/admin/services/questionbankservice.ts");
/* harmony import */ var _model_quiz__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model/quiz */ "./src/app/admin/model/quiz.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AddQuizComponent = /** @class */ (function () {
    function AddQuizComponent(metaService, questionBankService, quizService, formBuilder, alertService, router) {
        this.metaService = metaService;
        this.questionBankService = questionBankService;
        this.quizService = quizService;
        this.formBuilder = formBuilder;
        this.alertService = alertService;
        this.router = router;
        this.therapeuticAreaList = [];
        this.diseaseList = [];
        this.productList = [];
        this.checkedList = [];
        this.questionCount = 0;
        this.model = {};
    }
    AddQuizComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkedList = [];
        this.questionBankService.getAllQuestions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (questions) {
            _this.questions = questions;
        });
        this.metaService.getAllAssetTypes().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (assetTypes) {
            _this.assetTypes = assetTypes.data;
        });
        this.metaService.getTherapeuticAreaMap().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (TA) {
            TA.data.forEach(function (ta) {
                _this.therapeuticAreaList.push(ta.name);
                ta.products.forEach(function (prod) {
                    _this.productList.push(prod.name);
                });
                ta.diseaseStates.forEach(function (disease) {
                    _this.diseaseList.push(disease.name);
                });
            });
        });
        console.log(this.diseaseList);
    };
    AddQuizComponent.prototype.getThearpeuticAreas = function (assetTypeId) {
        var _this = this;
        this.therapeuticAreaList = [];
        this.metaService.getTherapeuticAreas(assetTypeId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (therapeutic) {
            therapeutic.data.forEach(function (ta) {
                _this.therapeuticAreaList.push(ta.name);
            });
        });
    };
    AddQuizComponent.prototype.getdiseaseAndProducts = function (taName) {
        var _this = this;
        this.metaService.getTherapeuticAreaMap().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (TA) {
            TA.data.forEach(function (ta) {
                if (taName === ta.name) {
                    _this.productList = [];
                    _this.diseaseList = [];
                    ta.products.forEach(function (prod) {
                        _this.productList.push(prod.name);
                    });
                    ta.diseaseStates.forEach(function (disease) {
                        _this.diseaseList.push(disease.name);
                    });
                }
            });
        });
    };
    AddQuizComponent.prototype.onCheckboxChange = function (questionId, $event) {
        if (this.checkedList.indexOf(questionId) > -1) {
            this.checkedList.splice(this.checkedList.indexOf(questionId), 1);
        }
        else {
            this.checkedList.push(questionId);
        }
        this.questionCount = this.checkedList.length;
        console.log(this.checkedList);
    };
    AddQuizComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.checkedList + "json" + this.checkedList.toString().split(','));
        var quiz = new _model_quiz__WEBPACK_IMPORTED_MODULE_7__["Quiz"]();
        quiz.title = this.model.title;
        quiz.jsonData = this.checkedList;
        this.quizService.insertQuiz(quiz).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (q) {
            _this.quizService.getQuiz().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (quizz) {
                _this.quiz = quizz.data;
            });
            _this.checkedList = [];
            _this.router.navigate(['/admin/quiz']);
            _this.alertService.success('Successfully Added.');
            window.scroll(0, 0);
        }, function (error) {
            _this.alertService.error(error);
            window.scroll(0, 0);
        });
    };
    AddQuizComponent.prototype.cancelQuiz = function () {
        this.checkedList = [];
        this.router.navigate(['/admin/quiz']);
    };
    AddQuizComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-quiz',
            template: __webpack_require__(/*! ./add-quiz.component.html */ "./src/app/admin/home/add-quiz/add-quiz.component.html"),
            styles: [__webpack_require__(/*! ./add-quiz.component.css */ "./src/app/admin/home/add-quiz/add-quiz.component.css")]
        }),
        __metadata("design:paramtypes", [_services_metadataService__WEBPACK_IMPORTED_MODULE_5__["MetaDataService"],
            _services_questionbankservice__WEBPACK_IMPORTED_MODULE_6__["QuestionBankService"],
            _services_quizservice__WEBPACK_IMPORTED_MODULE_2__["QuizService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_8__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AddQuizComponent);
    return AddQuizComponent;
}());



/***/ }),

/***/ "./src/app/admin/home/assets/add-asset/add-asset.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/admin/home/assets/add-asset/add-asset.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2hvbWUvYXNzZXRzL2FkZC1hc3NldC9hZGQtYXNzZXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/home/assets/add-asset/add-asset.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/admin/home/assets/add-asset/add-asset.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-top-nav></app-admin-top-nav>\n<router-outlet></router-outlet>\n<main class=\"main_container\">\n  <div class=\"container\">\n      <div class=\"main_con_inner\">\n          <app-admin-side-nav></app-admin-side-nav>\n          <!-- right section  start -->\n          <section class=\"right_panel\">\n              <div class=\"user_assets hide_tab active\"  id=\"pop_3\">\n               <form [formGroup]=\"assetForm\" (ngSubmit)=\"onSubmit()\">            \n                  <div class=\"assets_panel\">\n                    <div class=\"right_panel_inner border_dashed\">\n                        <div class=\"rph_header\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-6 col-md-6 col-lg-6 rph_left\">\n                                    <h5>Assets</h5>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"right_panel_box2\">\n                            <div class=\" user_fileds\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-6 col-md-6 col-lg-6\">\n                                        <div class=\"form-group row\">\n                                          <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                                            <label >Asset Type</label>\n                                          </div>\n                                          <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                                            <select formControlName=\"assetType\" [ngClass]=\"{ 'is-invalid': submitted && f.assetType.errors }\" class=\"custom-select slects_option\" (change)=\"onSelectAssetType($event.target.value)\">\n                                              <option value=\"\">Select AssetType</option>\n                                              <option *ngFor=\"let assetType of assetTypes\" value={{assetType.id}} >{{assetType.userName}}</option>\n                                            </select>\n                                              <div *ngIf=\"submitted && f.assetType.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.assetType.errors.required\">Choose AssetType</div>\n                                              </div>  \n                                        </div>\n                                      </div>\n                                        <div class=\"form-group row\">\n                                          <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                                            <label for=\"lastname\">Title</label>\n                                          </div>\n                                            <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                                            <input type=\"text\" formControlName=\"title\"  class=\"form-control\" id=\"\" [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\" placeholder=\"\" name=\"lastname\">\n                                             <div *ngIf=\"submitted && f.title.errors\" class=\"invalid-feedback\">\n                                                  <div *ngIf=\"f.title.errors.required\">Title is required</div>\n                                                  <div *ngIf=\"f.title.errors.minlength\">Title must be at least 3 characters</div>\n                                                  <div *ngIf=\"f.title.errors.maxlength\">Title must be max 250 characters</div>\n                                              </div> \n                                          </div>\n                                        </div>\n                                        <div class=\"form-group row\">\n                                          <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                                            <label for=\"\">Description</label>\n                                          </div>\n                                            <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                                            <input type=\"\" formControlName=\"description\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.description.errors }\" id=\"mail\" placeholder=\"\" name=\"\">\n                                            <div *ngIf=\"submitted && f.description.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.description.errors.required\">Description is required</div>\n                                                <div *ngIf=\"f.description.errors.minlength\">Description must be at least  3 characters</div>\n                                                <div *ngIf=\"f.description.errors.maxlength\">Description must be max 50 characters</div>\n                                            </div> \n                                          </div>\n                                        </div>\n                                        <!-- <div class=\"form-group row\" *ngIf=\"showContentTypeDropDown\"> -->\n                                          <!-- <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                                            <label >Content Type</label>\n                                          </div> -->\n                                          <!-- <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                                            <select formControlName=\"contentType\" class=\"custom-select slects_option\" [ngClass]=\"{ 'is-invalid': submitted && showcontentTypeError }\" (change)=\"onSelectContentType($event.target.value)\">\n                                              <option value=\"\">Select ContentType</option>\n                                              <option *ngFor=\"let contentType of contentTypes\" value={{contentType.id}} >{{contentType.name}}</option>\n                                            </select>\n                                            <div *ngIf=\"submitted && showcontentTypeError\" class=\"invalid-feedback\">\n                                                <div>Choose ContentType</div>\n                                            </div> \n                                        </div> -->\n                                      <!-- </div> -->\n                                    </div>\n                                    <div class=\"col-sm-6 col-md-6 col-lg-6\">\n                                        <div class=\"form-group row\">\n                                          <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                                            <label >Duration (min)</label>\n                                          </div>\n                                          <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                                              <input type=\"number\" formControlName=\"duration\" class=\"form-control\" id=\"mail\" placeholder=\"\" name=\"\">\n                                              <div *ngIf=\"submitted && f.duration.errors\" class=\"\">\n                                                  <div *ngIf=\"f.duration.errors.required\">Duration is required</div>\n                                              </div> \n                                            </div>\n                                      </div>\n                                        <div class=\"form-group row\">\n                                          <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                                            <label >Therapeutic Area</label>\n                                          </div>\n                                          <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                                              <select formControlName=\"therapeuticArea\"  [ngClass]=\"{ 'is-invalid': submitted && f.therapeuticArea.errors }\" class=\"custom-select slects_option\" (change)=\"onSelectTherapeuticArea($event.target.value)\">\n                                                  <option value=\"\">Select TherapeuticArea</option>\n                                                <option *ngFor=\"let therapeuticArea of therapeuticAreas\" value={{therapeuticArea.id}} >{{therapeuticArea.name}}</option>\n                                              </select>\n                                              <div *ngIf=\"submitted && f.therapeuticArea.errors\" class=\"invalid-feedback\">\n                                                  <div *ngIf=\"f.therapeuticArea.errors.required\">Choose  TherapeuticArea</div>\n                                              </div>  \n                                        </div>\n                                      </div>\n                                        <div class=\"form-group row\">\n                                          <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                                            <label >Disease State</label>\n                                          </div>\n                                          <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                                            <select formControlName=\"diseaseState\" [ngClass]=\"{ 'is-invalid': submitted && showDSError }\" class=\"custom-select slects_option\" (change)=\"onSelectDiseaseState($event.target.value)\" >\n                                              <option value=\"\" >Select DiseaseStates</option>\n                                              <option *ngFor=\"let diseaseState of diseaseStates\" value={{diseaseState.id}} >{{diseaseState.name}}</option>\n                                          </select>\n                                           <div *ngIf=\"submitted && showDSError\" class=\"invalid-feedback\">\n                                              <div >Choose  DiseaseState</div>\n                                          </div> \n                                        </div>\n                                      </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- </form> -->\n                        </div>\n                    </div>\n                    \n                   <div class=\"right_panel_inner border_dashed\">\n                      <div class=\"right_panel_box2\">\n                          <div class=\"user_fileds\">\n\n                              <div *ngIf=\"error\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\n                                  {{message}} \n                                 <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                                   <span aria-hidden=\"true\">&times;</span>\n                                 </button>\n                               </div>\n\n                              <div class=\"row\">\n                                  <div class=\"col-sm-6 col-md-6 col-lg-6\">\n                                      <div class=\"form-group row\">\n                                          <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                                            <label >Product</label>\n                                          </div>\n                                          <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                                            <select formControlName=\"product\" [ngClass]=\"{ 'is-invalid': submitted && showProductError }\" class=\"custom-select slects_option\" (change)=\"onSelectProduct($event.target.value)\">\n                                              <option value=\"\">Select Product</option>\n                                             <option *ngFor=\"let product of products\" value={{product.id}} >{{product.name}}</option>\n                                          </select>\n                                          <div *ngIf=\"submitted && showProductError\" class=\"invalid-feedback\">\n                                              <div>Choose  Product</div>\n                                          </div> \n                                        </div>\n                                      </div>\n                                      <div class=\"form-group row\">\n                                          <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                                            <label >Region</label>\n                                          </div>\n                                          <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                                            <select formControlName=\"region\" class=\"custom-select slects_option\" (change)=\"onSelectRegion($event.target.value)\">\n                                              <option value=\"\">Select Region</option>\n                                              <option *ngFor=\"let region of regions\" value={{region.id}} >{{region.name}}</option>\n                                            </select>\n                                            <div *ngIf=\"submitted && f.region.errors\" class=\"\">\n                                              <div *ngIf=\"f.region.errors.required\">Choose  Region</div>\n                                          </div> \n                                        </div>\n                                      </div>\n                                      <div class=\"form-group row\">\n                                          <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                                            <label >Country</label>\n                                          </div>\n                                          <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                                            <select formControlName=\"country\" class=\"custom-select slects_option\">\n                                              <option value=\"\">Select Country</option>\n                                              <option *ngFor=\"let country of countries\" value={{country.id}} >{{country.name}}</option>\n                                          </select>\n                                          <div *ngIf=\"submitted && f.country.errors\" class=\"\">\n                                            <div *ngIf=\"f.country.errors.required\">Choose Country</div>\n                                        </div> \n                                        </div>\n                                      </div>\n                                      <div class=\"form-group row\">\n                                          <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                                            <label >Expiration Duration (days)</label>\n                                          </div>\n                                          <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                                              <input type=\"number\" formControlName=\"expiration\" class=\"form-control\" id=\"mail\" placeholder=\"\" name=\"\">\n                                              <div *ngIf=\"submitted && f.expiration.errors\" class=\"\">\n                                                  <div *ngIf=\"f.expiration.errors.required\">Expiration Duration (days) Required</div>\n                                              </div>\n                                          </div>\n                                      </div>\n                                  </div>\n                                  <div class=\"col-sm-6 col-md-6 col-lg-6\">\n                                      <div class=\"form-group row\">\n                                          <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                                            <label >Source</label>\n                                          </div>\n                                          <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                                              <select formControlName=\"source\"  [ngClass]=\"{ 'is-invalid': submitted && f.source.errors }\" class=\"custom-select slects_option\" (change)=\"onSelectSource($event.target.value)\">\n                                                <option value=\"\">Select Source</option>\n                                                <option *ngFor=\"let source of sources\" value={{source.id}} >{{source.name}}</option>\n                                              </select>\n                                              <div *ngIf=\"submitted && f.source.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.source.errors.required\">Choose Source</div>\n                                            </div> \n                                          </div>\n                                      </div>\n                                    <div *ngIf=\"showQuize && showUploadAsset\" class=\"form-group row\" >\n                                        <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                                          <label for=\"createdby\">Link</label>\n                                        </div>\n                                        <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                                          <div  class=\"custom-file upload_file\">\n                                            <input type=\"file\"  class=\"custom-file-input\" id=\"customFile\" (change)=\"onFileSelect($event)\" [ngClass]=\"{ 'is-invalid': submitted && showFileUploadError }\">\n                                            <label class=\"custom-file-label\" for=\"customFile\">{{fileName}}</label>\n                                            <div *ngIf=\"submitted && showFileUploadError\" class=\"invalid-feedback\">\n                                                <div >Upload a file</div>\n                                            </div> \n                                          </div>\n                                        </div>\n                                      </div> \n                                      <div *ngIf=\"showQuizDropDown\" class=\"form-group row\" >\n                                        <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                                          <label for=\"createdby\">Quiz</label>\n                                        </div>\n                                        <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                                             <select formControlName =\"quize\" class=\"custom-select slects_option\" [ngClass]=\"{ 'is-invalid': submitted && showQuizError }\" [(ngModel)]=\"alredyQuize\" (change)=\"onSelectQuiz($event.target.value)\">\n                                                <option value=\"\">Select Quiz</option>\n                                                <option   *ngFor=\"let quize of quizes\" value={{quize.id}} >{{quize.title}}</option>\n                                              </select>   \n                                              <div *ngIf=\"submitted && showQuizError\" class=\"invalid-feedback\">\n                                                  <div>Choose Quiz</div>\n                                              </div>                                           \n                                        </div>\n                                      </div> \n                                      <div *ngIf=\"showLink\" class=\"form-group row\" >\n                                          <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                                            <label for=\"createdby\">Link</label>\n                                          </div>\n                                          <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                                              <input formControlName =\"deepLink\" type=\"\" class=\"form-control\" id=\"mail\" placeholder=\"\" name=\"\"(change)=\"onChangeLink($event.target.value)\" [ngClass]=\"{ 'is-invalid': submitted && showLinkError }\">\n                                              <div *ngIf=\"submitted && showLinkError\" class=\"invalid-feedback\">\n                                                  <div>{{showLinkErrorMsg}}</div>\n                                              </div>   \n                                          </div>\n                                        </div> \n                                      <div class=\"form-group row\">\n                                        <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                                          <label for=\"updadayby\">Mandatory</label>\n                                        </div>\n                                        <div class=\"col-sm-8 col-md-8 col-lg-8 user_buts mandatory\">\n                                          <div class=\"\">\n                                            <input type=\"radio\" formControlName=\"mandatory\"  [value]=\"true\">\n                                            <label  >Yes</label>\n                                          </div>\n                                          <div class=\"\">\n                                            <input type=\"radio\" formControlName=\"mandatory\"  [value]=\"false\">\n                                            <label  >No</label>\n                                            </div>                                       \n                                        </div>\n                                      </div>\n                                      \n                                  </div>\n                              </div>\n                          </div>\n                    </div>\n                  </div>\n                   <div class=\"right_panel_inner\">\n                      <div class=\"right_panel_box2\">\n                          <div class=\" user_fileds\">\n                              <div class=\"row\">\n                                  <div class=\"col-sm-6 col-md-6 col-lg-6\">\n                                      <div class=\"form-group row\">\n                                          <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                                            <label >Points</label>\n                                          </div>\n                                          <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                                            <input formControlName=\"awardPoints\" type=\"number\" class=\"form-control\" id=\"mail\" placeholder=\"\" name=\"\">\n                                            <div *ngIf=\"submitted && f.awardPoints.errors\" class=\"\">\n                                                <div *ngIf=\"f.awardPoints.errors.required\">Points Required</div>\n                                            </div> \n                                          </div>\n                                      </div>\n                                  </div>\n                                  <div class=\"col-sm-6 col-md-6 col-lg-6\">\n                                      <div class=\"form-group row\">\n                                          <!-- <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                                            <label for=\"mname\">Status</label>\n                                          </div> -->\n                                          <!-- <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                                               <div class=\"custom-switch custom-switch-label-onoff d-flex\">\n                                                 \n                                                  <input class=\"custom-switch-input\" id=\"btn_00\" formControlName =\"status\"  [checked]=\"(assets?.active==true) ? false: true\"  type=\"checkbox\">\n                                                  <label class=\"custom-switch-btn\" for=\"btn_013\"></label>\n                                              </div>\n                                           \n                                              </div> -->\n                                        </div>\n                                  </div>\n                                 <div *ngIf=\"showGroup\" class=\"col-sm-12 col-md-12 col-lg-12 groups_maps\">\n                                      <div class=\"row\">\n                                        <div class=\"col-sm-6 col-md-6 col-lg-6\">\n                                          <h5>Groups</h5>\n                                        </div>\n                                         <div class=\"col-sm-6 col-md-6 col-lg-6\">\n                                          <h5 class=\"space_1\">Mappings</h5>\n                                        </div>\n                                         <div class=\" swipe_section\">\n                                         <div class=\"swipe_boxes\">\n                                          <ul *ngFor=\"let group of groups\">\n                                            <li (click)=\"pushRight(group)\" [value]=\"group.id\">{{group.name}}</li>\n                                            <!-- <li>Non MSL Group</li>\n                                            <li>Glaucoma Group.</li> -->\n                                          </ul>\n                                        </div>\n                                          <div class=\"swipe_arrow\">\n                                            <div class=\"swipe_btn\">\n                                              <span class=\"arrow_1\"><img src=\"assets/images/arrow_1.png\"></span>\n                                              <span class=\"arrow_2\"><img src=\"assets/images/arrow_2.png\"></span>\n                                            </div>\n                                          </div>\n                                         <div class=\"swipe_boxes\">\n                                           <ul *ngFor=\"let assetGroup of assetMappedGroups\">\n                                            <li (click)=\"pushLeft(assetGroup)\" [value]=\"assetGroup.id\">{{assetGroup.name}}</li>\n                                          </ul>\n                                        </div>\n                                        </div>\n                                    \n                                      </div>\n                                      <!-- <div *ngIf=\"submitted && showGroupError\" >\n                                          <div style=\"width: 100%;\n                                          margin-top: .25rem;\n                                          font-size: 85%;\n                                          color: #dc3545;\">Map atleast one Group</div>\n                                      </div>  -->\n\n                                  </div>\n                              </div>\n                              <div class=\"form-group row mt-5 autoass\">\n                                        \n                                        <div class=\"col-sm-6 col-md-6 col-lg-6 user_buts mandatory\">\n                                          <label class=\"mr-3\" >Auto Assignment</label>\n                                           <div class=\"\">\n                                              <input type=\"radio\" formControlName=\"autoAssin\"   [value]=\"true\" (change)=\"onClickAutoAssign(true)\">\n                                              <label  >Yes</label>\n                                            </div>\n                                            <div class=\"\">\n                                              <input type=\"radio\" formControlName=\"autoAssin\"  [value]=\"false\" (change)=\"onClickAutoAssign(false)\">\n                                              <label  >No</label>\n                                              </div>\n                               \n                                        </div>\n                                      </div>\n                                      <input type=\"hidden\" formControlName=\"id\" class=\"form-control \" name=\"id\" [value]=\"0\">\n                              <div class=\"buttons\">\n                                <button type=\"button\" class=\" btn-small\" [routerLink]=\"['/admin/asset']\">Cancel</button>\n                                <button type=\"submit\" class=\" btn-small bnt_blue\">Apply</button>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n                </div>\n               </form>\n             </div>  \n          <!---- User Aseets  End Here ---->\n          </section> \n      </div>\n  </div>\n</main>\n<footer class=\"fot_main\">\n  <div class=\"container\">\n    <div class=\"fot_inner\">\n      <div class=\"row\"><div class=\"col-sm-12 col-md-12\"><p>© ALLERGAN 2019</p></div></div>\n   </div>\n</div>\n</footer>"

/***/ }),

/***/ "./src/app/admin/home/assets/add-asset/add-asset.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/admin/home/assets/add-asset/add-asset.component.ts ***!
  \********************************************************************/
/*! exports provided: AddAssetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAssetComponent", function() { return AddAssetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_assetservices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/assetservices */ "./src/app/admin/services/assetservices.ts");
/* harmony import */ var src_app_admin_services_groupservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/admin/services/groupservice */ "./src/app/admin/services/groupservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddAssetComponent = /** @class */ (function () {
    function AddAssetComponent(formBuilder, router, route, assetService, groupService) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.assetService = assetService;
        this.groupService = groupService;
        this.error = false;
        this.message = "";
        this.showQuize = true;
        this.submitted = false;
        this.fileName = "Not uploaded";
        this.sources = [{ id: 0, name: "" }];
        this.quizeValue = true;
        this.groups = [{ id: 0, name: "" }];
        this.sharePoint = "";
        this.showQuizDropDown = false;
        this.showContentTypeDropDown = true;
        this.showUploadAsset = false;
        this.showLink = false;
        this.showGroup = true;
        this.showDSError = false;
        this.showProductError = false;
        this.showQuizError = false;
        this.showcontentTypeError = false;
        this.showFileUploadError = false;
        this.assetMappedGroups = [{ id: 0, name: "" }];
        this.showLinkError = false;
        this.showLinkErrorMsg = "Link Required";
        this.showGroupError = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.route.queryParams.subscribe(function (params) {
            var assetId = params['assetId'];
            if (assetId > 0) {
                _this.assetService.getAsset(assetId, _this.currentUser.id).subscribe(function (asset) {
                    //   //////alertJSON.stringify(asset));
                    _this.assets = asset.data;
                    _this.f.id.setValue(asset.data.id);
                    _this.assetMappedGroups = asset.data.groups;
                    _this.removeDuplicateGroups();
                    if (asset.data.assetType != null) {
                        _this.f.assetType.setValue(asset.data.assetType.id);
                        _this.onSelectAssetType(asset.data.assetType.id);
                    }
                    if (asset.data.therapeuticArea != null) {
                        _this.f.therapeuticArea.setValue(asset.data.therapeuticArea.id);
                        _this.onSelectTherapeuticArea(asset.data.therapeuticArea.id);
                    }
                    _this.f.duration.setValue(asset.data.duration);
                    _this.f.title.setValue(asset.data.title);
                    _this.f.description.setValue(asset.data.description);
                    if (asset.data.diseaseState != null) {
                        _this.f.diseaseState.setValue(asset.data.diseaseState.id);
                    }
                    if (asset.data.product != null) {
                        _this.f.product.setValue(asset.data.product.id);
                    }
                    if (asset.data.contenetType != null) {
                        _this.f.contentType.setValue(asset.data.contenetType);
                    }
                    _this.f.source.setValue(asset.data.source);
                    _this.onSelectSource(asset.data.source);
                    if (asset.data.source == 4) {
                        _this.f.quize.setValue(asset.data.fileName);
                    }
                    else if (asset.data.source == 2) {
                    }
                    else {
                        _this.fileName = asset.data.fileName;
                    }
                    if (asset.data.region != null) {
                        _this.f.region.setValue(asset.data.region.id);
                        _this.onSelectRegion(asset.data.region.id);
                    }
                    if (asset.data.country != null) {
                        _this.f.country.setValue(asset.data.country.id);
                    }
                    _this.f.expiration.setValue(asset.data.expiryDuartion);
                    _this.f.awardPoints.setValue(asset.data.awardPoints);
                    _this.f.mandatory.setValue(asset.data.mandatory);
                    _this.f.deepLink.setValue(asset.data.deepLink);
                    _this.fileName = asset.data.fileName;
                    _this.f.autoAssin.setValue(asset.data.autoAssignment);
                    if (asset.data.autoAssignment) {
                        _this.showGroup = false;
                    }
                    _this.f.status.setValue(true);
                });
            }
        });
        this.assetService.getAssetTypes().pipe().subscribe(function (assetTypes) {
            _this.assetTypes = assetTypes.data;
            _this.assetTypeName = _this.assetTypes[0];
        });
        this.assetService.getRegion().pipe().subscribe(function (regions) {
            _this.regions = regions.data;
        });
        this.assetService.getSources().pipe().subscribe(function (sources) {
            _this.sources = sources.data;
        });
        this.assetService.getContentTypes().pipe().subscribe(function (contentTypes) {
            _this.contentTypes = contentTypes.data;
        });
        this.groupService.getGroups().pipe().subscribe(function (groups) {
            _this.groups = groups.data;
        });
    }
    AddAssetComponent.prototype.ngOnInit = function () {
        this.assetForm = this.formBuilder.group({
            id: [0],
            assetType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            therapeuticArea: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            duration: [60, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(250)]],
            expiration: [30, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            awardPoints: [100, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            status: [true],
            autoAssin: [false],
            mandatory: [false],
            deepLink: [''],
            product: [''],
            diseaseState: [''],
            contentType: [''],
            source: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            region: [''],
            country: [''],
            quize: [''],
            file: [''],
        });
    };
    AddAssetComponent.prototype.onSelectAssetType = function (assetTypeId) {
        var _this = this;
        if (assetTypeId != null && assetTypeId > 0) {
            this.assetService.getTherapeuticAreas(assetTypeId).pipe().subscribe(function (therapeuticAreas) {
                _this.therapeuticAreas = therapeuticAreas.data;
            });
        }
        else {
            this.therapeuticAreas = null;
            this.diseaseStates = null;
            this.products = null;
            this.f.therapeuticArea.setValue('');
            this.f.product.setValue('');
            this.f.diseaseState.setValue('');
        }
    };
    AddAssetComponent.prototype.onSelectTherapeuticArea = function (therapeuticAreaId) {
        var _this = this;
        if (therapeuticAreaId != null && therapeuticAreaId > 0) {
            this.assetService.getDiseaseStateForTA(therapeuticAreaId).pipe().subscribe(function (diseaseStates) {
                _this.diseaseStates = diseaseStates.data;
            });
            this.assetService.getProductsForTA(therapeuticAreaId).pipe().subscribe(function (products) {
                _this.products = products.data;
            });
        }
        else {
            this.diseaseStates = null;
            this.products = null;
            this.f.product.setValue('');
            this.f.diseaseState.setValue('');
        }
    };
    AddAssetComponent.prototype.onSelectDiseaseState = function (diseaseStateId) {
        if (diseaseStateId != null && diseaseStateId > 0) {
            this.showDSError = false;
            this.showProductError = false;
            return;
        }
        else if (this.assetForm.value.product == null && this.assetForm.value.product < 0) {
            this.showDSError = true;
            this.showProductError = true;
            return;
        }
        else {
            this.showDSError = true;
            this.showProductError = true;
        }
    };
    AddAssetComponent.prototype.onSelectProduct = function (productId) {
        if (productId != null && productId > 0) {
            this.showDSError = false;
            this.showProductError = false;
            return;
        }
        else if (this.assetForm.value.diseaseState == null && this.assetForm.value.diseaseState < 0) {
            this.showDSError = true;
            this.showProductError = true;
            return;
        }
        else {
            this.showDSError = true;
            this.showProductError = true;
        }
    };
    AddAssetComponent.prototype.onSelectQuiz = function (quizId) {
        if (quizId == undefined && quizId != null) {
            //alertquizId);
            // this.fileName=String(quizId);
            //this.showQuizError = false;
            //return;
        }
        //this.showQuizError = true;
    };
    AddAssetComponent.prototype.onSelectRegion = function (regionId) {
        var _this = this;
        this.assetService.getCountries(regionId).pipe().subscribe(function (countries) {
            _this.countries = countries.data;
        });
    };
    AddAssetComponent.prototype.onFileSelect = function (event) {
        var _this = this;
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.assetForm.get('file').setValue(file);
            this.fileName = file.name;
            this.quizeValue = false;
            this.assetForm.get('contentType').setValue(this.contentTypes.find(function (x) { return x.name == _this.fileName.split('.').pop(); }).id);
            this.showFileUploadError = false;
        }
    };
    AddAssetComponent.prototype.onSelectSource = function (sourceId) {
        var _this = this;
        this.sharePoint = "";
        this.alredyQuize = undefined;
        this.showQuize = true;
        this.quizeValue = false;
        if (sourceId != undefined && sourceId != null) {
            if (this.sources.find(function (x) { return x.id == sourceId; })) {
                if (this.sources.find(function (x) { return x.id == sourceId; }).name === "Quiz") {
                    this.showQuize = false;
                    this.assetForm.get('file').setValue('');
                    this.fileName = "Not uploaded";
                    this.quizeValue = true;
                }
                if (this.sources.find(function (x) { return x.id == sourceId; }).name === "share point") {
                    this.sharePoint = "yes";
                    this.assetForm.get('file').setValue('');
                    this.fileName = "Not uploaded";
                    this.alredyQuize = undefined;
                }
            }
        }
        this.showQuizDropDown = false;
        this.showLink = false;
        if (sourceId == 4) {
            this.showContentTypeDropDown = false;
            this.showQuizDropDown = true;
            this.showUploadAsset = false;
            this.showLink = false;
            this.route.queryParams.subscribe(function (params) {
                _this.assetService.getQuizes().pipe().subscribe(function (quizes) {
                    _this.quizes = quizes.data;
                });
                return;
            });
        }
        else if (sourceId == 2) {
            this.showQuizDropDown = false;
            this.showUploadAsset = false;
            this.showLink = true;
            this.showContentTypeDropDown = false;
            this.f.contentType.setValue('');
            return;
        }
        this.showUploadAsset = true;
        this.showContentTypeDropDown = true;
        this.showcontentTypeError = (this.assetForm.value.contentType.length == 0 && this.submitted);
    };
    AddAssetComponent.prototype.onClickAutoAssign = function (flag) {
        this.showGroup = !flag;
    };
    AddAssetComponent.prototype.onChangeLink = function (link) {
        if (link.length == 0) {
            this.showLinkError = true;
            this.showLinkErrorMsg = "Link Required";
            return;
        }
        else if (link.length < 3) {
            this.showLinkError = true;
            this.showLinkErrorMsg = "Link Minimum 3 Charecters";
            return;
        }
        else if (link.length > 250) {
            this.showLinkError = true;
            this.showLinkErrorMsg = "Link Maximum 250 Charecters";
            return;
        }
        else {
            this.showLinkError = false;
        }
    };
    AddAssetComponent.prototype.pushRight = function (group) {
        this.assetMappedGroups.push(group);
        this.groups = this.groups.filter(function (ele) { return ele['name'] != group.name; });
        this.showGroupError = false;
    };
    AddAssetComponent.prototype.pushLeft = function (group) {
        this.groups.push(group);
        this.assetMappedGroups = this.assetMappedGroups.filter(function (ele) { return ele['name'] != group.name; });
        if (this.assetMappedGroups.length < 2) {
            this.showGroupError = true;
        }
    };
    AddAssetComponent.prototype.removeDuplicateGroups = function () {
        for (var i = this.assetMappedGroups.length - 1; i >= 0; i--) {
            for (var j = 0; j < this.groups.length; j++) {
                if (this.assetMappedGroups[i] && (this.assetMappedGroups[i]['name'] === this.groups[j]['name'])) {
                    this.groups.splice(j, 1);
                }
            }
        }
    };
    Object.defineProperty(AddAssetComponent.prototype, "f", {
        get: function () { return this.assetForm.controls; },
        enumerable: true,
        configurable: true
    });
    AddAssetComponent.prototype.onSubmit = function () {
        var _this = this;
        this.error = false;
        if (this.assetForm.invalid) {
            this.submitted = true;
            if ((this.assetForm.value.diseaseState.length == 0) && (this.assetForm.value.product.length == 0)) {
                this.showDSError = true;
                this.showProductError = true;
            }
            if (this.showContentTypeDropDown && this.assetForm.value.contentType.length == 0) {
                this.showcontentTypeError = true;
            }
            if (this.showUploadAsset && this.assetForm.value.file.length == 0 && this.fileName.includes("Not uploaded")) {
                this.showFileUploadError = true;
            }
            if (this.showLink) {
                var link = this.assetForm.value.deepLink;
                if (link.length == 0) {
                    this.showLinkError = true;
                    this.showLinkErrorMsg = "Link Required";
                    return;
                }
                else if (link.length < 3) {
                    this.showLinkError = true;
                    this.showLinkErrorMsg = "Link Minimum 3 Charecters";
                    return;
                }
                else if (link.length > 250) {
                    this.showLinkError = true;
                    this.showLinkErrorMsg = "Link Maximum 250 Charecters";
                    return;
                }
                else {
                    this.showLinkError = false;
                }
            }
            return;
        }
        if ((this.assetForm.value.diseaseState.length == 0) && (this.assetForm.value.product.length == 0)) {
            //////alert"7");
            this.submitted = true;
            this.showDSError = true;
            this.showProductError = true;
            return;
        }
        if (this.showUploadAsset && this.assetForm.value.file.length == 0 && (this.fileName == "Not uploaded")) {
            //////alert"4");
            if (this.showQuize == false) {
                //////alert"upload");
            }
            else {
                this.submitted = true;
                this.showFileUploadError = true;
                return;
            }
        }
        if (this.showLink) {
            //////alert"3");
            this.submitted = true;
            var link = this.assetForm.value.deepLink;
            if (link.length == 0) {
                this.showLinkError = true;
                this.showLinkErrorMsg = "Link Required";
                return;
            }
            else if (link.length < 3) {
                this.showLinkError = true;
                this.showLinkErrorMsg = "Link Minimum 3 Charecters";
                return;
            }
            else if (link.length > 250) {
                this.showLinkError = true;
                this.showLinkErrorMsg = "Link Maximum 250 Charecters";
                return;
            }
            else {
                this.showLinkError = false;
            }
        }
        if (!this.assetForm.value.autoAssin && this.assetMappedGroups.length < 1) {
            //////alert"2");
            this.submitted = true;
            this.showGroupError = true;
            return;
        }
        var formData = new FormData();
        formData.append('id', this.assetForm.value.id);
        var userid = this.currentUser.id;
        var stringForm = userid.toString();
        formData.append('userId', stringForm);
        formData.append('assetType', this.assetForm.value.assetType);
        formData.append('duration', this.assetForm.value.duration);
        formData.append('title', this.assetForm.value.title);
        formData.append('therapeuticArea', this.assetForm.value.therapeuticArea);
        formData.append('description', this.assetForm.value.description);
        formData.append('diseaseState', this.assetForm.value.diseaseState);
        if (this.quizeValue == true) {
            var quiz_1 = "quiz";
            this.assetForm.get('contentType').setValue(this.contentTypes.find(function (x) { return x.name == quiz_1; }).id);
        }
        if (this.sharePoint == "yes") {
            if (this.contentTypes.find(function (x) { return x.name == String("link"); })) {
                this.assetForm.get('contentType').setValue(this.contentTypes.find(function (x) { return x.name == String("link"); }).id);
            }
        }
        formData.append('contenetType', this.assetForm.value.contentType);
        formData.append('product', this.assetForm.value.product);
        formData.append('source', this.assetForm.value.source);
        formData.append('region', this.assetForm.value.region);
        formData.append('deepLink', this.assetForm.value.deepLink);
        formData.append('country', this.assetForm.value.country);
        formData.append('expiration', this.assetForm.value.expiration);
        formData.append('awardPoints', this.assetForm.value.awardPoints);
        formData.append('mandatory', this.assetForm.value.mandatory);
        formData.append('status', this.assetForm.value.status);
        formData.append('autoAssin', this.assetForm.value.autoAssin);
        formData.append('quize', this.assetForm.value.quize);
        //alert("----------");
        //alert(this.assetForm.value.quize);
        ////alertJSON.stringify(this.assetForm.value.quize));
        ////alertJSON.stringify(this.alredyQuize));
        //alert"befor sub");
        //alertthis.alredyQuize);
        //alertthis.fileName);
        //alertthis.sharePoint);
        console.log(this.assetForm.value.quize);
        if (this.fileName == "Not uploaded" && this.alredyQuize != undefined) {
            formData.append('fileName', String(this.alredyQuize));
        }
        else {
            formData.append('fileName', this.fileName);
        }
        //////alert"content type-->> "+this.assetForm.value.contentType);
        formData.append('file', this.assetForm.value.file);
        //formData.append('fileName', this.fileName);
        //alertJSON.stringify(this.fileName));
        if (!this.assetForm.value.autoAssin) {
            //////alert"1");
            this.assetMappedGroups.forEach(function (i) {
                formData.append('mappedGroupIds[]', i.id.toString());
            });
        }
        this.error = false;
        this.message = "";
        if ((this.fileName == "Not uploaded" && this.alredyQuize == undefined) && this.sharePoint == "") {
            this.error = true;
            this.message = "Please enter qize";
        }
        else {
            console.log(this.assetForm.value.contentType);
            //alert"yyyyy");
            //  / alert(this.assetForm.value.contentType);
            this.assetService.addAsset(formData).pipe().subscribe(function (asset) {
                _this.router.navigate(['/admin/asset']);
            });
        }
    };
    AddAssetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-asset',
            template: __webpack_require__(/*! ./add-asset.component.html */ "./src/app/admin/home/assets/add-asset/add-asset.component.html"),
            styles: [__webpack_require__(/*! ./add-asset.component.css */ "./src/app/admin/home/assets/add-asset/add-asset.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_assetservices__WEBPACK_IMPORTED_MODULE_3__["AssetService"],
            src_app_admin_services_groupservice__WEBPACK_IMPORTED_MODULE_4__["GroupService"]])
    ], AddAssetComponent);
    return AddAssetComponent;
}());



/***/ }),

/***/ "./src/app/admin/home/assets/add-asset/index.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/home/assets/add-asset/index.ts ***!
  \******************************************************/
/*! exports provided: AddAssetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _add_asset_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-asset.component */ "./src/app/admin/home/assets/add-asset/add-asset.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AddAssetComponent", function() { return _add_asset_component__WEBPACK_IMPORTED_MODULE_0__["AddAssetComponent"]; });




/***/ }),

/***/ "./src/app/admin/home/assets/assets.component.css":
/*!********************************************************!*\
  !*** ./src/app/admin/home/assets/assets.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".wmd-view-topscroll, .wmd-view {\r\n    overflow-x: scroll;\r\n    overflow-y: hidden;\r\n}\r\n.wmd-view-topscroll::-webkit-scrollbar-track, .wmd-view::-webkit-scrollbar-track\r\n{\r\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n\tborder-radius: 10px;\r\n\tbackground-color: #F5F5F5;\r\n}\r\n.wmd-view-topscroll::-webkit-scrollbar, .wmd-view::-webkit-scrollbar\r\n{\r\n    width: 6px;\r\n    height: 6px;\r\n\tbackground-color: #F5F5F5;\r\n}\r\n.wmd-view-topscroll::-webkit-scrollbar-thumb, .wmd-view::-webkit-scrollbar-thumb\r\n{\r\n\tborder-radius: 10px;\r\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\r\n\tbackground-color: #555;\r\n}\r\n.table {\r\n\ttable-layout: fixed;\r\n}\r\n.tableHead > th:nth-child(1) {\r\n\twidth: 250px;\r\n}\r\n.tableHead > th:nth-child(2) {\r\n\twidth: 125px;\r\n}\r\n.tableHead > th:nth-child(3) {\r\n\twidth: 115px;\r\n}\r\n.tableHead > th:nth-child(4) {\r\n\twidth: 75px;\r\n}\r\n.tableHead > th:nth-child(5) {\r\n\twidth: 60px;\r\n}\r\n.tableHead > th:nth-child(6) {\r\n\twidth: 75px;\r\n}\r\n.tableHead > th:nth-child(7) {\r\n\twidth: 25px;\r\n}\r\n.tableHead > th:nth-child(8) {\r\n\twidth: 25px;\r\n}\r\n.query, .delete {\r\n\tmargin:  0px auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vaG9tZS9hc3NldHMvYXNzZXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7O0NBRUMsaURBQWlEO0NBQ2pELG1CQUFtQjtDQUNuQix5QkFBeUI7QUFDMUI7QUFFQTs7SUFFSSxVQUFVO0lBQ1YsV0FBVztDQUNkLHlCQUF5QjtBQUMxQjtBQUVBOztDQUVDLG1CQUFtQjtDQUNuQixnREFBZ0Q7Q0FDaEQsc0JBQXNCO0FBQ3ZCO0FBRUE7Q0FDQyxtQkFBbUI7QUFDcEI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTtDQUNDLFdBQVc7QUFDWjtBQUNBO0NBQ0MsV0FBVztBQUNaO0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7QUFDQTtDQUNDLFdBQVc7QUFDWjtBQUNBO0NBQ0MsV0FBVztBQUNaO0FBQ0E7Q0FDQyxpQkFBaUI7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hZG1pbi9ob21lL2Fzc2V0cy9hc3NldHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53bWQtdmlldy10b3BzY3JvbGwsIC53bWQtdmlldyB7XHJcbiAgICBvdmVyZmxvdy14OiBzY3JvbGw7XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbn1cclxuLndtZC12aWV3LXRvcHNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2ssIC53bWQtdmlldzo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2tcclxue1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMyk7XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG59XHJcblxyXG4ud21kLXZpZXctdG9wc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhciwgLndtZC12aWV3Ojotd2Via2l0LXNjcm9sbGJhclxyXG57XHJcbiAgICB3aWR0aDogNnB4O1xyXG4gICAgaGVpZ2h0OiA2cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxufVxyXG5cclxuLndtZC12aWV3LXRvcHNjcm9sbDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIsIC53bWQtdmlldzo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWJcclxue1xyXG5cdGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsLjMpO1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICM1NTU7XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcblx0dGFibGUtbGF5b3V0OiBmaXhlZDtcclxufVxyXG4udGFibGVIZWFkID4gdGg6bnRoLWNoaWxkKDEpIHtcclxuXHR3aWR0aDogMjUwcHg7XHJcbn1cclxuLnRhYmxlSGVhZCA+IHRoOm50aC1jaGlsZCgyKSB7XHJcblx0d2lkdGg6IDEyNXB4O1xyXG59XHJcbi50YWJsZUhlYWQgPiB0aDpudGgtY2hpbGQoMykge1xyXG5cdHdpZHRoOiAxMTVweDtcclxufVxyXG4udGFibGVIZWFkID4gdGg6bnRoLWNoaWxkKDQpIHtcclxuXHR3aWR0aDogNzVweDtcclxufVxyXG4udGFibGVIZWFkID4gdGg6bnRoLWNoaWxkKDUpIHtcclxuXHR3aWR0aDogNjBweDtcclxufVxyXG4udGFibGVIZWFkID4gdGg6bnRoLWNoaWxkKDYpIHtcclxuXHR3aWR0aDogNzVweDtcclxufVxyXG4udGFibGVIZWFkID4gdGg6bnRoLWNoaWxkKDcpIHtcclxuXHR3aWR0aDogMjVweDtcclxufVxyXG4udGFibGVIZWFkID4gdGg6bnRoLWNoaWxkKDgpIHtcclxuXHR3aWR0aDogMjVweDtcclxufVxyXG4ucXVlcnksIC5kZWxldGUge1xyXG5cdG1hcmdpbjogIDBweCBhdXRvO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/admin/home/assets/assets.component.html":
/*!*********************************************************!*\
  !*** ./src/app/admin/home/assets/assets.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n \n<app-admin-top-nav></app-admin-top-nav>\n<router-outlet></router-outlet>\n    <!-- Page section start -->\n    <main class=\"main_container\">\n        <div class=\"container\">\n            <div class=\"main_con_inner\">\n          \n\n                <app-admin-side-nav></app-admin-side-nav>\n\n                <!-- right section  start -->\n                <section class=\"right_panel\">\n                       <!--------- Add Groups Start Here ---------->\n  <div class=\"addgroup hide_tab active\" id=\"pop_2\">\n    <!-- <div class=\"add_group_pop\">\n       <div class=\"group_pop_content\">\n            <div class=\"rph_header\">\n                <div class=\"row\">\n                    <div class=\"col-sm-12 col-md-12 col-lg-12 rph_left\">\n                        <h5>Add Asset</h5>\n                    </div>\n                </div>\n            </div>\n       </div>\n    </div> -->\n    <div class=\"right_panel_inner\">\n          <div class=\"rph_header\">\n              <div class=\"row\">\n                  <div class=\"col-sm-6 col-md-6 col-lg-6 rph_left\">\n                      <h5>Assets</h5>\n                  </div>\n\n                  <div class=\"col-sm-6 col-md-6 col-lg-6\">\n                      <div class=\"rph_right\">\n                          <button type=\"button\" id=\"addAsset\" class=\"btn-small bnt_blue\" [routerLink]=\"['/admin/asset/add']\" [queryParams]=\"{'assetId': '0'}\">Add Asset</button>\n                      </div>\n                  </div>\n              </div>\n          </div>\n          <div class=\"right_panel_box group_table\">\n            <!-- <div class=\"wmd-view-topscroll\">\n                <div class=\"scroll-div1\">\n                </div>\n            </div> -->\n            <div class=\"table-responsive wmd-view\">\n              <table class=\"table\">\n                  <thead>\n                      <tr class=\"tableHead\">\n                          <th>Title</th>\n                          <th>Asset Type</th>\n                          <th>Therapeutic Area</th>\n                          <th>Disease State</th>\n                          <th>Product</th>\n                          <th></th>\n                          <th></th>\n                          <th></th>\n                      </tr>\n                  </thead>\n                  <tbody>\n                      <tr *ngFor=\"let asset of assets; index as i\">\n                          <td>{{asset.title}}</td>\n                          <td>{{asset.assetType != null ? asset.assetType.userName:\"\"}}</td>\n                          <td>{{asset.therapeuticArea != null ? asset.therapeuticArea.name:\"\"}}</td>\n                          <td>{{asset.diseaseState != null ? asset.diseaseState.name:\"\"}}</td>\n                          <td>{{asset.product != null ? asset.product.name :\"\"}}</td>\n                          <td>\n                            <div class=\"custom-switch custom-switch-label-onoff d-flex\">\n                                <input class=\"custom-switch-input\" id=\"{{'btn_0'+i}}\" [checked]=\"(asset.active==true) ? false: true\"  (change) =\"assetStatus($event,asset.id)\" type=\"checkbox\">\n                                <label class=\"custom-switch-btn\" for=\"{{'btn_0'+i}}\"></label>\n                            </div>\n                          </td>\n                          <td>\n                               <div class=\"info_btn\"> <button type=\"button\" class=\"query\" [routerLink]=\"['/admin/edit/asset/'+asset.id]\"><img src=\"assets/images/query_icon.png\"></button></div>\n                          </td> \n                           <td>\n                              <button type=\"button\" class=\"delete\" (click)=\"onDeleteAsset($event,asset.id)\"><i class=\"far fa-trash-alt\"></i></button>\n                          </td>\n                      </tr>\n                    </tbody>\n              </table>\n              </div>\n          </div>\n    </div>\n    \n </div>  \n  <!---- Add Groups  End Here ---->\n\n\n                     \n                      \n\n\n                </section> <!-- Right Panel End Here -->\n            </div>\n        </div>\n    </main>\n    <footer class=\"fot_main\">\n      <div class=\"container\">\n        <div class=\"fot_inner\">\n          <div class=\"row\"><div class=\"col-sm-12 col-md-12\"><p>© ALLERGAN 2019</p></div></div>\n        </div>\n      </div>\n    </footer>\n  "

/***/ }),

/***/ "./src/app/admin/home/assets/assets.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/home/assets/assets.component.ts ***!
  \*******************************************************/
/*! exports provided: AssetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsComponent", function() { return AssetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _services_assetservices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/assetservices */ "./src/app/admin/services/assetservices.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AssetsComponent = /** @class */ (function () {
    function AssetsComponent(alertService, assetService) {
        var _this = this;
        this.alertService = alertService;
        this.assetService = assetService;
        this.addAssetShow = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.assetService.getAssets(this.currentUser.id).pipe().subscribe(function (assets) {
            _this.assets = assets.data;
            console.log(_this.assets);
        });
    }
    AssetsComponent.prototype.ngOnInit = function () {
        // $(function(){
        //   console.log($(".wmd-view-topscroll"))
        //   $(".wmd-view-topscroll").scroll(function(){
        //       $(".wmd-view")
        //           .scrollLeft($(".wmd-view-topscroll").scrollLeft());
        //   });
        //   $(".wmd-view").scroll(function(){
        //       $(".wmd-view-topscroll")
        //           .scrollLeft($(".wmd-view").scrollLeft());
        //   });
        // });
        setTimeout(function () {
            // var table = <HTMLElement>document.querySelector('.table');
            // var tableWidth = table.clientWidth;
            // var topScroll = <HTMLElement>document.querySelector('.scroll-div1');
            // topScroll.style.width = tableWidth + 'px';
            // topScroll.style.height = 5 + 'px';
            $(function () {
                $(".wmd-view-topscroll").scroll(function () {
                    $(".wmd-view")
                        .scrollLeft($(".wmd-view-topscroll").scrollLeft());
                });
                $(".wmd-view").scroll(function () {
                    $(".wmd-view-topscroll")
                        .scrollLeft($(".wmd-view").scrollLeft());
                });
            });
        }, 5000);
    };
    AssetsComponent.prototype.addAsset = function () {
        this.addAssetShow = true;
    };
    AssetsComponent.prototype.assetStatus = function ($event, assetId) {
        var _this = this;
        var status = false;
        if ($event.target.checked == false) {
            status = true;
        }
        this.assetService.changeAssetStatus(assetId, status).pipe().subscribe(function (assets) {
            _this.assets = assets.data;
        });
    };
    AssetsComponent.prototype.onDeleteAsset = function ($event, assetId) {
        var _this = this;
        this.assetService.deleteAsset(assetId).pipe().subscribe(function (assets) {
            _this.assets = assets.data;
        });
    };
    AssetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assets',
            template: __webpack_require__(/*! ./assets.component.html */ "./src/app/admin/home/assets/assets.component.html"),
            styles: [__webpack_require__(/*! ./assets.component.css */ "./src/app/admin/home/assets/assets.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["AlertService"],
            _services_assetservices__WEBPACK_IMPORTED_MODULE_2__["AssetService"]])
    ], AssetsComponent);
    return AssetsComponent;
}());



/***/ }),

/***/ "./src/app/admin/home/assets/edit-asset/edit-asset.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/admin/home/assets/edit-asset/edit-asset.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2hvbWUvYXNzZXRzL2VkaXQtYXNzZXQvZWRpdC1hc3NldC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/home/assets/edit-asset/edit-asset.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin/home/assets/edit-asset/edit-asset.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-top-nav></app-admin-top-nav>\n<router-outlet></router-outlet>\n<main class=\"main_container\">\n  <div class=\"container\">\n      <div class=\"main_con_inner\">\n          <app-admin-side-nav></app-admin-side-nav>\n          <!-- right section  start -->\n          <section class=\"right_panel\">\n              <div class=\"user_assets hide_tab active\"  id=\"pop_3\">\n               <form [formGroup]=\"assetForm\" (ngSubmit)=\"onSubmit()\">            \n                  <div class=\"assets_panel\">\n                    <div class=\"right_panel_inner border_dashed\">\n                        <div class=\"rph_header\">\n                            <div class=\"row\">\n                                <div class=\"col-sm-6 col-md-6 col-lg-6 rph_left\">\n                                    <h5>Assets</h5>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"right_panel_box2\">\n                            <div class=\" user_fileds\">\n                                <div class=\"row\">\n                                    <div class=\"col-sm-6 col-md-6 col-lg-6\">\n                                        <div class=\"form-group row\">\n                                          <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                                            <label >Asset Type</label>\n                                          </div>\n                                          <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                                            <select formControlName=\"assetType\" [ngClass]=\"{ 'is-invalid': submitted && f.assetType.errors }\" class=\"custom-select slects_option\" (change)=\"onSelectAssetType($event.target.value)\">\n                                              <option value=\"\">Select AssetType</option>\n                                              <option *ngFor=\"let assetType of assetTypes\" value={{assetType.id}} >{{assetType.userName}}</option>\n                                            </select>\n                                              <div *ngIf=\"submitted && f.assetType.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.assetType.errors.required\">Choose AssetType</div>\n                                              </div>  \n                                        </div>\n                                      </div>\n                                        <div class=\"form-group row\">\n                                          <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                                            <label for=\"lastname\">Title</label>\n                                          </div>\n                                            <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                                            <input type=\"text\" formControlName=\"title\"  class=\"form-control\" id=\"\" [ngClass]=\"{ 'is-invalid': submitted && f.title.errors }\" placeholder=\"\" name=\"lastname\">\n                                             <div *ngIf=\"submitted && f.title.errors\" class=\"invalid-feedback\">\n                                                  <div *ngIf=\"f.title.errors.required\">Title is required</div>\n                                                  <div *ngIf=\"f.title.errors.minlength\">Title must be at least 3 characters</div>\n                                                  <div *ngIf=\"f.title.errors.maxlength\">Title must be max 250 characters</div>\n                                              </div> \n                                          </div>\n                                        </div>\n                                        <div class=\"form-group row\">\n                                          <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                                            <label for=\"\">Description</label>\n                                          </div>\n                                            <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                                            <input type=\"\" formControlName=\"description\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.description.errors }\" id=\"mail\" placeholder=\"\" name=\"\">\n                                            <div *ngIf=\"submitted && f.description.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.description.errors.required\">Description is required</div>\n                                                <div *ngIf=\"f.description.errors.minlength\">Description must be at least  3 characters</div>\n                                                <div *ngIf=\"f.description.errors.maxlength\">Description must be max 50 characters</div>\n                                            </div> \n                                          </div>\n                                        </div>\n                                        <!-- <div class=\"form-group row\" *ngIf=\"showContentTypeDropDown\"> -->\n                                          <!-- <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                                            <label >Content Type</label>\n                                          </div> -->\n                                          <!-- <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                                            <select formControlName=\"contentType\" class=\"custom-select slects_option\" [ngClass]=\"{ 'is-invalid': submitted && showcontentTypeError }\" (change)=\"onSelectContentType($event.target.value)\">\n                                              <option value=\"\">Select ContentType</option>\n                                              <option *ngFor=\"let contentType of contentTypes\" value={{contentType.id}} >{{contentType.name}}</option>\n                                            </select>\n                                            <div *ngIf=\"submitted && showcontentTypeError\" class=\"invalid-feedback\">\n                                                <div>Choose ContentType</div>\n                                            </div> \n                                        </div> -->\n                                      <!-- </div> -->\n                                    </div>\n                                    <div class=\"col-sm-6 col-md-6 col-lg-6\">\n                                        <div class=\"form-group row\">\n                                          <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                                            <label >Duration (min)</label>\n                                          </div>\n                                          <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                                              <input type=\"number\" formControlName=\"duration\" class=\"form-control\" id=\"mail\" placeholder=\"\" name=\"\">\n                                              <div *ngIf=\"submitted && f.duration.errors\" class=\"\">\n                                                  <div *ngIf=\"f.duration.errors.required\">Duration is required</div>\n                                              </div> \n                                            </div>\n                                      </div>\n                                        <div class=\"form-group row\">\n                                          <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                                            <label >Therapeutic Area</label>\n                                          </div>\n                                          <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                                              <select formControlName=\"therapeuticArea\"  [ngClass]=\"{ 'is-invalid': submitted && f.therapeuticArea.errors }\" class=\"custom-select slects_option\" (change)=\"onSelectTherapeuticArea($event.target.value)\">\n                                                  <option value=\"\">Select TherapeuticArea</option>\n                                                <option *ngFor=\"let therapeuticArea of therapeuticAreas\" value={{therapeuticArea.id}} >{{therapeuticArea.name}}</option>\n                                              </select>\n                                              <div *ngIf=\"submitted && f.therapeuticArea.errors\" class=\"invalid-feedback\">\n                                                  <div *ngIf=\"f.therapeuticArea.errors.required\">Choose  TherapeuticArea</div>\n                                              </div>  \n                                        </div>\n                                      </div>\n                                        <div class=\"form-group row\">\n                                          <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                                            <label >Disease State</label>\n                                          </div>\n                                          <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                                            <select formControlName=\"diseaseState\" [ngClass]=\"{ 'is-invalid': submitted && showDSError }\" class=\"custom-select slects_option\" (change)=\"onSelectDiseaseState($event.target.value)\" >\n                                              <option value=\"\" >Select DiseaseStates</option>\n                                              <option *ngFor=\"let diseaseState of diseaseStates\" value={{diseaseState.id}} >{{diseaseState.name}}</option>\n                                          </select>\n                                           <div *ngIf=\"submitted && showDSError\" class=\"invalid-feedback\">\n                                              <div >Choose  DiseaseState</div>\n                                          </div> \n                                        </div>\n                                      </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <!-- </form> -->\n                        </div>\n                    </div>\n                    \n                   <div class=\"right_panel_inner border_dashed\">\n                      <div class=\"right_panel_box2\">\n                          <div class=\"user_fileds\">\n\n                              <div *ngIf=\"error\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\n                                  {{message}} \n                                 <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                                   <span aria-hidden=\"true\">&times;</span>\n                                 </button>\n                               </div>\n\n                              <div class=\"row\">\n                                  <div class=\"col-sm-6 col-md-6 col-lg-6\">\n                                      <div class=\"form-group row\">\n                                          <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                                            <label >Product</label>\n                                          </div>\n                                          <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                                            <select formControlName=\"product\" [ngClass]=\"{ 'is-invalid': submitted && showProductError }\" class=\"custom-select slects_option\" (change)=\"onSelectProduct($event.target.value)\">\n                                              <option value=\"\">Select Product</option>\n                                             <option *ngFor=\"let product of products\" value={{product.id}} >{{product.name}}</option>\n                                          </select>\n                                          <div *ngIf=\"submitted && showProductError\" class=\"invalid-feedback\">\n                                              <div>Choose  Product</div>\n                                          </div> \n                                        </div>\n                                      </div>\n                                      <div class=\"form-group row\">\n                                          <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                                            <label >Region</label>\n                                          </div>\n                                          <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                                            <select formControlName=\"region\" class=\"custom-select slects_option\" (change)=\"onSelectRegion($event.target.value)\">\n                                              <option value=\"\">Select Region</option>\n                                              <option *ngFor=\"let region of regions\" value={{region.id}} >{{region.name}}</option>\n                                            </select>\n                                            <div *ngIf=\"submitted && f.region.errors\" class=\"\">\n                                              <div *ngIf=\"f.region.errors.required\">Choose  Region</div>\n                                          </div> \n                                        </div>\n                                      </div>\n                                      <div class=\"form-group row\">\n                                          <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                                            <label >Country</label>\n                                          </div>\n                                          <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                                            <select formControlName=\"country\" class=\"custom-select slects_option\">\n                                              <option value=\"\">Select Country</option>\n                                              <option *ngFor=\"let country of countries\" value={{country.id}} >{{country.name}}</option>\n                                          </select>\n                                          <div *ngIf=\"submitted && f.country.errors\" class=\"\">\n                                            <div *ngIf=\"f.country.errors.required\">Choose Country</div>\n                                        </div> \n                                        </div>\n                                      </div>\n                                      <div class=\"form-group row\">\n                                          <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                                            <label >Expiration Duration (days)</label>\n                                          </div>\n                                          <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                                              <input type=\"number\" formControlName=\"expiration\" class=\"form-control\" id=\"mail\" placeholder=\"\" name=\"\">\n                                              <div *ngIf=\"submitted && f.expiration.errors\" class=\"\">\n                                                  <div *ngIf=\"f.expiration.errors.required\">Expiration Duration (days) Required</div>\n                                              </div>\n                                          </div>\n                                      </div>\n                                  </div>\n                                  <div class=\"col-sm-6 col-md-6 col-lg-6\">\n                                      <div class=\"form-group row\">\n                                          <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                                            <label >Source</label>\n                                          </div>\n                                          <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                                              <select formControlName=\"source\"  [ngClass]=\"{ 'is-invalid': submitted && f.source.errors }\" class=\"custom-select slects_option\" (change)=\"onSelectSource($event.target.value)\">\n                                                <option value=\"\">Select Source</option>\n                                                <option *ngFor=\"let source of sources\" value={{source.id}} >{{source.name}}</option>\n                                              </select>\n                                              <div *ngIf=\"submitted && f.source.errors\" class=\"invalid-feedback\">\n                                                <div *ngIf=\"f.source.errors.required\">Choose Source</div>\n                                            </div> \n                                          </div>\n                                      </div>\n                                    <div *ngIf=\"showQuize && showUploadAsset\" class=\"form-group row\" >\n                                        <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                                          <label for=\"createdby\">Link</label>\n                                        </div>\n                                        <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                                          <div  class=\"custom-file upload_file\">\n                                            <input type=\"file\"  class=\"custom-file-input\" id=\"customFile\" (change)=\"onFileSelect($event)\" [ngClass]=\"{ 'is-invalid': submitted && showFileUploadError }\">\n                                            <label class=\"custom-file-label\" for=\"customFile\">{{fileName}}</label>\n                                            <div *ngIf=\"submitted && showFileUploadError\" class=\"invalid-feedback\">\n                                                <div >Upload a file</div>\n                                            </div> \n                                          </div>\n                                        </div>\n                                      </div> \n                                      <div *ngIf=\"showQuizDropDown\" class=\"form-group row\" >\n                                        <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                                          <label for=\"createdby\">Quiz</label>\n                                        </div>\n                                        <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                                             <select formControlName =\"quize\" class=\"custom-select slects_option\" [ngClass]=\"{ 'is-invalid': submitted && showQuizError }\" [(ngModel)]=\"alreadyQuiz\" (change)=\"onSelectQuiz($event.target.value)\">\n                                                <option value=\"\">Select Quiz</option>\n                                                <option   [ngValue]=\"quize\" *ngFor=\"let quize of quizes\"  >{{quize.title}}</option>\n                                              </select>   \n                                              <div *ngIf=\"submitted && showQuizError\" class=\"invalid-feedback\">\n                                                  <div>Choose Quiz</div>\n                                              </div>                                           \n                                        </div>\n                                      </div> \n                                      <div *ngIf=\"showLink\" class=\"form-group row\" >\n                                          <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                                            <label for=\"createdby\">Link</label>\n                                          </div>\n                                          <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                                              <input formControlName =\"deepLink\" type=\"\" class=\"form-control\" id=\"mail\" placeholder=\"\" name=\"\"(change)=\"onChangeLink($event.target.value)\" [ngClass]=\"{ 'is-invalid': submitted && showLinkError }\">\n                                              <div *ngIf=\"submitted && showLinkError\" class=\"invalid-feedback\">\n                                                  <div>{{showLinkErrorMsg}}</div>\n                                              </div>   \n                                          </div>\n                                        </div> \n                                      <div class=\"form-group row\">\n                                        <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                                          <label for=\"updadayby\">Mandatory</label>\n                                        </div>\n                                        <div class=\"col-sm-8 col-md-8 col-lg-8 user_buts mandatory\">\n                                          <div class=\"\">\n                                            <input type=\"radio\" formControlName=\"mandatory\"  [value]=\"true\">\n                                            <label  >Yes</label>\n                                          </div>\n                                          <div class=\"\">\n                                            <input type=\"radio\" formControlName=\"mandatory\"  [value]=\"false\">\n                                            <label  >No</label>\n                                            </div>                                       \n                                        </div>\n                                      </div>\n                                      \n                                  </div>\n                              </div>\n                          </div>\n                    </div>\n                  </div>\n                   <div class=\"right_panel_inner\">\n                      <div class=\"right_panel_box2\">\n                          <div class=\" user_fileds\">\n                              <div class=\"row\">\n                                  <div class=\"col-sm-6 col-md-6 col-lg-6\">\n                                      <div class=\"form-group row\">\n                                          <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                                            <label >Points</label>\n                                          </div>\n                                          <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                                            <input formControlName=\"awardPoints\" type=\"number\" class=\"form-control\" id=\"mail\" placeholder=\"\" name=\"\">\n                                            <div *ngIf=\"submitted && f.awardPoints.errors\" class=\"\">\n                                                <div *ngIf=\"f.awardPoints.errors.required\">Points Required</div>\n                                            </div> \n                                          </div>\n                                      </div>\n                                  </div>\n                                  <div class=\"col-sm-6 col-md-6 col-lg-6\">\n                                      <div class=\"form-group row\">\n                                          <!-- <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                                            <label for=\"mname\">Status</label>\n                                          </div> -->\n                                          <!-- <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                                               <div class=\"custom-switch custom-switch-label-onoff d-flex\">\n                                                 \n                                                  <input class=\"custom-switch-input\" id=\"btn_00\" formControlName =\"status\"  [checked]=\"(assets?.active==true) ? false: true\"  type=\"checkbox\">\n                                                  <label class=\"custom-switch-btn\" for=\"btn_013\"></label>\n                                              </div>\n                                           \n                                              </div> -->\n                                        </div>\n                                  </div>\n                                 <div *ngIf=\"showGroup\" class=\"col-sm-12 col-md-12 col-lg-12 groups_maps\">\n                                      <div class=\"row\">\n                                        <div class=\"col-sm-6 col-md-6 col-lg-6\">\n                                          <h5>Groups</h5>\n                                        </div>\n                                         <div class=\"col-sm-6 col-md-6 col-lg-6\">\n                                          <h5 class=\"space_1\">Mappings</h5>\n                                        </div>\n                                         <div class=\" swipe_section\">\n                                         <div class=\"swipe_boxes\">\n                                          <ul *ngFor=\"let group of groups\">\n                                            <li (click)=\"pushRight(group)\" [value]=\"group.id\">{{group.name}}</li>\n                                            <!-- <li>Non MSL Group</li>\n                                            <li>Glaucoma Group.</li> -->\n                                          </ul>\n                                        </div>\n                                          <div class=\"swipe_arrow\">\n                                            <div class=\"swipe_btn\">\n                                              <span class=\"arrow_1\"><img src=\"assets/images/arrow_1.png\"></span>\n                                              <span class=\"arrow_2\"><img src=\"assets/images/arrow_2.png\"></span>\n                                            </div>\n                                          </div>\n                                         <div class=\"swipe_boxes\">\n                                           <ul *ngFor=\"let assetGroup of assetMappedGroups\">\n                                            <li (click)=\"pushLeft(assetGroup)\" [value]=\"assetGroup.id\">{{assetGroup.name}}</li>\n                                          </ul>\n                                        </div>\n                                        </div>\n                                    \n                                      </div>\n                                      <div *ngIf=\"submitted && showGroupError\" >\n                                          <div style=\"width: 100%;\n                                          margin-top: .25rem;\n                                          font-size: 85%;\n                                          color: #dc3545;\">Map atleast one Group</div>\n                                      </div> \n\n                                  </div>\n                              </div>\n                              <div class=\"form-group row mt-5 autoass\">\n                                        \n                                        <div class=\"col-sm-6 col-md-6 col-lg-6 user_buts mandatory\">\n                                          <label class=\"mr-3\" >Auto Assignment</label>\n                                           <div class=\"\">\n                                              <input type=\"radio\" formControlName=\"autoAssin\"   [value]=\"true\" (change)=\"onClickAutoAssign(true)\">\n                                              <label  >Yes</label>\n                                            </div>\n                                            <div class=\"\">\n                                              <input type=\"radio\" formControlName=\"autoAssin\"  [value]=\"false\" (change)=\"onClickAutoAssign(false)\">\n                                              <label  >No</label>\n                                              </div>\n                               \n                                        </div>\n                                      </div>\n                                      <input type=\"hidden\" formControlName=\"id\" class=\"form-control \" name=\"id\" [value]=\"0\">\n                              <div class=\"buttons\">\n                                <button type=\"button\" class=\" btn-small\" [routerLink]=\"['/admin/asset']\">Cancel</button>\n                                <button type=\"submit\" class=\" btn-small bnt_blue\">Apply</button>\n                              </div>\n                          </div>\n                      </div>\n                  </div>\n                </div>\n               </form>\n             </div>  \n          <!---- User Aseets  End Here ---->\n          </section> \n      </div>\n  </div>\n</main>\n<footer class=\"fot_main\">\n  <div class=\"container\">\n    <div class=\"fot_inner\">\n      <div class=\"row\"><div class=\"col-sm-12 col-md-12\"><p>© ALLERGAN 2019</p></div></div>\n   </div>\n</div>\n</footer>"

/***/ }),

/***/ "./src/app/admin/home/assets/edit-asset/edit-asset.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/home/assets/edit-asset/edit-asset.component.ts ***!
  \**********************************************************************/
/*! exports provided: EditAssetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAssetComponent", function() { return EditAssetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_assetservices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/assetservices */ "./src/app/admin/services/assetservices.ts");
/* harmony import */ var _services_groupservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/groupservice */ "./src/app/admin/services/groupservice.ts");
/* harmony import */ var _model_Quize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../model/Quize */ "./src/app/admin/model/Quize.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EditAssetComponent = /** @class */ (function () {
    function EditAssetComponent(formBuilder, router, route, assetService, groupService) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.assetService = assetService;
        this.groupService = groupService;
        this.error = false;
        this.message = "";
        this.showQuize = true;
        this.submitted = false;
        this.fileName = "Not uploaded";
        this.sources = [{ id: 0, name: "" }];
        this.quizeValue = true;
        this.alreadyQuiz = new _model_Quize__WEBPACK_IMPORTED_MODULE_5__["Quize"]();
        this.groups = [{ id: 0, name: "" }];
        this.sharePoint = "";
        this.showQuizDropDown = false;
        this.showContentTypeDropDown = true;
        this.showUploadAsset = false;
        this.showLink = false;
        this.showGroup = true;
        this.showDSError = false;
        this.showProductError = false;
        this.showQuizError = false;
        this.showcontentTypeError = false;
        this.showFileUploadError = false;
        this.assetMappedGroups = [{ id: 0, name: "" }];
        this.showLinkError = false;
        this.showLinkErrorMsg = "Link Required";
        this.showGroupError = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.route.params.subscribe(function (params) {
            var assetId = params['assetId'];
            if (assetId > 0) {
                _this.assetService.getAsset(assetId, _this.currentUser.id).subscribe(function (asset) {
                    _this.assets = asset.data;
                    _this.f.id.setValue(asset.data.id);
                    _this.assetMappedGroups = asset.data.groups;
                    _this.removeDuplicateGroups();
                    if (asset.data.assetType != null) {
                        _this.f.assetType.setValue(asset.data.assetType.id);
                        _this.onSelectAssetType(asset.data.assetType.id);
                    }
                    if (asset.data.therapeuticArea != null) {
                        _this.f.therapeuticArea.setValue(asset.data.therapeuticArea.id);
                        _this.onSelectTherapeuticArea(asset.data.therapeuticArea.id);
                    }
                    _this.f.duration.setValue(asset.data.duration);
                    _this.f.title.setValue(asset.data.title);
                    _this.f.description.setValue(asset.data.description);
                    if (asset.data.diseaseState != null) {
                        _this.f.diseaseState.setValue(asset.data.diseaseState.id);
                    }
                    if (asset.data.product != null) {
                        _this.f.product.setValue(asset.data.product.id);
                    }
                    if (asset.data.contenetType != null) {
                        _this.f.contentType.setValue(asset.data.contenetType);
                    }
                    _this.f.source.setValue(asset.data.source);
                    _this.onSelectSource(asset.data.source);
                    if (asset.data.source == 4) {
                        _this.f.quize.setValue(asset.data.fileName);
                    }
                    else if (asset.data.source == 2) {
                    }
                    else {
                        _this.fileName = asset.data.fileName;
                    }
                    if (asset.data.region != null) {
                        _this.f.region.setValue(asset.data.region.id);
                        _this.onSelectRegion(asset.data.region.id);
                    }
                    if (asset.data.country != null) {
                        _this.f.country.setValue(asset.data.country.id);
                    }
                    _this.f.expiration.setValue(asset.data.expiryDuartion);
                    _this.f.awardPoints.setValue(asset.data.awardPoints);
                    _this.f.mandatory.setValue(asset.data.mandatory);
                    if (asset.data.deepLink == null) {
                        _this.f.deepLink.setValue(" ");
                    }
                    else {
                        _this.f.deepLink.setValue(asset.data.deepLink);
                    }
                    _this.fileName = asset.data.fileName;
                    _this.f.autoAssin.setValue(asset.data.autoAssignment);
                    if (asset.data.autoAssignment) {
                        _this.showGroup = false;
                    }
                    _this.f.status.setValue(true);
                });
            }
        });
        this.assetService.getAssetTypes().pipe().subscribe(function (assetTypes) {
            _this.assetTypes = assetTypes.data;
            _this.assetTypeName = _this.assetTypes[0];
        });
        this.assetService.getRegion().pipe().subscribe(function (regions) {
            _this.regions = regions.data;
        });
        this.assetService.getSources().pipe().subscribe(function (sources) {
            _this.sources = sources.data;
            if (_this.sources.length >= 0) {
                _this.sharePoint = "yes";
            }
        });
        this.assetService.getContentTypes().pipe().subscribe(function (contentTypes) {
            _this.contentTypes = contentTypes.data;
        });
        this.groupService.getGroups().pipe().subscribe(function (groups) {
            _this.groups = groups.data;
        });
    }
    EditAssetComponent.prototype.ngOnInit = function () {
        this.assetForm = this.formBuilder.group({
            id: [0],
            assetType: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            therapeuticArea: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            duration: [60, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50)]],
            description: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(250)]],
            expiration: [30, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            awardPoints: [100, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            status: [true],
            autoAssin: [false],
            mandatory: [false],
            deepLink: [''],
            product: [''],
            diseaseState: [''],
            contentType: [''],
            source: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]],
            region: [''],
            country: [''],
            quize: [''],
            file: [''],
        });
    };
    EditAssetComponent.prototype.onSelectAssetType = function (assetTypeId) {
        var _this = this;
        if (assetTypeId != null && assetTypeId > 0) {
            this.assetService.getTherapeuticAreas(assetTypeId).pipe().subscribe(function (therapeuticAreas) {
                _this.therapeuticAreas = therapeuticAreas.data;
            });
        }
        else {
            this.therapeuticAreas = null;
            this.diseaseStates = null;
            this.products = null;
            this.f.therapeuticArea.setValue('');
            this.f.product.setValue('');
            this.f.diseaseState.setValue('');
        }
    };
    EditAssetComponent.prototype.onSelectTherapeuticArea = function (therapeuticAreaId) {
        var _this = this;
        if (therapeuticAreaId != null && therapeuticAreaId > 0) {
            this.assetService.getDiseaseStateForTA(therapeuticAreaId).pipe().subscribe(function (diseaseStates) {
                _this.diseaseStates = diseaseStates.data;
            });
            this.assetService.getProductsForTA(therapeuticAreaId).pipe().subscribe(function (products) {
                _this.products = products.data;
            });
        }
        else {
            this.diseaseStates = null;
            this.products = null;
            this.f.product.setValue('');
            this.f.diseaseState.setValue('');
        }
    };
    EditAssetComponent.prototype.onSelectDiseaseState = function (diseaseStateId) {
        if (diseaseStateId != null && diseaseStateId > 0) {
            this.showDSError = false;
            this.showProductError = false;
            return;
        }
        else if (this.assetForm.value.product == null && this.assetForm.value.product < 0) {
            this.showDSError = true;
            this.showProductError = true;
            return;
        }
        else {
            this.showDSError = true;
            this.showProductError = true;
        }
    };
    EditAssetComponent.prototype.onSelectProduct = function (productId) {
        if (productId != null && productId > 0) {
            this.showDSError = false;
            this.showProductError = false;
            return;
        }
        else if (this.assetForm.value.diseaseState == null && this.assetForm.value.diseaseState < 0) {
            this.showDSError = true;
            this.showProductError = true;
            return;
        }
        else {
            this.showDSError = true;
            this.showProductError = true;
        }
    };
    EditAssetComponent.prototype.onSelectQuiz = function (quizId) {
        if (quizId == undefined && quizId != null) {
            ////alert(quizId);
            // this.fileName=String(quizId);
            //this.showQuizError = false;
            //return;
        }
        //this.showQuizError = true;
    };
    EditAssetComponent.prototype.onSelectRegion = function (regionId) {
        var _this = this;
        this.assetService.getCountries(regionId).pipe().subscribe(function (countries) {
            _this.countries = countries.data;
        });
    };
    EditAssetComponent.prototype.onFileSelect = function (event) {
        var _this = this;
        if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.assetForm.get('file').setValue(file);
            this.fileName = file.name;
            this.quizeValue = false;
            this.assetForm.get('contentType').setValue(this.contentTypes.find(function (x) { return x.name == _this.fileName.split('.').pop(); }).id);
            this.showFileUploadError = false;
        }
    };
    EditAssetComponent.prototype.onSelectSource = function (sourceId) {
        var _this = this;
        this.sharePoint = "";
        //this.alreadyQuiz=undefined;
        this.showQuize = true;
        this.quizeValue = false;
        if (sourceId != undefined && sourceId != null) {
            if (this.sources.find(function (x) { return x.id == sourceId; })) {
                if (this.sources.find(function (x) { return x.id == sourceId; }).name === "Quiz") {
                    this.showQuize = false;
                    this.assetForm.get('file').setValue('');
                    this.fileName = "Not uploaded";
                    this.quizeValue = true;
                }
                if (this.sources.find(function (x) { return x.id == sourceId; }).name === "share point") {
                    this.sharePoint = "yes";
                    this.assetForm.get('file').setValue('');
                    this.fileName = "Not uploaded";
                    this.quizeValue = false;
                    this.showLink = true;
                    // this.alreadyQuiz=undefined;
                }
            }
        }
        this.showQuizDropDown = false;
        this.showLink = false;
        if (sourceId == 4) {
            this.showContentTypeDropDown = false;
            this.showQuizDropDown = true;
            this.showUploadAsset = false;
            this.showLink = false;
            this.route.queryParams.subscribe(function (params) {
                _this.assetService.getQuizes().pipe().subscribe(function (quizes) {
                    _this.quizes = quizes.data;
                    if (_this.assets != undefined && _this.assets.quize != null) {
                        _this.alreadyQuiz = _this.quizes.find(function (x) { return x.id == _this.assets.quize.id; });
                        _this.assetForm.get('file').setValue('');
                        _this.fileName = "Not uploaded";
                        _this.quizeValue = true;
                        //  this.showLink = false;
                        _this.showUploadAsset = false;
                    }
                });
                return;
            });
        }
        else if (sourceId == 2) {
            this.showQuizDropDown = false;
            this.showUploadAsset = false;
            this.showLink = true;
            this.showContentTypeDropDown = false;
            this.f.contentType.setValue('');
            return;
        }
        this.showUploadAsset = true;
        this.showContentTypeDropDown = true;
        this.showcontentTypeError = (this.assetForm.value.contentType.length == 0 && this.submitted);
    };
    EditAssetComponent.prototype.onClickAutoAssign = function (flag) {
        this.showGroup = !flag;
    };
    EditAssetComponent.prototype.onChangeLink = function (link) {
        if (link.length == 0) {
            this.showLinkError = true;
            this.showLinkErrorMsg = "Link Required";
            return;
        }
        else if (link.length < 3) {
            this.showLinkError = true;
            this.showLinkErrorMsg = "Link Minimum 3 Charecters";
            return;
        }
        else if (link.length > 250) {
            this.showLinkError = true;
            this.showLinkErrorMsg = "Link Maximum 250 Charecters";
            return;
        }
        else {
            this.showLinkError = false;
        }
    };
    EditAssetComponent.prototype.pushRight = function (group) {
        this.assetMappedGroups.push(group);
        this.groups = this.groups.filter(function (ele) { return ele['name'] != group.name; });
        this.showGroupError = false;
    };
    EditAssetComponent.prototype.pushLeft = function (group) {
        this.groups.push(group);
        this.assetMappedGroups = this.assetMappedGroups.filter(function (ele) { return ele['name'] != group.name; });
        if (this.assetMappedGroups.length < 2) {
            this.showGroupError = true;
        }
    };
    EditAssetComponent.prototype.removeDuplicateGroups = function () {
        for (var i = this.assetMappedGroups.length - 1; i >= 0; i--) {
            for (var j = 0; j < this.groups.length; j++) {
                if (this.assetMappedGroups[i] && (this.assetMappedGroups[i]['name'] === this.groups[j]['name'])) {
                    this.groups.splice(j, 1);
                }
            }
        }
    };
    Object.defineProperty(EditAssetComponent.prototype, "f", {
        get: function () { return this.assetForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditAssetComponent.prototype.onSubmit = function () {
        var _this = this;
        this.error = false;
        if (this.assetForm.invalid) {
            this.submitted = true;
            if ((this.assetForm.value.diseaseState.length == 0) && (this.assetForm.value.product.length == 0)) {
                this.showDSError = true;
                this.showProductError = true;
            }
            if (this.showContentTypeDropDown && this.assetForm.value.contentType.length == 0) {
                this.showcontentTypeError = true;
            }
            if (this.showUploadAsset && this.assetForm.value.file.length == 0 && this.fileName.includes("Not uploaded")) {
                this.showFileUploadError = true;
            }
            if (this.showLink) {
                var link = this.assetForm.value.deepLink;
                if (link.length == 0) {
                    this.showLinkError = true;
                    this.showLinkErrorMsg = "Link Required";
                    return;
                }
                else if (link.length < 3) {
                    this.showLinkError = true;
                    this.showLinkErrorMsg = "Link Minimum 3 Charecters";
                    return;
                }
                else if (link.length > 250) {
                    this.showLinkError = true;
                    this.showLinkErrorMsg = "Link Maximum 250 Charecters";
                    return;
                }
                else {
                    this.showLinkError = false;
                }
            }
            return;
        }
        if ((this.assetForm.value.diseaseState.length == 0) && (this.assetForm.value.product.length == 0)) {
            this.submitted = true;
            this.showDSError = true;
            this.showProductError = true;
            return;
        }
        if (this.showUploadAsset && this.assetForm.value.file.length == 0 && (this.fileName == "Not uploaded")) {
            if (this.showQuize == false) {
            }
            else {
                this.submitted = true;
                this.showFileUploadError = true;
                return;
            }
        }
        if (this.showLink) {
            this.submitted = true;
            var link = this.assetForm.value.deepLink;
            if (link.length == 0) {
                this.showLinkError = true;
                this.showLinkErrorMsg = "Link Required";
                return;
            }
            else if (link.length < 3) {
                this.showLinkError = true;
                this.showLinkErrorMsg = "Link Minimum 3 Charecters";
                return;
            }
            else if (link.length > 250) {
                this.showLinkError = true;
                this.showLinkErrorMsg = "Link Maximum 250 Charecters";
                return;
            }
            else {
                this.showLinkError = false;
            }
        }
        if (!this.assetForm.value.autoAssin && this.assetMappedGroups.length < 1) {
            this.submitted = true;
            this.showGroupError = true;
            return;
        }
        var formData = new FormData();
        formData.append('id', this.assetForm.value.id);
        var userid = this.currentUser.id;
        var stringForm = userid.toString();
        formData.append('userId', stringForm);
        formData.append('assetType', this.assetForm.value.assetType);
        formData.append('duration', this.assetForm.value.duration);
        formData.append('title', this.assetForm.value.title);
        formData.append('therapeuticArea', this.assetForm.value.therapeuticArea);
        formData.append('description', this.assetForm.value.description);
        formData.append('diseaseState', this.assetForm.value.diseaseState);
        if (this.quizeValue == true) {
            var quiz_1 = "quiz";
            this.assetForm.get('contentType').setValue(this.contentTypes.find(function (x) { return x.name == quiz_1; }).id);
        }
        if (this.sharePoint == "yes") {
            if (this.contentTypes.find(function (x) { return x.name == String("link"); })) {
                this.assetForm.get('contentType').setValue(this.contentTypes.find(function (x) { return x.name == String("link"); }).id);
            }
        }
        formData.append('contenetType', this.assetForm.value.contentType);
        formData.append('product', this.assetForm.value.product);
        formData.append('source', this.assetForm.value.source);
        formData.append('region', this.assetForm.value.region);
        //formData.append('deepLink', this.assetForm.value.deepLink);
        formData.append('country', this.assetForm.value.country);
        formData.append('expiration', this.assetForm.value.expiration);
        formData.append('awardPoints', this.assetForm.value.awardPoints);
        formData.append('mandatory', this.assetForm.value.mandatory);
        formData.append('status', this.assetForm.value.status);
        formData.append('autoAssin', this.assetForm.value.autoAssin);
        if (this.alreadyQuiz.id == undefined) {
            formData.append('quize', "");
        }
        else {
            formData.append('quize', String(this.alreadyQuiz.id));
        }
        console.log(this.assetForm.value.quize);
        if (this.fileName == "Not uploaded" && this.alreadyQuiz.id != undefined && this.sharePoint != "yes") {
            formData.append('deepLink', " ");
            formData.append('fileName', String(this.alreadyQuiz.id));
        }
        else if (this.fileName == "Not uploaded" && this.alreadyQuiz.id != undefined && this.sharePoint == "yes") {
            formData.append('deepLink', this.assetForm.value.deepLink);
            formData.append('fileName', "Not uploaded");
        }
        else if (this.fileName != "Not uploaded" && this.alreadyQuiz.id == undefined && this.sharePoint == "yes") {
            formData.append('deepLink', this.assetForm.value.deepLink);
            formData.append('fileName', "Not uploaded");
        }
        else if (this.fileName == "Not uploaded" && this.alreadyQuiz.id == undefined && this.sharePoint == "yes") {
            formData.append('deepLink', this.assetForm.value.deepLink);
            formData.append('fileName', "Not uploaded");
        }
        else {
            formData.append('deepLink', " ");
            formData.append('fileName', this.fileName);
        }
        formData.append('file', this.assetForm.value.file);
        if (!this.assetForm.value.autoAssin) {
            this.assetMappedGroups.forEach(function (i) {
                formData.append('mappedGroupIds[]', i.id.toString());
            });
        }
        this.error = false;
        this.message = "";
        if ((this.fileName == "Not uploaded" && this.alreadyQuiz.id == undefined) && this.sharePoint == "") {
            this.error = true;
            this.message = "Please enter qize";
        }
        else {
            console.log(this.assetForm.value.contentType);
            this.assetService.addAsset(formData).pipe().subscribe(function (asset) {
                _this.router.navigate(['/admin/asset']);
            });
        }
    };
    EditAssetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-asset',
            template: __webpack_require__(/*! ./edit-asset.component.html */ "./src/app/admin/home/assets/edit-asset/edit-asset.component.html"),
            styles: [__webpack_require__(/*! ./edit-asset.component.css */ "./src/app/admin/home/assets/edit-asset/edit-asset.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_assetservices__WEBPACK_IMPORTED_MODULE_3__["AssetService"],
            _services_groupservice__WEBPACK_IMPORTED_MODULE_4__["GroupService"]])
    ], EditAssetComponent);
    return EditAssetComponent;
}());



/***/ }),

/***/ "./src/app/admin/home/assets/index.ts":
/*!********************************************!*\
  !*** ./src/app/admin/home/assets/index.ts ***!
  \********************************************/
/*! exports provided: AssetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets.component */ "./src/app/admin/home/assets/assets.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AssetsComponent", function() { return _assets_component__WEBPACK_IMPORTED_MODULE_0__["AssetsComponent"]; });




/***/ }),

/***/ "./src/app/admin/home/batch-import/batch-import.component.css":
/*!********************************************************************!*\
  !*** ./src/app/admin/home/batch-import/batch-import.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ==============Batch Import================= */\r\n.batch_import_inner {\r\n\tbackground: #fff;\r\n    border-radius: 10px;\r\n    margin-right: 10px;\r\n    padding: 30px 35px;\r\n    box-shadow: 1px 1px 10px 0px rgba(0,0,0, 0.1);\r\n    position: relative;\r\n}\r\n.batch_import_type_inner {\r\n\tmargin: 0px;\r\n}\r\nlabel {\r\n    cursor: pointer;\r\n}\r\n.info_txt {\r\n\tpadding: 0px;\r\n}\r\n.info_txt p {\r\n\tpadding: 15px;\r\n    background-color: #ecf7ec;\r\n    color: #169a1e;\r\n\tfont-size: 14px;\r\n\tborder-radius: 8px;\r\n}\r\n.import_formate {\r\n\tpadding: 0px;\r\n}\r\n.import_list {\r\n\tlist-style: none;\r\n    padding: 12px 15px;\r\n    display: flex;\r\n    background-color: #ebebeb;\r\n    border-radius: 8px;\r\n}\r\n.import_list li{\r\n\tdisplay: inline-block;\r\n\tpadding: 0px;\r\n}\r\n.import_list li a{\r\n\tcolor: #4b4b4b;\r\n\tfont-size: 14px;\r\n    text-decoration: none;\r\n    cursor:pointer;\r\n}\r\n.import_list li a:hover {\r\n\tfont-weight: 700;\r\n}\r\n.upload_file {\r\n\tpadding: 0px;\r\n}\r\n.upload_file > p {\r\n\tborder-bottom: 1px solid #ececec;\r\n\tpadding-bottom: 10px;\r\n}\r\n.upload_users_wrap > h3 {\r\n\tdisplay: inline-block;\r\n    margin-top: 10px;\r\n}\r\n.upload_assets_wrap > h3 {\r\n\tdisplay: inline-block;\r\n    margin-top: 13px;\r\n}\r\n.upload_questions_wrap > h3 {\r\n\tdisplay: inline-block;\r\n    margin-top: 16px;\r\n}\r\n.form-title {\r\n    float: left;\r\n}\r\n.upload_sheet {\r\n\tdisplay: inline-block;\r\n\tfloat: right;\r\n}\r\n.upload_sheet > .batch_upload[type=\"file\"] {\r\n\tdisplay: none;\r\n}\r\n.upload_sheet > label {\r\n    width: 230px;\r\n    box-shadow: 3px 3px 3px 0px rgba(0,0,0, 0.1);\r\n    padding: 10px 15px 10px 100px;\r\n    margin: 0px;\r\n    border-radius: 200px;\r\n    text-align: right;\r\n    color: #4b4b4b;\r\n    position: relative;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n}\r\n.upload_sheet > label::before {\r\n\tcontent: 'Choose file';\r\n    display: inline-block;\r\n    font-size: 12px;\r\n    top: 50%;\r\n    left: 8px;\r\n    position: absolute;\r\n    transform: translateY(-50%);\r\n    box-shadow: 3px 3px 8px 0px rgba(0,0,0, 0.1);\r\n    border-radius: 8px;\r\n    padding: 2px 8px;\r\n}\r\n.btn_upload {\r\n\tpadding: 6px 25px;\r\n    background-color: #626262;\r\n    color: #fff;\r\n    font-size: 14px;\r\n    border-radius: 200px;\r\n    float: right;\r\n    margin: 8px 15px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vaG9tZS9iYXRjaC1pbXBvcnQvYmF0Y2gtaW1wb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0RBQWdEO0FBQ2hEO0NBQ0MsZ0JBQWdCO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsNkNBQTZDO0lBQzdDLGtCQUFrQjtBQUN0QjtBQUNBO0NBQ0MsV0FBVztBQUNaO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTtDQUNDLGFBQWE7SUFDVix5QkFBeUI7SUFDekIsY0FBYztDQUNqQixlQUFlO0NBQ2Ysa0JBQWtCO0FBQ25CO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTtDQUNDLGdCQUFnQjtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QjtBQUNBO0NBQ0MscUJBQXFCO0NBQ3JCLFlBQVk7QUFDYjtBQUNBO0NBQ0MsY0FBYztDQUNkLGVBQWU7SUFDWixxQkFBcUI7SUFDckIsY0FBYztBQUNsQjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTtDQUNDLGdDQUFnQztDQUNoQyxvQkFBb0I7QUFDckI7QUFDQTtDQUNDLHFCQUFxQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFFQTtDQUNDLHFCQUFxQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFFQTtDQUNDLHFCQUFxQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0NBQ0MscUJBQXFCO0NBQ3JCLFlBQVk7QUFDYjtBQUNBO0NBQ0MsYUFBYTtBQUNkO0FBQ0E7SUFDSSxZQUFZO0lBQ1osNENBQTRDO0lBQzVDLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCO0FBQ0E7Q0FDQyxzQkFBc0I7SUFDbkIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsNENBQTRDO0lBQzVDLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7QUFDQTtDQUNDLGlCQUFpQjtJQUNkLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vaG9tZS9iYXRjaC1pbXBvcnQvYmF0Y2gtaW1wb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiA9PT09PT09PT09PT09PUJhdGNoIEltcG9ydD09PT09PT09PT09PT09PT09ICovXHJcbi5iYXRjaF9pbXBvcnRfaW5uZXIge1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgcGFkZGluZzogMzBweCAzNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAxMHB4IDBweCByZ2JhKDAsMCwwLCAwLjEpO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5iYXRjaF9pbXBvcnRfdHlwZV9pbm5lciB7XHJcblx0bWFyZ2luOiAwcHg7XHJcbn1cclxubGFiZWwge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5pbmZvX3R4dCB7XHJcblx0cGFkZGluZzogMHB4O1xyXG59XHJcbi5pbmZvX3R4dCBwIHtcclxuXHRwYWRkaW5nOiAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjdlYztcclxuICAgIGNvbG9yOiAjMTY5YTFlO1xyXG5cdGZvbnQtc2l6ZTogMTRweDtcclxuXHRib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuLmltcG9ydF9mb3JtYXRlIHtcclxuXHRwYWRkaW5nOiAwcHg7XHJcbn1cclxuLmltcG9ydF9saXN0IHtcclxuXHRsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMTJweCAxNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYmViZWI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuLmltcG9ydF9saXN0IGxpe1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRwYWRkaW5nOiAwcHg7XHJcbn1cclxuLmltcG9ydF9saXN0IGxpIGF7XHJcblx0Y29sb3I6ICM0YjRiNGI7XHJcblx0Zm9udC1zaXplOiAxNHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuLmltcG9ydF9saXN0IGxpIGE6aG92ZXIge1xyXG5cdGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuLnVwbG9hZF9maWxlIHtcclxuXHRwYWRkaW5nOiAwcHg7XHJcbn1cclxuLnVwbG9hZF9maWxlID4gcCB7XHJcblx0Ym9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlY2VjZWM7XHJcblx0cGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuLnVwbG9hZF91c2Vyc193cmFwID4gaDMge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi51cGxvYWRfYXNzZXRzX3dyYXAgPiBoMyB7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMTNweDtcclxufVxyXG5cclxuLnVwbG9hZF9xdWVzdGlvbnNfd3JhcCA+IGgzIHtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcbi5mb3JtLXRpdGxlIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi51cGxvYWRfc2hlZXQge1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRmbG9hdDogcmlnaHQ7XHJcbn1cclxuLnVwbG9hZF9zaGVldCA+IC5iYXRjaF91cGxvYWRbdHlwZT1cImZpbGVcIl0ge1xyXG5cdGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuLnVwbG9hZF9zaGVldCA+IGxhYmVsIHtcclxuICAgIHdpZHRoOiAyMzBweDtcclxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggM3B4IDBweCByZ2JhKDAsMCwwLCAwLjEpO1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4IDEwcHggMTAwcHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBjb2xvcjogIzRiNGI0YjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnVwbG9hZF9zaGVldCA+IGxhYmVsOjpiZWZvcmUge1xyXG5cdGNvbnRlbnQ6ICdDaG9vc2UgZmlsZSc7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDhweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggOHB4IDBweCByZ2JhKDAsMCwwLCAwLjEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgcGFkZGluZzogMnB4IDhweDtcclxufVxyXG4uYnRuX3VwbG9hZCB7XHJcblx0cGFkZGluZzogNnB4IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjI2MjYyO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMDBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIG1hcmdpbjogOHB4IDE1cHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/admin/home/batch-import/batch-import.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/admin/home/batch-import/batch-import.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-top-nav></app-admin-top-nav>\r\n<router-outlet></router-outlet>\r\n    <!-- Page section start -->\r\n    <main class=\"main_container\">\r\n        <div class=\"container\">\r\n            <div class=\"main_con_inner\">\r\n          \r\n\r\n                <app-admin-side-nav></app-admin-side-nav>\r\n   <!-- right section  start -->\r\n   <section class=\"right_panel\">\r\n                      <div class=\"batch_import\"  id=\"pop_5\">\r\n                        <div class=\"batch_import_inner\">\r\n                            <div class=\"rph_header\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-sm-6 col-md-6 col-lg-6 rph_left\">\r\n                                        <h5>Batch Import</h5>\r\n                                    </div>\r\n\r\n                                    <div class=\"col-sm-6 col-md-6 col-lg-6\">\r\n                                        <div class=\"rph_right\">\r\n                                            <!-- <form class=\"serach_form d-flex\">\r\n                                                <button type=\"button\" class=\"search_btn\"><i class=\"fas fa-search\"></i>\r\n                                                   <div class=\"serach_box\" style=\"display: none;\"><input type=\"text\" placeholder=\"Search..\"></div>\r\n                                                </button>\r\n                                            </form> -->\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"batch_import_type\">\r\n                              <div class=\"batch_import_type_inner row\">\r\n                                <div class=\"col-12 info_txt\">\r\n                                  <p>This tool allows you to add users, assets (make sure you have moved the asset to server),questions, \r\n                                      from an excel file. The format of the file is at least one row in an excel spreadsheet\r\n                                      and then uploading that file here.</p>\r\n                                </div>\r\n                                <div class=\"col-12 col-sm-12 col-md-12 import_formate\">\r\n                                  <p>You can download a spreadsheet here,</p>\r\n                                  <ul class=\"import_list\">\r\n                                    <li class=\"col-12 col-sm-12 col-md-4 col-lg-4\"><a (click)=\"openTemplate('Users.xlsx')\">Users</a></li>\r\n                                    <li class=\"col-12 col-sm-12 col-md-4 col-lg-4 text-center\"><a (click)=\"openTemplate('Assets.xlsx')\">Assets</a></li>\r\n                                    <li class=\"col-12 col-sm-12 col-md-4 col-lg-4 text-center\"><a (click)=\"openTemplate('Questions.xlsx')\">Questions</a></li>\r\n                                  </ul>\r\n                                </div>\r\n                                <div class=\"col-12 col-sm-12 col-md-12 upload_file\">\r\n                                  <p>If you have finished creating or updating your spreadsheet and would like to upload it now,\r\n                                      you can do so here:</p>\r\n                                      \r\n                                      <form class=\"clearfix\" [formGroup] = \"userForm\"  (ngSubmit)= \"onSubmitBatchImportUserForm($event)\" >\r\n                                        <div class=\"upload_users_wrap form-title\">\r\n                                          <h3>Upload Users here:</h3>\r\n                                        </div>\r\n                                        <div class=\"upload_sheet form-select\">\r\n                                          <input type=\"file\" formControlName = \"batchImportUserFile\" id = \"batchImportUserFile\" class=\"batch_upload\" (change)=\"onUserFileChange($event)\">\r\n                                          <!-- <input type=\"file\" formControlName = \"batchImportAssetFile\" name = \"batchImportAssetFile\" id=\"batch_upload\"  (change)=\"onAssetFileChange($event)\"> -->\r\n                                          <label for=\"batchImportUserFile\">{{userBatchFile}}</label>\r\n                                          <!-- <button class=\"btn btn_upload\">Upload</button> -->\r\n                                          <input class=\"btn btn_upload\" type=\"submit\" value=\"Upload\" >\r\n                                          <!-- <img src=\"images/quest.png\" alt=\"quest\"> -->\r\n                                        </div>\r\n                                      </form>\r\n\r\n\r\n                                      \r\n                                      <form class=\"clearfix\" [formGroup] = \"assetForm\" (ngSubmit)= \"onSubmitBatchImportAssetForm($event)\" >\r\n                                        <div class=\"upload_assets_wrap form-title\">\r\n                                          <h3>Upload Assets here:</h3>\r\n                                        </div>\r\n                                        <div class=\"upload_sheet form-select\">\r\n                                          <input type=\"file\" class=\"batch_upload\" formControlName = \"batchImportAssetFile\"  (change)=\"onAssetFileChange($event)\" id=\"batchImportAssetFile\">\r\n                                          <label for=\"batchImportAssetFile\">{{assetBatchFile}}</label>\r\n                                          <button class=\"btn btn_upload\">Upload</button>\r\n                                          <!-- <img src=\"images/quest.png\" alt=\"quest\"> -->\r\n                                        </div>\r\n                                      </form>\r\n\r\n\r\n                                      <form class=\"clearfix\" [formGroup] = \"questionForm\" (ngSubmit)= \"onSubmitBatchImportQuestionForm($event)\">\r\n                                        <div class=\"upload_questions_wrap form-title\">\r\n                                          <h3>Upload Question here:</h3>\r\n                                        </div>\r\n                                        <div class=\"upload_sheet form-select\">\r\n                                          <input type=\"file\" class=\"batch_upload\"  formControlName = \"batchImportQuestionFile\" (change)=\"onQuestionFileChange($event)\" id=\"batchImportQuestionFile\">\r\n                                          <label for=\"batchImportQuestionFile\">{{questionBatchFile}}</label>\r\n                                          <button class=\"btn btn_upload\">Upload</button>\r\n                                          <!-- <img src=\"images/quest.png\" alt=\"quest\"> -->\r\n                                        </div>\r\n                                      </form>\r\n                                </div>\r\n                              </div>\r\n                            </div> \r\n                        </div>\r\n                      </div>\r\n\r\n                    <!-- Batch Import Ends -->\r\n\t\t\t\t\t\r\n\t\t\t\t\t  <!-- Question Bank Ends -->\r\n\r\n</section> <!-- Right Panel End Here -->\r\n</div>\r\n</div>\r\n</main>\r\n<footer class=\"fot_main\">\r\n<div class=\"container\">\r\n<div class=\"fot_inner\">\r\n<div class=\"row\"><div class=\"col-sm-12 col-md-12\"><p>© ALLERGAN 2019</p></div></div>\r\n</div>\r\n</div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/admin/home/batch-import/batch-import.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/admin/home/batch-import/batch-import.component.ts ***!
  \*******************************************************************/
/*! exports provided: BatchImportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchImportComponent", function() { return BatchImportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_batchimportservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/batchimportservice */ "./src/app/admin/services/batchimportservice.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BatchImportComponent = /** @class */ (function () {
    function BatchImportComponent(formBuilder, batchImportService, alertService) {
        this.formBuilder = formBuilder;
        this.batchImportService = batchImportService;
        this.alertService = alertService;
        this.userBatchFile = "No file choosen";
        this.assetBatchFile = "No file choosen";
        this.questionBatchFile = "No file choosen";
    }
    BatchImportComponent.prototype.ngOnInit = function () {
        this.assetForm = this.formBuilder.group({
            batchImportAssetFile: ['']
        });
        this.userForm = this.formBuilder.group({
            batchImportUserFile: ['']
        });
        this.questionForm = this.formBuilder.group({
            batchImportQuestionFile: ['']
        });
    };
    BatchImportComponent.prototype.onSubmitBatchImportQuestionForm = function (event) {
        var _this = this;
        if (this.questionForm.controls.batchImportQuestionFile.value.length == 0) {
            this.alertService.success("Please select file for import questions.");
        }
        else {
            var questionFormData = new FormData();
            questionFormData.append('file', this.questionForm.controls.batchImportQuestionFile.value);
            questionFormData.append('inputFileName', this.questionForm.controls.batchImportQuestionFile.value.name);
            this.batchImportService.batchImportQuestion(questionFormData)
                .pipe().subscribe(function (data) {
                var successCount = 0;
                var failCount = 0;
                if (data.length == 0) {
                    _this.alertService.success("Total question stored: 0");
                }
                else if (data.length >= 1) {
                    for (var R = 0; R < data.length; R++) {
                        var currentElement = data[R];
                        console.dir(currentElement);
                        if (currentElement.processMessage == "Stored..") {
                            successCount++;
                        }
                        else {
                            failCount++;
                        }
                    }
                    _this.alertService.success("Total questions stored: " + successCount + " , Fail : " + failCount);
                }
            }, function (erroor) {
                _this.alertService.error("Error !");
            });
        }
    };
    BatchImportComponent.prototype.onQuestionFileChange = function (event) {
        var _this = this;
        if (event.target.files.length > 0) {
            var questionFile = event.target.files[0];
            this.questionBatchFile = questionFile.name;
            setTimeout(function () {
                _this.questionForm.get('batchImportQuestionFile').setValue(questionFile);
            }, 200);
        }
    };
    BatchImportComponent.prototype.onSubmitBatchImportAssetForm = function (event) {
        var _this = this;
        if (this.assetForm.controls.batchImportAssetFile.value.length == 0) {
            this.alertService.success("Please select file for import assets.");
        }
        else {
            var formData2 = new FormData();
            formData2.append('file', this.assetForm.controls.batchImportAssetFile.value);
            formData2.append('inputFileName', this.assetForm.controls.batchImportAssetFile.value.name);
            this.batchImportService.batchImportAsset(formData2)
                .pipe().subscribe(function (data) {
                var successCount = 0;
                var failCount = 0;
                if (data.length == 0) {
                    _this.alertService.success("Total Asset stored: 0");
                }
                else if (data.length >= 1) {
                    for (var R = 0; R < data.length; R++) {
                        var currentElement = data[R];
                        console.dir(currentElement);
                        if (currentElement.processMessage == "Asset Stored..") {
                            successCount++;
                        }
                        else {
                            failCount++;
                        }
                    }
                    _this.alertService.success("Total asset stored: " + successCount + " , Fail : " + failCount);
                }
            }, function (erroor) {
                _this.alertService.error("Error !");
            });
        }
    };
    BatchImportComponent.prototype.onAssetFileChange = function (event) {
        var _this = this;
        if (event.target.files.length > 0) {
            var assetFile = event.target.files[0];
            this.assetBatchFile = assetFile.name;
            setTimeout(function () {
                _this.assetForm.get('batchImportAssetFile').setValue(assetFile);
            }, 200);
        }
    };
    ////--------------------------------------------------------------------------------------------------------
    BatchImportComponent.prototype.onSubmitBatchImportUserForm = function (event) {
        var _this = this;
        if (this.userForm.controls.batchImportUserFile.value.length == 0) {
            this.alertService.success("Please select file for import users.");
        }
        else {
            var formData = new FormData();
            formData.append('file', this.userForm.controls.batchImportUserFile.value);
            formData.append('inputFileName', this.userForm.controls.batchImportUserFile.value.name);
            this.batchImportService.batchImportUser(formData)
                .pipe().subscribe(function (data) {
                var successCount = 0;
                var failCount = 0;
                if (data.length == 0) {
                    _this.alertService.success("Total user stored: 0");
                }
                else if (data.length >= 1) {
                    for (var R = 0; R < data.length; R++) {
                        var currentElement = data[R];
                        console.dir(currentElement);
                        if (currentElement.processMessage == "Stored..!") {
                            successCount++;
                        }
                        else {
                            failCount++;
                        }
                    }
                    _this.alertService.success("Total user stored: " + successCount + " , Fail : " + failCount);
                }
            }, function (erroor) {
                _this.alertService.error("Error !");
            });
        }
    };
    BatchImportComponent.prototype.onUserFileChange = function (event) {
        var _this = this;
        if (event.target.files.length > 0) {
            this.userFile = event.target.files[0];
            this.userBatchFile = this.userFile.name;
            setTimeout(function () {
                _this.userForm.get('batchImportUserFile').setValue(_this.userFile);
            }, 200);
        }
    };
    ///----------------------------------------------------------
    BatchImportComponent.prototype.openTemplate = function (templateName) {
        this.batchImportService.openTemplate(templateName)
            .pipe()
            .subscribe(function (content) {
            if (navigator.appVersion.toString().indexOf('.NET') > 0) {
                var blob = new Blob([content], { type: content.type });
                window.navigator.msSaveBlob(blob);
            }
            else {
                var blob = new Blob([content], { type: content.type }), url = window.URL.createObjectURL(blob);
                window.open(url);
            }
        });
    };
    BatchImportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-batch-import',
            template: __webpack_require__(/*! ./batch-import.component.html */ "./src/app/admin/home/batch-import/batch-import.component.html"),
            styles: [__webpack_require__(/*! ./batch-import.component.css */ "./src/app/admin/home/batch-import/batch-import.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _services_batchimportservice__WEBPACK_IMPORTED_MODULE_2__["BatchImportService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], BatchImportComponent);
    return BatchImportComponent;
}());



/***/ }),

/***/ "./src/app/admin/home/clone-quiz/clone-quiz.component.css":
/*!****************************************************************!*\
  !*** ./src/app/admin/home/clone-quiz/clone-quiz.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n    font-size: 1.3rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vaG9tZS9jbG9uZS1xdWl6L2Nsb25lLXF1aXouY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2hvbWUvY2xvbmUtcXVpei9jbG9uZS1xdWl6LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/admin/home/clone-quiz/clone-quiz.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/admin/home/clone-quiz/clone-quiz.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-top-nav></app-admin-top-nav>\r\n<main class=\"main_container\">\r\n  <div class=\"container\">\r\n      <div class=\"main_con_inner\">\r\n    \r\n\r\n          <app-admin-side-nav></app-admin-side-nav>\r\n\r\n          <!-- right section  start -->\r\n          <section class=\"right_panel\">\r\n<!-- Quiz Starts -->\r\n                      \r\n<div class=\"quiz_wrap hide_tab active\"  id=\"pop_6\">\r\n    \r\n     <div class=\"quiz_Inner\">\r\n        <div class=\"rph_header\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6 col-md-6 col-lg-6 rph_left\">\r\n                    <h5>Clone Quiz</h5>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"right_panel_box2\">\r\n          <form class=\"user_fileds\" name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6 col-md-6 col-lg-6\">\r\n                  <div class=\"form-group row\">\r\n                    <div class=\"col-sm-4 col-md-4 col-lg-4\">\r\n                      <label for=\"lastname\">Title</label>\r\n                    </div>\r\n                    <div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"\" name=\"title\" [(ngModel)]=\"model.title\" #title=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && title.invalid }\" required>\r\n                      <div *ngIf=\"f.submitted && title.invalid\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"title.errors.required\">Title is required</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>                 \r\n                </div>\r\n            </div>\r\n          \r\n            <input type=\"hidden\" class=\"form-control\" placeholder=\"\" name=\"id\" [(ngModel)]=\"model.id\" #id=\"ngModel\" >\r\n          <!-- <div class=\"applyFilers mt-4 \" name=\"domain\">\r\n                <select class=\"custom-select slects_option\"  #assetType (change)=\"getThearpeuticAreas($event.target.value)\" >\r\n                      <option selected=\"\">Select AT’s</option>\r\n                      <option *ngFor=\"let assetType of assetTypes ; index as i\" [value]=\"assetType.id\">{{assetType.userName}}</option>\r\n                </select>\r\n                <select class=\"custom-select slects_option\" #ta  (change)=\"getdiseaseAndProducts($event.target.value)\">\r\n                    <option selected=\"\">Select TA’s</option>\r\n                    <option *ngFor=\"let ta of therapeuticAreaList ; index as i\" [value]=\"ta\">{{ta}}</option>\r\n                </select>    \r\n                <select class=\"custom-select slects_option\" #disease >\r\n                    <option selected=\"\">Select DS’s</option>\r\n                    <option *ngFor=\"let dis of diseaseList ; index as i\" [value]=\"dis\">{{dis}}</option>                        \r\n                </select>    \r\n                <select class=\"custom-select slects_option\" #product>\r\n                    <option selected=\"\">Select Product</option>\r\n                    <option *ngFor=\"let prod of productList ; index as i\" [value]=\"prod\">{{prod}}</option>\r\n                </select> \r\n            </div> -->\r\n\r\n          <div class=\"row questSelectedWrap\">\r\n            <div class=\"col-12 col-sm-12 questSelected\">\r\n              <div class=\"questHeader\">\r\n                <h2><span class=\"questCount\">{{questionCount}}</span> Questions Selected</h2>\r\n                <h3>Title</h3>\r\n              </div>\r\n              <div class=\"questChecked\">\r\n                <ul>\r\n                  <li class=\"questList\" *ngFor=\"let question of questions ; index as i\">\r\n                        <input type=\"checkbox\" value=\"{{question.id}}\" id=\"{{'quest'+i}}\" (change)=\"onCheckboxChange(question.id,$event)\" [checked]=\"checkedList.indexOf(question.id) > -1 ? true: false\">\r\n                        <label for=\"{{'quest'+i}}\">{{question.qsData.question}}</label>\r\n                  </li>\r\n                  \r\n                </ul>\r\n                <button class=\"btn quizBtn\">Clone</button>\r\n                <button class=\"btn quizBtn\" (click)=\"cancelQuiz()\">Cancel</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        </div>\r\n    </div> \r\n\r\n    \r\n</div>\r\n\r\n<!-- Quiz Ends -->\r\n</section> <!-- Right Panel End Here -->\r\n<form class=\"user_fileds\" name=\"form\" (ngSubmit)=\"f.form.valid && confirmClone()\" #f=\"ngForm\" novalidate>\r\n    <div class=\"confirmClonewrap\"  *ngIf=\"clone_confirm\">\r\n        <div class=\"confirmClone\">\r\n          <h1>Clone form</h1>\r\n          <p>You’re about to clone this existing quiz, Please provide a name for the new copy.</p>\r\n          <div class=\"cloneField\">\r\n            <!-- <input type=\"text\"> -->\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"\" name=\"clonetitle\" [(ngModel)]=\"model.clonetitle\" #clonetitle=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && clonetitle.invalid }\" required maxlength=\"30\">\r\n              <div *ngIf=\"f.submitted && clonetitle.invalid\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"clonetitle.errors.required\">Title is required</div>\r\n              </div>\r\n            <div class=\"cloneFieldBtn\">\r\n                <button class=\"btn btncloneCancel\" (click)=\"cancelClone()\">Cancel</button>\r\n                <button class=\"btn btncloneConfirm\">Confirm</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n</form>\r\n\r\n\r\n  <!-- overLay -->\r\n  <div class=\"overlay\" *ngIf=\"clone_overlay\"></div>\r\n\r\n</div>\r\n</div>\r\n</main>\r\n<footer class=\"fot_main\">\r\n<div class=\"container\">\r\n<div class=\"fot_inner\">\r\n<div class=\"row\"><div class=\"col-sm-12 col-md-12\"><p>© ALLERGAN 2019</p></div></div>\r\n</div>\r\n</div>\r\n</footer>"

/***/ }),

/***/ "./src/app/admin/home/clone-quiz/clone-quiz.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/admin/home/clone-quiz/clone-quiz.component.ts ***!
  \***************************************************************/
/*! exports provided: CloneQuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloneQuizComponent", function() { return CloneQuizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_quizservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/quizservice */ "./src/app/admin/services/quizservice.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_metadataService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/metadataService */ "./src/app/admin/services/metadataService.ts");
/* harmony import */ var _services_questionbankservice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/questionbankservice */ "./src/app/admin/services/questionbankservice.ts");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var _model_quiz__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model/quiz */ "./src/app/admin/model/quiz.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CloneQuizComponent = /** @class */ (function () {
    function CloneQuizComponent(fb, route, formBuilder, alertService, metaService, questionBankService, router, quizService) {
        var _this = this;
        this.fb = fb;
        this.route = route;
        this.formBuilder = formBuilder;
        this.alertService = alertService;
        this.metaService = metaService;
        this.questionBankService = questionBankService;
        this.router = router;
        this.quizService = quizService;
        this.selectedQuestionsList = [];
        this.editQuiz = new _model_quiz__WEBPACK_IMPORTED_MODULE_8__["Quiz"]();
        this.title = '';
        this.clone_confirm = false;
        this.clone_overlay = false;
        this.therapeuticAreaList = [];
        this.diseaseList = [];
        this.productList = [];
        this.checkedList = [];
        this.questionCount = 0;
        this.zero = 0;
        this.model = {};
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.route.params.subscribe(function (params) {
            return _this.quizService.getQuizById(Number(params['id'])).pipe().subscribe(function (quizz) {
                _this.editQuiz = quizz.data;
                console.log(_this.editQuiz);
                _this.model.id = _this.editQuiz.id;
                _this.model.title = _this.editQuiz.title;
                _this.jsonData = _this.editQuiz.jsonData.toString().replace('[', '').replace(']', '').split(',');
                _this.checkedList = _this.jsonData.map(Number);
                if (_this.checkedList.indexOf(_this.zero) > -1) {
                    _this.checkedList.splice(_this.checkedList.indexOf(_this.zero), 1);
                }
                _this.questionCount = _this.checkedList.length;
            }, function (error) {
                _this.alertService.error(error);
            });
        });
    }
    CloneQuizComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkedList = [];
        this.questionBankService.getAllQuestions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (questions) {
            _this.questions = questions;
        });
        this.metaService.getAllAssetTypes().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (assetTypes) {
            _this.assetTypes = assetTypes.data;
        });
        this.metaService.getTherapeuticAreaMap().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (TA) {
            TA.data.forEach(function (ta) {
                _this.therapeuticAreaList.push(ta.name);
                ta.products.forEach(function (prod) {
                    _this.productList.push(prod.name);
                });
                ta.diseaseStates.forEach(function (disease) {
                    _this.diseaseList.push(disease.name);
                });
            });
        });
    };
    CloneQuizComponent.prototype.getThearpeuticAreas = function (assetTypeId) {
        var _this = this;
        this.therapeuticAreaList = [];
        this.metaService.getTherapeuticAreas(assetTypeId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (therapeutic) {
            therapeutic.data.forEach(function (ta) {
                _this.therapeuticAreaList.push(ta.name);
            });
        });
    };
    CloneQuizComponent.prototype.getdiseaseAndProducts = function (taName) {
        var _this = this;
        this.metaService.getTherapeuticAreaMap().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (TA) {
            TA.data.forEach(function (ta) {
                if (taName === ta.name) {
                    _this.productList = [];
                    _this.diseaseList = [];
                    ta.products.forEach(function (prod) {
                        _this.productList.push(prod.name);
                    });
                    ta.diseaseStates.forEach(function (disease) {
                        _this.diseaseList.push(disease.name);
                    });
                }
            });
        });
    };
    CloneQuizComponent.prototype.cancelQuiz = function () {
        this.checkedList = [];
        this.router.navigate(['/admin/quiz']);
    };
    CloneQuizComponent.prototype.cancelClone = function () {
        this.clone_confirm = false;
        this.clone_overlay = false;
    };
    CloneQuizComponent.prototype.onCheckboxChange = function (questionId, $event) {
        if (this.checkedList.indexOf(questionId) > -1) {
            this.checkedList.splice(this.checkedList.indexOf(questionId), 1);
        }
        else {
            this.checkedList.push(questionId);
        }
        console.log(this.checkedList);
        this.questionCount = this.checkedList.length;
    };
    CloneQuizComponent.prototype.onSubmit = function () {
        this.clone_confirm = true;
        this.clone_overlay = true;
        this.model.clonetitle = this.model.title;
    };
    CloneQuizComponent.prototype.confirmClone = function () {
        var _this = this;
        console.log(111);
        var quiz = new _model_quiz__WEBPACK_IMPORTED_MODULE_8__["Quiz"]();
        quiz.title = this.model.clonetitle;
        quiz.jsonData = this.checkedList;
        this.quizService.insertQuiz(quiz).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (q) {
            _this.quizService.getQuiz().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (quizz) {
                _this.quiz = quizz.data;
            });
            _this.checkedList = [];
            _this.router.navigate(['/admin/quiz']);
            _this.alertService.success('Success.');
            window.scroll(0, 0);
        }, function (error) {
            _this.alertService.error(error);
            window.scroll(0, 0);
        });
    };
    CloneQuizComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-clone-quiz',
            template: __webpack_require__(/*! ./clone-quiz.component.html */ "./src/app/admin/home/clone-quiz/clone-quiz.component.html"),
            styles: [__webpack_require__(/*! ./clone-quiz.component.css */ "./src/app/admin/home/clone-quiz/clone-quiz.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            src_app_services__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
            _services_metadataService__WEBPACK_IMPORTED_MODULE_5__["MetaDataService"],
            _services_questionbankservice__WEBPACK_IMPORTED_MODULE_6__["QuestionBankService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_quizservice__WEBPACK_IMPORTED_MODULE_2__["QuizService"]])
    ], CloneQuizComponent);
    return CloneQuizComponent;
}());



/***/ }),

/***/ "./src/app/admin/home/edit-question/edit-question.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/admin/home/edit-question/edit-question.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invalid-select {\r\n    border-color: #dc3545;\r\n}\r\n.invalid-txt {\r\n    width: 100%;\r\n    margin-top: .25rem;\r\n    font-size: 80%;\r\n    color: #dc3545;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vaG9tZS9lZGl0LXF1ZXN0aW9uL2VkaXQtcXVlc3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2hvbWUvZWRpdC1xdWVzdGlvbi9lZGl0LXF1ZXN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW52YWxpZC1zZWxlY3Qge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xyXG59XHJcbi5pbnZhbGlkLXR4dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IC4yNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogODAlO1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/admin/home/edit-question/edit-question.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/admin/home/edit-question/edit-question.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-top-nav></app-admin-top-nav>\r\n<router-outlet></router-outlet>\r\n    <!-- Page section start -->\r\n    <main class=\"main_container\">\r\n        <div class=\"container\">\r\n            <div class=\"main_con_inner\">\r\n          \r\n\r\n                <app-admin-side-nav></app-admin-side-nav>\r\n   <!-- right section  start -->\r\n   <section class=\"right_panel\">\r\n <!-- Question Bank Starts -->\r\n                      \r\n <div class=\"question_bank\"  id=\"pop_4\">\r\n        \r\n        <!-- Add Questions Starts-->\r\n        <div class=\"question_bank_Inner\">\r\n            <div class=\"rph_header\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6 col-md-6 col-lg-6 rph_left\">\r\n                        <h5>Edit Question</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"right_panel_box2\">\r\n                <form class=\"user_fileds\" name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6 col-md-6 col-lg-6\">\r\n                      <div class=\"form-group row\">\r\n                        <div class=\"col-sm-4 col-md-4 col-lg-4\">\r\n                          <label for=\"lastname\">Title</label>\r\n                          <input type=\"hidden\" class=\"form-control\" placeholder=\"\" name=\"id\" [(ngModel)]=\"model.id\"  >\r\n                        </div>\r\n                        <div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n                          <input type=\"text\" class=\"form-control\" placeholder=\"\" name=\"title\" [(ngModel)]=\"model.title\" #title=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && title.invalid }\" required minlength=\"3\" maxlength=\"30\">\r\n                            <div *ngIf=\"f.submitted && title.invalid\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"title.errors.required\">Title is required</div>\r\n                            </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group row\">\r\n                            <div class=\"col-sm-4 col-md-4 col-lg-4\">\r\n                              <label for=\"lastname\">Question</label>\r\n                            </div>\r\n                            <div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n                              <textarea rows=\"4\" cols=\"50\" class=\"form-control\" placeholder=\"\" name=\"question\" [(ngModel)]=\"model.question\" #question=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && question.invalid }\" required></textarea>\r\n                                <div *ngIf=\"f.submitted && question.invalid\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"question.errors.required\">Question is required</div>\r\n                                </div>\r\n                            </div>\r\n                          </div>\r\n\r\n                      <div class=\"form-group row\">\r\n                        <div class=\"col-sm-4 col-md-4 col-lg-4\">\r\n                          <label >Asset Type</label>\r\n                        </div>\r\n                        <div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n                            <select class=\"custom-select slects_option\" [ngClass]=\"{'invalid-select': assetTypeMessage}\" #assetType=\"ngModel\" (change)=\"getThearpeuticAreas($event.target.value)\" name=\"assetType\" [(ngModel)]=\"model.assetTypeId\" [ngClass]=\"{ 'is-invalid': f.submitted && assetType.invalid }\" required>\r\n                                <option selected=\"\" value = \"0\">Select</option>\r\n                                <option *ngFor=\"let assetType of assetTypes ; index as i\" [value]=\"assetType.id\" [selected]=\"assetType.id == model.assetTypeId\">{{assetType.userName}}</option>\r\n                          </select>\r\n                          <div *ngIf=\"assetTypeMessage\" class=\"invalid-txt\">\r\n                            <div *ngIf=\"assetTypeMessage\">Asset Type is required</div>\r\n                          </div> \r\n                          <div *ngIf=\"f.submitted && assetType.invalid\" class=\"invalid-feedback\">\r\n                              <div *ngIf=\"assetType.errors.required\">Asset Type is required</div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group row\">\r\n                        <div class=\"col-sm-4 col-md-4 col-lg-4\">\r\n                          <label >Select TA</label>\r\n                        </div>\r\n                        <div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n                            <select class=\"custom-select slects_option\" [ngClass]=\"{'invalid-select': taMessage}\" #ta=\"ngModel\"  (change)=\"getdiseaseAndProducts($event.target.value)\" name=\"ta\" [(ngModel)]=\"model.therapeuticAreaId\" [ngClass]=\"{ 'is-invalid': f.submitted && ta.invalid }\" required>\r\n                                <option selected=\"\" value = \"0\">Select</option>\r\n                                <!-- <option *ngFor=\"let ta of therapeuticAreaList ; index as i\" [value]=\"ta\">{{ta}}</option> -->\r\n                                <option *ngFor=\"let ta of therapeuticAreaMap | keyvalue\" [value]=\"ta.key\" [selected]=\"ta.key == question.therapeuticAreaId\">{{ta.value}}</option>\r\n                            </select> \r\n                            <div *ngIf=\"taMessage\" class=\"invalid-txt\">\r\n                              <div *ngIf=\"taMessage\">TA is required</div>\r\n                            </div> \r\n                            <div *ngIf=\"f.submitted && ta.invalid\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"ta.errors.required\">TA is required</div>\r\n                            </div>\r\n                            \r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group row\">\r\n                        <div class=\"col-sm-4 col-md-4 col-lg-4\">\r\n                          <label >Disease state</label>\r\n                        </div>\r\n                        <div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n                            <select class=\"custom-select slects_option\" #disease name=\"disease\" [(ngModel)]=\"model.diseaseStateId\" >\r\n                                <option selected=\"\" value = \"0\">Select</option>\r\n                                <!-- <option *ngFor=\"let dis of diseaseList ; index as i\" [value]=\"dis\">{{dis}}</option> -->\r\n                                <option *ngFor=\"let dis of diseaseMap | keyvalue\" [value]=\"dis.key\" [selected]=\"dis.key == question.diseaseStateId\">{{dis.value}}</option>\r\n                            </select> \r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group row\">\r\n                        <div class=\"col-sm-4 col-md-4 col-lg-4\">\r\n                          <label >Product</label>\r\n                        </div>\r\n                        <div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n                            <select class=\"custom-select slects_option\" #product name=\"product\" [(ngModel)]=\"model.productId\">\r\n                                <option selected=\"\" value = \"0\">Select</option>\r\n                                <!-- <option *ngFor=\"let prod of productList ; index as i\" [value]=\"prod\">{{prod}}</option> -->\r\n                                <option *ngFor=\"let prod of productMap | keyvalue\" [value]=\"prod.key\" [selected]=\"prod.key == question.productId\">{{prod.value}}</option>\r\n                            </select> \r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group row\">\r\n                        <div class=\"col-sm-4 col-md-4 col-lg-4\">\r\n                          <label >Question Type</label>\r\n                        </div>\r\n                        <div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n                            <select class=\"custom-select slects_option\" name=\"QType\" [(ngModel)]=\"model.QType\" #QType=\"ngModel\" (change)=\"typeSection($event.target.value)\" [ngClass]=\"{ 'is-invalid': f.submitted && QType.invalid }\" required>\r\n                              <option value=\"SINGLE_CHOICE\" [selected]=\"model.QType == 'SINGLE_CHOICE'\">Single Choice</option>\r\n                              <option value=\"MULTIPLE_CHOICE\" [selected]=\"model.QType == 'MULTIPLE_CHOICE'\">Multiple Choice</option>\r\n                          </select>\r\n                          <div *ngIf=\"f.submitted && QType.invalid\" class=\"invalid-feedback\">\r\n                              <div *ngIf=\"QType.errors.required\">Question Type is required</div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <!-- <div class=\"form-group row\">\r\n                        <div class=\"col-sm-4 col-md-4 col-lg-4\">\r\n                          <label >Region</label>\r\n                        </div>\r\n                        <div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n                            <select class=\"custom-select slects_option\">\r\n                              <option ></option>\r\n                              <option value=\"1\">Region</option>\r\n                              <option value=\"2\">Region</option>\r\n                              <option value=\"3\">Region</option>\r\n                            </select>\r\n                        </div>\r\n                      </div> -->\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-12 col-md-12 col-lg-12 rph_left\">\r\n                    <span class=\"invalid-txt\">{{ansMessage}}</span>\r\n                    <h5>Answers</h5>\r\n                    <div class=\"form-group row\" *ngFor=\"let answer of answers; let i = index\">\r\n                      <div class=\"col-sm-12 col-md-12 col-lg-12 feedBackWrap\">                        \r\n                        <label >{{nameArray[i].name}}</label>\r\n                        <span>\r\n                          <input type =\"radio\" [id]=\"answer.text\" value=\"{{answer.correct}}\" name=\"radio-group\" *ngIf=\"radioDisplay\"  (click)=\"onItemChange(answer)\" [checked]=\"answer.correct\"/>\r\n                          <input type =\"checkbox\" [id]=\"answer.text\"  value=\"{{answer.correct}}\" name=\"radio-group\" *ngIf=\"checkBoxDisplay\" (click)=\"onItemChange(answer)\" [checked]=\"answer.correct\"/>\r\n                        </span>\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"\" name=\"{{'ans' + i}}\" [value]=\"answer.text\" [(ngModel)]=\"answer.text\">\r\n                        <!-- <button type=\"button\" class=\"delete\"><i class=\"far fa-trash-alt\"></i></button> -->\r\n                            <span (click)=\"onRemoveRow(answer.id)\" class=\"delete\"><i class=\"far fa-trash-alt\"></i></span>\r\n                      </div>\r\n                    </div>\r\n                    \r\n                    <div class=\"feedBack_btns row\">\r\n                      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 feedBack_btn1\">\r\n                        <span class=\"btn btn_feedback\" (click)=\"onAddRow()\">Add Answer</span>\r\n                      </div>\r\n                      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 feedBack_btn2\">\r\n                          <button class=\"btn btn_feedback btn_feedback_cancel\" (click)=\"cancelAddQuestion()\">Cancel</button>\r\n                          <!-- <button class=\"btn btn_feedback\">Save & Add Another</button> -->\r\n                          <button class=\"btn btn_feedback btn_feedback_save\">Save</button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n         </div>\r\n      </div>\r\n\r\n\r\n\r\n    <!-- Question Bank Ends -->\r\n\r\n</section> <!-- Right Panel End Here -->\r\n</div>\r\n</div>\r\n</main>\r\n<footer class=\"fot_main\">\r\n<div class=\"container\">\r\n<div class=\"fot_inner\">\r\n<div class=\"row\"><div class=\"col-sm-12 col-md-12\"><p>© ALLERGAN 2019</p></div></div>\r\n</div>\r\n</div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/admin/home/edit-question/edit-question.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin/home/edit-question/edit-question.component.ts ***!
  \*********************************************************************/
/*! exports provided: EditQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditQuestionComponent", function() { return EditQuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var _services_questionbankservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/questionbankservice */ "./src/app/admin/services/questionbankservice.ts");
/* harmony import */ var _model_Question__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../model/Question */ "./src/app/admin/model/Question.ts");
/* harmony import */ var _services_metadataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/metadataService */ "./src/app/admin/services/metadataService.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _model_Answer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model/Answer */ "./src/app/admin/model/Answer.ts");
/* harmony import */ var _model_AnswerData__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../model/AnswerData */ "./src/app/admin/model/AnswerData.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var EditQuestionComponent = /** @class */ (function () {
    function EditQuestionComponent(formBuilder, alertService, route, questionBankService, metaService, router) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.alertService = alertService;
        this.route = route;
        this.questionBankService = questionBankService;
        this.metaService = metaService;
        this.router = router;
        this.therapeuticAreaMap = new Map();
        this.diseaseMap = new Map();
        this.productMap = new Map();
        this.radioDisplay = true;
        this.checkBoxDisplay = false;
        this.correctFlag = [];
        this.choiceLetters = ['A', 'B', 'C', 'D', 'E', 'F'];
        this.taMessage = false;
        this.assetTypeMessage = false;
        this.ansMessage = '';
        this.nameArray = [
            {
                'index': 0,
                'name': 'A',
                'text': '',
                'correct': ''
            },
            {
                'index': 1,
                'name': 'B',
                'text': '',
                'correct': ''
            },
            {
                'index': 2,
                'name': 'C',
                'text': '',
                'correct': ''
            },
            {
                'index': 3,
                'name': 'D',
                'text': '',
                'correct': ''
            },
            {
                'index': 4,
                'name': 'E',
                'text': '',
                'correct': ''
            },
            {
                'index': 5,
                'name': 'F',
                'text': '',
                'correct': ''
            }
        ];
        this.model = {};
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.route.params.subscribe(function (params) {
            return _this.questionBankService.getQuestionById(Number(params['id'])).pipe().subscribe(function (question) {
                _this.editQuestion = question.data;
                _this.model.id = _this.editQuestion.id;
                _this.model.title = _this.editQuestion.title;
                _this.model.question = JSON.parse(_this.editQuestion.jsonData).question;
                console.log('this.editQuestion.assetTypeId' + _this.editQuestion.assetTypeId);
                _this.model.assetTypeId = _this.editQuestion.assetTypeId;
                if (_this.model.assetTypeId > 0) {
                    _this.getThearpeuticAreas(_this.model.assetTypeId);
                }
                //   this.model.assetTypeId = this.editQuestion.assetTypeId;
                _this.model.therapeuticAreaId = _this.editQuestion.therapeuticAreaId;
                if (_this.model.therapeuticAreaId > 0) {
                    _this.getdiseaseAndProducts(_this.model.therapeuticAreaId);
                }
                _this.model.diseaseStateId = _this.editQuestion.diseaseStateId;
                _this.model.productId = _this.editQuestion.productId;
                _this.model.QType = JSON.parse(_this.editQuestion.jsonData).questionType;
                if (_this.model.QType) {
                    _this.typeSection(_this.model.QType);
                }
                _this.answers = JSON.parse(_this.editQuestion.jsonData).answers;
                console.log(_this.answers);
                _this.answers.forEach(function (a) {
                    if (a.correct == true) {
                        _this.correctFlag.push(a.id);
                    }
                });
                // JSON.parse(this.editQuestion.jsonData).answers.forEach(q => {
                //   console.log(q);
                //   this.nameArray.forEach(n => {
                //     this.model.div.val = n.text;
                //   });
                // });
            }, function (error) {
                _this.alertService.error(error);
            });
        });
    }
    EditQuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.metaService.getAllAssetTypes().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(function (assetTypes) {
            _this.assetTypes = assetTypes.data;
            console.log(_this.assetTypes);
        });
    };
    EditQuestionComponent.prototype.cancelAddQuestion = function () {
        this.router.navigate(['/admin/questionBank']);
    };
    EditQuestionComponent.prototype.getThearpeuticAreas = function (assetTypeId) {
        var _this = this;
        this.assetTypeMessage = false;
        if (assetTypeId == 0) {
            this.assetTypeMessage = true;
        }
        else {
            this.therapeuticAreaMap.clear();
            this.metaService.getTherapeuticAreas(assetTypeId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(function (therapeutic) {
                therapeutic.data.forEach(function (ta) {
                    _this.therapeuticAreaMap.set(ta.id, ta.name);
                });
            });
        }
    };
    EditQuestionComponent.prototype.getdiseaseAndProducts = function (taID) {
        var _this = this;
        this.taMessage = false;
        if (taID == 0) {
            this.taMessage = true;
        }
        else {
            this.metaService.getTherapeuticAreaMap().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(function (TA) {
                TA.data.forEach(function (ta) {
                    if (taID == ta.id) {
                        _this.productMap.clear();
                        _this.diseaseMap.clear();
                        ta.products.forEach(function (prod) {
                            _this.productMap.set(prod.id, prod.name);
                        });
                        ta.diseaseStates.forEach(function (disease) {
                            _this.diseaseMap.set(disease.id, disease.name);
                        });
                    }
                });
            });
        }
    };
    EditQuestionComponent.prototype.typeSection = function (type) {
        if (type === 'SINGLE_CHOICE') {
            this.checkBoxDisplay = false;
            this.radioDisplay = true;
        }
        else {
            this.checkBoxDisplay = true;
            this.radioDisplay = false;
        }
    };
    EditQuestionComponent.prototype.onItemChange = function (a) {
        console.log(a);
        console.log(this.model.QType);
        if (this.model.QType === 'SINGLE_CHOICE') {
            this.correctFlag = [];
            this.correctFlag.push(a.id);
            console.log(this.correctFlag);
        }
        else {
            if (this.correctFlag.indexOf(a.id) > -1) {
                this.correctFlag.splice(this.correctFlag.indexOf(a.id), 1);
            }
            else {
                this.correctFlag.push(a.id);
            }
        }
        if (this.correctFlag.length > 0) {
            this.ansMessage = '';
        }
        else {
            this.ansMessage = 'Please select atleast one Answer.';
        }
        console.log(this.correctFlag);
    };
    EditQuestionComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('on submit');
        if (this.correctFlag.length == 0) {
            this.ansMessage = 'Please select atleast one Answer.';
        }
        else {
            console.log('inside');
            this.assetTypeMessage = false;
            this.taMessage = false;
            console.log('onSubmit');
            var qsData = new _model_AnswerData__WEBPACK_IMPORTED_MODULE_9__["QSData"]();
            var answerArray_1 = [];
            this.answers.forEach(function (n) {
                // console.log(n);
                var answer = new _model_Answer__WEBPACK_IMPORTED_MODULE_8__["Answer"]();
                if (_this.correctFlag.indexOf(n.id) > -1) {
                    answer.correct = true;
                }
                else {
                    answer.correct = false;
                }
                // // answer.correct = n.correct;
                answer.id = n.id;
                answer.text = n.text;
                answerArray_1.push(answer);
            });
            console.log(answerArray_1);
            qsData.answers = answerArray_1;
            qsData.questionType = this.model.QType;
            qsData.question = this.model.question;
            var question = new _model_Question__WEBPACK_IMPORTED_MODULE_5__["Question"]();
            question.id = this.model.id;
            question.title = this.model.title;
            if (this.model.assetTypeId > 0) {
                question.assetTypeId = this.model.assetTypeId;
            }
            else {
                this.assetTypeMessage = true;
            }
            console.log(question.assetTypeId);
            if (this.model.therapeuticAreaId > 0) {
                question.therapeuticAreaId = this.model.therapeuticAreaId;
            }
            else {
                this.taMessage = true;
            }
            question.diseaseStateId = this.model.diseaseStateId;
            question.productId = this.model.productId;
            question.status = 'true';
            question.qsData = qsData;
            console.log(question);
            if (question.assetTypeId > 0 && question.therapeuticAreaId > 0) {
                this.questionBankService.editQuestion(question).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(function (questionss) {
                    _this.questionBankService.getAllQuestions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(function (questionss) {
                        _this.questions = questionss.data;
                    });
                    _this.router.navigate(['/admin/questionBank']);
                    _this.alertService.success('Successfully Updated.');
                    window.scroll(0, 0);
                }, function (error) {
                    _this.alertService.error(error);
                    window.scroll(0, 0);
                });
            }
        }
    };
    EditQuestionComponent.prototype.onAddRow = function () {
        console.log(11);
        var obj;
        var last = this.answers[this.answers.length - 1];
        if (last == undefined) {
            obj = {
                'id': 0,
                'text': '',
                'correct': ''
            };
        }
        else {
            obj = {
                'id': last.index + 1,
                'text': '',
                'correct': ''
            };
        }
        if (this.answers[last.index + 1] != undefined) {
            this.answers.push(obj);
        }
    };
    EditQuestionComponent.prototype.onRemoveRow = function (rowIndex) {
        var _this = this;
        var i;
        this.answers.forEach(function (n) {
            if (n.id == rowIndex) {
                i = _this.answers.indexOf(n);
            }
        });
        console.log(i);
        this.answers.splice(i, 1);
    };
    EditQuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-edit-question',
            template: __webpack_require__(/*! ./edit-question.component.html */ "./src/app/admin/home/edit-question/edit-question.component.html"),
            styles: [__webpack_require__(/*! ./edit-question.component.css */ "./src/app/admin/home/edit-question/edit-question.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            src_app_services__WEBPACK_IMPORTED_MODULE_3__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_questionbankservice__WEBPACK_IMPORTED_MODULE_4__["QuestionBankService"],
            _services_metadataService__WEBPACK_IMPORTED_MODULE_6__["MetaDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], EditQuestionComponent);
    return EditQuestionComponent;
}());



/***/ }),

/***/ "./src/app/admin/home/edit-quiz/edit-quiz.component.css":
/*!**************************************************************!*\
  !*** ./src/app/admin/home/edit-quiz/edit-quiz.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2hvbWUvZWRpdC1xdWl6L2VkaXQtcXVpei5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/home/edit-quiz/edit-quiz.component.html":
/*!***************************************************************!*\
  !*** ./src/app/admin/home/edit-quiz/edit-quiz.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-top-nav></app-admin-top-nav>\r\n<main class=\"main_container\">\r\n  <div class=\"container\">\r\n      <div class=\"main_con_inner\">\r\n    \r\n\r\n          <app-admin-side-nav></app-admin-side-nav>\r\n\r\n          <!-- right section  start -->\r\n          <section class=\"right_panel\">\r\n<!-- Quiz Starts -->\r\n                      \r\n<div class=\"quiz_wrap hide_tab active\"  id=\"pop_6\">\r\n    \r\n     <div class=\"quiz_Inner\">\r\n        <div class=\"rph_header\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6 col-md-6 col-lg-6 rph_left\">\r\n                    <h5>Edit Quiz</h5>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"right_panel_box2\">\r\n          <form class=\"user_fileds\" name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6 col-md-6 col-lg-6\">\r\n                  <div class=\"form-group row\">\r\n                    <div class=\"col-sm-4 col-md-4 col-lg-4\">\r\n                      <label for=\"lastname\">Title</label>\r\n                    </div>\r\n                    <div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"\" name=\"title\" [(ngModel)]=\"model.title\" #title=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && title.invalid }\" required>\r\n                      <div *ngIf=\"f.submitted && title.invalid\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"title.errors.required\">Title is required</div>\r\n                      </div>\r\n                    </div>\r\n                  </div>                 \r\n                </div>\r\n            </div>\r\n          \r\n            <input type=\"hidden\" class=\"form-control\" placeholder=\"\" name=\"id\" [(ngModel)]=\"model.id\" #title=\"ngModel\" >\r\n          <!-- <div class=\"applyFilers mt-4 \" name=\"domain\">\r\n                <select class=\"custom-select slects_option\"  #assetType (change)=\"getThearpeuticAreas($event.target.value)\" >\r\n                      <option selected=\"\">Select AT’s</option>\r\n                      <option *ngFor=\"let assetType of assetTypes ; index as i\" [value]=\"assetType.id\">{{assetType.userName}}</option>\r\n                </select>\r\n                <select class=\"custom-select slects_option\" #ta  (change)=\"getdiseaseAndProducts($event.target.value)\">\r\n                    <option selected=\"\">Select TA’s</option>\r\n                    <option *ngFor=\"let ta of therapeuticAreaList ; index as i\" [value]=\"ta\">{{ta}}</option>\r\n                </select>    \r\n                <select class=\"custom-select slects_option\" #disease >\r\n                    <option selected=\"\">Select DS’s</option>\r\n                    <option *ngFor=\"let dis of diseaseList ; index as i\" [value]=\"dis\">{{dis}}</option>                        \r\n                </select>    \r\n                <select class=\"custom-select slects_option\" #product>\r\n                    <option selected=\"\">Select Product</option>\r\n                    <option *ngFor=\"let prod of productList ; index as i\" [value]=\"prod\">{{prod}}</option>\r\n                </select> \r\n            </div> -->\r\n\r\n          <div class=\"row questSelectedWrap\">\r\n            <div class=\"col-12 col-sm-12 questSelected\">\r\n              <div class=\"questHeader\">\r\n                <h2><span class=\"questCount\">{{questionCount}}</span> Questions Selected</h2>\r\n                <h3>Title</h3>\r\n              </div>\r\n              <div class=\"questChecked\">\r\n                <ul>\r\n                  <li class=\"questList\" *ngFor=\"let question of questions ; index as i\" >\r\n                        <input type=\"checkbox\" value=\"{{question.id}}\" id=\"{{'quest'+i}}\" (change)=\"onCheckboxChange(question.id,$event)\" [checked]=\"checkedList.indexOf(question.id) > -1 ? true: false\">\r\n                        <label for=\"{{'quest'+i}}\">{{question.qsData.question}}</label>                      \r\n                  </li>\r\n                </ul>\r\n                <button class=\"btn quizBtn\">Submit</button>\r\n                <button class=\"btn quizBtn\" (click)=\"cancelQuiz()\">Cancel</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        </div>\r\n    </div> \r\n\r\n    \r\n</div>\r\n\r\n<!-- Quiz Ends -->\r\n</section> <!-- Right Panel End Here -->\r\n\r\n\r\n\r\n</div>\r\n</div>\r\n</main>\r\n<footer class=\"fot_main\">\r\n<div class=\"container\">\r\n<div class=\"fot_inner\">\r\n<div class=\"row\"><div class=\"col-sm-12 col-md-12\"><p>© ALLERGAN 2019</p></div></div>\r\n</div>\r\n</div>\r\n</footer>"

/***/ }),

/***/ "./src/app/admin/home/edit-quiz/edit-quiz.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/home/edit-quiz/edit-quiz.component.ts ***!
  \*************************************************************/
/*! exports provided: EditQuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditQuizComponent", function() { return EditQuizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_quizservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/quizservice */ "./src/app/admin/services/quizservice.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_metadataService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/metadataService */ "./src/app/admin/services/metadataService.ts");
/* harmony import */ var _services_questionbankservice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/questionbankservice */ "./src/app/admin/services/questionbankservice.ts");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var _model_quiz__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model/quiz */ "./src/app/admin/model/quiz.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EditQuizComponent = /** @class */ (function () {
    function EditQuizComponent(fb, route, formBuilder, alertService, metaService, questionBankService, router, quizService) {
        var _this = this;
        this.fb = fb;
        this.route = route;
        this.formBuilder = formBuilder;
        this.alertService = alertService;
        this.metaService = metaService;
        this.questionBankService = questionBankService;
        this.router = router;
        this.quizService = quizService;
        this.selectedQuestionsList = [];
        this.editQuiz = new _model_quiz__WEBPACK_IMPORTED_MODULE_8__["Quiz"]();
        this.title = '';
        this.therapeuticAreaList = [];
        this.diseaseList = [];
        this.productList = [];
        this.checkedList = [];
        this.questionCount = 0;
        this.zero = 0;
        this.model = {};
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.route.params.subscribe(function (params) {
            return _this.quizService.getQuizById(Number(params['id'])).pipe().subscribe(function (quizz) {
                _this.editQuiz = quizz.data;
                _this.model.id = _this.editQuiz.id;
                _this.model.title = _this.editQuiz.title;
                _this.jsonData = _this.editQuiz.jsonData.toString().replace('[', '').replace(']', '').split(',');
                _this.checkedList = _this.jsonData.map(Number);
                if (_this.checkedList.indexOf(_this.zero) > -1) {
                    _this.checkedList.splice(_this.checkedList.indexOf(_this.zero), 1);
                }
                _this.questionCount = _this.checkedList.length;
            }, function (error) {
                _this.alertService.error(error);
            });
        });
    }
    EditQuizComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkedList = [];
        this.questionBankService.getAllQuestions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (questions) {
            _this.questions = questions;
        });
        this.metaService.getAllAssetTypes().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (assetTypes) {
            _this.assetTypes = assetTypes.data;
        });
        this.metaService.getTherapeuticAreaMap().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (TA) {
            TA.data.forEach(function (ta) {
                _this.therapeuticAreaList.push(ta.name);
                ta.products.forEach(function (prod) {
                    _this.productList.push(prod.name);
                });
                ta.diseaseStates.forEach(function (disease) {
                    _this.diseaseList.push(disease.name);
                });
            });
        });
    };
    EditQuizComponent.prototype.getThearpeuticAreas = function (assetTypeId) {
        var _this = this;
        this.therapeuticAreaList = [];
        this.metaService.getTherapeuticAreas(assetTypeId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (therapeutic) {
            therapeutic.data.forEach(function (ta) {
                _this.therapeuticAreaList.push(ta.name);
            });
        });
    };
    EditQuizComponent.prototype.getdiseaseAndProducts = function (taName) {
        var _this = this;
        this.metaService.getTherapeuticAreaMap().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (TA) {
            TA.data.forEach(function (ta) {
                if (taName === ta.name) {
                    _this.productList = [];
                    _this.diseaseList = [];
                    ta.products.forEach(function (prod) {
                        _this.productList.push(prod.name);
                    });
                    ta.diseaseStates.forEach(function (disease) {
                        _this.diseaseList.push(disease.name);
                    });
                }
            });
        });
    };
    EditQuizComponent.prototype.cancelQuiz = function () {
        this.checkedList = [];
        this.router.navigate(['/admin/quiz']);
    };
    EditQuizComponent.prototype.onCheckboxChange = function (questionId, $event) {
        if (this.checkedList.indexOf(questionId) > -1) {
            this.checkedList.splice(this.checkedList.indexOf(questionId), 1);
        }
        else {
            this.checkedList.push(questionId);
        }
        console.log(this.checkedList);
        this.questionCount = this.checkedList.length;
    };
    EditQuizComponent.prototype.onSubmit = function () {
        var _this = this;
        this.quizService.updateQuiz(this.model, this.checkedList).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (q) {
            _this.quizService.getQuiz().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (quizz) {
                _this.quiz = quizz.data;
            });
            _this.checkedList = [];
            _this.router.navigate(['/admin/quiz']);
            _this.alertService.success('Successfully Updated.');
            window.scroll(0, 0);
        }, function (error) {
            _this.alertService.error(error);
            window.scroll(0, 0);
        });
    };
    EditQuizComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-edit-quiz',
            template: __webpack_require__(/*! ./edit-quiz.component.html */ "./src/app/admin/home/edit-quiz/edit-quiz.component.html"),
            styles: [__webpack_require__(/*! ./edit-quiz.component.css */ "./src/app/admin/home/edit-quiz/edit-quiz.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            src_app_services__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
            _services_metadataService__WEBPACK_IMPORTED_MODULE_5__["MetaDataService"],
            _services_questionbankservice__WEBPACK_IMPORTED_MODULE_6__["QuestionBankService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_quizservice__WEBPACK_IMPORTED_MODULE_2__["QuizService"]])
    ], EditQuizComponent);
    return EditQuizComponent;
}());



/***/ }),

/***/ "./src/app/admin/home/edit-user/edit-user.component.css":
/*!**************************************************************!*\
  !*** ./src/app/admin/home/edit-user/edit-user.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2hvbWUvZWRpdC11c2VyL2VkaXQtdXNlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/home/edit-user/edit-user.component.html":
/*!***************************************************************!*\
  !*** ./src/app/admin/home/edit-user/edit-user.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-top-nav></app-admin-top-nav>\n<main class=\"main_container\">\n  <div class=\"container\">\n      <div class=\"main_con_inner\">\n    \n\n          <app-admin-side-nav></app-admin-side-nav>\n\n          <!-- right section  start -->\n          <section class=\"right_panel\">\n\n<div class=\"users_detials2\">\n  <div class=\"right_panel_inner border_dashed\">\n      <div class=\"rph_header\">\n          <div class=\"row\">\n              <div class=\"col-sm-6 col-md-6 col-lg-6 rph_left\">\n                  <h5>Users Details</h5>\n              </div>\n          </div>\n      </div>\n      <div class=\"right_panel_box2\">\n          <form  [formGroup]=\"countryForm\" class=\" user_fileds\">\n              <div class=\"row\">\n                  <div class=\"col-sm-6 col-md-6 col-lg-6\">\n                      <div class=\"form-group row\">\n                        <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                          <label >First Name</label>\n                        </div>\n                        <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                          <input type=\"text\" class=\"form-control \"  formControlName=\"firstname\" id=\"firstname\"  [ngModel]=\"editUser.firstName\"  [ngClass]=\"{ 'is-invalid': edituserprofile && f.firstname.errors }\" name=\"firstname\" disabled >\n                          <div *ngIf=\"edituserprofile && f.firstname.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.firstname.errors.required\">Firstname is required</div>\n                            <div *ngIf=\"f.firstname.errors.minlength\">Firstname must be at least 3 characters</div>\n                \n                            \n                        </div>\n                        </div>\n                      </div>\n                      <div class=\"form-group row\">\n                        <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                          <label >Last Name</label>\n                        </div>\n                          <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                          <input type=\"text\" class=\"form-control\" formControlName=\"lastnames\" id=\"lastnames\" [ngModel]=\"editUser.lastName\" name=\"lastnames\" disabled>\n                        </div>\n                      </div>\n                      <div class=\"form-group row\">\n                        <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                          <label >Email ID:</label>\n                        </div>\n                          <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                          <input type=\"email\" class=\"form-control\" formControlName=\"mail\" id=\"mail\" [ngModel]=\"editUser.email\"  [ngClass]=\"{ 'is-invalid': edituserprofile && f.mail.errors }\" name=\"mail\" disabled>\n                        \n                          <div *ngIf=\"edituserprofile && f.mail.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"f.mail.errors.required\">Firstname is required</div>\n                            <div *ngIf=\"f.mail.errors.minlength\">Firstname must be at least 3 characters</div>\n                \n                            \n                        </div>\n\n                        </div>\n                      </div>\n                      <div class=\"form-group row\">\n                        <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                          <label>Title</label>\n                        </div>\n                          <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                          <input type=\"text\" class=\"form-control\" formControlName=\"title\" id=\"title\" [ngModel]=\"editUser.title\" name=\"title\" disabled>\n                        </div>\n                      </div>\n\n\n                  </div>\n                \n                  <div class=\"col-sm-6 col-md-6 col-lg-6\">\n                      <div class=\"form-group row\">\n                        <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                          <label>Employee Type</label>\n                        </div>\n                          <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                          <input type=\"text\" class=\"form-control\" formControlName=\"etype\" id=\"etype\" [ngModel]=\"editUser.etype\" name=\"etype1\" disabled>\n                        </div>\n                      </div>\n                      <div class=\"form-group row\">\n                        <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                          <label>Country</label>\n                        </div>\n                        <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                            \n                        \n                            <input type=\"text\" class=\"form-control\" formControlName=\"homeCountry\" id=\"homeCountry\" [ngModel]=\"editUser.homeCountry\" name=\"homeCountry\" disabled>\n                        </div>\n                      </div>\n                      <div class=\"form-group row\">\n\n                        <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                          <label>Status</label>\n                        </div>\n                          <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                          <div class=\"custom-switch custom-switch-label-onoff d-flex\">\n                              <input class=\"custom-switch-input\" id=\"btn_05\"  formControlName=\"status\" [checked]=\"(editUser.status==true) ? false: true\"   (change) =\"userStatus($event,editUser?.id)\"   type=\"checkbox\">\n                              <label class=\"custom-switch-btn\" for=\"btn_05\"></label>\n                          </div>\n                        </div>\n                      </div>\n                  </div>\n\n\n                  \n                  <div class=\"col-sm-12 col-md-12 col-lg-12 groups_maps\">\n                    <div class=\"row\">\n                      <div class=\"col-sm-6 col-md-6 col-lg-6\">\n                        <h5>Roles</h5>\n                      </div>\n                       <div class=\"col-sm-6 col-md-6 col-lg-6\">\n                        <h5 class=\"space_1\">Mappings</h5>\n                      </div>\n                        <div class=\" swipe_section\">\n                     \n                        <div class=\"swipe_boxes getvelue\">\n                          <ul id=\"leftdata\" class=\"leftsid\"  *ngFor=\"let role of this.editUser.roles\">\n                            <li class=\"lefttext\" (click)=\"pushData(role)\" [value]=\"role.id\">{{role.name}}</li>\n                          </ul>\n                        </div>\n                        <div class=\"swipe_arrow\">\n                          <div class=\"swipe_btn\">\n                          <span class=\"arrow_1 clickarrow\"><img src=\"assets/images/arrow_1.png\"></span>\n                          <span class=\"arrow_2 clickarrow\"><img src=\"assets/images/arrow_2.png\"></span>\n                        </div>\n                        </div>\n                     \n                      \n                        <div class=\"swipe_boxes getvelue\">\n                         <ul id=\"rightdata\" class=\"rightsid\" *ngFor=\"let role of editUser.userRoles\">\n                          <li class=\"righttext\" (click)=\"pushUserRole(role)\" [value]=\"role.id\">{{role.name}}</li>\n                          <!-- <li class=\"righttext\">{{}}</li> -->\n                        </ul>\n                      \n                      \n                      </div>\n                      </div>\n                  \n                    </div>\n\n                </div>\n              </div>\n\n          </form>\n      </div>\n  </div>\n <div class=\"right_panel_inner border_dashed\">\n    <div class=\"right_panel_box2\">\n\n  \n\n        <form class=\" user_fileds\" [formGroup]=\"editmanagerForm\" >\n            <div class=\"row\">\n                <div class=\"col-sm-6 col-md-6 col-lg-6\">\n                    <div class=\"form-group row\">\n                      <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                        <label>Manager Name</label>\n                      </div>\n                      <div class=\"col-sm-8 col-md-8 col-lg-8\">\n\n                        <select formControlName=\"managerNameForm\" [(ngModel)]=\"managername\" >\n                            <option class=\"s-smal\"  [ngValue]=\"'none'\" disabled>Select Manager</option>\n                      <option [ngValue]=\"manager\"  *ngFor=\"let manager of editUser.manager\" class=\"s-smal\">{{manager.name}}</option>\n                  </select> \n\n                  \n\n                        <!-- <input type=\"text\" class=\"form-control\" id=\"mname\" [(ngModel)]=\"editUser.manager.name\" name=\"mname\"> -->\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                        <label >Manager Email</label>\n                      </div>\n                      <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                          <input type=\"email\" class=\"form-control\" id=\"userEmail\" formControlName=\"managerEmail\" [ngModel]=\"managername.email\" name=\"memial\" disabled>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                        <label >Regions of  Operation</label>\n                      </div>\n                      <div class=\"col-sm-8 col-md-8 col-lg-8\">\n\n                        <select id=\"gds-cr-one\" formControlName=\"userRegion\" (change)=\"regionSelect($event.target.value)\">\n                          <option class=\"s-smal\"  [ngValue]=\"'none'\" disabled>Select Regions</option>\n                      <option *ngFor=\"let regions of regionList\" value={{regions.item_id}} class=\"s-smal\">{{regions.item_text}}</option>\n                 </select>\n                      </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                        <label>Country of Oparation</label>\n                      </div>\n\n                      <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                          \n                      <ng-multiselect-dropdown\n                      [placeholder]=\"'Country of Operation'\"\n                      [data]=\"countryOfOpa\"\n                      [(ngModel)]=\"countryOf\"\n                      [settings]=\"dropdownSettingsTaList\"\n                      (onSelect)=\"countrySelect($event)\"\n                      (onSelectAll)=\"countrySelectAll($event)\"\n                      formControlName=\"countryList\" style=\"\n                      color: #d9d9d9;\"                                        \n                    ngDefaultControl>\n                    </ng-multiselect-dropdown>\n                    </div>\n\n                    </div>\n                </div>\n                <div class=\"col-sm-6 col-md-6 col-lg-6\">\n                </div>\n            </div>\n\n        </form>\n    </div>\n</div>\n\n\n<div class=\"right_panel_inner\">\n    <h4>Therapeutic Areas</h4>\n    <br>\n  <div class=\"right_panel_box2\">\n      <form class=\" user_fileds\" [formGroup]=\"taForm\">\n          <div class=\"row\">\n              <div class=\"col-sm-6 col-md-6 col-lg-6\">\n                  <div class=\"form-group row\">\n                    <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                      <label>Therapeutic Area</label>\n                    </div>\n                    <div class=\"col-sm-8 col-md-8 col-lg-8\">\n\n                        <select id=\"gds-cr-one\" formControlName=\"therapeuticList\" (change)=\"onTAItemSelect($event.target.value)\">\n                            <option class=\"s-smal\"  [ngValue]=\"'none'\" disabled>Select Therapeutic Area</option>\n                        <option *ngFor=\"let regions of therputicAreaList\" value={{regions.item_id}} class=\"s-smal\">{{regions.item_text}}</option>\n                    </select>\n\n                      <!-- <ng-multiselect-dropdown\n                                          [placeholder]=\"'Therapeutic Area'\"\n                                          [data]=\"therputicAreaList\"\n                                          [(ngModel)]=\"therputicAreaItems\"\n                                          [settings]=\"dropdownSettingsTaList\"\n                                          (onSelect)=\"onTAItemSelect($event)\"\n                                          (onSelectAll)=\"onTASelectAll($event)\"\n                                          formControlName=\"therapeuticList\" style=\"\n                                          color: #d9d9d9;\"                                        \n                                        ngDefaultControl>\n                                        </ng-multiselect-dropdown> -->\n                        </div>\n                  </div>\n                  <div class=\"form-group row\">\n                    <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                      <label>Products</label>\n                    </div>\n                    <div class=\"col-sm-8 col-md-8 col-lg-8\">\n\n                      <ng-multiselect-dropdown\n                      [placeholder]=\"'Products'\"\n                      [data]=\"productListTa\"\n                      [(ngModel)]=\"productItemsTa\"\n                      [settings]=\"dropdownSettingsTaList\"\n                      (onSelect)=\"productSelect($event)\"\n                      (onSelectAll)=\"onProductsTASelectAll($event)\"\n                      formControlName=\"productList\" style=\"\n                      color: #d9d9d9;\"                                        \n                    ngDefaultControl>\n                    </ng-multiselect-dropdown>\n                        </div>\n                  </div>\n              </div>\n              <div class=\"col-sm-6 col-md-6 col-lg-6\">\n                  <div class=\"form-group row\">\n                    <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                      <label >Disease State</label>\n                    </div>\n                    <div class=\"col-sm-8 col-md-8 col-lg-8\">\n\n                      <ng-multiselect-dropdown\n                                          [placeholder]=\"'Disease State'\"\n                                          [data]=\"diseaseListTA\"\n                                          [(ngModel)]=\"diseaseItemsList\"\n                                          [settings]=\"dropdownSettingsTaList\"\n                                          (onSelect)=\"disTASelect($event)\"\n                                          (onSelectAll)=\"disTASelectAll($event)\"\n                                          formControlName=\"diseasestateList\" style=\"\n                                          color: #d9d9d9;\"                                        \n                                        ngDefaultControl>\n                                        </ng-multiselect-dropdown>\n                        </div>\n                  </div> \n              </div>\n          \n          </div>\n      </form>\n  </div>\n</div>\n\n\n <div class=\"right_panel_inner\">\n   <h4>User Therapeutic Areas</h4>\n    <div class=\"right_panel_box2\">\n        <form class=\" user_fileds\" [formGroup]=\"taForm\">\n            <div class=\"row\">\n                <div class=\"col-sm-6 col-md-6 col-lg-6\">\n                    <div class=\"form-group row\">\n                      <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                        <label>Therapeutic Area</label>\n                      </div>\n                      <div class=\"col-sm-8 col-md-8 col-lg-8\">\n                        <ng-multiselect-dropdown\n                                            [placeholder]=\"'Therapeutic Area'\"\n                                            [data]=\"dropdownList\"\n                                            [(ngModel)]=\"selectedItems\"\n                                            [settings]=\"dropdownSettingsTa\"\n                                            (onSelect)=\"onItemSelect($event)\"\n                                            (onSelectAll)=\"onSelectAll($event)\"\n                                            formControlName=\"therapeutic\" style=\"\n                                            color: #d9d9d9;\"                                        \n                                          ngDefaultControl>\n                                          </ng-multiselect-dropdown>\n                          </div>\n                    </div>\n                    <div class=\"form-group row\">\n                      <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                        <label>Products</label>\n                      </div>\n                      <div class=\"col-sm-8 col-md-8 col-lg-8\">\n\n                        <ng-multiselect-dropdown\n                        [placeholder]=\"'Products'\"\n                        [data]=\"productList\"\n                        [(ngModel)]=\"productItems\"\n                        [settings]=\"dropdownSettings\"\n                        (onSelect)=\"productSelect($event)\"\n                        (onSelectAll)=\"onProductsSelectAll($event)\"\n                        formControlName=\"product\" style=\"\n                        color: #d9d9d9;\"                                        \n                      ngDefaultControl>\n                      </ng-multiselect-dropdown>\n                          </div>\n                    </div>\n                </div>\n                <div class=\"col-sm-6 col-md-6 col-lg-6\">\n                    <div class=\"form-group row\">\n                      <div class=\"col-sm-4 col-md-4 col-lg-4\">\n                        <label >Disease State</label>\n                      </div>\n                      <div class=\"col-sm-8 col-md-8 col-lg-8\">\n\n                        <ng-multiselect-dropdown\n                                            [placeholder]=\"'Disease State'\"\n                                            [data]=\"diseaseList\"\n                                            [(ngModel)]=\"diseaseItems\"\n                                            [settings]=\"dropdownSettings\"\n                                            (onSelect)=\"diseaseSelect($event)\"\n                                            (onSelectAll)=\"onDiseaseSelectAll($event)\"\n                                            formControlName=\"diseasestate\" style=\"\n                                            color: #d9d9d9;\"                                        \n                                          ngDefaultControl>\n                                          </ng-multiselect-dropdown>\n                          </div>\n                    </div> \n                </div>\n                \n                <div class=\"col-sm-12 col-md-12 col-lg-12 groups_maps\">\n                  <div class=\"row\">\n                    <div class=\"col-sm-6 col-md-6 col-lg-6\">\n                      <h5>Groups</h5>\n                    </div>\n                     <div class=\"col-sm-6 col-md-6 col-lg-6\">\n                      <h5 class=\"space_1\">Mappings</h5>\n                    </div>\n                      <div class=\" swipe_section\">\n                   \n                      <div class=\"swipe_boxes getvelue\">\n                        <ul id=\"leftdata\" class=\"leftsid\"  *ngFor=\"let group of editUser.groups\">\n                          <li class=\"lefttext\" (click)=\"pushGroupData(group)\" [value]=\"group.id\">{{group.name}}</li>\n                        </ul>\n                      </div>\n                      <div class=\"swipe_arrow\">\n                        <div class=\"swipe_btn\">\n                        <span class=\"arrow_1 clickarrow\"><img src=\"assets/images/arrow_1.png\"></span>\n                        <span class=\"arrow_2 clickarrow\"><img src=\"assets/images/arrow_2.png\"></span>\n                      </div>\n                      </div>\n                   \n                    \n                      <div class=\"swipe_boxes getvelue\">\n                       <ul id=\"rightdata\" class=\"rightsid\" *ngFor=\"let userGroup of editUser.userGroups\">\n                        <li class=\"righttext\" (click)=\"pushUserGroup(userGroup)\" [value]=\"userGroup.id\">{{userGroup.name}}</li>\n                        <!-- <li class=\"righttext\">{{}}</li> -->\n                      </ul>\n                    \n                    \n                    </div>\n                    </div>\n                \n                  </div>\n\n              </div>\n            </div>\n            <div class=\"buttons\">\n              <button type=\"button\" class=\" btn-small\" routerLink=\"/admin\">Cancel</button>\n              <button type=\"button\" class=\" btn-small bnt_blue\" (click)=\"editUserProfiles()\" >Apply</button>\n            </div>\n\n        </form>\n    </div>\n</div>\n</div> \n\n</section> <!-- Right Panel End Here -->\n</div>\n</div>\n</main>\n\n\n\n\n   \n\n\n\n\n"

/***/ }),

/***/ "./src/app/admin/home/edit-user/edit-user.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/admin/home/edit-user/edit-user.component.ts ***!
  \*************************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_userservices__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/userservices */ "./src/app/admin/services/userservices.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services */ "./src/app/services/index.ts");
/* harmony import */ var _model_EditUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../model/EditUser */ "./src/app/admin/model/EditUser.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _model_editUserName__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../model/editUserName */ "./src/app/admin/model/editUserName.ts");
/* harmony import */ var _model_managerDTO__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../model/managerDTO */ "./src/app/admin/model/managerDTO.ts");
/* harmony import */ var _model_taDto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../model/taDto */ "./src/app/admin/model/taDto.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(fb, route, formBuilder, userservice, alertService) {
        var _this = this;
        this.fb = fb;
        this.route = route;
        this.formBuilder = formBuilder;
        this.userservice = userservice;
        this.alertService = alertService;
        this.edituserprofile = false;
        this.userstatus = false;
        this.editUser = new _model_EditUser__WEBPACK_IMPORTED_MODULE_4__["EditUser"]();
        this.countrys = "";
        this.managerEmail = "";
        this.dropdownList = [];
        this.regionList = [];
        this.therputicAreaList = [];
        this.productList = [];
        this.productListTa = [];
        this.countryOfOpa = [];
        this.listPustProduct = [];
        this.productItems = [];
        this.diseaseList = [];
        this.diseaseListTA = [];
        this.country = { id: 0, name: "", product: [], disState: [] };
        this.diseaseItems = [];
        this.diseaseItemsList = [];
        this.managername = { id: '', name: '', email: '' };
        this.selectedItems = [];
        this.therputicAreaItems = [];
        this.productItemsTa = [];
        this.countryOf = [];
        this.services = {};
        this.dropdownSettings = {};
        this.dropdownSettingsTa = {};
        this.dropdownSettingsTaList = {};
        this.dropdownListProduct = [];
        this.selectedItemsProduct = [];
        this.dropdownSettingsProduct = {};
        this.roles = [{ id: 0, name: "" }];
        this.status = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
        this.dropdownSettingsTaList = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 20,
            allowSearchFilter: true
        };
        this.dropdownSettingsTa = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 20,
            allowSearchFilter: true
        };
        this.dropdownSettingsProduct = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
        this.route.params.subscribe(function (params) {
            return _this.userservice.editUser(Number(params['id'])).pipe().subscribe(function (users) {
                console.log(users.data);
                _this.editUser = users.data;
                _this.userstatus = _this.editUser.status;
                _this.dropdownList = _this.editUser.item;
                _this.selectedItems = _this.dropdownList;
                _this.productList = _this.editUser.product;
                _this.productItems = _this.productList;
                _this.managername = _this.editUser.manager[0];
                _this.countryName = _this.editUser.country[0];
                _this.diseaseList = _this.editUser.diseasestate;
                _this.diseaseItems = _this.diseaseList;
                _this.countryOfOpa = _this.editUser.country;
                _this.countryOf = _this.countryOfOpa;
                //  console.log(JSON.stringify(this.editUser.country));
                for (var i = _this.editUser.roles.length - 1; i >= 0; i--) {
                    for (var j = 0; j < _this.editUser.userRoles.length; j++) {
                        if (_this.editUser.roles[i] && (_this.editUser.roles[i]['name'] === _this.editUser.userRoles[j]['name'])) {
                            _this.editUser.roles.splice(i, 1);
                        }
                    }
                }
                _this.therputicAreaList = _this.editUser.therapeuticArea;
                _this.regionList = _this.editUser.region;
                // alert(JSON.stringify(this.regionList));
                for (var i = _this.editUser.groups.length - 1; i >= 0; i--) {
                    for (var j = 0; j < _this.editUser.userGroups.length; j++) {
                        if (_this.editUser.groups[i] && (_this.editUser.groups[i]['name'] === _this.editUser.userGroups[j]['name'])) {
                            _this.editUser.groups.splice(i, 1);
                        }
                    }
                }
            }, function (error) {
                _this.alertService.error(error);
            });
        });
    }
    EditUserComponent.prototype.ngOnInit = function () {
        this.createForm();
    };
    EditUserComponent.prototype.pushUserRole = function (role) {
        this.editUser.roles.push(role);
        this.editUser.userRoles = this.editUser.userRoles.filter(function (ele) { return ele['name'] != role.name; });
    };
    EditUserComponent.prototype.pushData = function (role) {
        this.editUser.userRoles.push(role);
        this.editUser.roles = this.editUser.roles.filter(function (ele) { return ele['name'] != role.name; });
    };
    EditUserComponent.prototype.pushGroupData = function (group) {
        this.editUser.userGroups.push(group);
        this.editUser.groups = this.editUser.groups.filter(function (ele) { return ele['name'] != group.name; });
    };
    EditUserComponent.prototype.pushUserGroup = function (userGroup) {
        this.editUser.groups.push(userGroup);
        this.editUser.userGroups = this.editUser.userGroups.filter(function (ele) { return ele['name'] != userGroup.name; });
    };
    EditUserComponent.prototype.onItemSelect = function (item) {
        console.log(item);
    };
    EditUserComponent.prototype.onTAItemSelect = function (item) {
        this.taForm.value.therapeutic.push(this.editUser.therapeuticArea.find(function (x) { return x.item_id == item; }));
        this.productListTa = this.editUser.therapeuticArea.find(function (x) { return x.item_id == item; }).product;
        this.diseaseListTA = this.editUser.therapeuticArea.find(function (x) { return x.item_id == item; }).disState;
    };
    EditUserComponent.prototype.regionSelect = function (item) {
        this.countryOfOpa = this.editUser.region.find(function (x) { return x.item_id == item; }).country;
        //  / alert(JSON.stringify(this.countryOfOpa));
    };
    // ;
    EditUserComponent.prototype.productTASelect = function (item) {
        this.taForm.value.product.push(item);
    };
    EditUserComponent.prototype.disTASelect = function (item) {
        this.taForm.value.diseasestate.push(item);
    };
    EditUserComponent.prototype.disTASelectAll = function (items) {
        var _this = this;
        items.forEach(function (ele) {
            _this.taForm.value.diseasestate.push(ele);
        });
    };
    EditUserComponent.prototype.onProductsTASelectAll = function (items) {
        var _this = this;
        items.forEach(function (ele) {
            _this.taForm.value.product.push(ele);
        });
    };
    EditUserComponent.prototype.countrySelectAll = function (items) {
    };
    // this.taForm.value.diseasestate.push(element);
    EditUserComponent.prototype.productSelect = function (item) {
    };
    EditUserComponent.prototype.countrySelect = function (item) {
    };
    EditUserComponent.prototype.diseaseSelect = function (item) {
    };
    EditUserComponent.prototype.onSelectAll = function (items) {
    };
    EditUserComponent.prototype.onProductsSelectAll = function (items) {
    };
    EditUserComponent.prototype.onDiseaseSelectAll = function (items) {
    };
    Object.defineProperty(EditUserComponent.prototype, "f", {
        get: function () { return this.countryForm.controls; },
        enumerable: true,
        configurable: true
    });
    EditUserComponent.prototype.createForm = function () {
        this.countryForm = this.formBuilder.group({
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(3)]],
            homeCountry: [''],
            lastnames: [''],
            status: [],
            mail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email]],
            title: [''],
            etype: ['']
            // countryControl: ['', Validators.required],
        });
        this.taForm = this.formBuilder.group({
            therapeutic: [],
            therapeuticList: [],
            diseasestateList: [],
            productList: [],
            diseasestate: [],
            product: [],
        });
        this.editmanagerForm = this.formBuilder.group({
            managerEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            userRegion: [''],
            countryList: [],
            managerNameForm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
        });
    };
    EditUserComponent.prototype.onSelect = function (countryid) {
    };
    EditUserComponent.prototype.editUserProfiles = function () {
        var _this = this;
        this.edituserprofile = true;
        if (this.countryForm.invalid) {
            return;
        }
        if (this.editmanagerForm.invalid) {
            return;
        }
        var taDto = new _model_taDto__WEBPACK_IMPORTED_MODULE_8__["TaDto"](this.taForm.value.diseasestate, this.taForm.value.product, this.taForm.value.therapeutic);
        var editUserName = new _model_editUserName__WEBPACK_IMPORTED_MODULE_6__["EditUserName"](this.countryForm.value.countryControl, this.countryForm.value.etype, this.countryForm.value.firstname, this.countryForm.value.lastnames, this.countryForm.value.mail, this.countryForm.value.title, this.userstatus, this.countryForm.value.homeCountry, this.editmanagerForm.value.countryList);
        var manager = new _model_managerDTO__WEBPACK_IMPORTED_MODULE_7__["ManagerDto"](this.editmanagerForm.value.managerNameForm.id, this.editmanagerForm.value.managerNameForm.name, this.editmanagerForm.value.managerNameForm.email);
        //alertService
        this.userservice.editUserService(this.editUser.id, editUserName, manager, taDto, this.editUser.userRoles, this.editUser.userGroups).pipe().subscribe(function (data) {
            // location.reload();
            _this.alertService.success(data.data);
            window.scroll(0, 0);
        }, function (error) {
            _this.alertService.error(error);
            window.scroll(0, 0);
        });
    };
    EditUserComponent.prototype.userStatus = function ($event, Id) {
        if ($event.target.checked == false) {
            this.userstatus = true;
        }
        if ($event.target.checked == true) {
            this.userstatus = false;
        }
    };
    EditUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-user',
            template: __webpack_require__(/*! ./edit-user.component.html */ "./src/app/admin/home/edit-user/edit-user.component.html"),
            styles: [__webpack_require__(/*! ./edit-user.component.css */ "./src/app/admin/home/edit-user/edit-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _services_userservices__WEBPACK_IMPORTED_MODULE_2__["UserService"], _services__WEBPACK_IMPORTED_MODULE_3__["AlertService"]])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "./src/app/admin/home/edit-user/index.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/home/edit-user/index.ts ***!
  \***********************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_user_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-user.component */ "./src/app/admin/home/edit-user/edit-user.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return _edit_user_component__WEBPACK_IMPORTED_MODULE_0__["EditUserComponent"]; });




/***/ }),

/***/ "./src/app/admin/home/group-mapping/group.mapping.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/admin/home/group-mapping/group.mapping.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n\tfont-size: 1.3rem;\r\n}\r\n.wmd-view-topscroll, .wmd-view {\r\n    overflow-x: auto;\r\n    overflow-y: hidden;\r\n}\r\n.wmd-view-topscroll::-webkit-scrollbar-track, .wmd-view::-webkit-scrollbar-track\r\n{\r\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);\r\n\tborder-radius: 10px;\r\n\tbackground-color: #F5F5F5;\r\n}\r\n.wmd-view-topscroll::-webkit-scrollbar, .wmd-view::-webkit-scrollbar\r\n{\r\n    width: 6px;\r\n    height: 6px;\r\n\tbackground-color: #F5F5F5;\r\n}\r\n.wmd-view-topscroll::-webkit-scrollbar-thumb, .wmd-view::-webkit-scrollbar-thumb\r\n{\r\n\tborder-radius: 10px;\r\n\t-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);\r\n\tbackground-color: #555;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vaG9tZS9ncm91cC1tYXBwaW5nL2dyb3VwLm1hcHBpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGlCQUFpQjtBQUNsQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0QjtBQUNBOztDQUVDLGlEQUFpRDtDQUNqRCxtQkFBbUI7Q0FDbkIseUJBQXlCO0FBQzFCO0FBRUE7O0lBRUksVUFBVTtJQUNWLFdBQVc7Q0FDZCx5QkFBeUI7QUFDMUI7QUFFQTs7Q0FFQyxtQkFBbUI7Q0FDbkIsZ0RBQWdEO0NBQ2hELHNCQUFzQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2hvbWUvZ3JvdXAtbWFwcGluZy9ncm91cC5tYXBwaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqIHtcclxuXHRmb250LXNpemU6IDEuM3JlbTtcclxufVxyXG4ud21kLXZpZXctdG9wc2Nyb2xsLCAud21kLXZpZXcge1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcclxufVxyXG4ud21kLXZpZXctdG9wc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10cmFjaywgLndtZC12aWV3Ojotd2Via2l0LXNjcm9sbGJhci10cmFja1xyXG57XHJcblx0LXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwwLDAsMC4zKTtcclxuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XHJcbn1cclxuXHJcbi53bWQtdmlldy10b3BzY3JvbGw6Oi13ZWJraXQtc2Nyb2xsYmFyLCAud21kLXZpZXc6Oi13ZWJraXQtc2Nyb2xsYmFyXHJcbntcclxuICAgIHdpZHRoOiA2cHg7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG59XHJcblxyXG4ud21kLXZpZXctdG9wc2Nyb2xsOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiwgLndtZC12aWV3Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYlxyXG57XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHQtd2Via2l0LWJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLDAsMCwuMyk7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzU1NTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/home/group-mapping/group.mapping.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/admin/home/group-mapping/group.mapping.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n \r\n<app-admin-top-nav></app-admin-top-nav>\r\n<router-outlet></router-outlet>\r\n    <!-- Page section start -->\r\n    <main class=\"main_container\">\r\n        <div class=\"container\">\r\n            <div class=\"main_con_inner\">\r\n          \r\n\r\n                <app-admin-side-nav></app-admin-side-nav>\r\n\r\n                <!-- right section  start -->\r\n                <section class=\"right_panel\">\r\n                       <!--------- Add Groups Start Here ---------->\r\n<div class=\"addgroup hide_tab active\" id=\"pop_2\">\r\n    \r\n    \r\n    <div class=\"right_panel_inner\">\r\n          <div class=\"rph_header\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-sm-6 col-md-6 col-lg-6 rph_left user_buts\">\r\n                    <form class=\"assets_tabs\">\r\n                      <div class=\"custom-control custom-radio custom-control-inline\">\r\n                        <input type=\"radio\" class=\"custom-control-input asset_nav\" id=\"customRadio\" name=\"buttn\" value=\"1\" data-attr=\"inputtab_1\" checked (click)=\"assetNavClick($event)\">\r\n                        <label class=\"custom-control-label asset_nav\" for=\"customRadio\">Users</label>\r\n                      </div>\r\n\r\n                      <div class=\"custom-control custom-radio custom-control-inline\">\r\n                        <input type=\"radio\" class=\"custom-control-input asset_nav\" id=\"customRadio2\" name=\"buttn\" value=\"2\" data-attr=\"inputtab_2\" (click)=\"assetNavClick($event)\">\r\n                        <label class=\"custom-control-label\" for=\"customRadio2\">Assets</label>\r\n                      </div>\r\n                    </form> \r\n                  </div>\r\n                  <div class=\"col-sm-6 col-md-6 col-lg-6\" >\r\n                      <div class=\"rph_right\">\r\n                          <form class=\"serach_form d-flex\">\r\n                            <div class=\"serach_box\"><input type=\"text\" placeholder=\"Search..\"></div>\r\n                              <button type=\"button\" class=\"search_btn\"><i class=\"fas fa-search\"></i></button>\r\n                              \r\n                          </form>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"right_panel_box group_table\">\r\n                <!-----Groups Users Panesl Start Here --->\r\n            <div class=\"groups_users asset_tab \" [ngClass]=\"{'active': userNav_show}\"  id=\"inputtab_1\" >\r\n              <form class=\"user_fileds \">\r\n                 <div class=\"filter_section\">\r\n                      \r\n                        <select class=\"custom-select slects_option mt-4 mb-3\" (change)=\"shareGrpDetails($event.target.value)\" >\r\n                          <option *ngFor=\"let group of groups ; index as i\" [selected]=\"grpName === group.name\" [value]=\"group.id\">{{group.name}}</option>                          \r\n                        </select>                                          \r\n                 </div>\r\n                 <div class=\"wmd-view-topscroll\">\r\n                  <div class=\"scroll-div1\">\r\n                  </div>\r\n                </div>\r\n                 <div class=\"table-responsive wmd-view\">\r\n                    <table class=\"table\">\r\n                        <thead>\r\n                            <tr>\r\n                                <th>First Name</th>\r\n                                <th>Email ID</th>\r\n                                <th >Roles</th>\r\n                                <th class=\"text-center\">Therapeutic Area</th>\r\n                                <th class=\"text-center\">Action</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <!-- <ng-container  > -->\r\n                            <tr *ngFor=\"let user of userResultList ; index as i\">\r\n                                  <td>{{user.firstName}}</td>\r\n                                  <td>{{user.emailID}}</td>\r\n                                  <td>{{user.roleName != null ? user.roleName: \"\"}}</td>\r\n                                  <td><div *ngFor=\"let ta of user.therapeuticArea;\">{{ta.name+\",\"}}</div></td>\r\n                                  <td class=\"text-center checkbox_square\">\r\n                                      <div class=\"custom-control custom-checkbox \">\r\n                                        <input type=\"checkbox\" class=\"custom-control-input\" id=\"{{'customCheck'+i}}\" value=\"{{user.id}}\" \r\n                                        [name]=\"user.firstName\" (change)=\"addToUserList(user.id,$event)\" [checked]=\"userIDList.indexOf(user.id) > -1 ? true: false\">\r\n                                        <label class=\"custom-control-label\" for=\"{{'customCheck'+i}}\"></label>\r\n                                      </div>\r\n                                  </td>\r\n                            </tr>                            \r\n                          <!-- </ng-container>   -->                            \r\n                        </tbody>\r\n                    </table>\r\n                 </div>\r\n                 <div class=\"buttons row\">\r\n                    <button type=\"button\" class=\" btn-small\" (click)=\"cancelGroupMapping()\">Cancel</button>\r\n                    <button type=\"button\" class=\" btn-small bnt_blue\" (click)=\"userGroupMap(grpId)\">Map</button>\r\n                 </div>\r\n              </form>\r\n            </div> <!----- Groups Users Panesl End Here ----->\r\n\r\n\r\n              <!----- Groups Assets Panesl Start Here ----->\r\n            <div class=\"groups_assets asset_tab\"  [ngClass]=\"{'active': assetNav_show}\" id=\"inputtab_2\" *ngIf=\"assetNav_show\">\r\n              \r\n                 <div class=\"filter_section\">\r\n                        <select class=\"custom-select slects_option\" (change)=\"shareGrpDetails($event.target.value)\">\r\n                          <option *ngFor=\"let group of groups ; index as i\" [selected]=\"grpName === group.name\" [value]=\"group.id\">{{group.name}}</option>\r\n                        </select>                                          \r\n                 </div>\r\n               \r\n                <div class=\"applyFilers mt-4 \" name=\"domain\">\r\n                  <!-- <form name=\"form\"> -->\r\n                    <select class=\"custom-select slects_option\"  #assetType (change)=\"getThearpeuticAreas($event.target.value)\" >\r\n                          <option selected=\"\" value = \"0\">Select AT’s</option>\r\n                          <option *ngFor=\"let assetType of assetTypes ; index as i\" [value]=\"assetType.id\">{{assetType.userName}}</option>\r\n                    </select>\r\n                    <select class=\"custom-select slects_option\" #ta  (change)=\"getdiseaseAndProducts($event.target.value)\">\r\n                        <option selected=\"\" value = \"0\">Select TA’s</option>\r\n                        <option *ngFor=\"let ta of therapeuticAreaMap | keyvalue\" [value]=\"ta.key\">{{ta.value}}</option>\r\n                        <!-- <option *ngFor=\"let ta of therapeuticAreaList ; index as i\" [value]=\"ta\">{{ta}}</option> -->\r\n                    </select>    \r\n                    <select class=\"custom-select slects_option\" #disease >\r\n                        <option selected=\"\" value = \"0\">Select DS’s</option>\r\n                        <!-- <option *ngFor=\"let dis of diseaseList ; index as i\" [value]=\"dis\">{{dis}}</option>                         -->\r\n                        <option *ngFor=\"let dis of diseaseMap | keyvalue\" [value]=\"dis.key\">{{dis.value}}</option>\r\n                    </select>    \r\n                    <select class=\"custom-select slects_option\" #product>\r\n                        <option selected=\"\" value = \"0\">Select Product</option>\r\n                        <option *ngFor=\"let prod of productMap | keyvalue\" [value]=\"prod.key\">{{prod.value}}</option>\r\n                        <!-- <option *ngFor=\"let prod of productList ; index as i\" [value]=\"prod\">{{prod}}</option> -->\r\n                    </select> \r\n                    <button type=\"submit\" class=\" btn-small bnt_green\" (click)=\"applyFIlter(assetType.value, ta.value, disease.value, product.value)\">Apply</button>  \r\n                  <!-- </form>    -->\r\n                </div>\r\n                <form class=\"user_fileds\" (ngSubmit)=\"userAssetMap(grpId)\">\r\n                <div class=\"table-responsive\">                    \r\n                  <table class=\"table \">\r\n                      <thead>\r\n                          <tr>\r\n                              <th>Asset Name</th>\r\n                              <th>Asset Type </th>\r\n                              <th>Therapeutic Area</th>\r\n                              <th class=\"text-center\">Disease State</th>\r\n                              <th class=\"text-center\">Products</th>\r\n                              <th class=\"text-center\">Action</th>\r\n                          </tr>\r\n                      </thead>\r\n                      <tbody *ngIf=\"fullData\">\r\n                          <tr *ngFor=\"let asset of assets ; index as i\"> <!--class=\"active\"-->\r\n                              <td >{{asset.title}}</td>                             \r\n                              <td >{{asset.assetType != null ? asset.assetType.userName: \"\"}}</td>\r\n                              <td >{{asset.therapeuticArea != null ?asset.therapeuticArea.name:\"\"}}</td>\r\n                              <td >{{asset.diseaseState != null ? asset.diseaseState.name:\"\"}}</td>\r\n                              <td >{{asset.product != null ?asset.product.name:\"\"}}</td>\r\n                              \r\n                              <!-- <td class=\"text-center\"><span class=\"td_filed\"></span></td>\r\n                              <td class=\"text-center\"><span class=\"td_filed\"></span></td> -->\r\n                              <td class=\"text-center checkbox_square\">\r\n                                  <div class=\"custom-control custom-checkbox \">\r\n                                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"{{'customCheck0'+i}}\"  value=\"{{asset.id}}\" \r\n                                    (change)=\"addToAssetList(asset.id,$event)\" [checked]=\"assetIDList.indexOf(asset.id) > -1 ? true: false\">\r\n                                    <label class=\"custom-control-label\" for=\"{{'customCheck0'+i}}\"></label>\r\n                                  </div>\r\n                              </td>\r\n                          </tr>   \r\n                      </tbody>\r\n\r\n                      <tbody *ngIf=\"filterData\">\r\n                        <tr *ngIf=\"filterData&&resultList.length==0\"><td colspan=\"6\" style=\"text-align:center;color: red\">{{message}}</td></tr>\r\n                        <tr *ngFor=\"let asset of resultList ; index as i\"> <!--class=\"active\"-->\r\n                            <td >{{asset.title}}</td>                             \r\n                            <td >{{asset.assetType != null ? asset.assetType.userName: \"\"}}</td>\r\n                            <td >{{asset.therapeuticArea != null ?asset.therapeuticArea.name:\"\"}}</td>\r\n                            <td >{{asset.diseaseState != null ? asset.diseaseState.name:\"\"}}</td>\r\n                            <td >{{asset.product != null ?asset.product.name:\"\"}}</td>\r\n                            \r\n                            <!-- <td class=\"text-center\"><span class=\"td_filed\"></span></td>\r\n                            <td class=\"text-center\"><span class=\"td_filed\"></span></td> -->\r\n                            <td class=\"text-center checkbox_square\">\r\n                                <div class=\"custom-control custom-checkbox \">\r\n                                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"{{'customCheck0'+i}}\"  value=\"{{asset.id}}\" \r\n                                  (change)=\"addToAssetList(asset.id,$event)\" [checked]=\"assetIDList.indexOf(asset.id) > -1 ? true: false\" >\r\n                                  <label class=\"custom-control-label\" for=\"{{'customCheck0'+i}}\"></label>\r\n                                </div>\r\n                            </td>\r\n                        </tr>   \r\n                    </tbody>\r\n                  </table>\r\n                </div>\r\n                 <div class=\"buttons row\">\r\n                    <button type=\"button\" class=\" btn-small\" (click)=\"cancelGroupMapping()\">Cancel</button>\r\n                    <button class=\" btn-small bnt_blue\">Map</button>\r\n                 </div>\r\n              </form>\r\n            </div><!----- Groups Assets Panesl End Here ---->\r\n\r\n          </div>\r\n    </div>\r\n </div>  \r\n  <!---- Add Groups  End Here ---->\r\n\r\n\r\n                     \r\n                      \r\n\r\n\r\n                </section> <!-- Right Panel End Here -->\r\n            </div>\r\n        </div>\r\n    </main>\r\n    <footer class=\"fot_main\">\r\n      <div class=\"container\">\r\n        <div class=\"fot_inner\">\r\n          <div class=\"row\"><div class=\"col-sm-12 col-md-12\"><p>© ALLERGAN 2019</p></div></div>\r\n        </div>\r\n      </div>\r\n    </footer>\r\n  "

/***/ }),

/***/ "./src/app/admin/home/group-mapping/group.mapping.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin/home/group-mapping/group.mapping.component.ts ***!
  \*********************************************************************/
/*! exports provided: GroupMappingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupMappingComponent", function() { return GroupMappingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_groupservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/groupservice */ "./src/app/admin/services/groupservice.ts");
/* harmony import */ var _services_userservices__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/userservices */ "./src/app/admin/services/userservices.ts");
/* harmony import */ var _services_sharedservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/sharedservice */ "./src/app/admin/services/sharedservice.ts");
/* harmony import */ var _services_metadataService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/metadataService */ "./src/app/admin/services/metadataService.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var GroupMappingComponent = /** @class */ (function () {
    function GroupMappingComponent(groupService, userService, service, metaService, formBuilder, alertService, router) {
        this.groupService = groupService;
        this.userService = userService;
        this.service = service;
        this.metaService = metaService;
        this.formBuilder = formBuilder;
        this.alertService = alertService;
        this.router = router;
        this.userNav_show = true;
        this.assetNav_show = false;
        this.fullData = true;
        this.filterData = false;
        this.userIDList = [];
        this.assetIDList = [];
        // therapeuticAreaList: Array<string> = [];
        // diseaseList: Array<string> = [];
        // productList: Array<string> = [];
        this.therapeuticAreaMap = new Map();
        this.diseaseMap = new Map();
        this.productMap = new Map();
        this.resultList = [];
        this.mappedUserList = [];
        // mappedUserIDs : Array<number> = [];
        this.userResultList = [];
        this.message = "";
        this.model = {};
        this.grpName = service.getGrpName();
        this.grpId = service.getGrpID();
    }
    GroupMappingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.groupService.getGroups().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (groups) {
            _this.groups = groups.data;
        });
        this.userService.getUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (users) {
            users.data.forEach(function (u) {
                if (u.groups.length == 0) {
                    _this.userResultList.push(u);
                }
            });
        });
        this.metaService.getAllAssetTypes().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (assetTypes) {
            _this.assetTypes = assetTypes.data;
        });
        this.metaService.getNonAutoAssignedAssets().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (assets) {
            _this.assets = assets.data;
        });
        this.metaService.getMappedUsers(this.grpId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (users) {
            users.data.forEach(function (u) {
                _this.userIDList.push(u.id);
                _this.userResultList.push(u); ////getting mapped users in selected grp
            });
        });
        this.metaService.getTherapeuticAreaMap().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (TA) {
            TA.data.forEach(function (ta) {
                _this.therapeuticAreaMap.set(ta.id, ta.name);
                ta.products.forEach(function (prod) {
                    _this.productMap.set(prod.id, prod.name);
                });
                ta.diseaseStates.forEach(function (disease) {
                    _this.diseaseMap.set(disease.id, disease.name);
                });
            });
        });
    };
    GroupMappingComponent.prototype.assetNavClick = function ($event) {
        var _this = this;
        this.userNav_show = $event.target.value === '1' ? true : false;
        this.assetNav_show = $event.target.value === '2' ? true : false;
        if ($event.target.value === '2') {
            this.metaService.getMappedAssets(this.grpId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (assets) {
                assets.data.forEach(function (a) {
                    _this.assetIDList.push(a.id);
                });
            });
        }
    };
    GroupMappingComponent.prototype.addToUserList = function (userId, $event) {
        if (this.userIDList.indexOf(userId) > -1) {
            this.userIDList.splice(this.userIDList.indexOf(userId), 1);
        }
        else {
            this.userIDList.push(userId);
        }
    };
    GroupMappingComponent.prototype.addToAssetList = function (assetId, $event) {
        if (this.assetIDList.indexOf(assetId) > -1) {
            this.assetIDList.splice(this.assetIDList.indexOf(assetId), 1);
        }
        else {
            this.assetIDList.push(assetId);
        }
    };
    GroupMappingComponent.prototype.userGroupMap = function (id) {
        var _this = this;
        console.log(this.userIDList.length);
        // if(this.userIDList.length > 0){
        this.metaService.userGroupMapping(id, this.userIDList).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (data) {
            _this.alertService.success(data.data);
            window.scroll(0, 0);
        }, function (error) {
            _this.alertService.error(error);
            window.scroll(0, 0);
        });
        // }else{
        //     this.alertService.error('Please select user/s to map.');
        //     window.scroll(0,0);
        // }
    };
    GroupMappingComponent.prototype.userAssetMap = function (id) {
        var _this = this;
        this.metaService.assetGroupMapping(id, this.assetIDList).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (data) {
            _this.alertService.success(data.data);
            window.scroll(0, 0);
        }, function (error) {
            _this.alertService.error(error);
            window.scroll(0, 0);
        });
    };
    GroupMappingComponent.prototype.shareGrpDetails = function (grpID) {
        var _this = this;
        this.grpId = grpID;
        this.assetIDList = [];
        this.userIDList = [];
        this.userResultList = [];
        this.metaService.getMappedAssets(this.grpId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (assets) {
            assets.data.forEach(function (a) {
                _this.assetIDList.push(a.id);
            });
        });
        this.metaService.getMappedUsers(this.grpId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (users) {
            users.data.forEach(function (u) {
                _this.userIDList.push(u.id);
                _this.userResultList.push(u);
            });
        });
        this.userService.getUsers().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (users) {
            users.data.forEach(function (u) {
                if (u.groups.length == 0) {
                    _this.userResultList.push(u);
                }
            });
        });
    };
    GroupMappingComponent.prototype.getThearpeuticAreas = function (assetTypeId) {
        var _this = this;
        this.therapeuticAreaMap.clear();
        this.metaService.getTherapeuticAreas(assetTypeId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (therapeutic) {
            therapeutic.data.forEach(function (ta) {
                _this.therapeuticAreaMap.set(ta.id, ta.name);
            });
        });
    };
    GroupMappingComponent.prototype.getdiseaseAndProducts = function (taName) {
        var _this = this;
        this.metaService.getTherapeuticAreaMap().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (TA) {
            TA.data.forEach(function (ta) {
                if (taName === ta.name) {
                    _this.productMap.clear();
                    _this.diseaseMap.clear();
                    ta.products.forEach(function (prod) {
                        _this.productMap.set(prod.id, prod.name);
                    });
                    ta.diseaseStates.forEach(function (disease) {
                        _this.diseaseMap.set(disease.id, disease.name);
                    });
                }
            });
        });
    };
    GroupMappingComponent.prototype.applyFIlter = function (asseType, ta, dis, prod) {
        var _this = this;
        this.resultList = [];
        this.fullData = false;
        this.filterData = true;
        console.log(asseType + '--' + ta + '--' + dis + '--' + prod);
        this.assets.forEach(function (asset) {
            if (prod > 1 && asset.product != null && asset.diseaseState != null && asset.therapeuticArea != null) {
                if (asset.product.id == prod && asset.diseaseState.id == dis && asset.therapeuticArea.id == ta && asset.assetType.id == asseType) {
                    _this.resultList.push(asset);
                }
            }
            else if (dis > 1 && asset.diseaseState != null && asset.therapeuticArea != null) {
                console.log(asset.diseaseState.id);
                if (asset.diseaseState.id == dis && asset.therapeuticArea.id == ta && asset.assetType.id == asseType) {
                    _this.resultList.push(asset);
                }
            }
            else if (ta > 1 && asset.therapeuticArea != null) {
                if (asset.therapeuticArea.id == ta && asset.assetType.id == asseType) {
                    _this.resultList.push(asset);
                }
            }
            else if (asseType > 1) {
                if (asset.assetType.id == asseType) {
                    _this.resultList.push(asset);
                }
            }
        });
        if (asseType == 0 && ta == 0 && dis == 0 && prod == 0) {
            this.message = "Apply atleast one filter";
        }
        else {
            this.message = "Couldn't find assets";
        }
    };
    GroupMappingComponent.prototype.cancelGroupMapping = function () {
        this.router.navigate(['/admin/group']);
    };
    GroupMappingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-group-mapping',
            template: __webpack_require__(/*! ./group.mapping.component.html */ "./src/app/admin/home/group-mapping/group.mapping.component.html"),
            styles: [__webpack_require__(/*! ./group.mapping.component.css */ "./src/app/admin/home/group-mapping/group.mapping.component.css")]
        }),
        __metadata("design:paramtypes", [_services_groupservice__WEBPACK_IMPORTED_MODULE_2__["GroupService"],
            _services_userservices__WEBPACK_IMPORTED_MODULE_3__["UserService"],
            _services_sharedservice__WEBPACK_IMPORTED_MODULE_4__["sharedservice"],
            _services_metadataService__WEBPACK_IMPORTED_MODULE_5__["MetaDataService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            src_app_services__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]])
    ], GroupMappingComponent);
    return GroupMappingComponent;
}());



/***/ }),

/***/ "./src/app/admin/home/groups/group.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin/home/groups/group.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pointer{\r\n    cursor: pointer;\r\ncolor: #007bff !important;\r\n}\r\n\r\n.table {\r\n\ttable-layout: fixed;\r\n}\r\n\r\n.tableHead > th:nth-child(1) {\r\n\twidth: 200px;\r\n}\r\n\r\n.tableHead > th:nth-child(2) {\r\n\twidth: 200px;\r\n}\r\n\r\n.tableHead > th:nth-child(3) {\r\n\twidth: 75px;\r\n}\r\n\r\n.tableHead > th:nth-child(4) {\r\n\twidth: 75px;\r\n}\r\n\r\n.tableHead > th:nth-child(5) {\r\n\twidth: 50px;\r\n}\r\n\r\n.tableHead > th:nth-child(6) {\r\n\twidth: 25px;\r\n}\r\n\r\n.tableHead > th:nth-child(7) {\r\n\twidth: 25px;\r\n}\r\n\r\n/* .tableHead > th:nth-child(8) {\r\n\twidth: 25px;\r\n} */\r\n\r\n.query, .delete {\r\n\tmargin:  0px auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vaG9tZS9ncm91cHMvZ3JvdXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7QUFDbkIseUJBQXlCO0FBQ3pCOztBQUVBO0NBQ0MsbUJBQW1CO0FBQ3BCOztBQUNBO0NBQ0MsWUFBWTtBQUNiOztBQUNBO0NBQ0MsWUFBWTtBQUNiOztBQUNBO0NBQ0MsV0FBVztBQUNaOztBQUNBO0NBQ0MsV0FBVztBQUNaOztBQUNBO0NBQ0MsV0FBVztBQUNaOztBQUNBO0NBQ0MsV0FBVztBQUNaOztBQUNBO0NBQ0MsV0FBVztBQUNaOztBQUNBOztHQUVHOztBQUNIO0NBQ0MsaUJBQWlCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vaG9tZS9ncm91cHMvZ3JvdXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wb2ludGVye1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG5jb2xvcjogIzAwN2JmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udGFibGUge1xyXG5cdHRhYmxlLWxheW91dDogZml4ZWQ7XHJcbn1cclxuLnRhYmxlSGVhZCA+IHRoOm50aC1jaGlsZCgxKSB7XHJcblx0d2lkdGg6IDIwMHB4O1xyXG59XHJcbi50YWJsZUhlYWQgPiB0aDpudGgtY2hpbGQoMikge1xyXG5cdHdpZHRoOiAyMDBweDtcclxufVxyXG4udGFibGVIZWFkID4gdGg6bnRoLWNoaWxkKDMpIHtcclxuXHR3aWR0aDogNzVweDtcclxufVxyXG4udGFibGVIZWFkID4gdGg6bnRoLWNoaWxkKDQpIHtcclxuXHR3aWR0aDogNzVweDtcclxufVxyXG4udGFibGVIZWFkID4gdGg6bnRoLWNoaWxkKDUpIHtcclxuXHR3aWR0aDogNTBweDtcclxufVxyXG4udGFibGVIZWFkID4gdGg6bnRoLWNoaWxkKDYpIHtcclxuXHR3aWR0aDogMjVweDtcclxufVxyXG4udGFibGVIZWFkID4gdGg6bnRoLWNoaWxkKDcpIHtcclxuXHR3aWR0aDogMjVweDtcclxufVxyXG4vKiAudGFibGVIZWFkID4gdGg6bnRoLWNoaWxkKDgpIHtcclxuXHR3aWR0aDogMjVweDtcclxufSAqL1xyXG4ucXVlcnksIC5kZWxldGUge1xyXG5cdG1hcmdpbjogIDBweCBhdXRvO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/admin/home/groups/group.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin/home/groups/group.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n \r\n<app-admin-top-nav></app-admin-top-nav>\r\n<router-outlet></router-outlet>\r\n    <!-- Page section start -->\r\n    <main class=\"main_container\">\r\n        <div class=\"container\">\r\n            <div class=\"main_con_inner\">\r\n          \r\n\r\n                <app-admin-side-nav></app-admin-side-nav>\r\n\r\n                <!-- right section  start -->\r\n                <section class=\"right_panel\">\r\n                       <!--------- Add Groups Start Here ---------->\r\n  <div class=\"addgroup hide_tab active\" id=\"pop_2\">\r\n    <div class=\"add_group_pop\" *ngIf=\"addGroup_show\">\r\n       <div class=\"group_pop_content\">\r\n            <div class=\"rph_header\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-12 col-md-12 col-lg-12 rph_left\">\r\n                        <h5>Add Group</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        \r\n            <!-- <form  name=\"form\" (ngSubmit)=\"onSubmit()\" #f=\"ngForm\" novalidate> -->\r\n                <form class=\"user_fileds\" name=\"form\" (ngSubmit)=\"f.form.valid && onSubmit()\" #f=\"ngForm\" novalidate>\r\n              \r\n                        <div class=\"form-group row\">\r\n                          <div class=\"col-sm-2 col-md-2 col-lg-2\">\r\n                            <label for=\"groupname\">Group Name</label>\r\n                          </div>\r\n                           \r\n                          <div class=\"col-sm-6 col-md-10 col-lg-10\">\r\n                            <input type=\"text\" class=\"form-control \" name=\"name\" placeholder=\"\" [(ngModel)]=\"model.name\" #name=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && name.invalid }\" required minlength=\"3\" maxlength=\"30\">\r\n                            <div *ngIf=\"f.submitted && name.invalid\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"name.errors.required\">Group Name is required</div>\r\n                            </div>\r\n                                <div *ngIf=\"name.errors?.minlength\" class=\"invalid-feedback\">\r\n                                    Group Name must be at least 3 characters long.\r\n                                </div> \r\n                                <div *ngIf=\"name.errors?.maxlength\" class=\"invalid-feedback\"> \r\n                                    Group Name can be max 30 characters long.\r\n                                </div>\r\n                          </div>\r\n                        </div>\r\n\r\n                        <div class=\"form-group row\">\r\n                          <div class=\"col-sm-2 col-md-2 col-lg-2\">\r\n                            <label for=\"mail\">Description</label>\r\n                          </div>\r\n                          <div class=\"col-sm-6 col-md-10 col-lg-10\">\r\n                            <input type=\"text\" class=\"form-control \" name=\"description\" placeholder=\"\" [(ngModel)]=\"model.description\" #description=\"ngModel\" [ngClass]=\"{ 'is-invalid': f.submitted && description.invalid }\" required minlength=\"3\" maxlength=\"100\">\r\n                            <div *ngIf=\"f.submitted && description.invalid\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"description.errors.required\">Description is required</div>\r\n                            </div>\r\n                            <div *ngIf=\"description.errors?.minlength\" class=\"invalid-feedback\">\r\n                                    Description must be at least 3 characters long.\r\n                            </div> \r\n                            <div *ngIf=\"description.errors?.maxlength\" class=\"invalid-feedback\"> \r\n                                    Description can be max 100 characters long.\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                        <input type=\"hidden\" class=\"form-control \" name=\"id\" placeholder=\"\" [(ngModel)]=\"model.id\" #id=\"ngModel\" >\r\n                        <div class=\"buttons form-group\">\r\n                                <button class=\" btn-small canadd\" (click)=\"cancelGroup()\">Cancel</button>\r\n                                <button class=\" btn-small bnt_blue\"  *ngIf=\"submitBtn\">Submit</button>\r\n                                <button class=\" btn-small bnt_blue\"  *ngIf=\"updateBTn\">Update</button>\r\n                              </div>\r\n            </form>\r\n       </div>\r\n    </div>\r\n    <div class=\"right_panel_inner\">\r\n          <div class=\"rph_header\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-sm-6 col-md-6 col-lg-6 rph_left\">\r\n                      <h5>Groups</h5>\r\n                  </div>\r\n\r\n                  <div class=\"col-sm-6 col-md-6 col-lg-6\">\r\n                      <div class=\"rph_right\">\r\n                          <form class=\"serach_form d-flex\">\r\n                           \r\n                              <button type=\"button\" class=\"search_btn\"><i class=\"fas fa-search\"></i>\r\n                                 <div class=\"serach_box\"><input type=\"text\" placeholder=\"Search..\"></div>\r\n                              </button>\r\n         \r\n                          </form>\r\n                           <button type=\"button\" id=\"addgroups\" class=\"btn-small bnt_blue\" (click)=\"onAddGroupClick()\">Add Group</button>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          <div class=\"right_panel_box group_table\">\r\n            <div class=\"table-responsive\">\r\n              <table class=\"table\">\r\n                  <thead>\r\n                      <tr class=\"tableHead\">\r\n                          <th>Group Name</th>\r\n                          <th>Description</th>\r\n                          <th class=\"text-center\">Asset Mapped</th>\r\n                          <th class=\"text-center\">User Mapped</th>\r\n                          <th></th>\r\n                          <th></th>\r\n                          <th></th>\r\n                      </tr>\r\n                  </thead>\r\n                  <tbody>\r\n                      <tr *ngFor=\"let group of groups ; index as i\">\r\n                         <!--[routerLink]=\"['/admin/group/map']\"--> \r\n                          <td><a  class=\"pointer\" (click)=\"shareGrpDetails(group.id, group.name)\">{{group.name}}</a></td>\r\n                          <td>{{group.description}}</td>\r\n                          <td class=\"cen_blue\">Asset ({{group.assetCount}})</td>\r\n                          <td class=\"cen_blue\">Users ({{group.userCount}})</td>\r\n                          <td>\r\n                              <div class=\"custom-switch custom-switch-label-onoff pl-0\">\r\n                                  <input class=\"custom-switch-input\" id=\"{{'btn_0'+i}}\" type=\"checkbox\" (click)=\"changeStatus($event,group.id)\" [checked]=\"(group.status== 'true') ? false: true\" >\r\n                                  <label class=\"custom-switch-btn\" for=\"{{'btn_0'+i}}\"></label>\r\n                              </div>\r\n                          </td>\r\n                          <td>\r\n                              <div class=\"info_btn\"><button type=\"button\" class=\"query\" (click)=\"onEditGroupClick($event,group.id)\"><img src=\"assets/images/query_icon.png\"></button></div>\r\n                          </td>\r\n                          <td>\r\n                              <button type=\"button\" class=\"delete\" (click)=\"onDeleteGroupClick($event,group.id)\"><i class=\"far fa-trash-alt\"></i></button>\r\n                          </td>\r\n\r\n                      </tr>\r\n                    </tbody>\r\n              </table>\r\n              </div>\r\n          </div>\r\n    </div>\r\n    \r\n </div>  \r\n  <!---- Add Groups  End Here ---->\r\n\r\n\r\n                     \r\n                      \r\n\r\n\r\n                </section> <!-- Right Panel End Here -->\r\n            </div>\r\n        </div>\r\n    </main>\r\n    <footer class=\"fot_main\">\r\n      <div class=\"container\">\r\n        <div class=\"fot_inner\">\r\n          <div class=\"row\"><div class=\"col-sm-12 col-md-12\"><p>© ALLERGAN 2019</p></div></div>\r\n        </div>\r\n      </div>\r\n    </footer>\r\n  "

/***/ }),

/***/ "./src/app/admin/home/groups/group.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/home/groups/group.component.ts ***!
  \******************************************************/
/*! exports provided: GroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupComponent", function() { return GroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_groupservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/groupservice */ "./src/app/admin/services/groupservice.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_sharedservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/sharedservice */ "./src/app/admin/services/sharedservice.ts");
/* harmony import */ var _services_metadataService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/metadataService */ "./src/app/admin/services/metadataService.ts");
/* harmony import */ var src_app_services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var GroupComponent = /** @class */ (function () {
    function GroupComponent(formBuilder, groupService, service, metaService, alertService, router) {
        this.formBuilder = formBuilder;
        this.groupService = groupService;
        this.service = service;
        this.metaService = metaService;
        this.alertService = alertService;
        this.router = router;
        this.addGroup_show = false;
        this.submitBtn = true;
        this.updateBTn = false;
        this.submitted = false;
        this.mappedAssetIDs = [];
        this.mappedUserIDs = [];
        this.model = {};
    }
    GroupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.groupService.getGroups().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (groups) {
            _this.groups = groups.data;
            groups.data.forEach(function (g) {
                _this.metaService.getMappedAssets(g.id).pipe().subscribe(function (data) {
                    _this.mappedAssetIDs = [];
                    data.data.forEach(function (a) {
                        _this.mappedAssetIDs.push(a.id);
                    });
                    g.assetCount = _this.mappedAssetIDs.length;
                });
                _this.metaService.getMappedUsers(g.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (users) {
                    _this.mappedUserIDs = [];
                    users.data.forEach(function (u) {
                        _this.mappedUserIDs.push(u.id);
                    });
                    g.userCount = _this.mappedUserIDs.length;
                });
            });
        });
    };
    GroupComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.model.id > 0) {
            this.groupService.editGroup(this.model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (groups) {
                _this.cancelGroup();
                _this.groupService.getGroups().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (groups) {
                    _this.groups = groups.data;
                    _this.alertService.success('Successfully Updated.');
                    window.scroll(0, 0);
                }, function (error) {
                    _this.alertService.error(error);
                    window.scroll(0, 0);
                });
            });
        }
        else {
            this.groupService.insertGroup(this.model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (groups) {
                _this.cancelGroup();
                _this.groupService.getGroups().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (groups) {
                    _this.groups = groups.data;
                    _this.alertService.success('Successfully Added.');
                    window.scroll(0, 0);
                }, function (error) {
                    _this.alertService.error(error);
                    window.scroll(0, 0);
                });
            });
        }
    };
    GroupComponent.prototype.onAddGroupClick = function () {
        this.addGroup_show = true;
        this.submitBtn = true;
        this.updateBTn = false;
        this.model.id = '';
        this.model.name = '';
        this.model.description = '';
    };
    GroupComponent.prototype.onEditGroupClick = function ($event, Id) {
        var _this = this;
        this.addGroup_show = true;
        this.submitBtn = false;
        this.updateBTn = true;
        this.groupService.findGroupById(Id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (groups) {
            _this.model.id = groups.data.id;
            _this.model.name = groups.data.name;
            _this.model.description = groups.data.description;
        });
    };
    GroupComponent.prototype.onDeleteGroupClick = function ($event, Id) {
        var _this = this;
        this.groupService.deleteGroup(Id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (groups) {
            _this.groups = groups.data;
            _this.alertService.success('Successfully Deleted.');
            window.scroll(0, 0);
        }, function (error) {
            _this.alertService.error(error);
            window.scroll(0, 0);
        });
    };
    GroupComponent.prototype.cancelGroup = function () {
        this.addGroup_show = false;
    };
    GroupComponent.prototype.changeStatus = function ($event, Id) {
        var _this = this;
        var status = 'false';
        if ($event.target.checked == false) {
            status = 'true';
        }
        this.groupService.changeStatus(status, Id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (groups) {
            _this.groups = groups.data;
        });
    };
    GroupComponent.prototype.shareGrpDetails = function (grpId, grp) {
        this.service.saveData(grpId, grp);
        this.router.navigate(['/admin/group/map']);
    };
    GroupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-group',
            template: __webpack_require__(/*! ./group.component.html */ "./src/app/admin/home/groups/group.component.html"),
            styles: [__webpack_require__(/*! ./group.component.css */ "./src/app/admin/home/groups/group.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_groupservice__WEBPACK_IMPORTED_MODULE_2__["GroupService"],
            _services_sharedservice__WEBPACK_IMPORTED_MODULE_5__["sharedservice"],
            _services_metadataService__WEBPACK_IMPORTED_MODULE_6__["MetaDataService"],
            src_app_services__WEBPACK_IMPORTED_MODULE_7__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], GroupComponent);
    return GroupComponent;
}());



/***/ }),

/***/ "./src/app/admin/home/question-bank/question-bank.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/admin/home/question-bank/question-bank.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table {\r\n    table-layout: fixed;\r\n}\r\n.tableHead > th:nth-child(1) {\r\n\twidth: 100px;\r\n}\r\n.tableHead > th:nth-child(2) {\r\n\twidth: 350px;\r\n}\r\n.tableHead > th:nth-child(3) {\r\n\twidth: 100px;\r\n}\r\n.tableHead > th:nth-child(4) {\r\n\twidth: 25px;\r\n}\r\n.tableHead > th:nth-child(5) {\r\n\twidth: 25px;\r\n}\r\n.query, .delete {\r\n\tmargin:  0px auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vaG9tZS9xdWVzdGlvbi1iYW5rL3F1ZXN0aW9uLWJhbmsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBO0NBQ0MsV0FBVztBQUNaO0FBQ0E7Q0FDQyxXQUFXO0FBQ1o7QUFFQTtDQUNDLGlCQUFpQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2hvbWUvcXVlc3Rpb24tYmFuay9xdWVzdGlvbi1iYW5rLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUge1xyXG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcclxufVxyXG4udGFibGVIZWFkID4gdGg6bnRoLWNoaWxkKDEpIHtcclxuXHR3aWR0aDogMTAwcHg7XHJcbn1cclxuLnRhYmxlSGVhZCA+IHRoOm50aC1jaGlsZCgyKSB7XHJcblx0d2lkdGg6IDM1MHB4O1xyXG59XHJcbi50YWJsZUhlYWQgPiB0aDpudGgtY2hpbGQoMykge1xyXG5cdHdpZHRoOiAxMDBweDtcclxufVxyXG4udGFibGVIZWFkID4gdGg6bnRoLWNoaWxkKDQpIHtcclxuXHR3aWR0aDogMjVweDtcclxufVxyXG4udGFibGVIZWFkID4gdGg6bnRoLWNoaWxkKDUpIHtcclxuXHR3aWR0aDogMjVweDtcclxufVxyXG5cclxuLnF1ZXJ5LCAuZGVsZXRlIHtcclxuXHRtYXJnaW46ICAwcHggYXV0bztcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/admin/home/question-bank/question-bank.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/admin/home/question-bank/question-bank.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-top-nav></app-admin-top-nav>\r\n<router-outlet></router-outlet>\r\n    <!-- Page section start -->\r\n    <main class=\"main_container\">\r\n        <div class=\"container\">\r\n            <div class=\"main_con_inner\">\r\n          \r\n\r\n                <app-admin-side-nav></app-admin-side-nav>\r\n   <!-- right section  start -->\r\n   <section class=\"right_panel\">\r\n <!-- Question Bank Starts -->\r\n                      \r\n <div class=\"question_bank\"  id=\"pop_4\">\r\n        <div class=\"right_panel_inner question_bank_list\">\r\n            <div class=\"rph_header\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6 col-md-8 col-lg-6 rph_left\">\r\n                        <h5>Question Bank</h5>\r\n                    </div>\r\n\r\n                    <div class=\"col-sm-6 col-md-6 col-lg-6\">\r\n                        <div class=\"rph_right\">\r\n                            <form class=\"serach_form d-flex\">\r\n                            \r\n                                <button type=\"button\" class=\"search_btn\"><i class=\"fas fa-search\"></i>\r\n                                  <div class=\"serach_box\"><input type=\"text\" placeholder=\"Search..\"></div>\r\n                                </button>\r\n          \r\n                            </form>\r\n                            <button type=\"button\" id=\"addquestions\" class=\"btn-small bnt_blue\"  [routerLink]=\"['/admin/question/add']\">Add Question</button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"right_panel_box group_table\">\r\n              <div class=\"table-responsive\">\r\n                <table class=\"table\">\r\n                    <thead>\r\n                        <tr class=\"tableHead\">\r\n                            <th>Title</th>                           \r\n                            <th>Questions</th>\r\n                            <th>Type</th>                            \r\n                            <th></th>\r\n                            <th></th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr  *ngFor=\"let question of questions ; index as i\">\r\n                            <td>{{question.title != null ? question.title : \"\"}}</td>\r\n                            <td>{{(question.qsData != null && question.qsData.question != null) ? question.qsData.question: \"\"}}</td>\r\n                            <td>{{(question.qsData != null && question.qsData.questionType != null)? question.qsData.questionType : \"\"}}</td>\r\n                            <td>\r\n                                <div class=\"info_btn\">\r\n                                  <button type=\"button\" class=\"query\" routerLink=\"{{'/admin/question/edit/'+question.id}}\"><img src=\"assets/images/query_icon.png\"></button>\r\n                                  \r\n                              </div>\r\n                            </td>\r\n                            <td><button type=\"button\" class=\"delete\" (click)=\"deleteQuestion($event,question.id)\"><i class=\"far fa-trash-alt\"></i></button></td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- Add Questions Starts-->\r\n       <!-- <div class=\"question_bank_Inner\">\r\n            <div class=\"rph_header\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6 col-md-6 col-lg-6 rph_left\">\r\n                        <h5>Add Question</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"right_panel_box2\">\r\n              <form class=\"user_fileds\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-6 col-md-6 col-lg-6\">\r\n                      <div class=\"form-group row\">\r\n                        <div class=\"col-sm-4 col-md-4 col-lg-4\">\r\n                          <label for=\"lastname\">Title</label>\r\n                        </div>\r\n                        <div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"\" name=\"lastname\">\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group row\">\r\n                        <div class=\"col-sm-4 col-md-4 col-lg-4\">\r\n                          <label >Select TA</label>\r\n                        </div>\r\n                        <div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n                            <select class=\"custom-select slects_option\">\r\n                              <option ></option>\r\n                              <option value=\"1\">Select TA</option>\r\n                              <option value=\"2\">Select TA</option>\r\n                              <option value=\"3\">Select TA</option>\r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group row\">\r\n                        <div class=\"col-sm-4 col-md-4 col-lg-4\">\r\n                          <label >Asset Type</label>\r\n                        </div>\r\n                        <div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n                            <select class=\"custom-select slects_option\">\r\n                              <option ></option>\r\n                              <option value=\"1\">Asset Type</option>\r\n                              <option value=\"2\">Asset Type</option>\r\n                              <option value=\"3\">Asset Type</option>\r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group row\">\r\n                        <div class=\"col-sm-4 col-md-4 col-lg-4\">\r\n                          <label >Disease state</label>\r\n                        </div>\r\n                        <div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n                            <select class=\"custom-select slects_option\">\r\n                              <option ></option>\r\n                              <option value=\"1\">Disease state</option>\r\n                              <option value=\"2\">Disease state</option>\r\n                              <option value=\"3\">Disease state</option>\r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group row\">\r\n                        <div class=\"col-sm-4 col-md-4 col-lg-4\">\r\n                          <label >Product</label>\r\n                        </div>\r\n                        <div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n                            <select class=\"custom-select slects_option\">\r\n                              <option ></option>\r\n                              <option value=\"1\">Product</option>\r\n                              <option value=\"2\">Product</option>\r\n                              <option value=\"3\">Product</option>\r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group row\">\r\n                        <div class=\"col-sm-4 col-md-4 col-lg-4\">\r\n                          <label >Question Type</label>\r\n                        </div>\r\n                        <div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n                            <select class=\"custom-select slects_option\">\r\n                              <option ></option>\r\n                              <option value=\"1\">Question Type</option>\r\n                              <option value=\"2\">Question Type</option>\r\n                              <option value=\"3\">Question Type</option>\r\n                          </select>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"form-group row\">\r\n                        <div class=\"col-sm-4 col-md-4 col-lg-4\">\r\n                          <label >Region</label>\r\n                        </div>\r\n                        <div class=\"col-sm-8 col-md-8 col-lg-8\">\r\n                            <select class=\"custom-select slects_option\">\r\n                              <option ></option>\r\n                              <option value=\"1\">Region</option>\r\n                              <option value=\"2\">Region</option>\r\n                              <option value=\"3\">Region</option>\r\n                            </select>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col-sm-12 col-md-12 col-lg-12 rph_left\">\r\n                    <h5>Answers</h5>\r\n                    <div class=\"form-group row\">\r\n                      <div class=\"col-sm-12 col-md-12 col-lg-12 feedBackWrap\">\r\n                        <label for=\"lastname\">A</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"\" name=\"\">\r\n                        <button type=\"button\" class=\"delete\"><i class=\"far fa-trash-alt\"></i></button>\r\n                        <div class=\"feedBack\">\r\n                          <h4>Feedback</h4>\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"\" name=\"\">\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"form-group row\">\r\n                        <div class=\"col-sm-12 col-md-12 col-lg-12 feedBackWrap\">\r\n                          <label for=\"lastname\">B</label>\r\n                          <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"\" name=\"\">\r\n                          <button type=\"button\" class=\"delete\"><i class=\"far fa-trash-alt\"></i></button>\r\n                          <div class=\"feedBack\">\r\n                            <h4>Feedback</h4>\r\n                            <input type=\"text\" class=\"form-control\" id=\"\" placeholder=\"\" name=\"\">\r\n                          </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"feedBack_btns row\">\r\n                      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 feedBack_btn1\">\r\n                        <button class=\"btn btn_feedback\">Add Answer</button>\r\n                      </div>\r\n                      <div class=\"col-xs-12 col-sm-12 col-md-12 col-lg-12 feedBack_btn2\">\r\n                          <button class=\"btn btn_feedback btn_feedback_cancel\">Cancel</button>\r\n                          <button class=\"btn btn_feedback\">Save & Add Another</button>\r\n                          <button class=\"btn btn_feedback btn_feedback_save\">Save</button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n         </div>-->\r\n      </div>\r\n\r\n\r\n\r\n    <!-- Question Bank Ends -->\r\n\r\n</section> <!-- Right Panel End Here -->\r\n</div>\r\n</div>\r\n</main>\r\n<footer class=\"fot_main\">\r\n<div class=\"container\">\r\n<div class=\"fot_inner\">\r\n<div class=\"row\"><div class=\"col-sm-12 col-md-12\"><p>© ALLERGAN 2019</p></div></div>\r\n</div>\r\n</div>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/admin/home/question-bank/question-bank.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/admin/home/question-bank/question-bank.component.ts ***!
  \*********************************************************************/
/*! exports provided: QuestionBankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionBankComponent", function() { return QuestionBankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_questionbankservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/questionbankservice */ "./src/app/admin/services/questionbankservice.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuestionBankComponent = /** @class */ (function () {
    function QuestionBankComponent(formBuilder, questionBankService, alertService, router) {
        this.formBuilder = formBuilder;
        this.questionBankService = questionBankService;
        this.alertService = alertService;
        this.router = router;
    }
    QuestionBankComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.questionBankService.getAllQuestions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (questions) {
            console.log(questions);
            _this.questions = questions;
        });
    };
    QuestionBankComponent.prototype.deleteQuestion = function ($event, questionID) {
        var _this = this;
        this.questionBankService.deleteQuestion(questionID).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (questions) {
            _this.questionBankService.getAllQuestions().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (questions) {
                console.log(questions);
                _this.questions = questions;
                _this.alertService.success('Successfully Deleted.');
                window.scroll(0, 0);
            }, function (error) {
                _this.alertService.error(error);
                window.scroll(0, 0);
            });
        });
    };
    QuestionBankComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-question-bank',
            template: __webpack_require__(/*! ./question-bank.component.html */ "./src/app/admin/home/question-bank/question-bank.component.html"),
            styles: [__webpack_require__(/*! ./question-bank.component.css */ "./src/app/admin/home/question-bank/question-bank.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_questionbankservice__WEBPACK_IMPORTED_MODULE_3__["QuestionBankService"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], QuestionBankComponent);
    return QuestionBankComponent;
}());



/***/ }),

/***/ "./src/app/admin/home/quiz/quiz.component.css":
/*!****************************************************!*\
  !*** ./src/app/admin/home/quiz/quiz.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2hvbWUvcXVpei9xdWl6LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/home/quiz/quiz.component.html":
/*!*****************************************************!*\
  !*** ./src/app/admin/home/quiz/quiz.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-admin-top-nav></app-admin-top-nav>\r\n<main class=\"main_container\">\r\n  <div class=\"container\">\r\n      <div class=\"main_con_inner\">\r\n    \r\n\r\n          <app-admin-side-nav></app-admin-side-nav>\r\n\r\n          <!-- right section  start -->\r\n          <section class=\"right_panel\">\r\n<!-- Quiz Starts -->\r\n                      \r\n<div class=\"quiz_wrap hide_tab active\"  id=\"pop_6\">\r\n    <div class=\"right_panel_inner quiz_list\">\r\n        <div class=\"rph_header\">\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-6 col-md-8 col-lg-6 rph_left\">\r\n                    <h5>Quiz Bank</h5>\r\n                </div>\r\n\r\n                <div class=\"col-sm-6 col-md-6 col-lg-6\">\r\n                    <div class=\"rph_right\">\r\n                        <form class=\"serach_form d-flex\">\r\n                        \r\n                            <button type=\"button\" class=\"search_btn\"><i class=\"fas fa-search\"></i>\r\n                              <div class=\"serach_box\"><input type=\"text\" placeholder=\"Search..\"></div>\r\n                            </button>\r\n      \r\n                        </form>\r\n                        <button type=\"button\" id=\"addquiz\" class=\"btn-small bnt_blue\" [routerLink]=\"['/admin/quiz/add']\">Add Quiz</button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"right_panel_box group_table\">\r\n          <div class=\"table-responsive\">\r\n            <table class=\"table\">\r\n                <thead>\r\n                    <tr>\r\n                        <th>Title</th>                       \r\n                        <th class=\"text-center\">Number of Questions</th>                       \r\n                        <!-- <th class=\"text-center\">Added</th> -->\r\n                        <th></th>\r\n                        <th></th>\r\n                        <th></th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n\r\n                    <tr *ngFor=\"let q of quiz ; index as i\">\r\n                        <td>{{q.title}}</td>\r\n                        <!-- <td>{{q[4]}}</td> -->\r\n                        <td class=\"text-center\">{{getQuestionSize(q.jsonData)}}</td>\r\n                        <!-- <td>{{q[6]}}</td> -->\r\n                        <!-- <td class=\"text-center\">{{q.dateCreated | date : \"dd.MM.y\"}}</td> -->\r\n                        <td>\r\n                            <div class=\"action_btn \">\r\n                              <button type=\"button\" class=\"query\" routerLink=\"{{'/admin/quiz/edit/'+q.id}}\"><img src=\"assets/images/query_icon.png\"></button>\r\n                           \r\n\t\t\t\t\t\t\t \r\n                          </div>\r\n                        </td>\r\n                        <td>   <button type=\"button\" class=\"delete\" (click)=\"deleteQuizClick($event,q.id)\"><i class=\"far fa-trash-alt\"></i></button></td>\r\n                        <td> <span  class=\"clone\"  (click)=\"openClone($event,q.id)\" [ngClass]=\"{active_clone: isActive(q.id)}\">\r\n                                <img src=\"assets/images/clone.png\">\r\n                                <div class=\"clone_pop\" routerLink=\"{{'/admin/quiz/clone/'+q.id}}\">\r\n                                <span>Clone</span>\r\n                                </div>\r\n                            </span></td>\r\n                    </tr>\r\n                    \r\n                </tbody>\r\n            </table>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n</div>\r\n\r\n<!-- Quiz Ends -->\r\n</section> <!-- Right Panel End Here -->\r\n</div>\r\n</div>\r\n</main>\r\n<footer class=\"fot_main\">\r\n<div class=\"container\">\r\n<div class=\"fot_inner\">\r\n<div class=\"row\"><div class=\"col-sm-12 col-md-12\"><p>© ALLERGAN 2019</p></div></div>\r\n</div>\r\n</div>\r\n</footer>"

/***/ }),

/***/ "./src/app/admin/home/quiz/quiz.component.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/home/quiz/quiz.component.ts ***!
  \***************************************************/
/*! exports provided: QuizComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizComponent", function() { return QuizComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_quizservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/quizservice */ "./src/app/admin/services/quizservice.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var QuizComponent = /** @class */ (function () {
    function QuizComponent(formBuilder, quizService, alertService, router) {
        this.formBuilder = formBuilder;
        this.quizService = quizService;
        this.alertService = alertService;
        this.router = router;
        this.zero = 0;
    }
    QuizComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quizService.getQuiz().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (quizz) {
            _this.quiz = quizz.data;
        });
    };
    QuizComponent.prototype.getQuestionSize = function (data) {
        var selectedList = [];
        selectedList = data.toString().replace('[', '').replace(']', '').split(',').map(Number);
        if (selectedList.indexOf(this.zero) > -1) {
            selectedList.splice(selectedList.indexOf(this.zero), 1);
        }
        return selectedList.length;
    };
    QuizComponent.prototype.deleteQuizClick = function ($event, Id) {
        var _this = this;
        this.quizService.deleteQuiz(Id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])()).subscribe(function (quizz) {
            _this.quiz = quizz.data;
            _this.alertService.success('Successfully Deleted.');
            window.scroll(0, 0);
        }, function (error) {
            _this.alertService.error(error);
            window.scroll(0, 0);
        });
    };
    QuizComponent.prototype.openClone = function ($event, Id) {
        this.selected = Id;
        $event.stopPropagation();
    };
    QuizComponent.prototype.isActive = function (item) {
        return this.selected === item;
    };
    ;
    QuizComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-quiz',
            template: __webpack_require__(/*! ./quiz.component.html */ "./src/app/admin/home/quiz/quiz.component.html"),
            styles: [__webpack_require__(/*! ./quiz.component.css */ "./src/app/admin/home/quiz/quiz.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_quizservice__WEBPACK_IMPORTED_MODULE_2__["QuizService"],
            src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], QuizComponent);
    return QuizComponent;
}());



/***/ }),

/***/ "./src/app/admin/model/Answer.ts":
/*!***************************************!*\
  !*** ./src/app/admin/model/Answer.ts ***!
  \***************************************/
/*! exports provided: Answer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Answer", function() { return Answer; });
var Answer = /** @class */ (function () {
    function Answer() {
    }
    return Answer;
}());



/***/ }),

/***/ "./src/app/admin/model/AnswerData.ts":
/*!*******************************************!*\
  !*** ./src/app/admin/model/AnswerData.ts ***!
  \*******************************************/
/*! exports provided: QSData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QSData", function() { return QSData; });
var QSData = /** @class */ (function () {
    function QSData() {
    }
    return QSData;
}());



/***/ }),

/***/ "./src/app/admin/model/EditUser.ts":
/*!*****************************************!*\
  !*** ./src/app/admin/model/EditUser.ts ***!
  \*****************************************/
/*! exports provided: EditUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUser", function() { return EditUser; });
var EditUser = /** @class */ (function () {
    function EditUser() {
        this.status = true;
        this.groups = [{ id: '', name: '' }];
        this.userGroups = [{ id: '', name: '' }];
        this.country = [{ id: '', name: '' }];
        this.manager = [{ id: '', name: '', email: '' }];
        this.item = [{ item_id: 0, item_text: "" }];
        this.product = [{ item_id: 0, item_text: "" }];
        this.diseasestate = [{ item_id: 0, item_text: "" }];
        this.userRoles = [{ id: 0, name: "" }];
        this.roles = [{ id: 0, name: "" }];
        this.region = [{ item_id: 0, item_text: "", country: [] }];
        this.therapeuticArea = [{ id: 0, name: "", product: [{ id: 0, name: "" }], disState: [{ id: 0, name: "" }] }];
    }
    return EditUser;
}());



/***/ }),

/***/ "./src/app/admin/model/Question.ts":
/*!*****************************************!*\
  !*** ./src/app/admin/model/Question.ts ***!
  \*****************************************/
/*! exports provided: Question */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Question", function() { return Question; });
var Question = /** @class */ (function () {
    function Question() {
    }
    return Question;
}());



/***/ }),

/***/ "./src/app/admin/model/Quize.ts":
/*!**************************************!*\
  !*** ./src/app/admin/model/Quize.ts ***!
  \**************************************/
/*! exports provided: Quize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quize", function() { return Quize; });
var Quize = /** @class */ (function () {
    function Quize() {
    }
    return Quize;
}());



/***/ }),

/***/ "./src/app/admin/model/editUserName.ts":
/*!*********************************************!*\
  !*** ./src/app/admin/model/editUserName.ts ***!
  \*********************************************/
/*! exports provided: EditUserName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserName", function() { return EditUserName; });
var EditUserName = /** @class */ (function () {
    function EditUserName(countryControl, etype, firstname, lastnames, mail, title, status, homeCountry, countryList) {
        this.countryControl = countryControl;
        this.etype = etype;
        this.firstname = firstname;
        this.lastnames = lastnames;
        this.mail = mail;
        this.title = title;
        this.status = status;
        this.homeCountry = homeCountry;
        this.countryList = countryList;
    }
    return EditUserName;
}());



/***/ }),

/***/ "./src/app/admin/model/managerDTO.ts":
/*!*******************************************!*\
  !*** ./src/app/admin/model/managerDTO.ts ***!
  \*******************************************/
/*! exports provided: ManagerDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagerDto", function() { return ManagerDto; });
var ManagerDto = /** @class */ (function () {
    function ManagerDto(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }
    return ManagerDto;
}());



/***/ }),

/***/ "./src/app/admin/model/taDto.ts":
/*!**************************************!*\
  !*** ./src/app/admin/model/taDto.ts ***!
  \**************************************/
/*! exports provided: TaDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaDto", function() { return TaDto; });
var TaDto = /** @class */ (function () {
    function TaDto(diseasestate, product, therapeutic) {
        this.diseasestate = diseasestate;
        this.product = product;
        this.therapeutic = therapeutic;
    }
    return TaDto;
}());



/***/ }),

/***/ "./src/app/admin/route/route-routing.ts":
/*!**********************************************!*\
  !*** ./src/app/admin/route/route-routing.ts ***!
  \**********************************************/
/*! exports provided: RouteRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteRoutingModule", function() { return RouteRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _admin_side_nav_admin_side_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../admin-side-nav/admin-side-nav.component */ "./src/app/admin/admin-side-nav/admin-side-nav.component.ts");
/* harmony import */ var _admin_top_nav_admin_top_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin-top-nav/admin-top-nav.component */ "./src/app/admin/admin-top-nav/admin-top-nav.component.ts");
/* harmony import */ var _home_edit_user__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../home/edit-user */ "./src/app/admin/home/edit-user/index.ts");
/* harmony import */ var _home_groups_group_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../home/groups/group.component */ "./src/app/admin/home/groups/group.component.ts");
/* harmony import */ var _home_group_mapping_group_mapping_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../home/group-mapping/group.mapping.component */ "./src/app/admin/home/group-mapping/group.mapping.component.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var _home_question_bank_question_bank_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../home/question-bank/question-bank.component */ "./src/app/admin/home/question-bank/question-bank.component.ts");
/* harmony import */ var src_app_allergan_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/allergan/shared/shared.module */ "./src/app/allergan/shared/shared.module.ts");
/* harmony import */ var _home_assets__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../home/assets */ "./src/app/admin/home/assets/index.ts");
/* harmony import */ var _home_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../home/quiz/quiz.component */ "./src/app/admin/home/quiz/quiz.component.ts");
/* harmony import */ var _home_assets_add_asset__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../home/assets/add-asset */ "./src/app/admin/home/assets/add-asset/index.ts");
/* harmony import */ var _home_add_quiz_add_quiz_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../home/add-quiz/add-quiz.component */ "./src/app/admin/home/add-quiz/add-quiz.component.ts");
/* harmony import */ var _home_edit_quiz_edit_quiz_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../home/edit-quiz/edit-quiz.component */ "./src/app/admin/home/edit-quiz/edit-quiz.component.ts");
/* harmony import */ var _home_clone_quiz_clone_quiz_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../home/clone-quiz/clone-quiz.component */ "./src/app/admin/home/clone-quiz/clone-quiz.component.ts");
/* harmony import */ var _home_batch_import_batch_import_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../home/batch-import/batch-import.component */ "./src/app/admin/home/batch-import/batch-import.component.ts");
/* harmony import */ var _home_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../home/add-question/add-question.component */ "./src/app/admin/home/add-question/add-question.component.ts");
/* harmony import */ var _home_edit_question_edit_question_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../home/edit-question/edit-question.component */ "./src/app/admin/home/edit-question/edit-question.component.ts");
/* harmony import */ var _home_assets_edit_asset_edit_asset_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../home/assets/edit-asset/edit-asset.component */ "./src/app/admin/home/assets/edit-asset/edit-asset.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var RouteRoutingModule = /** @class */ (function () {
    function RouteRoutingModule() {
    }
    RouteRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                // CommonModule,
                // ReactiveFormsModule,
                // FormsModule,
                src_app_allergan_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__["NgMultiSelectDropDownModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                    { path: '', component: _admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"] },
                    { path: 'user/edit/:id', component: _home_edit_user__WEBPACK_IMPORTED_MODULE_5__["EditUserComponent"] },
                    { path: 'user/edit', component: _home_edit_user__WEBPACK_IMPORTED_MODULE_5__["EditUserComponent"] },
                    { path: 'group', component: _home_groups_group_component__WEBPACK_IMPORTED_MODULE_6__["GroupComponent"] },
                    { path: 'group/map', component: _home_group_mapping_group_mapping_component__WEBPACK_IMPORTED_MODULE_7__["GroupMappingComponent"] },
                    { path: 'questionBank', component: _home_question_bank_question_bank_component__WEBPACK_IMPORTED_MODULE_9__["QuestionBankComponent"] },
                    { path: 'asset', component: _home_assets__WEBPACK_IMPORTED_MODULE_11__["AssetsComponent"] },
                    { path: 'questionBank', component: _home_question_bank_question_bank_component__WEBPACK_IMPORTED_MODULE_9__["QuestionBankComponent"] },
                    { path: 'question/add', component: _home_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_18__["AddQuestionComponent"] },
                    { path: 'question/edit/:id', component: _home_edit_question_edit_question_component__WEBPACK_IMPORTED_MODULE_19__["EditQuestionComponent"] },
                    { path: 'quiz', component: _home_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_12__["QuizComponent"] },
                    { path: 'asset/add', component: _home_assets_add_asset__WEBPACK_IMPORTED_MODULE_13__["AddAssetComponent"] },
                    { path: 'quiz/add', component: _home_add_quiz_add_quiz_component__WEBPACK_IMPORTED_MODULE_14__["AddQuizComponent"] },
                    { path: 'edit/asset/:assetId', component: _home_assets_edit_asset_edit_asset_component__WEBPACK_IMPORTED_MODULE_20__["EditAssetComponent"] },
                    { path: 'quiz/clone/:id', component: _home_clone_quiz_clone_quiz_component__WEBPACK_IMPORTED_MODULE_16__["CloneQuizComponent"] },
                    { path: 'quiz/edit/:id', component: _home_edit_quiz_edit_quiz_component__WEBPACK_IMPORTED_MODULE_15__["EditQuizComponent"] },
                    { path: 'batchimport', component: _home_batch_import_batch_import_component__WEBPACK_IMPORTED_MODULE_17__["BatchImportComponent"] },
                ])
            ],
            declarations: [
                _admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"],
                _admin_side_nav_admin_side_nav_component__WEBPACK_IMPORTED_MODULE_3__["AdminSideNavComponent"],
                _admin_top_nav_admin_top_nav_component__WEBPACK_IMPORTED_MODULE_4__["AdminTopNavComponent"],
                _home_edit_user__WEBPACK_IMPORTED_MODULE_5__["EditUserComponent"],
                _home_groups_group_component__WEBPACK_IMPORTED_MODULE_6__["GroupComponent"],
                _home_group_mapping_group_mapping_component__WEBPACK_IMPORTED_MODULE_7__["GroupMappingComponent"],
                _home_question_bank_question_bank_component__WEBPACK_IMPORTED_MODULE_9__["QuestionBankComponent"],
                _home_assets__WEBPACK_IMPORTED_MODULE_11__["AssetsComponent"],
                _home_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_12__["QuizComponent"],
                _home_assets_add_asset__WEBPACK_IMPORTED_MODULE_13__["AddAssetComponent"],
                _home_quiz_quiz_component__WEBPACK_IMPORTED_MODULE_12__["QuizComponent"],
                _home_add_quiz_add_quiz_component__WEBPACK_IMPORTED_MODULE_14__["AddQuizComponent"],
                _home_edit_quiz_edit_quiz_component__WEBPACK_IMPORTED_MODULE_15__["EditQuizComponent"],
                _home_clone_quiz_clone_quiz_component__WEBPACK_IMPORTED_MODULE_16__["CloneQuizComponent"],
                _home_add_question_add_question_component__WEBPACK_IMPORTED_MODULE_18__["AddQuestionComponent"],
                _home_batch_import_batch_import_component__WEBPACK_IMPORTED_MODULE_17__["BatchImportComponent"],
                _home_edit_question_edit_question_component__WEBPACK_IMPORTED_MODULE_19__["EditQuestionComponent"],
                _home_assets_edit_asset_edit_asset_component__WEBPACK_IMPORTED_MODULE_20__["EditAssetComponent"],
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["CUSTOM_ELEMENTS_SCHEMA"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RouteRoutingModule);
    return RouteRoutingModule;
}());



/***/ }),

/***/ "./src/app/admin/services/userservices.ts":
/*!************************************************!*\
  !*** ./src/app/admin/services/userservices.ts ***!
  \************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/admin/users");
    };
    UserService.prototype.remove = function (Id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/admin/user/remove/" + Id);
    };
    UserService.prototype.statusChange = function (status, Id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/admin/user/status/" + Id + "/" + status);
    };
    UserService.prototype.editUser = function (Id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/admin/user/edit/" + Id);
    };
    UserService.prototype.editUserService = function (Id, user, manager, taDto, userRoles, userGroups) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/admin/user/edit/service/" + Id, { "user": user, "manager": manager, "area": taDto, "userRoles": userRoles, "userGroups": userGroups });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ })

}]);
//# sourceMappingURL=admin-route-route-routing.js.map