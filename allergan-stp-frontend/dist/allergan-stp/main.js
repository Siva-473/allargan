(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./admin/route/route-routing": [
		"./src/app/admin/route/route-routing.ts",
		"admin-route-route-routing"
	],
	"./directives/not-found/not-found-routing.module": [
		"./src/app/directives/not-found/not-found-routing.module.ts",
		"directives-not-found-not-found-routing-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/admin/model/group.ts":
/*!**************************************!*\
  !*** ./src/app/admin/model/group.ts ***!
  \**************************************/
/*! exports provided: Group */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return Group; });
var Group = /** @class */ (function () {
    function Group() {
    }
    return Group;
}());



/***/ }),

/***/ "./src/app/admin/model/quiz.ts":
/*!*************************************!*\
  !*** ./src/app/admin/model/quiz.ts ***!
  \*************************************/
/*! exports provided: Quiz */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Quiz", function() { return Quiz; });
var Quiz = /** @class */ (function () {
    function Quiz() {
    }
    return Quiz;
}());



/***/ }),

/***/ "./src/app/admin/services/assetservices.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/services/assetservices.ts ***!
  \*************************************************/
/*! exports provided: AssetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetService", function() { return AssetService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _model_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/group */ "./src/app/admin/model/group.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AssetService = /** @class */ (function () {
    function AssetService(http) {
        this.http = http;
    }
    AssetService.prototype.getAssetTypes = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/admin/assets-types");
    };
    AssetService.prototype.getTherapeuticAreas = function (assetTypeId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/admin/therapeutic-area/therapeutic-areas/" + Number(assetTypeId));
    };
    AssetService.prototype.getDiseaseStateForTA = function (taId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/admin/therapeutic-area/diseasestate/" + taId);
    };
    AssetService.prototype.getProductsForTA = function (taId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/admin/therapeutic-area/products/" + taId);
    };
    AssetService.prototype.getContentTypes = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/admin/content-type/content-types");
    };
    AssetService.prototype.getSources = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/admin/source/sources");
    };
    AssetService.prototype.getQuizes = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/admin/get-all-quiz");
    };
    AssetService.prototype.getRegion = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/admin/region/regions");
    };
    AssetService.prototype.getCountries = function (regionId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/admin/country/countries/" + regionId);
    };
    AssetService.prototype.getAssets = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/admin/asset/assets");
    };
    AssetService.prototype.getAsset = function (assetId, userId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/admin/asset/asset/" + assetId + "/" + userId);
    };
    AssetService.prototype.getdiseaseStatesProducts = function (userid, id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/user/" + userid + "/" + id);
    };
    AssetService.prototype.changeAssetStatus = function (assetId, status) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/admin/asset/status/" + assetId + "/" + status);
    };
    AssetService.prototype.deleteAsset = function (assetId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/admin/asset/remove/" + assetId);
    };
    AssetService.prototype.addAsset = function (formData) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/admin/asset/add-asset", formData);
    };
    AssetService.prototype.getGroups = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/admin/get-all-group");
    };
    AssetService.prototype.insertGroup = function (grp) {
        var group = new _model_group__WEBPACK_IMPORTED_MODULE_3__["Group"]();
        group.name = grp.name;
        group.description = grp.description;
        group.status = 'true';
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/admin/create-group", group);
    };
    AssetService.prototype.changeStatus = function (status, Id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/admin/change-group-status/" + Id + "/" + status);
    };
    AssetService.prototype.deleteGroup = function (Id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/admin/delete-group/" + Id);
    };
    AssetService.prototype.findGroupById = function (Id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/admin/get-group-ById/" + Id);
    };
    AssetService.prototype.editGroup = function (grp) {
        var group = new _model_group__WEBPACK_IMPORTED_MODULE_3__["Group"]();
        group.id = grp.id;
        group.name = grp.name;
        group.description = grp.description;
        group.status = 'true';
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/admin/update-group", group);
    };
    AssetService.prototype.userGroupMapping = function () {
    };
    AssetService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AssetService);
    return AssetService;
}());



/***/ }),

/***/ "./src/app/admin/services/batchimportservice.ts":
/*!******************************************************!*\
  !*** ./src/app/admin/services/batchimportservice.ts ***!
  \******************************************************/
/*! exports provided: BatchImportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatchImportService", function() { return BatchImportService; });
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



var BatchImportService = /** @class */ (function () {
    function BatchImportService(http) {
        this.http = http;
    }
    BatchImportService.prototype.batchImportAsset = function (data) {
        var uploadURL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/admin/batchImportAssets";
        return this.http.post(uploadURL, data);
    };
    BatchImportService.prototype.batchImportUser = function (data) {
        var uploadURL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/admin/batchImportUser";
        return this.http.post(uploadURL, data);
    };
    BatchImportService.prototype.batchImportQuestion = function (data) {
        var uploadURL = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/admin/batchImportQuestion";
        return this.http.post(uploadURL, data);
    };
    BatchImportService.prototype.openTemplate = function (templateName) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/admin/batchImportAssets/openTemplate?templateName=" + templateName;
        return this.http.get(url, { responseType: 'blob' });
    };
    BatchImportService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], BatchImportService);
    return BatchImportService;
}());



/***/ }),

/***/ "./src/app/admin/services/groupservice.ts":
/*!************************************************!*\
  !*** ./src/app/admin/services/groupservice.ts ***!
  \************************************************/
/*! exports provided: GroupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupService", function() { return GroupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _model_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/group */ "./src/app/admin/model/group.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GroupService = /** @class */ (function () {
    function GroupService(http) {
        this.http = http;
    }
    GroupService.prototype.getGroups = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/admin/get-all-group");
    };
    GroupService.prototype.insertGroup = function (grp) {
        var group = new _model_group__WEBPACK_IMPORTED_MODULE_3__["Group"]();
        group.name = grp.name;
        group.description = grp.description;
        group.status = 'true';
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/admin/create-group", group);
    };
    GroupService.prototype.changeStatus = function (status, Id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/admin/change-group-status/" + Id + "/" + status);
    };
    GroupService.prototype.deleteGroup = function (Id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/admin/delete-group/" + Id);
    };
    GroupService.prototype.findGroupById = function (Id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/admin/get-group-ById/" + Id);
    };
    GroupService.prototype.editGroup = function (grp) {
        var group = new _model_group__WEBPACK_IMPORTED_MODULE_3__["Group"]();
        group.id = grp.id;
        group.name = grp.name;
        group.description = grp.description;
        group.status = 'true';
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/admin/update-group", group);
    };
    GroupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GroupService);
    return GroupService;
}());



/***/ }),

/***/ "./src/app/admin/services/metadataService.ts":
/*!***************************************************!*\
  !*** ./src/app/admin/services/metadataService.ts ***!
  \***************************************************/
/*! exports provided: MetaDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MetaDataService", function() { return MetaDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MetaDataService = /** @class */ (function () {
    function MetaDataService(http) {
        this.http = http;
    }
    MetaDataService.prototype.getAllAssetTypes = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/allergan/stp/v4/admin/get/assets-types");
    };
    MetaDataService.prototype.getTherapeuticAreas = function (assetTypeId) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/allergan/stp/v4/admin/therapeutic-areas/" + assetTypeId);
    };
    MetaDataService.prototype.getAssets = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/allergan/stp/v4/admin/get-all-assets");
    };
    MetaDataService.prototype.getNonAutoAssignedAssets = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/allergan/stp/v4/admin/asset/get-NonAutoAssigned-Assets");
    };
    MetaDataService.prototype.getTherapeuticAreaMap = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/allergan/stp/v4/admin/therapeuticAreaMap");
    };
    MetaDataService.prototype.userGroupMapping = function (grpId, userList) {
        if (userList.length > 0) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/allergan/stp/v4/admin/userToGroup-mapping/" + grpId + "/" + userList);
        }
        else {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/allergan/stp/v4/admin/userToGroup-unmapping/" + grpId);
        }
    };
    MetaDataService.prototype.assetGroupMapping = function (grpId, assetList) {
        if (assetList.length > 0) {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/allergan/stp/v4/admin/assetToGroup-mapping/" + grpId + "/" + assetList);
        }
        else {
            return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/allergan/stp/v4/admin/assetToGroup-unmapping/" + grpId);
        }
    };
    MetaDataService.prototype.getMappedUsers = function (grpId) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/allergan/stp/v4/admin/get-all-user-group-mapping/" + grpId);
    };
    MetaDataService.prototype.getMappedAssets = function (grpId) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/allergan/stp/v4/admin/get-all-asset-group-mapping/" + grpId);
    };
    MetaDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MetaDataService);
    return MetaDataService;
}());



/***/ }),

/***/ "./src/app/admin/services/questionbankservice.ts":
/*!*******************************************************!*\
  !*** ./src/app/admin/services/questionbankservice.ts ***!
  \*******************************************************/
/*! exports provided: QuestionBankService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionBankService", function() { return QuestionBankService; });
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



var QuestionBankService = /** @class */ (function () {
    function QuestionBankService(http) {
        this.http = http;
    }
    QuestionBankService.prototype.getAllQuestions = function () {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/admin/quizQuestionsGetAll");
    };
    QuestionBankService.prototype.deleteQuestion = function (Id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/admin/quizQuestionDelete/" + Id);
    };
    QuestionBankService.prototype.addQuestion = function (q) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/admin/quizQuestionsInsert", q);
    };
    QuestionBankService.prototype.getQuestionById = function (Id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/user/getQuizquestion/" + Id);
    };
    QuestionBankService.prototype.editQuestion = function (q) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/admin/quizQuestionsUpdate", q);
    };
    QuestionBankService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], QuestionBankService);
    return QuestionBankService;
}());



/***/ }),

/***/ "./src/app/admin/services/quizservice.ts":
/*!***********************************************!*\
  !*** ./src/app/admin/services/quizservice.ts ***!
  \***********************************************/
/*! exports provided: QuizService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizService", function() { return QuizService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _model_quiz__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../model/quiz */ "./src/app/admin/model/quiz.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuizService = /** @class */ (function () {
    function QuizService(http) {
        this.http = http;
    }
    QuizService.prototype.getQuiz = function () {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/allergan/stp/v4/admin/get-all-active-quiz");
    };
    QuizService.prototype.deleteQuiz = function (Id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/allergan/stp/v4/admin/delete-quiz/" + Id);
    };
    QuizService.prototype.insertQuiz = function (q) {
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/allergan/stp/v4/admin/create-quiz", q);
    };
    QuizService.prototype.getQuizById = function (Id) {
        return this.http.get(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/allergan/stp/v4/user/get-quiz/" + Id);
    };
    QuizService.prototype.updateQuiz = function (q, checkList) {
        var quiz = new _model_quiz__WEBPACK_IMPORTED_MODULE_3__["Quiz"]();
        quiz.id = q.id;
        quiz.title = q.title;
        quiz.jsonData = checkList;
        return this.http.post(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/allergan/stp/v4/admin/update-quiz", quiz);
    };
    QuizService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
    ], QuizService);
    return QuizService;
}());



/***/ }),

/***/ "./src/app/admin/services/sharedservice.ts":
/*!*************************************************!*\
  !*** ./src/app/admin/services/sharedservice.ts ***!
  \*************************************************/
/*! exports provided: sharedservice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sharedservice", function() { return sharedservice; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var sharedservice = /** @class */ (function () {
    function sharedservice() {
        this.sharingData = { grpId: 0, grpName: "" };
    }
    sharedservice.prototype.saveData = function (id, str) {
        this.sharingData.grpId = id;
        this.sharingData.grpName = str;
    };
    sharedservice.prototype.getGrpName = function () {
        return this.sharingData.grpName;
    };
    sharedservice.prototype.getGrpID = function () {
        return this.sharingData.grpId;
    };
    sharedservice = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], sharedservice);
    return sharedservice;
}());



/***/ }),

/***/ "./src/app/allergan/app-header-nav/app-header-nav.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/allergan/app-header-nav/app-header-nav.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mycontainer {display: inline-block;\r\n    float: none;\r\n    color: #fff;\r\n}\r\n\r\na.disabled {\r\n    pointer-events: none;\r\n    cursor: default;\r\n }\r\n\r\n.mymenu {\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    color: #fff !important;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    line-height: 20px;\r\n    position: relative;\r\n    display: block;\r\n    padding: 10px 15px;\r\n    text-decoration: none;\r\n    outline: none;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    outline: none;\r\n    color: #337ab7;\r\n    text-decoration: none;\r\n    background-color: transparent;\r\n    color: #007bff;\r\n    text-decoration: none;\r\n    background-color: transparent;\r\n    box-sizing: border-box;\r\n    color: -webkit-link;\r\n    cursor: pointer;\r\n    font-size: 14px;\r\n}\r\n\r\n.overlay {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    background-color: rgba(0, 0, 0, 0.6)\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsZXJnYW4vYXBwLWhlYWRlci1uYXYvYXBwLWhlYWRlci1uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjLHFCQUFxQjtJQUMvQixXQUFXO0lBQ1gsV0FBVztBQUNmOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsY0FBYztJQUNkLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFNBQVM7SUFDVCxRQUFRO0lBQ1I7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2FsbGVyZ2FuL2FwcC1oZWFkZXItbmF2L2FwcC1oZWFkZXItbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXljb250YWluZXIge2Rpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbmEuZGlzYWJsZWQge1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiB9XHJcbiAgICBcclxuLm15bWVudSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY29sb3I6ICMzMzdhYjc7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiAjMDA3YmZmO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgY29sb3I6IC13ZWJraXQtbGluaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4ub3ZlcmxheSB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNilcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/allergan/app-header-nav/app-header-nav.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/allergan/app-header-nav/app-header-nav.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"mainmenu-area\">\n  <div class=\"auto-container\">\n      <div class=\"row\">\n          <div class=\"right_icon\">\n              <div class=\"box_right_notif\">\n                  <div class=\"secral_point\">\n                     <i class=\"fa_icon ball\" title=\"Notification\"  (click)=\"this.isnotificaionbodshow=!this.isnotificaionbodshow\" (clickOutside)=\"this.isnotificaionbodshow=false\" style=\"cursor:pointer\"></i>\n                     <span class=\"num\">{{notificationSize}}</span> \n                      <div class=\"hover_showbox\" [ngClass]=\"{'hover_showbox_active': isnotificaionbodshow}\"   *ngIf=\"notifications && notifications.length > 0\">\n                            <!-- hover_showbox_active -->\n                          <ul>\n                              <li *ngFor=\"let notification of notifications\" class=\"icon\">\n                                  {{notification.message}}<span (click)=\"markAsSeen(notification.id)\"></span>\n                              </li>\n                             \n                              <li class=\"icon\" *ngIf=\"notifications.length >1\">\n                                  <b class=\"text_last\"(click)=\"markAllAsSeen()\">Dismiss All</b>\n                              </li>\n                          </ul>\n                      </div>\n                      <div [ngClass]=\"{'overlay': isnotificaionbodshow}\"  (click)=\"this.isnotificaionbodshow=!this.isnotificaionbodshow\" *ngIf=\"notifications && notifications.length > 0\"></div>\n                  </div>\n              </div>\n              <div class=\"box_right_notif\">\n                  <div class=\"secral_point help_2\">\n                      <i class=\"fa_icon help\" title=\"Help\"></i>\n                  </div>\n              </div>\n              <div class=\"box_right_notif\">\n                  <div class=\"secral_point badgesa\">\n                      <i class=\"fa_icon batch\" title=\"Badges\"></i>\n                      <!-- <div class=\"hover_showbox badgesa\">\n                          <div class=\"totle_point\">\n                              <p>Total Points</p>\n                              <span>165</span>\n                          </div>\n                          <div class=\"my_batch\">\n                              <p>My Badges</p>\n                              <div class=\"padgess\">\n                                  <span><img src=\"assets/images/badges_1.png\" alt=\"\"></span>\n                                  <span><img src=\"assets/images/badges_2.png\" alt=\"\"></span>\n                              </div>\n                          </div>\n                      </div> -->\n                  </div>\n              </div>\n              <div class=\"box_right_notif admin-switch\">\n                <div class=\"secral_point\">\n                    <i class=\"fa_icon quiz\" title=\"Admin\" routerLink=\"/admin\" style=\"cursor:pointer\"></i>\n                </div>\n            </div>\n              <!-- <div class=\"box_right_notif\">\n                  <div class=\"secral_point last\">\n                      <i class=\"fa_icon last\"></i>\n                  </div>\n              </div> -->\n          </div>\n          <div class=\"col-md-12 col-sm-12\">\n            \n\n            <div class=\"main-logo hidden-xs\">\n                <a [routerLink]=\"['/']\"><img src=\"assets/images/logo2.png\" alt=\"\"></a>\n            </div>\n            <div class=\"menu_tab\">\n                <button type=\"button\" id=\"menu_btn\" class=\"navbar\"  [ngClass]=\"{'active': navClick}\"  (click)=\"navBarActive()\" (clickOutside)=\"onClickedOutside()\" data-toggle=\"collapse\"></button>\n                <div class=\"collapse mobile_menu\" [ngClass]=\"{'active': navClick}\">\n                    <ul class=\"nav navbar-nav\">\n                        <!-- <li class=\"active\"><a href=\"#\" class=\"\">My Profile</a></li> -->\n                    <li *ngFor=\"let assetsTypes of assetsType\"  [routerLink]=\"['/main']\"  [queryParams]=\"{ userId:currentUser.id,assetsTypeId:assetsTypes.id,urls:assetsTypes.userName}\" value=\"assetsTypes.id\" skipLocationChange>\n                            <div class=\"mymenu\">{{assetsTypes.userName}}</div>\n                    </li>\n                    <!-- <li routerLink=\"/admin\"> <div class=\"mymenu\">Switch to Admin</div></li> -->\n                    </ul>\n                </div>\n            </div>\n            <div class=\"mycontainer menu_tab back_btn\" [routerLink]=\"['/']\">\n                <a class=\"mybtn2 btn btn-link btn-xs\">\n                    <i class=\"fas fa-arrow-left\" style=\"font-size: 24px;font-weight: 600;margin-left: 10px;\"></i>\n                </a>\n            </div>\n           \n            <div class=\"breadCrumbWrap\">\n                    <nav aria-label=\"breadcrumb\">\n                        <ol class=\"breadcrumb breadList\">\n                            <li *ngFor = \"let rootListElement of rootList\">\n                                <a *ngIf = \" bascampMessage && rootListElement.id == 1\"  [routerLink]=\"['/basecamp']\">Basecamp </a>\n                                <a *ngIf = \" !bascampMessage && rootListElement.id == 1\"  >Basecamp </a>\n                                <a *ngIf = \"rootListElement.id == 2\"  [routerLink]=\"[rootListElement.routerLink]\" [queryParams]=\"{userId: rootListElement.userId , assetsTypeId :rootListElement.assetsTypeId,urls:rootListElement.urlLink }\" skipLocationChange>{{rootListElement.title}}</a>\n                                <a *ngIf = \"rootListElement.id == 3\" skipLocationChange>{{rootListElement.title}}</a>\n                                <a *ngIf = \"rootListElement.id == 4\" skipLocationChange>{{rootListElement.title}}</a>\n                            </li>\n                        </ol>\n                    </nav>\n            </div>\n              <!-- <div class=\"searchic\" [ngClass]=\"{'active':searchActive }\">\n                  <input type=\"text\" class=\"search_test\"  [ngClass]=\"{'active':searchActive }\" name=\"\">\n                  <button type=\"button\" class=\"search_ic\" (click)=\"toggleCollapse()\"></button>\n              </div> -->\n\n            <div class=\"user_name\">\n                <div class=\"username\">Hi, {{currentUser.name}} <span> {{group?.name}}</span></div>\n            </div> \n          </div>\n          <!-- <div class=\"col-md-4 col-sm-5\">\n              <div class=\"user_name\">\n                  <div class=\"username\">Hi, {{currentUser.name}} <span> {{currentUser.roleName}}</span></div>\n              </div>\n          </div> -->\n      </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/allergan/app-header-nav/app-header-nav.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/allergan/app-header-nav/app-header-nav.component.ts ***!
  \*********************************************************************/
/*! exports provided: AppHeaderNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderNavComponent", function() { return AppHeaderNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppHeaderNavComponent = /** @class */ (function () {
    function AppHeaderNavComponent(route, homeService, commonService) {
        var _this = this;
        this.route = route;
        this.homeService = homeService;
        this.commonService = commonService;
        this.isnotificaion = false;
        this.notificationSize = 0;
        this.notificationIds = new Array();
        this.source = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(20000); //20 secs
        this.isnotificaionbodshow = false;
        this.navClick = false;
        this.queryUrl = "";
        this.breadCrumb = "";
        this.group = { id: 0, name: "" };
        this.assetsTypeId = 0;
        this.rootList = [];
        this.basecampValue1 = false;
        this.basecampValue2 = true;
        this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["interval"])(20000).subscribe(function (val) { return _this.loadNotifications(); });
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (this.currentUser.groups == undefined) {
            this.currentUser.groups.push({ id: 0, name: "" });
        }
        this.group = this.currentUser.groups[0];
        this.breadCrumb = this.commonService.breadCrumb;
        this.route.queryParams.subscribe(function (params) {
            if (params.userId != undefined) {
                commonService.addElementToRootList(2, params['urls'], '/main', params['urls'], params['userId'], params['assetsTypeId']);
            }
            _this.queryUrl = params['urls'];
            _this.assetsTypeId = params['assetsTypeId'];
            _this.queryUrl = params['queryUrl'];
        });
        this.homeService.getAssets(this.currentUser.id)
            .pipe()
            .subscribe(function (data) {
            _this.assetsType = data.data;
            // alert(JSON.stringify(data.data));
        }, function (error) {
        });
        this.homeService.getUserNotifications(this.currentUser.id)
            .pipe()
            .subscribe(function (data) {
            _this.notifications = data.data;
            _this.notificationSize = _this.notifications.length;
        }, function (error) {
        });
    }
    AppHeaderNavComponent.prototype.ngOnInit = function () {
        this.rootList = this.commonService.getRootList();
    };
    AppHeaderNavComponent.prototype.markAllAsSeen = function () {
        var _this = this;
        this.notifications.forEach(function (notification) {
            _this.notificationIds.push(Number(notification.id));
        });
        this.markNotificationsAsSeen();
    };
    AppHeaderNavComponent.prototype.markAsSeen = function (id) {
        this.notificationIds.push(Number(id));
        this.markNotificationsAsSeen();
    };
    AppHeaderNavComponent.prototype.markNotificationsAsSeen = function () {
        var _this = this;
        this.homeService.notificationMarkAsSeen(this.notificationIds, this.currentUser.id)
            .pipe()
            .subscribe(function (data) {
            //window.location.reload();
            _this.homeService.getUserNotifications(_this.currentUser.id)
                .pipe()
                .subscribe(function (data) {
                _this.notifications = data.data;
                _this.notificationSize = _this.notifications.length;
            }, function (error) {
            });
        }, function (error) {
        });
    };
    AppHeaderNavComponent.prototype.loadNotifications = function () {
        var _this = this;
        this.homeService.getUserNotifications(this.currentUser.id)
            .pipe()
            .subscribe(function (data) {
            _this.notifications = data.data;
            _this.notificationSize = _this.notifications.length;
        }, function (error) {
        });
    };
    //  showNotifications(){
    //    this.isnotificaionbodshow;
    //   // alert("showNotifications");
    //  }
    AppHeaderNavComponent.prototype.onClickedOutside = function () {
        this.navClick = false;
    };
    AppHeaderNavComponent.prototype.navBarActive = function () {
        this.navClick = !this.navClick;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], AppHeaderNavComponent.prototype, "bascampMessage", void 0);
    AppHeaderNavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header-nav',
            template: __webpack_require__(/*! ./app-header-nav.component.html */ "./src/app/allergan/app-header-nav/app-header-nav.component.html"),
            styles: [__webpack_require__(/*! ./app-header-nav.component.css */ "./src/app/allergan/app-header-nav/app-header-nav.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services__WEBPACK_IMPORTED_MODULE_2__["HomeService"], _services__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], AppHeaderNavComponent);
    return AppHeaderNavComponent;
}());



/***/ }),

/***/ "./src/app/allergan/app-header-nav/index.ts":
/*!**************************************************!*\
  !*** ./src/app/allergan/app-header-nav/index.ts ***!
  \**************************************************/
/*! exports provided: AppHeaderNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_header_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-header-nav.component */ "./src/app/allergan/app-header-nav/app-header-nav.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AppHeaderNavComponent", function() { return _app_header_nav_component__WEBPACK_IMPORTED_MODULE_0__["AppHeaderNavComponent"]; });




/***/ }),

/***/ "./src/app/allergan/basecamp/basecamp.component.css":
/*!**********************************************************!*\
  !*** ./src/app/allergan/basecamp/basecamp.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mycontainer {display: inline-block;\r\n    float: none;\r\n    color: #fff;}\r\n\r\n\r\n   /* .mymenu {\r\n        padding-top: 10px;\r\n        padding-bottom: 10px;\r\n        color: #fff !important;\r\n        padding-top: 15px;\r\n        padding-bottom: 15px;\r\n        padding-top: 10px;\r\n        padding-bottom: 10px;\r\n        line-height: 20px;\r\n        position: relative;\r\n        display: block;\r\n        padding: 10px 15px;\r\n        text-decoration: none;\r\n        outline: none;\r\n        text-decoration: none;\r\n        display: inline-block;\r\n        outline: none;\r\n        color: #337ab7;\r\n        text-decoration: none;\r\n        background-color: transparent;\r\n        color: #007bff;\r\n        text-decoration: none;\r\n        background-color: transparent;\r\n        box-sizing: border-box;\r\n        color: -webkit-link;\r\n        cursor: pointer;\r\n    } */\r\n\r\n\r\n   footer {\r\n    position: absolute;\r\n    bottom: 10px;\r\n    height: auto;\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsZXJnYW4vYmFzZWNhbXAvYmFzZWNhbXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjLHFCQUFxQjtJQUMvQixXQUFXO0lBQ1gsV0FBVyxDQUFDOzs7R0FHYjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0EwQkk7OztHQUVQO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvYWxsZXJnYW4vYmFzZWNhbXAvYmFzZWNhbXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teWNvbnRhaW5lciB7ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZjt9XHJcblxyXG5cclxuICAgLyogLm15bWVudSB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBjb2xvcjogIzMzN2FiNztcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgY29sb3I6ICMwMDdiZmY7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgY29sb3I6IC13ZWJraXQtbGluaztcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9ICovXHJcblxyXG5mb290ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/allergan/basecamp/basecamp.component.html":
/*!***********************************************************!*\
  !*** ./src/app/allergan/basecamp/basecamp.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"min_contner silde_5\">\n        <div class=\"hedpart\">\n            <div class=\"boxed_wrapper\">\n           <app-header-nav></app-header-nav>\n                <div class=\"col-md-12 col-sm-12\">\n                    <div class=\"screenost\">\n                        <h4 class=\"test_1\">Your Training Plan has been created.</h4>\n                        <h5 class=\"test_2\">Welcome to Basecamp!</h5>\n                    </div>\n                  </div>\n            </div>\n        </div>\n       \n        <section class=\"section_tab dragblslide_1 dragbaltab\">\n            <div class=\"auto-container\">\n                <div class=\"row\">\n                    <div class=\"col-md-11 col-sm-12 menu_strecher_wrap\">\n                            <div class=\"menu_strecher\">\n                                    <div class=\"stap_1\" *ngFor=\"let assetsTypes of assetsType\"  [routerLink]=\"['/main']\"  [queryParams]=\"{ userId:currentUser.id,assetsTypeId:assetsTypes.id,urls:assetsTypes.userName}\" value=\"assetsTypes.id\" skipLocationChange>\n                                    <span *ngIf=\"assetsTypes.userName!='Core Product Training'\"></span>\n                                    <span  *ngIf=\"assetsTypes.userName=='Core Product Training'\"class=\"active\"></span>\n                                    <p>{{assetsTypes.userName}}</p> \n                            \n                                        <div class=\" hottopics\">\n                                        <div class=\"hottips\">\n                                            <p class=\"text_hip1\">{{assetsTypes.userName}}</p>\n                                            <div class=\"text_hip2\">\n                                                <p>Total <b>{{assetsTypes.total}}</b></p>\n                                                <p>Completed <b>{{assetsTypes.completed}}</b></p>\n                                                \n                                            </div>\n                                            <ul class=\"text_hip3\">\n                                                <li><b>Started</b> Training {{assetsTypes.started}}</li>\n                                                <li><b>Not Started</b> Training {{assetsTypes.notStarted}}</li>\n                                            </ul>\n                                        </div>\n                                         \n                                    </div>\n                                </div>\n                                    <!-- <div class=\"stap_1\">\n                                        <span class=\"disable\"></span></div>\n                                     <div class=\"stap_1\"><span class=\"disable\"></span></div>  -->\n                                    \n                                      <div class=\"compliance\"><span></span><p>Compliance <br>Wire</p></div>\n                                     <!-- <div class=\"stap_1\"><span class=\"disable\"></span></div>\n                                    <div class=\"stap_1\"><span class=\"disable\"></span></div> -->\n    \n    \n                                    \n                                </div>\n\n\n\n\n                    </div>\n                </div>\n            </div>\n        </section>\n        <footer>\n            <div class=\"auto-container\">\n                <div class=\"row \">\n                    <div class=\"col-md-12 \">\n                        <p class=\"footer1 \">© ALLERGAN 2019</p>\n                    </div>\n                </div>\n            </div>\n        </footer>       \n    </div>\n\n    \n"

/***/ }),

/***/ "./src/app/allergan/basecamp/basecamp.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/allergan/basecamp/basecamp.component.ts ***!
  \*********************************************************/
/*! exports provided: BasecampComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasecampComponent", function() { return BasecampComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BasecampComponent = /** @class */ (function () {
    function BasecampComponent(homeService, _commonService) {
        var _this = this;
        this.homeService = homeService;
        this._commonService = _commonService;
        this.searchActive = false;
        this.navClick = false;
        this.notificationSize = 0;
        this.notificationIds = new Array();
        this.source = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(20000); //20 secs
        this.isnotificaionbodshow = "";
        this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(20000).subscribe(function (val) { return _this.loadNotifications(); });
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.homeService.getAssets(this.currentUser.id)
            .pipe()
            .subscribe(function (data) {
            _this.assetsType = data.data;
        }, function (error) {
        });
    }
    BasecampComponent.prototype.ngOnInit = function () {
        this._commonService.clearRootList();
        this._commonService.addElementToRootList(1, 'Basecamp', '/basecamp', '/basecamp', "", "");
    };
    BasecampComponent.prototype.type = function (id) {
    };
    BasecampComponent.prototype.toggleCollapse = function () {
        this.searchActive = !this.searchActive;
    };
    BasecampComponent.prototype.navBarActive = function () {
        this.navClick = !this.navClick;
    };
    BasecampComponent.prototype.onClickedOutside = function () {
        this.navClick = false;
    };
    BasecampComponent.prototype.markAllAsSeen = function () {
        var _this = this;
        this.notifications.forEach(function (notification) {
            _this.notificationIds.push(Number(notification.id));
        });
        this.markNotificationsAsSeen();
    };
    BasecampComponent.prototype.markAsSeen = function (id) {
        this.notificationIds.push(Number(id));
        this.markNotificationsAsSeen();
    };
    BasecampComponent.prototype.markNotificationsAsSeen = function () {
        var _this = this;
        this.homeService.notificationMarkAsSeen(this.notificationIds, this.currentUser.id)
            .pipe()
            .subscribe(function (data) {
            //window.location.reload();
            _this.homeService.getUserNotifications(_this.currentUser.id)
                .pipe()
                .subscribe(function (data) {
                _this.notifications = data.data;
                _this.notificationSize = _this.notifications.length;
            }, function (error) {
            });
        }, function (error) {
        });
    };
    BasecampComponent.prototype.loadNotifications = function () {
        var _this = this;
        this.homeService.getUserNotifications(this.currentUser.id)
            .pipe()
            .subscribe(function (data) {
            _this.notifications = data.data;
            _this.notificationSize = _this.notifications.length;
        }, function (error) {
        });
    };
    BasecampComponent.prototype.showNotifications = function () {
        this.isnotificaionbodshow = "hover_showbox";
        // alert("showNotifications");
    };
    BasecampComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-basecamp',
            template: __webpack_require__(/*! ./basecamp.component.html */ "./src/app/allergan/basecamp/basecamp.component.html"),
            styles: [__webpack_require__(/*! ./basecamp.component.css */ "./src/app/allergan/basecamp/basecamp.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["HomeService"], _services__WEBPACK_IMPORTED_MODULE_1__["CommonService"]])
    ], BasecampComponent);
    return BasecampComponent;
}());



/***/ }),

/***/ "./src/app/allergan/basecamp/index.ts":
/*!********************************************!*\
  !*** ./src/app/allergan/basecamp/index.ts ***!
  \********************************************/
/*! exports provided: BasecampComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basecamp_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basecamp.component */ "./src/app/allergan/basecamp/basecamp.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasecampComponent", function() { return _basecamp_component__WEBPACK_IMPORTED_MODULE_0__["BasecampComponent"]; });




/***/ }),

/***/ "./src/app/allergan/completed-courses/completed-courses.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/allergan/completed-courses/completed-courses.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mycontainer {\r\n    display: inline-block;\r\n    float: none;\r\n    color: #fff;\r\n}\r\n.pop-head-inner {\r\n    position: relative;\r\n}\r\n.overlay {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    background-color: rgba(0, 0, 0, 0.8);\r\n    z-index: 2;\r\n}\r\n.boxed_wrapper{\r\n    height: 100vh;\r\n}\r\n.select_course.small_pop {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 50% !important;\r\n    max-width: 933px;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    right: 0;\r\n    z-index: 3;\r\n    transform: translateY(-50%) !important;\r\n}\r\n.select_course.small_pop .clickable{\r\n    color: blue;\r\n    cursor: pointer;\r\n}\r\n.loader {\r\n    position: fixed;\r\n    left: 0px;\r\n    top: 0px;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 9999;\r\n    background: url('/assets/images/preloader.gif') 50% 50% no-repeat rgb(249,249,249);\r\n    opacity: .8;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsZXJnYW4vY29tcGxldGVkLWNvdXJzZXMvY29tcGxldGVkLWNvdXJzZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsV0FBVztBQUNmO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFNBQVM7SUFDVCxRQUFRO0lBQ1Isb0NBQW9DO0lBQ3BDLFVBQVU7QUFDZDtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxjQUFjO0lBQ2QsUUFBUTtJQUNSLFVBQVU7SUFDVixzQ0FBc0M7QUFDMUM7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBR0E7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULFFBQVE7SUFDUixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYixrRkFBa0Y7SUFDbEYsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvYWxsZXJnYW4vY29tcGxldGVkLWNvdXJzZXMvY29tcGxldGVkLWNvdXJzZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5wb3AtaGVhZC1pbm5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLm92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG4uYm94ZWRfd3JhcHBlcntcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbn1cclxuLnNlbGVjdF9jb3Vyc2Uuc21hbGxfcG9wIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDUwJSAhaW1wb3J0YW50O1xyXG4gICAgbWF4LXdpZHRoOiA5MzNweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICByaWdodDogMDtcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSkgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNlbGVjdF9jb3Vyc2Uuc21hbGxfcG9wIC5jbGlja2FibGV7XHJcbiAgICBjb2xvcjogYmx1ZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuXHJcbi5sb2FkZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL3ByZWxvYWRlci5naWYnKSA1MCUgNTAlIG5vLXJlcGVhdCByZ2IoMjQ5LDI0OSwyNDkpO1xyXG4gICAgb3BhY2l0eTogLjg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/allergan/completed-courses/completed-courses.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/allergan/completed-courses/completed-courses.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"min_contner silde_14 silde_22\">\n    <div class=\"right_icon\">\n\n            \n        <div class=\"box_right_notif\">\n            <div class=\"secral_point\">\n                <i class=\"fa_icon ball\"></i>\n               \n                <!-- <span class=\"num\">4</span> -->\n                <!-- <div class=\"hover_showbox\">\n                        <ul>\n                            <li class=\"icon\">\n                                A new update is avaiable for Module 03 <span></span>\n                            </li>\n                            <li class=\"icon\">\n                               A new hot topic has been added to you schedule <span></span>\n                            </li>\n                            <li class=\"icon\">\n                                <b class=\"text_last\">Dismiss All</b>\n                            </li>\n                        </ul>\n                    </div> -->\n            </div>\n        </div>\n        <div class=\"box_right_notif\">\n            <div class=\"secral_point help_2\">\n                <i class=\"fa_icon help\"></i>\n            </div>\n        </div>\n        <div class=\"box_right_notif\">\n            <div class=\"secral_point badgesa\">\n                <i class=\"fa_icon batch\"></i>\n                <!-- <div class=\"hover_showbox badgesa\">\n                        <div class=\"totle_point\"> -->\n                <!-- <p>Total Points</p> -->\n                <!-- <span>165</span> -->\n                <!-- </div>\n                        <div class=\"my_batch\">\n                            <p>My Badges</p>\n                            <div class=\"padgess\">\n                                <span><img src=\"assets/images/badges_1.png\" alt=\"\"></span>\n                                <span><img src=\"assets/images/badges_2.png\" alt=\"\"></span>\n                            </div>\n                        </div>\n                    </div> -->\n            </div>\n        </div>\n        <!-- <div class=\"box_right_notif\">\n            <div class=\"secral_point last\">\n                <i class=\"fa_icon last\"></i>\n            </div>\n        </div> -->\n    </div>\n    <div class=\"boxed_wrapper\">\n        <section class=\"mainmenu-area\">\n            <div class=\"auto-container\">\n                <div class=\"row\">\n                    <div class=\"col-md-8\">\n\n                        <div class=\"mycontainer menu_tab\" (click)=\"goBack(url)\">\n                            <a class=\"mybtn2 btn btn-link btn-xs\">\n                                <i class=\"fa fa-arrow-circle-o-left\" style=\"font-size:2.5rem;vertical-align: middle;\">\n                                </i>\n                            </a>\n                        </div>\n\n                        <div class=\"main-logo hidden-xs\">\n                            <a href=\"\"><img src=\"assets/images/logo2.png\" alt=\"\"></a>\n                        </div>\n\n                        <div class=\"menu_tab\">\n                            <button type=\"button\" id=\"menu_btn\" class=\"navbar\" data-toggle=\"collapse\"></button>\n                            <div class=\"collapse mobile_menu\">\n\n                                <div class=\"user\">\n                                    <div class=\"user_thumb\"><img src=\"assets/images/main_user.png\" alt=\"\"></div>\n                                </div>\n                                <ul class=\"nav navbar-nav\">\n                                    <li class=\"active\"><a href=\"#\" class=\"\">My Profile</a></li>\n                                    <li><a href=\"\" class=\"\">Scientific Foundations</a></li>\n                                    <li><a href=\"\" class=\"\">Core Product Data</a></li>\n                                    <li><a href=\"\" class=\"\">Pipeline and Launch</a></li>\n                                    <li><a href=\"\" class=\"\">Field Tools</a></li>\n                                    <li><a href=\"\" class=\"\">Hot Topics</a></li>\n                                    <li><a href=\"\" class=\"\">Medical Meetings</a></li>\n                                    <li><a href=\"\" class=\"\">Expert Talks</a></li>\n                                    <li><a href=\"\" class=\"\">Compliance Wire</a></li>\n                                </ul>\n                            </div>\n                        </div>\n                        <!-- <div class=\"searchic\">\n                                \n                                <input type=\"text\" class=\"search_test\" name=\"\">\n                                <button type=\"button\" class=\"search_ic\" id=\"search_btn\"></button>\n                            </div> -->\n\n                    </div>\n                </div>\n            </div>\n        </section>\n        <!-- Select course popUP -->\n      \n                <div class=\"loader\" *ngIf=\"loadHide\">\n                  <h4 >Loading please wait...</h4>\n                </div>\n             \n        <!-- <div class=\"loader\">Loading...</div> -->\n        <div class=\"select_course small_pop complet_table\">\n                \n            <section class=\"pop_container\">\n                  \n                <div class=\"pop-content\">\n                      \n                    <div class=\"pop-head\">\n                        <div class=\"row pop-head-inner\">\n                            <div class=\"colse_btn\"><button (click)=\"goBack(url)\"></button></div>\n                            <!-- <button class=\"btn btn-info btn-lg previous\" (click)=\"goBack(url)\">Go Back</button> -->\n                            <div class=\"col-md-6 col-sm-6\">\n                                <h3><span></span>Completed Courses</h3> <h4 *ngIf=\"error\" style=\"color: red\"></h4>\n                                <div *ngIf=\"error\" class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">\n                                        Sorry, the file is not available!!! \n                                       <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-label=\"Close\">\n                                         <span aria-hidden=\"true\">&times;</span>\n                                       </button>\n                                     </div>\n                            </div>\n\n                            \n                           \n                            <!-- <a class=\"btn btn-primary back\">Go Back</a> -->\n\n                            <div class=\"col-md-6 col-sm-6\">\n                                <div class=\"pop_head_r\">\n                                    <!-- <h3 class=\"compl_points\">Total Points <b>165</b></h3> -->\n                                </div>\n                            </div>\n\n                        </div>\n                    </div>\n                    \n                    <div id=\"pop_small\" class=\"pop-scroll-bx nano\">\n                        <div class=\"scroll-bx-inner\">\n                            <div class=\"table-responsive small_pop_items\">\n\n                                    <!-- <div class=\"loading-mask\">\n                                            <span>Loading...</span>\n                                          </div> -->\n                                         \n                                <table class=\" table\">\n                                    <thead>\n                                        <tr>\n                                            <th>Type</th>\n                                            <th>Course Details</th>\n                                            <th>Completed On</th>\n                                            <!-- <th>Points</th> -->\n                                            <!-- <th>Certification</th> -->\n                                        </tr>\n                                    </thead>\n                                    <tbody>\n                                        <tr *ngFor=\"let course of courses\">\n                                            <td>\n                                                <span\n                                                    *ngIf=\"course?.asset?.contentType?.id===1 || course?.asset?.contentType?.id===6\"\n                                                    class=\"ppt_btn\"></span>\n                                                <span\n                                                    *ngIf=\"course?.asset?.contentType?.id===2 || course?.asset?.contentType?.id===3\"\n                                                    class=\"doc_btn\"></span>\n                                                <span *ngIf=\"course?.asset?.contentType?.id===4\" class=\"pdf_btn\"></span>\n                                                <span *ngIf=\"course?.asset?.contentType?.id===5\" class=\"play_btn\"></span>\n                                                <span *ngIf=\"course?.asset?.contentType?.id===7\" class=\"text_btn\"></span>\n                                                <span *ngIf=\"course?.asset?.contentType?.id===8\" class=\"quiz_btn\"></span>\n                                                <!-- <span *ngIf=\"course?.asset?.contentType.id==='9'\" class=\"zip_btn\"></span> For future if needed uncomment-->\n                                                <span\n                                                    *ngIf=\"course?.asset?.contentType?.id===9 || course?.asset?.contentType.id===10\"\n                                                    class=\"xls_btn\"></span>\n                                                    <span *ngIf=\"course?.asset?.contentType?.id===11\" class=\"link_btn\"></span>\n                                            </td>\n                                            <td>\n                                                <a [ngClass]=\"{'clickable': course.asset.contentType?.id!=8}\"(click)=\"course.asset.contentType?.id!=8?openAsset(course):''\">\n                                                    <span>\n                                                        {{course?.asset?.title}}\n                                                    </span>\n                                                </a>\n                                            </td>\n                                            <td><span>{{course?.assetCompletionDate | date:\"dd/MM/yyyy\"}}</span></td>\n                                            <!-- <td><span>20</span></td> -->\n                                            <!-- <td><span class=\"icon cert_icon\"></span></td> -->\n                                        </tr>\n\n                                        <!-- <tr>\n                                        <td><span class=\"icon note_icon \"></span></td>\n                                        <td>\n                                            <span>GPSE Reporting Adverse Events and Other Safety Information Quiz 2018-2019</span>\n                                        </td>\n                                        <td><span>12/13/2018</span></td>\n                                         <td><span>10</span></td>\n                                        <td><span class=\"icon cert_icon\"></span></td>\n                                      </tr> -->\n                                        <!-- <tr>\n                                        <td><span class=\"icon notepad_icon \"></span></td>\n                                        <td>\n                                            <span>GPSE-PVOPS-P-001 Policy for Reporting Adverse Events and Other Safety Information</span>\n                                        </td>\n                                        <td><span>12/13/2018</span></td>\n                                         <td><span>50</span></td>\n                                        <td><span class=\"icon cert_icon\"></span></td>\n                                      </tr> -->\n                                        <!-- <tr>\n                                        <td><span class=\"icon notepad_icon \"></span></td>\n                                        <td>\n                                            <span>NJ Earned Sick Leave Awareness</span>\n                                        </td>\n                                        <td><span>12/03/2018</span></td>\n                                         <td><span>20</span></td>\n                                        <td><span class=\"icon cert_icon\"></span></td>\n                                      </tr> -->\n                                        <!-- <tr>\n                                        <td><span class=\"icon notepad_icon \"></span></td>\n                                        <td>\n                                            <span>Global IT Incident Management SOP</span>\n                                        </td>\n                                        <td><span>11/28/2018</span></td>\n                                        <td><span>15</span></td>\n                                        <td><span class=\"icon cert_icon\"></span></td>\n                                      </tr> -->\n                                        <!-- <tr>\n                                        <td><span class=\"icon type_icon \"></span></td>\n                                        <td>\n                                            <span>LARS System Administration IT-SOP-050-025</span>\n                                        </td>\n                                        <td><span>11/28/2018</span></td>\n                                         <td><span>15</span></td>\n                                        <td><span class=\"icon cert_icon\"></span></td>\n                                      </tr> -->\n                                        <!-- <tr>\n                                        <td><span class=\"icon note_icon \"></span></td>\n                                        <td>\n                                            <span>LARS User Guide IT-WI-060-014</span>\n                                        </td>\n                                        <td><span>11/28/2018</span></td>\n                                        <td><span>10</span></td>\n                                        <td><span class=\"icon cert_icon\"></span></td>\n                                      </tr> -->\n                                        <!-- <tr>\n                                        <td><span class=\"icon note_icon \"></span></td>\n                                        <td>\n                                            <span>Global HAR Computer System Related Incident Processing</span>\n                                        </td>\n                                        <td><span>11/05/2018</span></td>\n                                         <td><span>25</span></td>\n                                        <td><span class=\"icon cert_icon\"></span></td>\n                                      </tr> -->\n\n                                    </tbody>\n                                </table>\n\n                            </div>\n\n                        </div>\n                    </div>\n                </div>\n            </section>\n        </div>\n    </div>\n    <footer>\n        <div class=\"auto-container\">\n            <div class=\"row \">\n                <div class=\"col-md-12 \">\n                    <!-- <p class=\"footer1 \">© ALLERGAN 2019</p> -->\n                </div>\n            </div>\n        </div>\n    </footer>\n    <div class=\"overlay\"></div>\n</div>"

/***/ }),

/***/ "./src/app/allergan/completed-courses/completed-courses.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/allergan/completed-courses/completed-courses.component.ts ***!
  \***************************************************************************/
/*! exports provided: CompletedCoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletedCoursesComponent", function() { return CompletedCoursesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models */ "./src/app/models/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CompletedCoursesComponent = /** @class */ (function () {
    function CompletedCoursesComponent(route, router, homeService, commonService) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.homeService = homeService;
        this.commonService = commonService;
        this.loadHide = false;
        this.error = false;
        this.url = "";
        this.count = 0;
        this.queryUrl = "";
        this.assetsTypeId = "";
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.route.queryParams.subscribe(function (params) {
            _this.assetsTypeId = params['assetsTypeId'];
            _this.url = params['url'];
            _this.homeService.getCompletedAssets(params['userId'], params['assetsTypeId'], params['productId'], params['disId'], params['taId'])
                .pipe()
                .subscribe(function (data) {
                _this.courses = data.data;
            }, function (error) {
            });
        });
    }
    CompletedCoursesComponent.prototype.openAsset = function (assetUserJourney) {
        var _this = this;
        // alert("ggggg");
        this.loadHide = true;
        this.error = false;
        //console.log("journy id: " + assetUserJourney.id)
        if (assetUserJourney.asset.contentType.id == 8) {
            this.route.queryParams.subscribe(function (params) {
                _this.router.navigate(['/quiz/assets'], {
                    queryParams: {
                        "url": assetUserJourney.asset.assetType,
                        "userId": params['userId'],
                        "quizId": assetUserJourney.asset.fileName,
                        "journeyId": assetUserJourney.id,
                        "queryUrl": params['queryUrl'],
                        "assetsTypeId": params['assetsTypeId'],
                        "productId": params['productId'],
                        "disId": params['disId'],
                        "taId": params['taId']
                    }, skipLocationChange: true
                });
            });
        }
        else {
            //alert("22");
            this.homeService.openAsset(this.currentUser.id, assetUserJourney.id)
                .pipe()
                .subscribe(function (content) {
                if (navigator.appVersion.toString().indexOf('.NET') > 0) {
                    var blob = new Blob([content], { type: content.type });
                    window.navigator.msSaveBlob(blob, assetUserJourney.asset.fileName);
                }
                else {
                    var blob = new Blob([content], { type: content.type }), url = window.URL.createObjectURL(blob);
                    window.open(url);
                }
                _this.route.queryParams.subscribe(function (params) {
                    _this.homeService.getOrderedAssetsFor(new _models__WEBPACK_IMPORTED_MODULE_1__["AssetJourneyRequestParams"](Number(params['userId']), Number(params['assetsTypeId']), Number(params['taId']), Number(params['productId']), Number(params['disId'])))
                        .pipe()
                        .subscribe(function (data) {
                        _this.route.paramMap.subscribe(function (params) {
                            // this.showNotCompleted=false;
                            _this.assetUserJourney = data.data;
                            if (Number(_this.assetUserJourney.length) >= 1) {
                                //this.showNotCompleted=true;
                            }
                            _this.count = Number(_this.assetUserJourney.length);
                            // alert(this.count);
                            _this.loadHide = false;
                        }, function (error) {
                            _this.loadHide = false;
                            _this.error = true;
                        });
                    }, function (error) {
                        _this.loadHide = false;
                        _this.error = true;
                    });
                });
            }, function (error) {
                _this.loadHide = false;
                _this.error = true;
            });
        }
        //  console.log(status); 
    };
    CompletedCoursesComponent.prototype.goBack = function (urls) {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.router.navigate([urls], { queryParams: {
                    "userId": _this.currentUser.id,
                    "queryUrl": params['queryUrl'],
                    "assetsTypeId": params['assetsTypeId'],
                    "productId": params['productId'],
                    "disId": params['disId'],
                    "taId": params['taId']
                }, skipLocationChange: true });
        });
    };
    CompletedCoursesComponent.prototype.ngOnInit = function () {
    };
    CompletedCoursesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-completed-courses',
            template: __webpack_require__(/*! ./completed-courses.component.html */ "./src/app/allergan/completed-courses/completed-courses.component.html"),
            styles: [__webpack_require__(/*! ./completed-courses.component.css */ "./src/app/allergan/completed-courses/completed-courses.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services__WEBPACK_IMPORTED_MODULE_3__["HomeService"], _services__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], CompletedCoursesComponent);
    return CompletedCoursesComponent;
}());



/***/ }),

/***/ "./src/app/allergan/completed-courses/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/allergan/completed-courses/index.ts ***!
  \*****************************************************/
/*! exports provided: CompletedCoursesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _completed_courses_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./completed-courses.component */ "./src/app/allergan/completed-courses/completed-courses.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompletedCoursesComponent", function() { return _completed_courses_component__WEBPACK_IMPORTED_MODULE_0__["CompletedCoursesComponent"]; });




/***/ }),

/***/ "./src/app/allergan/completedassets/completedassets.component.css":
/*!************************************************************************!*\
  !*** ./src/app/allergan/completedassets/completedassets.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsbGVyZ2FuL2NvbXBsZXRlZGFzc2V0cy9jb21wbGV0ZWRhc3NldHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/allergan/completedassets/completedassets.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/allergan/completedassets/completedassets.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"min_contner silde_14 ht100\">\n\n   <app-topics [getTopicsComponent]=\"isSearchActive\"></app-topics>\n\n   <div class=\"boxed_wrapper\">\n\n      <!-- Select course popUP -->\n      <div class=\"select_course small_pop\">\n         <section class=\"pop_container\">\n            <div class=\"pop-content\">\n               <div class=\"pop-head\">\n\n                     <div class=\"row\">\n                           <!-- <button class=\"btn btn-info btn-lg previous\" (click)=\"goBack(url)\">Go Back</button> -->\n                      <div class=\"colse_btn\"><button (click)=\"goBack(url)\"></button></div> \n                     <div class=\"col-md-6 col-sm-6\">\n                          <h3><span></span>Completed Courses</h3>\n                      </div>\n                  </div>\n               </div>\n               <div id=\"pop_small\" class=\"pop-scroll-bx nano\">\n                  <div class=\"scroll-bx-inner nano-content\">\n                     <div class=\"small_pop_items\">\n                        <ul class=\"course_trainigs\">\n                           <li *ngFor=\"let course of courses\">\n                              <div class=\"course_no\">\n                                 <p>{{course.asset.title}}</p>\n                                 <div class=\"course_btns\">\n                                    <span class=\"play_btn\"></span>\n                                    <span class=\"topic_points\">{{course.asset.awardPoints}} points</span>\n                                 </div>\n                                 <div class=\"add_course\"><span>Add Course</span><button>+</button></div>\n                              </div>\n                           </li>\n\n                        </ul>\n                        <!-- <div class=\"form_btns\">\n                                      <button class=\"cancel_btn\" type=\"button\">Cancel</button>\n                                      <button class=\"updat_btn\">Update Profile</button>\n                        </div> -->\n                     </div>\n\n                  </div>\n               </div>\n            </div>\n         </section>\n      </div>\n      <footer>\n         <div class=\"auto-container\">\n            <div class=\"row \">\n               <div class=\"col-md-12 \">\n                  <!-- <p class=\"footer1 \">© ALLERGAN 2019</p> -->\n               </div>\n            </div>\n         </div>\n      </footer>\n   </div>\n</div>"

/***/ }),

/***/ "./src/app/allergan/completedassets/completedassets.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/allergan/completedassets/completedassets.component.ts ***!
  \***********************************************************************/
/*! exports provided: CompletedassetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletedassetsComponent", function() { return CompletedassetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CompletedassetsComponent = /** @class */ (function () {
    function CompletedassetsComponent(route, router, homeService) {
        this.route = route;
        this.router = router;
        this.homeService = homeService;
        this.isSearchActive = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    CompletedassetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.url = params['url'];
            _this.homeService.getCompletedAssets(params['userId'], params['assetsTypeId'], params['productId'], params['disId'], params['taId'])
                .pipe()
                .subscribe(function (data) {
                _this.courses = data.data;
            }, function (error) {
            });
        });
    };
    CompletedassetsComponent.prototype.goBack = function (url) {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.router.navigate([url], { queryParams: {
                    "userId": _this.currentUser.id,
                    "queryUrl": params['queryUrl'],
                    "assetsTypeId": params['assetsTypeId'],
                    "productId": params['productId'],
                    "disId": params['disId'],
                    "taId": params['taId']
                }, skipLocationChange: true });
        });
    };
    CompletedassetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-completedassets',
            template: __webpack_require__(/*! ./completedassets.component.html */ "./src/app/allergan/completedassets/completedassets.component.html"),
            styles: [__webpack_require__(/*! ./completedassets.component.css */ "./src/app/allergan/completedassets/completedassets.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services__WEBPACK_IMPORTED_MODULE_2__["HomeService"]])
    ], CompletedassetsComponent);
    return CompletedassetsComponent;
}());



/***/ }),

/***/ "./src/app/allergan/completedassets/index.ts":
/*!***************************************************!*\
  !*** ./src/app/allergan/completedassets/index.ts ***!
  \***************************************************/
/*! exports provided: CompletedassetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _completedassets_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./completedassets.component */ "./src/app/allergan/completedassets/completedassets.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompletedassetsComponent", function() { return _completedassets_component__WEBPACK_IMPORTED_MODULE_0__["CompletedassetsComponent"]; });




/***/ }),

/***/ "./src/app/allergan/load/index.ts":
/*!****************************************!*\
  !*** ./src/app/allergan/load/index.ts ***!
  \****************************************/
/*! exports provided: LoadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _load_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./load.component */ "./src/app/allergan/load/load.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoadComponent", function() { return _load_component__WEBPACK_IMPORTED_MODULE_0__["LoadComponent"]; });




/***/ }),

/***/ "./src/app/allergan/load/load.component.css":
/*!**************************************************!*\
  !*** ./src/app/allergan/load/load.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsbGVyZ2FuL2xvYWQvbG9hZC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/allergan/load/load.component.html":
/*!***************************************************!*\
  !*** ./src/app/allergan/load/load.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"min_contner loaderpage_1 \">\n\n                    <div class=\"row \">\n                        <div class=\"col-md-2\">\n                            <div class=\"main-logo hidden-lg hidden-md hidden-sm center_img\">\n                                <a href=\"index.html\"><img src=\"assets/images/logo2.png\" alt=\"\"></a>\n                            </div>\n                        </div>\n                    </div>\n          \n       \n        <div class=\"boxed_wrapper\">\n\n                <div class=\"auto-container\">\n                    <div class=\"loding_outer\">\n                        <div class=\"loding_content\">\n                            <div class=\"loder_circle\">\n                                <span><img src=\"assets/images/loder-circle.png\" alt=\"\"></span>\n                                <span class=\"load-thumbnails\"><img src=\"assets/images/Loading_Plan.png\" alt=\"\"></span>\n                            </div><br>\n                            <h4>GIVE US A MOMENT</h4>\n                            <h5>Preparing Your Trek...</h5>\n                        </div>    \n                    </div>\n                    \n\n            \n            </div>\n            \n            <script>\n                $(document).ready(function() {\n                    $(\"#search_btn\").click(function() {\n                        $(\".searchic\").toggleClass('active');\n                        $(\".search_test\").toggleClass('active');\n\n                    });\n                    $(\"#menu_btn\").click(function() {\n                        $(\"#menu_btn\").toggleClass('active');\n                        $(\".collapse\").toggleClass('active');\n                    });\n                });\n            </script>"

/***/ }),

/***/ "./src/app/allergan/load/load.component.ts":
/*!*************************************************!*\
  !*** ./src/app/allergan/load/load.component.ts ***!
  \*************************************************/
/*! exports provided: LoadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadComponent", function() { return LoadComponent; });
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

var LoadComponent = /** @class */ (function () {
    function LoadComponent() {
    }
    LoadComponent.prototype.ngOnInit = function () {
    };
    LoadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-load',
            template: __webpack_require__(/*! ./load.component.html */ "./src/app/allergan/load/load.component.html"),
            styles: [__webpack_require__(/*! ./load.component.css */ "./src/app/allergan/load/load.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadComponent);
    return LoadComponent;
}());



/***/ }),

/***/ "./src/app/allergan/mainpage/index.ts":
/*!********************************************!*\
  !*** ./src/app/allergan/mainpage/index.ts ***!
  \********************************************/
/*! exports provided: MainpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mainpage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainpage.component */ "./src/app/allergan/mainpage/mainpage.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MainpageComponent", function() { return _mainpage_component__WEBPACK_IMPORTED_MODULE_0__["MainpageComponent"]; });




/***/ }),

/***/ "./src/app/allergan/mainpage/mainpage.component.css":
/*!**********************************************************!*\
  !*** ./src/app/allergan/mainpage/mainpage.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mycontainer {\r\n    display: inline-block;\r\n    float: none;\r\n    color: #fff;\r\n}\r\n.mymenu {\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    color: #fff !important;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    padding-top: 10px;\r\n    padding-bottom: 10px;\r\n    line-height: 20px;\r\n    position: relative;\r\n    display: block;\r\n    padding: 10px 15px;\r\n    text-decoration: none;\r\n    outline: none;\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    outline: none;\r\n    color: #337ab7;\r\n    text-decoration: none;\r\n    background-color: transparent;\r\n    color: #007bff;\r\n    text-decoration: none;\r\n    background-color: transparent;\r\n    box-sizing: border-box;\r\n    color: -webkit-link;\r\n    cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsZXJnYW4vbWFpbnBhZ2UvbWFpbnBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsV0FBVztBQUNmO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLHNCQUFzQjtJQUN0QixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2IsY0FBYztJQUNkLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLHFCQUFxQjtJQUNyQiw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYWxsZXJnYW4vbWFpbnBhZ2UvbWFpbnBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5teW1lbnUge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGNvbG9yOiAjMzM3YWI3O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogIzAwN2JmZjtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGNvbG9yOiAtd2Via2l0LWxpbms7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/allergan/mainpage/mainpage.component.html":
/*!***********************************************************!*\
  !*** ./src/app/allergan/mainpage/mainpage.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"min_contner silde_4 silde6_7 \" *ngIf=\"success\">\n\t<!-- <div class=\"mycontainer\">\n            <a class=\"mybtn2 btn btn-link btn-xs\"><i class=\"fa fa-arrow-circle-o-left\" style=\"font-size:2.5rem;\"></i></a>\n            <div class=\"navbar-brand\">Back</div>\n          </div> -->\n\n\t<div class=\"hedpart\">\n\t\t<div class=\"boxed_wrapper\">\n\t\t\t<app-header-nav></app-header-nav>\n\t\t\t<div class=\"col-12 screenost\">\n\t\t\t\t<h4 class=\"page_itext\">Select the therapeutic areas, disease state/indications and\n\t\t\t\t\tproducts to include into your training plan.</h4>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\n\n\n\t<div class=\"clearfix\"></div>\n\t<app-therapeuticareas (someEvent)=\"onSuccess($event)\"></app-therapeuticareas>\n\n\t<footer>\n\t\t<div class=\"auto-container\">\n\t\t\t<div class=\"row \">\n\t\t\t\t<div class=\"col-md-12 \">\n\t\t\t\t\t<p class=\"footer1 \">© ALLERGAN 2019</p>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</footer>\n</div>\n<div class=\"min_contner loaderpage_1\" *ngIf=\"show\">\n\n\n\t<div class=\"boxed_wrapper\">\n\n\t\t<div class=\"auto-container\">\n\t\t\t<div class=\"logo_top\">\n\t\t\t\t<a href=\"index.html\"><img src=\"assets/images/logo2.png\" alt=\"\"></a>\n\t\t\t</div>\n\t\t\t<div class=\"loding_outer\">\n\t\t\t\t<div class=\"loding_content\">\n\t\t\t\t\t<h4>GIVE US A MOMENT</h4>\n\t\t\t\t\t<h5>Loding Hot Topics...</h5>\n\t\t\t\t\t<div class=\"loder_circle\">\n\t\t\t\t\t\t<span><img src=\"assets/images/loder-circle.png\" alt=\"\"></span>\n\t\t\t\t\t\t<span class=\"load-thumbnails\"><img src=\"assets/images/loder-2.png\" alt=\"\"></span>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\n\t\t</div>\n\t\t<p class=\"footer1_new\">© ALLERGAN 2019</p>\n\t</div>\n\n</div>"

/***/ }),

/***/ "./src/app/allergan/mainpage/mainpage.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/allergan/mainpage/mainpage.component.ts ***!
  \*********************************************************/
/*! exports provided: MainpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainpageComponent", function() { return MainpageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainpageComponent = /** @class */ (function () {
    function MainpageComponent(homeService, router, ngZone, route) {
        var _this = this;
        this.homeService = homeService;
        this.router = router;
        this.ngZone = ngZone;
        this.route = route;
        this.success = true;
        this.show = false;
        this.searchActive = false;
        this.isCollapsed = true;
        this.navClick = false;
        this.navbarCollapsed = false;
        this.collapse = "closed";
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.homeService.getAssets(this.currentUser.id)
            .pipe()
            .subscribe(function (data) {
            _this.assetsType = data.data;
            // alert(JSON.stringify(data.data));
        }, function (error) {
        });
    }
    MainpageComponent.prototype.ngOnInit = function () {
    };
    MainpageComponent.prototype.toggleCollapse = function () {
        this.searchActive = !this.searchActive;
    };
    MainpageComponent.prototype.onSuccess = function (event) {
        var _this = this;
        this.success = false;
        this.show = true;
        this.route.queryParams.subscribe(function (params) {
            var url = '';
            if (params['urls'] === "Core Product Training") {
                url = '/cpt';
            }
            if (params['urls'] === "Key Field Tool Training") {
                url = '/ftt';
            }
            if (params['urls'] === "Hot Topics") {
                url = '/topic';
            }
            if (params['urls'] === "Core Disease Training") {
                url = '/cdt';
            }
            if (params['urls'] === "Compliance Wire") {
                url = '/cw';
            }
            if (params['urls'] === "New Hire Training") {
                url = '/nht';
            }
            if (params['urls'] === "Launch Training") {
                url = '/lt';
            }
            if (params['urls'] === "Medical Meetings") {
                url = '/mm';
            }
            if (params['urls'] === "Core Training") {
                url = '/ct';
            }
            _this.router.navigate([url], { queryParams: {
                    "userId": _this.currentUser.id,
                    "assetsTypeId": params['assetsTypeId'],
                    "productId": event.productId,
                    "disId": event.diseaseId,
                    "taId": event.taId,
                    "queryUrl": event.queryUrl
                }, skipLocationChange: true });
        });
    };
    MainpageComponent.prototype.navBarActive = function () {
        this.navClick = !this.navClick;
    };
    MainpageComponent.prototype.onClickedOutside = function () {
        this.navClick = false;
    };
    MainpageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mainpage',
            template: __webpack_require__(/*! ./mainpage.component.html */ "./src/app/allergan/mainpage/mainpage.component.html"),
            styles: [__webpack_require__(/*! ./mainpage.component.css */ "./src/app/allergan/mainpage/mainpage.component.css")]
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["HomeService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], MainpageComponent);
    return MainpageComponent;
}());



/***/ }),

/***/ "./src/app/allergan/not-shown-assigned-assets/index.ts":
/*!*************************************************************!*\
  !*** ./src/app/allergan/not-shown-assigned-assets/index.ts ***!
  \*************************************************************/
/*! exports provided: NotShownAssignedAssetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _not_shown_assigned_assets_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-shown-assigned-assets.component */ "./src/app/allergan/not-shown-assigned-assets/not-shown-assigned-assets.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotShownAssignedAssetsComponent", function() { return _not_shown_assigned_assets_component__WEBPACK_IMPORTED_MODULE_0__["NotShownAssignedAssetsComponent"]; });




/***/ }),

/***/ "./src/app/allergan/not-shown-assigned-assets/not-shown-assigned-assets.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/allergan/not-shown-assigned-assets/not-shown-assigned-assets.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overlay {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    background-color: rgba(0, 0, 0, 0.7)\r\n}\r\n.small_pop .pop-head {\r\n    position: relative;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsZXJnYW4vbm90LXNob3duLWFzc2lnbmVkLWFzc2V0cy9ub3Qtc2hvd24tYXNzaWduZWQtYXNzZXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxTQUFTO0lBQ1QsUUFBUTtJQUNSO0FBQ0o7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL2FsbGVyZ2FuL25vdC1zaG93bi1hc3NpZ25lZC1hc3NldHMvbm90LXNob3duLWFzc2lnbmVkLWFzc2V0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpXHJcbn1cclxuLnNtYWxsX3BvcCAucG9wLWhlYWQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/allergan/not-shown-assigned-assets/not-shown-assigned-assets.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/allergan/not-shown-assigned-assets/not-shown-assigned-assets.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"min_contner scenario_03 dragbalsc\">\n         \n        <app-topics [getTopicsComponent]=\"isSearchActive\"></app-topics>\n      \n          <div class=\"boxed_wrapper\">\n               \n              <!-- popUP -->\n              <div class=\"select_course small_pop\">\n                 <section class=\"pop_container\">\n                    <div class=\"pop-content\">\n                          <div class=\"pop-head\">\n                              <div class=\"row\">\n                             <div class=\"colse_btn\"><button (click)=\"goBack(url)\"></button></div>\n                             <div class=\"col-md-6 col-sm-6\">\n                                  <h3><span></span>Pending Courses</h3>\n                              </div>\n                        \n                          </div>\n                       </div>\n                       <div id=\"pending_course\" class=\"pop-scroll-bx nano\">\n                          <div class=\"scroll-bx-inner\">\n                             <div class=\"table-responsive small_pop_items\">\n                                 <table class=\" table\">\n                                      <thead>\n                                        <tr>\n                                          <th>Type</th>\n                                          <th>Course Details</th>\n                                          <th>Days Remaining</th>\n                                        </tr>\n                                      </thead>\n                                      <tbody>\n                                        <tr *ngFor=\"let course of courses\">\n                                          <td >   \n                                              <span *ngIf=\"course?.asset?.contentType==='1' || course?.asset?.contentType==='6'\" class=\"ppt_btn\"></span>\n                                              <span *ngIf=\"course?.asset?.contentType==='2' || course?.asset?.contentType==='3'\" class=\"doc_btn\"></span>                                            \n                                              <span *ngIf=\"course?.asset?.contentType==='4'\" class=\"pdf_btn\"></span>\n                                              <span *ngIf=\"course?.asset?.contentType==='5'\" class=\"play_btn\"></span>\n                                              <span *ngIf=\"course?.asset?.contentType==='7'\" class=\"text_btn\"></span>\n                                              <span *ngIf=\"course?.asset?.contentType==='8'\" class=\"quiz_btn\"></span>\n                                              <span *ngIf=\"course?.asset?.contentType==='9' || course?.asset?.contentType==='10'\" class=\"xls_btn\"></span>                                                                                                   \n                                              <!-- <span *ngIf=\"course?.asset?.contentType==='12'\" class=\"zip_btn\"></span> For future if needed uncomment-->                          \n                                              <span *ngIf=\"course?.asset?.contentType==='11'\" class=\"link_btn\"></span>\n                                            </td>\n                                           \n                                          <td>\n                                              <span> {{course?.asset?.title}}</span>\n                                          </td>\n                                          <td><span class=\"\">{{course?.asset?.dueDays}}</span></td>\n                                        </tr>\n\n                                        <!-- <tr>\n                                          <td><span class=\"icon note_icon \"></span></td>\n                                          <td>\n                                              <span>Assesment</span>\n                                          </td>\n                                          \n                                          <td><span class=\"\">10</span></td>\n                                        </tr>\n                                        <tr class=\"done_course\">\n                                          <td><span class=\"icon notepad_icon \"></span></td>\n                                          <td>\n                                              <span>Module 6</span>\n                                          </td>\n                                          \n                                          <td><span class=\"\">10</span></td>\n                                        </tr>\n                                        <tr>\n                                          <td><span class=\"icon notepad_icon \"></span></td>\n                                          <td>\n                                              <span>Module 7</span>\n                                          </td>\n                                          \n                                          <td><span class=\"\">15</span></td>\n                                        </tr>\n                                        <tr class=\"done_course\">\n                                          <td><span class=\"icon notepad_icon \"></span></td>\n                                          <td>\n                                              <span>Module 8</span>\n                                          </td>\n                                          \n                                          <td><span class=\"\">20</span></td>\n                                        </tr>\n                                        <tr>\n                                          <td><span class=\"icon type_icon \"></span></td>\n                                          <td>\n                                              <span>Module 9</span>\n                                          </td>\n                                          \n                                          <td><span class=\"\">20</span></td>\n                                        </tr>\n                                        <tr>\n                                          <td><span class=\"icon note_icon \"></span></td>\n                                          <td>\n                                              <span>Module 10</span>\n                                          </td>\n                                        \n                                          <td><span class=\"\">25</span></td>\n                                        </tr>\n                                        <tr>\n                                          <td><span class=\"icon note_icon \"></span></td>\n                                          <td>\n                                              <span>Assesment</span>\n                                          </td>\n                                          <td><span class=\"\">30</span></td>\n                                        </tr> -->\n                                                                    \n                                      </tbody>\n                                  </table>\n                             </div>\n                            \n                          </div>\n\n                       </div>\n                    </div>\n                    <!-- <div class=\"form_btns \">\n                          <button class=\"cancel_btn popcan_btn\" (click)=\"cancel()\" type=\"button\">Cancel</button>\n                      </div> -->\n                 </section>\n\n\n              </div>\n              \n          </div>\n          <div class=\"overlay\"></div>\n      </div>"

/***/ }),

/***/ "./src/app/allergan/not-shown-assigned-assets/not-shown-assigned-assets.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/allergan/not-shown-assigned-assets/not-shown-assigned-assets.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: NotShownAssignedAssetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotShownAssignedAssetsComponent", function() { return NotShownAssignedAssetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models */ "./src/app/models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NotShownAssignedAssetsComponent = /** @class */ (function () {
    function NotShownAssignedAssetsComponent(route, router, homeService, commonService) {
        this.route = route;
        this.router = router;
        this.homeService = homeService;
        this.commonService = commonService;
        this.isSearchActive = true;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.url = this.commonService.getPreviousUrl();
    }
    NotShownAssignedAssetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.unshowncount = params['unshowncount'];
            console.log("unsh: " + _this.unshowncount);
            _this.homeService.getOrderedAssetsFor(new _models__WEBPACK_IMPORTED_MODULE_3__["AssetJourneyRequestParams"](Number(params['userId']), Number(params['assetsTypeId']), Number(params['taId']), Number(params['productId']), Number(params['disId'])))
                .pipe()
                .subscribe(function (data) {
                _this.courses = data.data;
                // console.log(this.courses);
                _this.showncount = Number(_this.courses.length) - _this.unshowncount;
                // console.log("thisshowncount: "+this.showncount);
                // let j=this.courses.length;
                for (var i = 0; i < Number(_this.showncount); i++) {
                    _this.courses.splice(i, 1);
                    //  j--;                   
                }
            }, function (error) {
            });
        });
    };
    NotShownAssignedAssetsComponent.prototype.cancel = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.url = params['url'];
            _this.router.navigate([_this.url], { queryParams: {
                    "userId": _this.currentUser.id,
                    "queryUrl": params['queryUrl'],
                    "assetsTypeId": params['assetsTypeId'],
                    "productId": params['productId'],
                    "disId": params['disId'],
                    "taId": params['taId']
                }, skipLocationChange: true });
        });
    };
    NotShownAssignedAssetsComponent.prototype.goBack = function (url) {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.router.navigate([url], { queryParams: {
                    "userId": _this.currentUser.id,
                    "queryUrl": params['queryUrl'],
                    "assetsTypeId": params['assetsTypeId'],
                    "productId": params['productId'],
                    "disId": params['disId'],
                    "taId": params['taId']
                }, skipLocationChange: true });
        });
    };
    // goBack(){
    //   this.route.queryParams.subscribe(params => {
    //     this.url =params['url'];
    //     this.router.navigate([this.url], { queryParams:  {
    //       "userId":this.currentUser.id,
    //       "queryUrl":params['queryUrl'],
    //       "assetsTypeId":params['assetsTypeId'],
    //       "productId":params['productId'],
    //       "disId":params['disId'],
    //       "taId":params['taId']
    //     }, skipLocationChange: true});
    //   })
    // }
    NotShownAssignedAssetsComponent.prototype.getAssetImage = function (assetImage) {
        return this.commonService.getAssetImage(assetImage);
    };
    NotShownAssignedAssetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-shown-assigned-assets',
            template: __webpack_require__(/*! ./not-shown-assigned-assets.component.html */ "./src/app/allergan/not-shown-assigned-assets/not-shown-assigned-assets.component.html"),
            styles: [__webpack_require__(/*! ./not-shown-assigned-assets.component.css */ "./src/app/allergan/not-shown-assigned-assets/not-shown-assigned-assets.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services__WEBPACK_IMPORTED_MODULE_2__["HomeService"], _services__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], NotShownAssignedAssetsComponent);
    return NotShownAssignedAssetsComponent;
}());



/***/ }),

/***/ "./src/app/allergan/shared/shared.module.ts":
/*!**************************************************!*\
  !*** ./src/app/allergan/shared/shared.module.ts ***!
  \**************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_header_nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app-header-nav */ "./src/app/allergan/app-header-nav/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
            ],
            declarations: [_app_header_nav__WEBPACK_IMPORTED_MODULE_3__["AppHeaderNavComponent"]],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_header_nav__WEBPACK_IMPORTED_MODULE_3__["AppHeaderNavComponent"],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/allergan/success/index.ts":
/*!*******************************************!*\
  !*** ./src/app/allergan/success/index.ts ***!
  \*******************************************/
/*! exports provided: SuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _success_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./success.component */ "./src/app/allergan/success/success.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SuccessComponent", function() { return _success_component__WEBPACK_IMPORTED_MODULE_0__["SuccessComponent"]; });




/***/ }),

/***/ "./src/app/allergan/success/success.component.css":
/*!********************************************************!*\
  !*** ./src/app/allergan/success/success.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsbGVyZ2FuL3N1Y2Nlc3Mvc3VjY2Vzcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/allergan/success/success.component.html":
/*!*********************************************************!*\
  !*** ./src/app/allergan/success/success.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"min_contner silde_3 loaderpage_1\">\n        \n       \n        <div class=\"boxed_wrapper\">\n            <section class=\"mainmenu-area\">\n                <div class=\"auto-container\">\n                    <div class=\"loding_outer suc_loader\">\n                        <div class=\"loding_content\">\n                            <div class=\"load_img\"><img src=\"assets/images/sucs-loder-3.png\" alt=\"\"></div>\n                            <h4>SUCCESS! </h4>\n\n                            <p>Your profile has been updated. You will receive an email when your account has been activated and your trek has been mapped.</p>\n\n                             <h5>Wish you success in your training!</h5>\n\n                            <h6>Training team allergan</h6>\n\n                        </div>    \n                    </div>  \n                </div>                  \n            </section>\n        </div>\n            \n            <script>\n                $(document).ready(function() {\n                    $(\"#search_btn\").click(function() {\n                        $(\".searchic\").toggleClass('active');\n                        $(\".search_test\").toggleClass('active');\n\n                    });\n                    $(\"#menu_btn\").click(function() {\n                        $(\"#menu_btn\").toggleClass('active');\n                        $(\".collapse\").toggleClass('active');\n                    });\n                });\n            </script>\n        "

/***/ }),

/***/ "./src/app/allergan/success/success.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/allergan/success/success.component.ts ***!
  \*******************************************************/
/*! exports provided: SuccessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuccessComponent", function() { return SuccessComponent; });
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

var SuccessComponent = /** @class */ (function () {
    function SuccessComponent() {
    }
    SuccessComponent.prototype.ngOnInit = function () {
    };
    SuccessComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-success',
            template: __webpack_require__(/*! ./success.component.html */ "./src/app/allergan/success/success.component.html"),
            styles: [__webpack_require__(/*! ./success.component.css */ "./src/app/allergan/success/success.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SuccessComponent);
    return SuccessComponent;
}());



/***/ }),

/***/ "./src/app/allergan/therapeuticareas/therapeuticareas.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/allergan/therapeuticareas/therapeuticareas.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .row {\r\n    margin: 0px;\r\n} */\r\n.overlay {\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    /* background-color: rgba(0, 0, 0, 0.8); */\r\n    z-index: 1;\r\n}\r\n.pop_boxta {\r\n    position: absolute;\r\n    width: 100%;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    -ms-transform: translateY(-50%);\r\n    -webkit-transform: translateY(-50%);\r\n    z-index: 2;\r\n}\r\n.pop-scroll-bx {\r\n    padding: 0px;\r\n}\r\n.therapeuticState {\r\n    display: block !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsZXJnYW4vdGhlcmFwZXV0aWNhcmVhcy90aGVyYXBldXRpY2FyZWFzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFDSDtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFNBQVM7SUFDVCxRQUFRO0lBQ1IsMENBQTBDO0lBQzFDLFVBQVU7QUFDZDtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxRQUFRO0lBQ1IsMkJBQTJCO0lBQzNCLCtCQUErQjtJQUMvQixtQ0FBbUM7SUFDbkMsVUFBVTtBQUNkO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3JjL2FwcC9hbGxlcmdhbi90aGVyYXBldXRpY2FyZWFzL3RoZXJhcGV1dGljYXJlYXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5yb3cge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbn0gKi9cclxuLm92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpOyAqL1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG4ucG9wX2JveHRhIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcbi5wb3Atc2Nyb2xsLWJ4IHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG4udGhlcmFwZXV0aWNTdGF0ZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/allergan/therapeuticareas/therapeuticareas.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/allergan/therapeuticareas/therapeuticareas.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"boxed_wrapper pop_boxta\">\n    <section class=\"section_tab\">\n        <div class=\"auto-container\">\n            <div class=\"row\">\n                <div class=\"col-md-12 col-sm-12\">\n\n                    <section class=\"pop_container\">\n\n                        <div class=\"pop-content\">\n                            <div class=\"row pop-head\">\n                                <div class=\"col-md-10 col-sm-10\">\n                                    <h3 class=\"\">Therapeutic Areas</h3>\n                                </div>\n                                <div class=\"colse_btn\"><button [routerLink]=\"['/basecamp']\"></button></div>\n                            </div>\n                            <div id=\"about\" class=\"pop-scroll-bx\">\n                                <div class=\"scroll-bx-inner\">\n                                    <div class=\"row rmargin\">\n\n                                        <div class=\"col-md-12 col-sm-12\">\n                                            <div class=\"row\">\n\n\n\n                                                <div class=\"col-md-3 col-sm-2 col-3 col_cxs\"\n                                                    *ngFor=\"let tas of ta ; let i = index\">\n                                                    <figure class=\"cares\">\n                                                        <!-- && selectedIndex === i  mouseOvered=true-->\n                                                        <div class=\"figbx \" (mouseover)=\"changeStyleAdd($event,i)\"\n                                                            (mouseout)=\"changeStyleRemove($event,null)\"\n                                                            (click)=\"changeStyle($event,null);diseaseStatesProducts(i,tas.id);getBreadCrumb(tas.name);updateRootList(i,tas)\">\n                                                            <div class=\"figur\">\n                                                                <div class=\"fig-check\"></div>\n                                                                <div class=\" hottopics\">\n                                                                    <div class=\"hottips\">\n                                                                        <p class=\"text_hip1\">{{tas.userName}}</p>\n                                                                        <div class=\"text_hip2\">\n                                                                            <p>New <b>{{tas.newProgress}}</b></p>\n                                                                            <p>Completed <b>{{tas.completed}}</b></p>\n                                                                        </div>\n                                                                    </div>\n                                                                </div>\n\n                                                                <div *ngIf=\"tas.userName === 'Infectious Disease'\">\n                                                                    <span class=\"fig-title\">ID</span>\n                                                                </div>\n                                                                <div *ngIf=\"tas.userName === 'Diabetic Macular Edema'\">\n                                                                    <span class=\"fig-title\">DME</span>\n                                                                </div>\n\n                                                                <div *ngIf=\"tas.userName === 'RVO'\">\n                                                                    <span class=\"fig-title\">RVO</span>\n                                                                </div>\n\n                                                                <div *ngIf=\"tas.userName === 'Uveitis'\">\n                                                                    <span class=\"fig-title\">UV</span>\n                                                                </div>\n                                                                <div *ngIf=\"tas.userName === 'Gastroenterology'\">\n                                                                    <span class=\"fig-title\">GI</span>\n                                                                </div>\n                                                                <div *ngIf=\"tas.userName === 'Eye Care'\">\n                                                                    <span class=\"fig-title\">EY</span>\n                                                                </div>\n                                                                <div *ngIf=\"tas.userName === 'Womens Health'\">\n                                                                        <span class=\"fig-title\">WH</span>\n                                                                    </div>\n                                                            </div>\n                                                            <h4>{{tas.userName}}</h4>\n                                                        </div>\n                                                    </figure>\n                                                </div>\n\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"row rmargin therapeuticState\">\n                                        <div class=\"col-12 col-sm-7 col-md-7 col-lg-7\">\n                                            <div class=\"row\">\n                                                <div class=\"col-md-12 col-sm-12\">\n                                                    <h3 class=\"pop-head\">Disease States</h3>\n                                                </div>\n                                            </div>\n                                            <div class=\"row\" *ngIf=\"showLoding\">\n                                                <div class=\"col-md-8 col-sm-8\">\n                                                    <div class=\"loding_bx\">\n                                                        <div class=\"load-cir\">\n                                                            <span></span>\n                                                            <span></span>\n                                                            <span></span>\n                                                        </div>\n                                                        <h4>Loading...</h4>\n\n\n                                                    </div>\n\n                                                </div>\n\n                                            </div>\n\n\n                                            <div class=\"row\" *ngIf=\"noDiseasStates\">\n                                                <div class=\"col-md-8 col-sm-8\">\n                                                    <div class=\"loding_bx\">\n                                                        <div class=\"load-cir\">\n                                                            <span></span>\n                                                            <span></span>\n                                                            <span></span>\n                                                        </div>\n                                                        <h4>Currently no Disease States</h4>\n\n                                                    </div>\n\n                                                </div>\n\n                                            </div>\n\n                                            <div class=\"row\" *ngIf=\"showDiseaseStates\">\n\n                                                <div class=\"col-md-3 col-sm-3 p-items col_cxs\"\n                                                    *ngFor=\"let diseaseStates of diseaseState ; let i = index\">\n                                                    <figure class=\"cares d-states\"\n                                                        (click)=\"loadDiseaseState(diseaseStates.id,i);getBreadCrumb(diseaseStates.name); updateRootListForDiseaseState(i, diseaseStates)\">\n\n                                                        <div class=\"figbx\"\n                                                            [ngClass]=\"{'active' : selectedDState === i }\">\n                                                            <div class=\"figur\">\n                                                                <div class=\"fig-check\"></div>\n                                                                <div *ngIf=\"diseaseStates.name === 'DryEye'\">\n                                                                    <span>DE</span>\n                                                                </div>\n                                                                <div *ngIf=\"diseaseStates.name === 'Glaucoma'\">\n                                                                    <span>GL</span>\n                                                                </div>\n                                                                <div *ngIf=\"diseaseStates.name === 'Uveitis'\">\n                                                                        <span>UV</span>\n                                                                    </div>\n                                                                    <div *ngIf=\"diseaseStates.name === 'Diabetic Macular Edema'\">\n                                                                            <span>DM</span>\n                                                                        </div>\n                                                                        <div *ngIf=\"diseaseStates.name === 'RVO'\">\n                                                                                <span>RVO</span>\n                                                                            </div>   \n                                                                        <div *ngIf=\"diseaseStates.name === 'Menstrual Cycle'\">\n                                                                                    <span>MC</span>\n                                                                        </div>                                                                   \n                                                                <!-- <img src=\"assets/images/{{diseaseStates.name}}.png\" alt=\"\"> -->\n                                                            </div>\n                                                            <h4>{{diseaseStates.name}}</h4>\n                                                        </div>\n                                                    </figure>\n                                                </div>\n\n                                            </div>\n\n                                        </div>\n                                        <div class=\"col-12 col-sm-5 col-md-5 col-lg-5\">\n                                            <div class=\"row\">\n                                                <div class=\"col-md-12 col-sm-12\">\n                                                    <h3 class=\"pop-head\">Products</h3>\n                                                </div>\n                                            </div>\n                                            <div class=\"row\" *ngIf=\"showLoding\">\n                                                <div class=\"col-md-12 col-sm-12\">\n                                                    <div class=\"loding_bx\">\n                                                        <div class=\"load-cir\">\n                                                            <span></span>\n                                                            <span></span>\n                                                            <span></span>\n                                                        </div>\n                                                        <h4>Loading...</h4>\n                                                        <p>&nbsp;</p>\n                                                        <p>&nbsp;</p>\n                                                        <p>&nbsp;</p>\n                                                        <p>&nbsp;</p>\n                                                        <p>&nbsp;</p>\n                                                        <p>&nbsp;</p>\n                                                        <p>&nbsp;</p>\n                                                        <p>&nbsp;</p>\n                                                        <p>&nbsp;</p>\n                                                        <p>&nbsp;</p>\n                                                        <p>&nbsp;</p>\n                                                        <p>&nbsp;</p>\n                                                    </div>\n\n                                                </div>\n\n                                            </div>\n\n\n                                            <div class=\"row\" *ngIf=\"noData\">\n                                                <div class=\"col-md-12 col-sm-12\">\n                                                    <div class=\"loding_bx\">\n                                                        <div class=\"load-cir\">\n                                                            <span></span>\n                                                            <span></span>\n                                                            <span></span>\n                                                        </div>\n                                                        <h4>Currently no products</h4>\n\n                                                    </div>\n\n                                                </div>\n\n                                            </div>\n\n                                            <div class=\"row\" *ngIf=\"showProducts\">\n                                                <div class=\"col-md-4 col-sm-4 p-items col_cxs\"\n                                                    *ngFor=\"let product of products; let i = index\">\n                                                    <figure class=\"cares d-states\"\n                                                        (click)=\"loadSuccessProduct(product.id,i);getBreadCrumb(product.name); updateRootListForProduct(i, product)\">\n\n                                                        <div class=\"figbx\"\n                                                            [ngClass]=\"{'active' : selectedProduct === i }\">\n                                                            <!-- <div class=\"fig-check\"></div> -->\n                                                            <div class=\"figur\">\n                                                                    <div class=\"fig-check\"></div>\n                                                                    <div *ngIf=\"product.name === 'LoLo Taytulla'\">\n                                                                        <span>LT</span>\n                                                                    </div>\n                                                                    <div *ngIf=\"product.name === 'Abicipar'\">\n                                                                            <span>DB</span>\n                                                                        </div>\n                                                                        <div *ngIf=\"product.name === 'Ozurdex'\">\n                                                                                <span>Oz</span>\n                                                                            </div>\n                                                                            <div *ngIf=\"product.name === 'Restasis'\">\n                                                                                    <span>RE</span>\n                                                                                </div>\n                                                                                <div *ngIf=\"product.name === 'Xen Gel'\">\n                                                                                        <span>XE</span>\n                                                                                    </div>   \n                                                                                    <div *ngIf=\"product.name === 'LoLo Taytulla'\">\n                                                                                            <span>LT</span>\n                                                                                        </div>                                            \n                                                                    \n                                                                                    \n                                                                    \n                                                                    \n\n                                                                <!-- <img src=\"assets/images/Products_{{i+1}}.png\" alt=\"\"> -->\n                                                            </div>\n\n                                                            <!-- <div class=\"figur\"> -->\n                                                                   \n                                                            <h4>{{product.name}}</h4>\n                                                        </div>\n                                                    </figure>\n\n\n                                                </div>\n                                                <!-- <div class=\"col-md-4 col-sm-4 p-items\">\n                            <figure class=\"cares d-states\">\n                               \n                                <div class=\"figbx\">\n                                    <div class=\"fig-check\"></div>\n                                    <div class=\"figur\">\n                                         \n                                        <img src=\"assets/images/Products_2.png\" alt=\"\">\n                                    </div>\n                                  \n                                </div>\n                            </figure>\n                        \n\n                        </div> -->\n                                            </div>\n\n\n                                        </div>\n                                    </div>\n\n                                    <div class=\"row\" *ngIf=\"noTAs\">\n                                        <div class=\"col-md-12 col-sm-12\">\n                                            <div class=\"loding_bx\">\n                                                <div class=\"load-cir\">\n                                                    <span></span>\n                                                    <span></span>\n                                                    <span></span>\n                                                </div>\n                                                <h4>Currently there is no therapeutic areas...</h4>\n\n\n                                            </div>\n\n                                        </div>\n\n                                    </div>\n\n                                </div>\n                            </div>\n\n                        </div>\n                    </section>\n                </div>\n            </div>\n        </div>\n    </section>\n</div>\n<div class=\"overlay\" (click)=\"removePop($event)\"></div>"

/***/ }),

/***/ "./src/app/allergan/therapeuticareas/therapeuticareas.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/allergan/therapeuticareas/therapeuticareas.component.ts ***!
  \*************************************************************************/
/*! exports provided: TherapeuticareasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TherapeuticareasComponent", function() { return TherapeuticareasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../models */ "./src/app/models/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TherapeuticareasComponent = /** @class */ (function () {
    function TherapeuticareasComponent(route, homeService, commonService) {
        var _this = this;
        this.route = route;
        this.homeService = homeService;
        this.commonService = commonService;
        this.noTAs = false;
        this.status = false;
        this.ta = [];
        this.showProducts = false;
        this.noData = false;
        this.numberCount = null;
        this.colorActive = false;
        this.noDiseasStates = false;
        this.showLoding = false;
        this.selectedProduct = null;
        this.selectedDState = null;
        this.selectedIndex = null;
        this.showDiseaseStates = false;
        this.mouseOvered = false;
        this.taId = 0;
        this.queryUrl = "";
        //@Input() child:MainpageComponent;
        this.someEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.breadCrumb = "";
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.commonService.breadCrumb = "";
        this.route.queryParams.subscribe(function (params) {
            _this.queryUrl = params['urls'];
            _this.noTAs = false;
            _this.commonService.breadCrumb = _this.queryUrl;
            _this.homeService.getTherapeuticAreas(Number(params['userId']), params['assetsTypeId'])
                .pipe()
                .subscribe(function (data) {
                _this.ta = data.data;
                if (Number(_this.ta.length) == 0) {
                    _this.noTAs = true;
                }
                _this.ta.sort(function (a, b) { return a.userName.localeCompare(b.userName); });
            }, function (error) {
            });
        });
    }
    TherapeuticareasComponent.prototype.ngAfterViewInit = function () {
    };
    TherapeuticareasComponent.prototype.ngOnInit = function () {
    };
    // removepop($event) {
    //   const fig = document.querySelectorAll('.figbx')
    //   // console.log($event.target.parentElement.className)
    //   if($event.target.parentElement.className === 'figbx actives') {
    //     $event.target.parentElement.className === 'figbx active actives'
    //   }else {
    //     fig.forEach(el => {
    //       el.className = 'figbx';
    //     })
    //   }
    // }
    TherapeuticareasComponent.prototype.loadDiseaseState = function (diseaseStateId, i) {
        var _this = this;
        this.selectedDState = i;
        setTimeout(function () {
            _this.someEvent.emit(new _models__WEBPACK_IMPORTED_MODULE_3__["ProductAndDiseaseIds"](_this.taId, 0, diseaseStateId, _this.queryUrl));
        }, 300);
    };
    TherapeuticareasComponent.prototype.loadSuccessProduct = function (productId, i) {
        var _this = this;
        this.selectedProduct = i;
        setTimeout(function () {
            _this.someEvent.emit(new _models__WEBPACK_IMPORTED_MODULE_3__["ProductAndDiseaseIds"](_this.taId, productId, 0, _this.queryUrl));
        }, 300);
    };
    TherapeuticareasComponent.prototype.changeStyle = function ($event, index) {
        this.selectedIndex = index;
        if ($event.target.className === 'figur') {
            $event.target.parentElement.classList.add('actives');
        }
        else if ($event.target.className === 'fig-title') {
            $event.target.parentElement.parentElement.parentElement.classList.add('actives');
        }
    };
    TherapeuticareasComponent.prototype.changeStyleAdd = function ($event) {
        if ($event.target.className === 'figur') {
            $event.target.parentElement.classList.add('activePop');
        }
        else if ($event.target.className === 'fig-title') {
            $event.target.parentElement.parentElement.parentElement.classList.add('activePop');
        }
    };
    TherapeuticareasComponent.prototype.changeStyleRemove = function ($event, index) {
        if ($event.target.className === 'figur') {
            this.selectedIndex = index;
            $event.target.parentElement.classList.remove('activePop');
        }
        else if ($event.target.className === 'fig-title') {
            $event.target.parentElement.parentElement.parentElement.classList.remove('activePop');
        }
    };
    TherapeuticareasComponent.prototype.removePop = function ($event) {
        if ($event.target.className === 'overlay') {
            var figbx = document.querySelector('.figbx');
            figbx.classList.remove('activePop');
        }
    };
    TherapeuticareasComponent.prototype.updateRootList = function (index, taId) {
        this.commonService.addElementToRootList(3, taId.name, '', '', "", "");
    };
    TherapeuticareasComponent.prototype.updateRootListForDiseaseState = function (i, diseaseStates) {
        this.commonService.addElementToRootList(4, diseaseStates.name, '', '', "", "");
    };
    TherapeuticareasComponent.prototype.updateRootListForProduct = function (i, product) {
        this.commonService.addElementToRootList(4, product.name, '', '', "", "");
    };
    TherapeuticareasComponent.prototype.diseaseStatesProducts = function (index, taId) {
        var _this = this;
        this.numberCount = index;
        this.taId = taId;
        this.colorActive = true;
        this.showDiseaseStates = false;
        this.showProducts = false;
        this.showLoding = true;
        this.noData = false;
        this.noDiseasStates = false;
        this.status = !this.status;
        //this.showProducts=true;
        this.homeService.getdiseaseStatesProducts(this.currentUser.id, taId)
            .pipe()
            .subscribe(function (data) {
            _this.showLoding = false;
            _this.showDiseaseStates = true;
            _this.showProducts = true;
            _this.diseaseState = data.data.diseaseStates;
            _this.diseaseState.sort(function (a, b) { return a.name.localeCompare(b.name); });
            _this.products = data.data.products;
            _this.products.sort(function (a, b) { return a.name.localeCompare(b.name); });
            if (Number(_this.products.length) == 0) {
                _this.noData = true;
            }
            if (Number(_this.diseaseState.length) == 0) {
                _this.noDiseasStates = true;
            }
        }, function (error) {
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TherapeuticareasComponent.prototype, "someEvent", void 0);
    TherapeuticareasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-therapeuticareas',
            template: __webpack_require__(/*! ./therapeuticareas.component.html */ "./src/app/allergan/therapeuticareas/therapeuticareas.component.html"),
            styles: [__webpack_require__(/*! ./therapeuticareas.component.css */ "./src/app/allergan/therapeuticareas/therapeuticareas.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services__WEBPACK_IMPORTED_MODULE_2__["HomeService"], _services__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], TherapeuticareasComponent);
    return TherapeuticareasComponent;
}());



/***/ }),

/***/ "./src/app/allergan/topics/alertForTopics/alertForTopics.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/allergan/topics/alertForTopics/alertForTopics.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsbGVyZ2FuL3RvcGljcy9hbGVydEZvclRvcGljcy9hbGVydEZvclRvcGljcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/allergan/topics/alertForTopics/alertForTopics.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/allergan/topics/alertForTopics/alertForTopics.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"full_sc_pop\" [hidden]=\"myVar\">\n  <div class=\"pop_outer\">\n      <div class=\"pop_box\">\n          <div class=\"colse_btn\"><button (click)=\"hide()\"></button></div>\n          <div class=\"pop_head\">\n              <h2>Attention!</h2>\n          </div>\n          <div class=\"pop_content\">\n              <h5>Hi {{currentUser.name}}!</h5>\n              <p>You can attempt this module only after you complete the mandatory modules already assigned to you.</p>\n              <p>This module will be activated only on completion of the previous module.</p>\n              <h6>Click the close button to continue.</h6>\n          </div>\n      </div>\n  </div>\n  </div>\n  <footer>\n      <div class=\"auto-container\">\n          <div class=\"row \">\n              <div class=\"col-md-12 \">\n                  <p class=\"footer1 \">© ALLERGAN 2019</p>\n              </div>\n          </div>\n      </div>\n  </footer> -->\n"

/***/ }),

/***/ "./src/app/allergan/topics/alertForTopics/alertForTopics.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/allergan/topics/alertForTopics/alertForTopics.component.ts ***!
  \****************************************************************************/
/*! exports provided: AlertForTopicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertForTopicsComponent", function() { return AlertForTopicsComponent; });
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

var AlertForTopicsComponent = /** @class */ (function () {
    function AlertForTopicsComponent() {
        this.myVar = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    AlertForTopicsComponent.prototype.ngOnInit = function () {
    };
    AlertForTopicsComponent.prototype.hide = function () {
        this.myVar = true;
    };
    AlertForTopicsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-alerts',
            template: __webpack_require__(/*! ./alertForTopics.component.html */ "./src/app/allergan/topics/alertForTopics/alertForTopics.component.html"),
            styles: [__webpack_require__(/*! ./alertForTopics.component.css */ "./src/app/allergan/topics/alertForTopics/alertForTopics.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AlertForTopicsComponent);
    return AlertForTopicsComponent;
}());



/***/ }),

/***/ "./src/app/allergan/topics/alertForTopics/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/allergan/topics/alertForTopics/index.ts ***!
  \*********************************************************/
/*! exports provided: AlertForTopicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alertForTopics_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alertForTopics.component */ "./src/app/allergan/topics/alertForTopics/alertForTopics.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertForTopicsComponent", function() { return _alertForTopics_component__WEBPACK_IMPORTED_MODULE_0__["AlertForTopicsComponent"]; });




/***/ }),

/***/ "./src/app/allergan/topics/assetsmap/assetsmap.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/allergan/topics/assetsmap/assetsmap.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".loader{\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 100%;\r\n    position: absolute;\r\n    margin: 0 auto;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    z-index: 3;\r\n  }\r\n  \r\n  /* LOADER 1 */\r\n  \r\n  /* #loader-1:before, #loader-1:after{\r\n    content: \"\";\r\n    position: absolute;\r\n    top: -10px;\r\n    left: -10px;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 100%;\r\n    border: 10px solid transparent;\r\n    border-top-color: #3498db;\r\n  }\r\n  \r\n  #loader-1:before{\r\n    z-index: 100;\r\n    animation: spin 1s infinite;\r\n  }\r\n  \r\n  #loader-1:after{\r\n    border: 10px solid #ccc;\r\n  }\r\n  \r\n  @keyframes spin{\r\n    0%{\r\n      -webkit-transform: rotate(0deg);\r\n      -ms-transform: rotate(0deg);\r\n      -o-transform: rotate(0deg);\r\n      transform: rotate(0deg);\r\n    }\r\n  \r\n    100%{\r\n      -webkit-transform: rotate(360deg);\r\n      -ms-transform: rotate(360deg);\r\n      -o-transform: rotate(360deg);\r\n      transform: rotate(360deg);\r\n    }\r\n  } */\r\n  \r\n  /* LOADER 2 */\r\n  \r\n  #loader-2 span{\r\n    display: inline-block;\r\n    width: 10px;\r\n    height: 10px;\r\n    border-radius: 100%;\r\n    background-color: #3498db;\r\n    margin: 35px 5px;\r\n  }\r\n  \r\n  #loader-2 span:nth-child(1){\r\n    animation: bounce 1s ease-in-out infinite;\r\n  }\r\n  \r\n  #loader-2 span:nth-child(2){\r\n    animation: bounce 1s ease-in-out 0.33s infinite;\r\n  }\r\n  \r\n  #loader-2 span:nth-child(3){\r\n    animation: bounce 1s ease-in-out 0.66s infinite;\r\n  }\r\n  \r\n  @keyframes bounce{\r\n    0%, 75%, 100%{\r\n      transform: translateY(0);\r\n    }\r\n  \r\n    25%{\r\n      transform: translateY(-20px);\r\n    }\r\n  }\r\n  \r\n  .overlay {\r\n    position: fixed;\r\n    top: 0px;\r\n    left: 0px;\r\n    bottom: 0px;\r\n    right: 0px;\r\n    background-color: rgba(0,0,0,0.5);\r\n    z-index: 2;\r\n}\r\n  \r\n  .section_tab {\r\n  top: 0% !important;\r\n}\r\n  \r\n  footer {\r\n  position: absolute;\r\n  bottom: 0px;\r\n  width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsZXJnYW4vdG9waWNzL2Fzc2V0c21hcC9hc3NldHNtYXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsVUFBVTtFQUNaOztFQUVBLGFBQWE7O0VBRWI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBbUNHOztFQUVILGFBQWE7O0VBRWI7SUFDRSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLHlDQUF5QztFQUMzQzs7RUFFQTtJQUNFLCtDQUErQztFQUNqRDs7RUFFQTtJQUNFLCtDQUErQztFQUNqRDs7RUFFQTtJQUNFO01BSUUsd0JBQXdCO0lBQzFCOztJQUVBO01BSUUsNEJBQTRCO0lBQzlCO0VBQ0Y7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsUUFBUTtJQUNSLFNBQVM7SUFDVCxXQUFXO0lBQ1gsVUFBVTtJQUNWLGlDQUFpQztJQUNqQyxVQUFVO0FBQ2Q7O0VBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0VBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2FsbGVyZ2FuL3RvcGljcy9hc3NldHNtYXAvYXNzZXRzbWFwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVye1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gIH1cclxuICBcclxuICAvKiBMT0FERVIgMSAqL1xyXG4gIFxyXG4gIC8qICNsb2FkZXItMTpiZWZvcmUsICNsb2FkZXItMTphZnRlcntcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0xMHB4O1xyXG4gICAgbGVmdDogLTEwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBib3JkZXI6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiAjMzQ5OGRiO1xyXG4gIH1cclxuICBcclxuICAjbG9hZGVyLTE6YmVmb3Jle1xyXG4gICAgei1pbmRleDogMTAwO1xyXG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGluZmluaXRlO1xyXG4gIH1cclxuICBcclxuICAjbG9hZGVyLTE6YWZ0ZXJ7XHJcbiAgICBib3JkZXI6IDEwcHggc29saWQgI2NjYztcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBzcGlue1xyXG4gICAgMCV7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgMTAwJXtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxuICB9ICovXHJcbiAgXHJcbiAgLyogTE9BREVSIDIgKi9cclxuICBcclxuICAjbG9hZGVyLTIgc3BhbntcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgaGVpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNDk4ZGI7XHJcbiAgICBtYXJnaW46IDM1cHggNXB4O1xyXG4gIH1cclxuICBcclxuICAjbG9hZGVyLTIgc3BhbjpudGgtY2hpbGQoMSl7XHJcbiAgICBhbmltYXRpb246IGJvdW5jZSAxcyBlYXNlLWluLW91dCBpbmZpbml0ZTtcclxuICB9XHJcbiAgXHJcbiAgI2xvYWRlci0yIHNwYW46bnRoLWNoaWxkKDIpe1xyXG4gICAgYW5pbWF0aW9uOiBib3VuY2UgMXMgZWFzZS1pbi1vdXQgMC4zM3MgaW5maW5pdGU7XHJcbiAgfVxyXG4gIFxyXG4gICNsb2FkZXItMiBzcGFuOm50aC1jaGlsZCgzKXtcclxuICAgIGFuaW1hdGlvbjogYm91bmNlIDFzIGVhc2UtaW4tb3V0IDAuNjZzIGluZmluaXRlO1xyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGJvdW5jZXtcclxuICAgIDAlLCA3NSUsIDEwMCV7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIH1cclxuICBcclxuICAgIDI1JXtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcclxuICAgICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMHB4KTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLm92ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcbi5zZWN0aW9uX3RhYiB7XHJcbiAgdG9wOiAwJSAhaW1wb3J0YW50O1xyXG59XHJcbmZvb3RlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/allergan/topics/assetsmap/assetsmap.component.html":
/*!********************************************************************!*\
  !*** ./src/app/allergan/topics/assetsmap/assetsmap.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n<div class=\"min_contner silde_14 scenario_01\">\n    <app-topics></app-topics>\n\n <section class=\"section_tab dragblslide_1 dragbaltab\">\n                <div class=\"auto-container\">\n                    <div class=\"overlay\" *ngIf=\"loadAll\"></div>\n                    <div class=\"loader\" *ngIf=\"loadAll\" id=\"loader-2\">\n                        <span></span>\n                        <span></span>\n                        <span></span>\n                    </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-11 col-sm-12\">\n                            <div class=\"menu-topics\">\n                                <div class=\"topic-path\">\n                                    <div class=\"path path1\"></div>\n                                    <div class=\"path path2\"></div>\n                                    <div class=\"path path3 \"></div>\n                                    <div class=\"path path4 dotted\"></div>\n                                    <!-- <div class=\"path path5 dotted\"></div> -->\n                                </div>\n                                <div class=\"topic-num\"  *ngIf=\"showNotCompleted\" [ngClass]=\"{'completed': showNotCompleted,'locks':!showNotCompleted}\" (click)=\"completed('/topic')\"></div>\n                                <div class=\"topic-num\" (click)=\"count>=1 ?openAsset(assetUserJourney[0]) : unAssignedAssets('/topic')\" (mouseover)=\"mouseOvered1=true\" (mouseout)=\"mouseOvered1=false\"  [ngClass]=\"assetUserJourney?getJourneyImage(count,assetUserJourney[0],mouseOvered1,showNotCompleted):''\">\n                                    <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[0]?.asset.contentType.id):'pdf'\">\n                                        <div class=\"hottips\">\n                                            <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[0]?.asset.title}}</p>\n                                            <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[0]?.assetCompletionStatus==1\">In Progress</div>\n                                            <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[0]?.assetCompletionStatus==0 ||assetUserJourney[0]?.assetCompletionStatus==null)\">Yet to start</div>\n                                            <div class=\"inprogrss_bar\">\n                                                <div class=\"outer-with\">\n                                                    <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[0]?.assetCompletionStatus==1\">\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[0]?.asset.description}}</p>\n                                            <div class=\"progrss-details\">\n                                                <span class=\"day-remain\">{{ assetUserJourney && assetUserJourney[0]?.dueDays}} days remaining</span>\n                                                <!-- <span class=\"points\">{{ assetUserJourney && assetUserJourney[0]?.asset.awardPoints}} points</span> -->\n                                            </div>\n                                            <div *ngIf=\" assetUserJourney && assetUserJourney[0]?.asset.contentType.id!=8 && assetUserJourney[0]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[0]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                        </div>\n                                    </div>\n                                </div>\n                              <!--inprogress-->\n                                <div class=\"topic-num\"  (click)=\"count>=2 ? openAsset(assetUserJourney[1]) : unAssignedAssets('/topic')\" (mouseover)=\"mouseOvered2=true\" (mouseout)=\"mouseOvered2=false\" [ngClass]=\"assetUserJourney?getJourneyImage(count,assetUserJourney[1],mouseOvered2,showNotCompleted):''\">\n                                   \n                                    <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[1]?.asset.contentType.id):'pdf'\">\n                                        <div class=\"hottips\">\n                                            <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[1]?.asset.title}}</p>\n                                            <!--assetCompletionStatus-->\n                                            <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[1]?.assetCompletionStatus==1\">In Progress</div>\n                                            <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[1]?.assetCompletionStatus==0 ||assetUserJourney[1]?.assetCompletionStatus==null)\">Yet to start</div>\n                                            <div class=\"inprogrss_bar\">\n                                                <div class=\"outer-with\">\n\n                                                    <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[1]?.assetCompletionStatus==1\">\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[1]?.asset.description}}</p>\n                                            <div class=\"progrss-details\">\n                                                <span class=\"day-remain\">{{assetUserJourney && assetUserJourney[1]?.dueDays}} days remaining</span>\n                                                <!-- <span class=\"points\">{{assetUserJourney && assetUserJourney[1]?.asset.awardPoints}} points</span> -->\n                                            </div>\n                                            <div  *ngIf=\"assetUserJourney && assetUserJourney[1]?.asset.contentType.id!==8 && assetUserJourney[1]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[1]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"topic-num\" (click)=\"count>=3 ? openAsset(assetUserJourney[2]) : unAssignedAssets('/topic')\"  (mouseover)=\"mouseOvered3=true\" (mouseout)=\"mouseOvered3=false\"  [ngClass]=\"assetUserJourney?getJourneyImage(count,assetUserJourney[2],mouseOvered3,showNotCompleted):''\"> \n                                        <div class=\"topic_points\" (click)=\"isClicked($event)\" (mouseover)=\"isMouseHover($event)\"   *ngIf=\"showNotCompleted  && assetUserJourney?.length-4>0\">+<span>{{assetUserJourney && assetUserJourney.length-decrCount}}</span></div>   \n                                    <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[2]?.asset.contentType.id):'pdf'\">\n                                        <div class=\"hottips\">\n                                            <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[2]?.asset.title}}</p>\n                                            <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[2]?.assetCompletionStatus==1\">In Progress</div>\n                                            <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[2]?.assetCompletionStatus==0 ||assetUserJourney[2]?.assetCompletionStatus==null)\">Yet to start</div>\n                                            <div class=\"inprogrss_bar\">\n                                                <div class=\"outer-with\">\n                                                    <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[2]?.assetCompletionStatus==1\">\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[2]?.asset.description}}</p>\n                                            <div class=\"progrss-details\">\n                                                <span class=\"day-remain\">{{assetUserJourney && assetUserJourney[2]?.dueDays}} days remaining</span>\n                                                <!-- <span class=\"points\">{{assetUserJourney && assetUserJourney[2]?.asset.awardPoints}} points</span> -->\n                                            </div>\n                                            <div *ngIf=\"assetUserJourney && assetUserJourney[2]?.asset.contentType.id!=8 && assetUserJourney[2]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[2]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                        </div>\n                                    </div>\n                                </div>\n\n\n                                <div class=\"topic-num\"   *ngIf=\"!showNotCompleted\" (click)=\"count>=4? openAsset(assetUserJourney[3]) :unAssignedAssets('/topic')\" (mouseover)=\"mouseOvered4=true\" (mouseout)=\"mouseOvered4=false\"  [ngClass]=\"assetUserJourney?getJourneyImage(count,assetUserJourney[3],mouseOvered4,showNotCompleted):''\">                                 \n                                <div class=\"topic_points\" (click)=\"isClicked($event)\" (mouseover)=\"isMouseHover($event)\"   *ngIf=\"!showNotCompleted && assetUserJourney?.length-4>0\">+<span>{{assetUserJourney && assetUserJourney.length-decrCount}}</span></div>\n                                    <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[3]?.asset.contentType.id):'pdf'\">\n                                        <div class=\"hottips\">\n                                            <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[3]?.asset.title}}</p>\n                                            <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[3]?.assetCompletionStatus==1\">In Progress</div>\n                                            <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[3]?.assetCompletionStatus==0 ||assetUserJourney[3]?.assetCompletionStatus==null)\">Yet to start</div>\n                                            <div class=\"inprogrss_bar\">\n                                                <div class=\"outer-with\">\n                                                    <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[3]?.assetCompletionStatus==1\">\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[3]?.asset.description}}</p>\n                                            <div class=\"progrss-details\">\n                                                <span class=\"day-remain\">{{assetUserJourney && assetUserJourney[3]?.dueDays}} days remaining</span> \n                                                <!-- <span class=\"points\">{{assetUserJourney && assetUserJourney[3]?.asset.awardPoints}} points</span> -->\n                                             </div>\n                                            <div *ngIf=\"assetUserJourney && assetUserJourney[3]?.asset.contentType.id!=8 && assetUserJourney[3]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[3]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                        </div>\n                                    </div>\n\n                                </div>\n\t\t\t\t\t\t\t\t\n \n \n                                        <!-- <div class=\"topic-num\" *ngIf=\"!showNotCompleted\" (click)=\" count>=4 ? openAsset(assetUserJourney[4]):  unAssignedAssets('/topic')\" (mouseover)=\"mouseOvered5=true\" (mouseout)=\"mouseOvered5=false\"  [ngClass]=\"assetUserJourney?getJourneyImage(count,assetUserJourney[4],mouseOvered5):''\">\n                                        <div class=\"topic_points\" (click)=\"assignedAssets(assetUserJourney.length-5,'/topic');$event.stopPropagation();\" *ngIf=\"!showNotCompleted && assetUserJourney?.length-5>0\">+m<span>{{assetUserJourney && assetUserJourney.length-5}}</span></div>\n                                       \n\n                                        <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[4]?.asset.fileName):'pdf'\">\n                                                <div class=\"hottips\">\n                                                    <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[4]?.asset.title}}</p>\n                                                    <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[4]?.assetCompletionStatus==1\">In Progress</div>\n                                                    <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[4]?.assetCompletionStatus==0 ||assetUserJourney[4]?.assetCompletionStatus==null)\">Yet to start</div>\n                                                    <div class=\"inprogrss_bar\">\n                                                        <div class=\"outer-with\">\n                                                            <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[4]?.assetCompletionStatus==1\">\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[4]?.asset.description}}</p>\n                                                    <div class=\"progrss-details\">\n                                                        <span class=\"day-remain\">{{ assetUserJourney && assetUserJourney[4]?.dueDays}} days remaining</span>\n                                                         <span class=\"points\">{{assetUserJourney && assetUserJourney[4]?.asset.awardPoints}} points</span>\n                                                    </div>\n                                                    <div *ngIf=\"assetUserJourney && assetUserJourney[4]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[4]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                                </div>\n                                            </div>\n                                </div> -->\n                                <div *ngIf=\"!showNotCompleted\" (click)=\"unAssignedAssets('/topic')\" class=\"topic-num\"></div>\n                                <div *ngIf=\"showNotCompleted && count>=0\" (click)=\"unAssignedAssets('/topic')\" class=\"topic-num\"></div>\n                            </div>\n                            \n                            <div class=\"basecamp\">\n                                <span>basecamp</span>\n                                <span><img src=\"assets/images/basecamp-icon.png\" alt=\"\"></span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n        </section>\n        <footer>\n            <div class=\"auto-container\">\n                <div class=\"row \">\n                    <div class=\"col-md-12 \">\n                        <p class=\"footer1 \">© ALLERGAN 2019</p>\n                    </div>\n                </div>\n            </div>\n        </footer>\n        <div *ngIf=\"assetloader\" >\n            <div class=\"loader\">Loading...</div>\n            <div class=\"loaderOverlay\"></div>\n            <div>\n<!-- <app-alerts></app-alerts> -->\n        </div>\n        </div>"

/***/ }),

/***/ "./src/app/allergan/topics/assetsmap/assetsmap.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/allergan/topics/assetsmap/assetsmap.component.ts ***!
  \******************************************************************/
/*! exports provided: AssetsmapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsmapComponent", function() { return AssetsmapComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models */ "./src/app/models/index.ts");
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




var AssetsmapComponent = /** @class */ (function () {
    function AssetsmapComponent(route, router, homeService, commonService, ngZone) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.homeService = homeService;
        this.commonService = commonService;
        this.ngZone = ngZone;
        this.loadAll = false;
        this.mouseOvered1 = false;
        this.mouseOvered2 = false;
        this.mouseOvered3 = false;
        this.mouseOvered4 = false;
        this.mouseOvered5 = false;
        this.completedStatus = false;
        this.showNotCompleted = false;
        this.completedAssets = false;
        this.baseMessages = false;
        this.count = 0;
        this.queryUrl = "";
        this.assetloader = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.url = this.commonService.getPreviousUrl();
        this.route.queryParams.subscribe(function (params) {
            _this.queryUrl = params['queryUrl'];
            _this.homeService.getOrderedAssetsFor(new _models__WEBPACK_IMPORTED_MODULE_2__["AssetJourneyRequestParams"](Number(params['userId']), Number(params['assetsTypeId']), Number(params['taId']), Number(params['productId']), Number(params['disId'])))
                .pipe()
                .subscribe(function (data) {
                _this.route.paramMap.subscribe(function (params) {
                    _this.showNotCompleted = false;
                    _this.assetUserJourney = data.data;
                    //console.log(this.assetUserJourney );
                    if (Number(_this.assetUserJourney.length) >= 1) {
                        _this.showNotCompleted = true;
                    }
                    _this.decrCount = 4;
                    // if (!this.showNotCompleted) this.decrCount = 4;
                    // else this.decrCount = 3;
                    _this.count = Number(_this.assetUserJourney.length);
                }, function (error) {
                });
                _this.homeService.getCompletedAssets(params['userId'], params['assetsTypeId'], params['productId'], params['disId'], params['taId'])
                    .pipe()
                    .subscribe(function (data) {
                    _this.lengthForData = data.data;
                    _this.showNotCompleted = false;
                    if (Number(_this.lengthForData.length) >= 1) {
                        _this.showNotCompleted = true;
                        _this.decrCount = 3;
                    }
                }, function (error) {
                });
            });
        });
    }
    AssetsmapComponent.prototype.ngOnInit = function () { };
    AssetsmapComponent.prototype.openAsset = function (assetUserJourney) {
        this.commonService.openAsset(this, assetUserJourney);
    };
    AssetsmapComponent.prototype.markAsComplete = function (assetJourneyId) {
        this.commonService.markAssetCompleted(this, assetJourneyId);
    };
    AssetsmapComponent.prototype.completed = function (url) {
        this.commonService.showCompletedAssets(this, url);
    };
    AssetsmapComponent.prototype.unAssignedAssets = function (url) {
        this.commonService.showUnAssignedAssets(this, url);
    };
    // assignedAssets(count:number,url:string){
    //      this.route.queryParams.subscribe(params => {    
    //     this.router.navigate(['/notshown/assigned/assets'], { queryParams:  {
    //       "unshowncount" :count,
    //       "url"   :url,
    //       "userId":params['userId'],
    //       "queryUrl":params['queryUrl'],
    //       "assetsTypeId":params['assetsTypeId'],
    //      "productId":params['productId'],
    //       "disId":params['disId'],
    //       "taId":params['taId']     
    //     }, skipLocationChange: true});
    //   })
    // }
    AssetsmapComponent.prototype.getAssetImage = function (assetImage) {
        return this.commonService.getAssetImage(assetImage);
    };
    AssetsmapComponent.prototype.getJourneyImage = function (count, assetUserJourney, mouseovered, showNotCompleted) {
        return this.commonService.getJourneyImage(count, assetUserJourney, mouseovered, showNotCompleted);
    };
    AssetsmapComponent.prototype.isClicked = function (event) {
        this.getQueuedAssets(this.url);
        event.stopPropagation();
    };
    AssetsmapComponent.prototype.isMouseHover = function (event) {
        event.stopPropagation();
    };
    AssetsmapComponent.prototype.getQueuedAssets = function (assetType) {
        this.commonService.getQueuedAssets(this, assetType);
    };
    AssetsmapComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-assetsmap',
            template: __webpack_require__(/*! ./assetsmap.component.html */ "./src/app/allergan/topics/assetsmap/assetsmap.component.html"),
            styles: [__webpack_require__(/*! ./assetsmap.component.css */ "./src/app/allergan/topics/assetsmap/assetsmap.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services__WEBPACK_IMPORTED_MODULE_3__["HomeService"], _services__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], AssetsmapComponent);
    return AssetsmapComponent;
}());



/***/ }),

/***/ "./src/app/allergan/topics/assetsmap/index.ts":
/*!****************************************************!*\
  !*** ./src/app/allergan/topics/assetsmap/index.ts ***!
  \****************************************************/
/*! exports provided: AssetsmapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assetsmap_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assetsmap.component */ "./src/app/allergan/topics/assetsmap/assetsmap.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AssetsmapComponent", function() { return _assetsmap_component__WEBPACK_IMPORTED_MODULE_0__["AssetsmapComponent"]; });




/***/ }),

/***/ "./src/app/allergan/topics/compliance-wire/compliance-wire.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/allergan/topics/compliance-wire/compliance-wire.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsbGVyZ2FuL3RvcGljcy9jb21wbGlhbmNlLXdpcmUvY29tcGxpYW5jZS13aXJlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/allergan/topics/compliance-wire/compliance-wire.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/allergan/topics/compliance-wire/compliance-wire.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"min_contner scenario_04 dragbalsc\">\n        <div class=\"hedpart\">\n            <div class=\"boxed_wrapper\">\n                <section class=\"mainmenu-area\">\n                    <div class=\"auto-container\">\n                        <div class=\"row\">\n                            <div class=\"right_icon\">\n                                <div class=\"box_right_notif\">\n                                    <div class=\"secral_point\">\n                                        <i class=\"fa_icon ball\"></i>\n                                        <span class=\"num\">4</span>\n                                        <div class=\"hover_showbox\">\n                                            <ul>\n                                                <li class=\"icon\">\n                                                    A new update is avaiable for Module 03 <span></span>\n                                                </li>\n                                                <li class=\"icon\">\n                                                    A new hot topic has been added to you schedule <span></span>\n                                                </li>\n                                                <li class=\"icon\">\n                                                    <b class=\"text_last\">Dismiss All</b>\n                                                </li>\n                                            </ul>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"box_right_notif\">\n                                    <div class=\"secral_point help_2\">\n                                        <i class=\"fa_icon help\"></i>\n                                    </div>\n                                </div>\n                                <div class=\"box_right_notif\">\n                                    <div class=\"secral_point badgesa\">\n                                        <i class=\"fa_icon batch\"></i>\n                                        <div class=\"hover_showbox badgesa\">\n                                            <div class=\"totle_point\">\n                                                <p>Total Points</p>\n                                                <span>165</span>\n                                            </div>\n                                            <div class=\"my_batch\">\n                                                <p>My Badges</p>\n                                                <div class=\"padgess\">\n                                                    <span><img src=\"assets/images/badges_1.png\" alt=\"\"></span>\n                                                    <span><img src=\"assets/images/badges_2.png\" alt=\"\"></span>\n                                                </div>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"box_right_notif\">\n                                    <div class=\"secral_point last\">\n                                        <i class=\"fa_icon last\"></i>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-9 col-sm-9\">\n                                <div class=\"main-logo hidden-xs\">\n                                    <a href=\"index.html\"><img src=\"assets/images/logo2.png\" alt=\"\"></a>\n                                </div>\n                                <div class=\"menu_tab\">\n                                    <button type=\"button\" id=\"menu_btn\" class=\"navbar\" data-toggle=\"collapse\"></button>\n                                    <div class=\"collapse mobile_menu\">\n                                        <ul class=\"nav navbar-nav\">\n                                            <li class=\"active\"><a href=\"#\" class=\"\">My Profile</a></li>\n                                            <li><a href=\"\" class=\"\">Scientific Foundations</a></li>\n                                            <li><a href=\"\" class=\"\">Core Product Data</a></li>\n                                            <li><a href=\"\" class=\"\">Pipeline and Launch</a></li>\n                                            <li><a href=\"\" class=\"\">Field Tools</a></li>\n                                            <li><a href=\"\" class=\"\">Hot Topics</a></li>\n                                            <li><a href=\"\" class=\"\">Medical Meetings</a></li>\n                                            <li><a href=\"\" class=\"\">Expert Talks</a></li>\n                                            <li><a href=\"\" class=\"\">Compliance Wire</a></li>\n                                        </ul>\n                                    </div>\n                                </div>\n                                <div class=\"searchic\">\n                                    <input type=\"text\" class=\"search_test\" name=\"\">\n                                    <button type=\"button\" class=\"search_ic\" id=\"search_btn\"></button>\n                                </div>\n                                <div class=\"bread_cumb\">\n                                    <ul>\n                                        <li><span></span><a href=\"\">Home</a></li>\n                                    </ul>\n                                </div>\n                            </div>\n                            <div class=\"col-md-2 col-sm-2\">\n                                <div class=\"user_name\">\n                                    <div class=\"username\">Hi, Sameer <span>MSL</span></div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </section>\n            </div>\n        </div>\n        <section class=\"section_tab dragblslide_1 dragbaltab\">\n            <div class=\"auto-container\">\n                <div class=\"row\">\n                    <div class=\"col-md-11 col-sm-12\">\n                        <div class=\"menu-topics\">\n                            <div class=\"topic-num completed\"></div>\n                            <div class=\"topic-num upcoming\"></div>\n                            <div class=\"topic-num upcoming inprogress\">\n                                <div class=\"trending-topic dp_down\">\n                                    <div class=\"hottips\">\n                                        <p class=\"text_hip1\">Training 3</p>\n                                        <div class=\"inprogrss\">In Progress</div>\n                                        <div class=\"inprogrss_bar\">\n                                            <div class=\"outer-with\">\n                                                <div class=\"cur-prog\">\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <p class=\"text-para-1\">Eye care, ophthalmology</p>\n                                        <div class=\"progrss-details\">\n                                            <span class=\"day-remain\">26 days remaining</span>\n                                            <span class=\"points\">50 points</span>\n                                        </div>\n                                        <div class=\"mark_btn\">Mark as complete</div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"topic-num upcoming\"> </div>\n                            <div class=\"topic-num locks\"> </div>\n                        </div>\n                        <div class=\"topic-path\">\n                            <div class=\"path path1\"></div>\n                            <div class=\"path path2\"></div>\n                            <div class=\"path path3 \"></div>\n                            <div class=\"path path4 dotted\"></div>\n                        </div>\n                        <div class=\"basecamp\">\n                            <span>basecamp</span>\n                            <span><img src=\"assets/images/basecamp-icon.png\" alt=\"\"></span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n        <footer>\n            <div class=\"auto-container\">\n                <div class=\"row \">\n                    <div class=\"col-md-12 \">\n                        <p class=\"footer1 \">© ALLERGAN 2019</p>\n                    </div>\n                </div>\n            </div>\n        </footer>\n    </div>\n    "

/***/ }),

/***/ "./src/app/allergan/topics/compliance-wire/compliance-wire.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/allergan/topics/compliance-wire/compliance-wire.component.ts ***!
  \******************************************************************************/
/*! exports provided: ComplianceWireComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplianceWireComponent", function() { return ComplianceWireComponent; });
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

var ComplianceWireComponent = /** @class */ (function () {
    function ComplianceWireComponent() {
    }
    ComplianceWireComponent.prototype.ngOnInit = function () {
    };
    ComplianceWireComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-compliance-wire',
            template: __webpack_require__(/*! ./compliance-wire.component.html */ "./src/app/allergan/topics/compliance-wire/compliance-wire.component.html"),
            styles: [__webpack_require__(/*! ./compliance-wire.component.css */ "./src/app/allergan/topics/compliance-wire/compliance-wire.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ComplianceWireComponent);
    return ComplianceWireComponent;
}());



/***/ }),

/***/ "./src/app/allergan/topics/compliance-wire/index.ts":
/*!**********************************************************!*\
  !*** ./src/app/allergan/topics/compliance-wire/index.ts ***!
  \**********************************************************/
/*! exports provided: ComplianceWireComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _compliance_wire_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compliance-wire.component */ "./src/app/allergan/topics/compliance-wire/compliance-wire.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComplianceWireComponent", function() { return _compliance_wire_component__WEBPACK_IMPORTED_MODULE_0__["ComplianceWireComponent"]; });




/***/ }),

/***/ "./src/app/allergan/topics/core-disease-training/core-disease-training.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/allergan/topics/core-disease-training/core-disease-training.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mycontainer {\r\n    display: inline-block;\r\n    float: none;\r\n    color: #fff;}\r\n\r\n.section_tab {\r\n    top: 5% !important;\r\n}\r\n\r\nfooter {\r\n    position: absolute;\r\n    bottom: 0px;\r\n    width: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsZXJnYW4vdG9waWNzL2NvcmUtZGlzZWFzZS10cmFpbmluZy9jb3JlLWRpc2Vhc2UtdHJhaW5pbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsV0FBVyxDQUFDOztBQUVoQjtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvYWxsZXJnYW4vdG9waWNzL2NvcmUtZGlzZWFzZS10cmFpbmluZy9jb3JlLWRpc2Vhc2UtdHJhaW5pbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO31cclxuXHJcbi5zZWN0aW9uX3RhYiB7XHJcbiAgICB0b3A6IDUlICFpbXBvcnRhbnQ7XHJcbn1cclxuZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/allergan/topics/core-disease-training/core-disease-training.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/allergan/topics/core-disease-training/core-disease-training.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"min_contner scenario_02 dragbalsc\">\n        <div class=\"hedpart\">\n            <div class=\"boxed_wrapper\">\n                    <app-header-nav [bascampMessage]=\"basecampTrue\" ></app-header-nav>\n                <div class=\"breadcrumbs\">\n                    <ul>                            \n                        <!-- <li><span></span><a [routerLink]=\"['/main']\" [queryParams]=\"{ userId:currentUser.id,assetsTypeId:assetsTypeId,urls:queryUrl}\" skipLocationChange>Core Disease Training</a></li> -->\n                        <li><span></span><a>Core Disease Training</a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n             <section class=\"section_tab dragblslide_1 dragbaltab\">\n                <div class=\"auto-container\">\n                        <div class=\"overlay\" *ngIf=\"loadAll\"></div>\n                        <div class=\"loader\" *ngIf=\"loadAll\" id=\"loader-2\">\n                            <span></span>\n                            <span></span>\n                            <span></span>\n                        </div>\n                        \n                    <div class=\"row\">\n                        <div class=\"col-md-11 col-sm-12\">\n                                <div class=\"menu-topics\">\n                                    <div class=\"topic-path\">\n                                        <div class=\"path path1\"></div>\n                                        <div class=\"path path2\"></div>\n                                        <div class=\"path path3 \"></div>\n                                        <div class=\"path path4 dotted\"></div>\n                                    </div>\n                                        <!-- completed -->\n                                    <div class=\"topic-num\"  *ngIf=\"showNotCompleted\" [ngClass]=\"{'completed': showNotCompleted,'locks':!showNotCompleted}\" (click)=\"completed('/cdt')\"></div>\n                                    <!-- upcoming -->\n                                    <div class=\"topic-num\" (click)=\"count>=1 ?openAsset(assetUserJourney[0]) : unAssignedAssets('/cdt')\" (mouseover)=\"mouseOvered1=true\" (mouseout)=\"mouseOvered1=false\"  [ngClass]=\"assetUserJourney?getJourneyImage(count,assetUserJourney[0],mouseOvered1,showNotCompleted):''\">\n        \n                                            <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[0]?.asset.contentType.id):'pdf'\">\n                                                    <div class=\"hottips\">\n                                                        <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[0]?.asset.title}}</p>\n                                                        <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[0]?.assetCompletionStatus==1\">In Progress</div>\n                                                        <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[0]?.assetCompletionStatus==0 ||assetUserJourney[0]?.assetCompletionStatus==null)\">Yet to start</div>\n                                                        <div class=\"inprogrss_bar\">\n                                                            <div class=\"outer-with\">\n                                                                <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[0]?.assetCompletionStatus==1\">\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[0]?.asset.description}}</p>\n                                                        <div class=\"progrss-details\">\n                                                            <span class=\"day-remain\">{{ assetUserJourney && assetUserJourney[0]?.dueDays}} days remaining</span>\n                                                            <!-- <span class=\"points\">{{ assetUserJourney && assetUserJourney[0]?.asset.awardPoints}} points</span> -->\n                                                        </div>\n                                                        <div *ngIf=\" assetUserJourney && assetUserJourney[0]?.asset.contentType.id!=8 && assetUserJourney[0]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[0]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                                    </div>\n                                                </div>\n                                    </div>\n                                    <!-- upcoming inprogress -->\n                                    <div class=\"topic-num\" (click)=\"count>=2 ? openAsset(assetUserJourney[1]) : unAssignedAssets('/cdt')\" (mouseover)=\"mouseOvered2=true\" (mouseout)=\"mouseOvered2=false\" [ngClass]=\"assetUserJourney?getJourneyImage(count,assetUserJourney[1],mouseOvered2,showNotCompleted):''\">\n                                        <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[1]?.asset.contentType.id):'pdf'\">\n                                                <div class=\"hottips\">\n                                                        <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[1]?.asset.title}}</p>\n                                                        <!--assetCompletionStatus-->\n                                                        <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[1]?.assetCompletionStatus==1\">In Progress</div>\n                                                        <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[1]?.assetCompletionStatus==0 ||assetUserJourney[1]?.assetCompletionStatus==null)\">Yet to start</div>\n                                                        <div class=\"inprogrss_bar\">\n                                                            <div class=\"outer-with\">\n            \n                                                                <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[1]?.assetCompletionStatus==1\">\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[1]?.asset.description}}</p>\n                                                        <div class=\"progrss-details\">\n                                                            <span class=\"day-remain\">{{assetUserJourney && assetUserJourney[1]?.dueDays}} days remaining</span>\n                                                            <!-- <span class=\"points\">{{assetUserJourney && assetUserJourney[1]?.asset.awardPoints}} points</span> -->\n                                                        </div>\n                                                        <div  *ngIf=\"assetUserJourney && assetUserJourney[1]?.asset.contentType.id!=8 && assetUserJourney[1]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[1]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                                    </div>\n                                        </div>\n                                    </div>\n                                    <!-- upcoming -->\n                                    <div class=\"topic-num\" (click)=\"count>=3 ? openAsset(assetUserJourney[2]) : unAssignedAssets('/cdt')\"  (mouseover)=\"mouseOvered3=true\" (mouseout)=\"mouseOvered3=false\"  [ngClass]=\"assetUserJourney?getJourneyImage(count,assetUserJourney[2],mouseOvered3,showNotCompleted):''\"> \n                                            <div class=\"topic_points\" (click)=\"isClicked($event)\" (mouseover)=\"isMouseHover($event)\" *ngIf=\"showNotCompleted && assetUserJourney?.length-3>0\">+<span>{{assetUserJourney && assetUserJourney.length-decrCount}}</span></div>   \n                                        <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[2]?.asset.contentType.id):'pdf'\">   \n                                        <div class=\"hottips\">\n                                                    <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[2]?.asset.title}}</p>\n                                                    <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[2]?.assetCompletionStatus==1\">In Progress</div>\n                                                    <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[2]?.assetCompletionStatus==0 ||assetUserJourney[2]?.assetCompletionStatus==null)\">Yet to start</div>\n                                                    <div class=\"inprogrss_bar\">\n                                                        <div class=\"outer-with\">\n                                                            <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[2]?.assetCompletionStatus==1\">\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[2]?.asset.description}}</p>\n                                                    <div class=\"progrss-details\">\n                                                        <span class=\"day-remain\">{{assetUserJourney && assetUserJourney[2]?.dueDays}} days remaining</span>\n                                                        <!-- <span class=\"points\">{{assetUserJourney && assetUserJourney[2]?.asset.awardPoints}} points</span> -->\n                                                    </div>\n                                                    <div *ngIf=\"assetUserJourney && assetUserJourney[2]?.asset.contentType.id!=8 && assetUserJourney[2]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[2]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                                </div>\n                                                </div>\n                                    </div>\n        \n                                    <div class=\"topic-num\" *ngIf=\"!showNotCompleted\"  (click)=\" count>=4 ? openAsset(assetUserJourney[3]):  unAssignedAssets('/cdt')\" (mouseover)=\"mouseOvered4=true\" (mouseout)=\"mouseOvered4=false\"  [ngClass]=\"assetUserJourney?getJourneyImage(count,assetUserJourney[3],mouseOvered4,showNotCompleted):''\">\n                                            <div class=\"topic_points upper_point\"  (click)=\"isClicked($event)\" (mouseover)=\"isMouseHover($event)\" *ngIf=\"!showNotCompleted && assetUserJourney?.length-4>0\">+<span>{{assetUserJourney && assetUserJourney.length-decrCount}}</span></div>\n        \n                                            <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[3]?.asset.contentType.id):'pdf'\">\n                                                    <div class=\"hottips\">\n                                                        <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[3]?.asset.title}}</p>\n                                                        <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[3]?.assetCompletionStatus==1\">In Progress</div>\n                                                        <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[3]?.assetCompletionStatus==0 ||assetUserJourney[3]?.assetCompletionStatus==null)\">Yet to start</div>\n                                                        <div class=\"inprogrss_bar\">\n                                                            <div class=\"outer-with\">\n                                                                <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[3]?.assetCompletionStatus==1\">\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[3]?.asset.description}}</p>\n                                                        <div class=\"progrss-details\">\n                                                            <span class=\"day-remain\">{{ assetUserJourney && assetUserJourney[3]?.dueDays}} days remaining</span>\n                                                            <!-- <span class=\"points\">{{assetUserJourney && assetUserJourney[3]?.asset.awardPoints}} points</span> -->\n                                                        </div>\n                                                        <div *ngIf=\"assetUserJourney && assetUserJourney[3]?.asset.contentType.id!=8 && assetUserJourney[3]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[3]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                                    </div>\n                                                </div>\n                                    </div>\n                                    <!-- locks -->\n                                    <div class=\"topic-num\" (click)=\"unAssignedAssets('/cdt')\">\n                                        \n                                            <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[3]?.asset.contentType.id):'pdf'\">\n                                                    <div class=\"hottips\">\n                                                        <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[3]?.asset.title}}</p>\n                                                        <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[3]?.assetCompletionStatus==1\">In Progress</div>\n                                                        <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[3]?.assetCompletionStatus==0 ||assetUserJourney[3]?.assetCompletionStatus==null)\">Yet to start</div>\n                                                        <div class=\"inprogrss_bar\">\n                                                            <div class=\"outer-with\">\n                                                                <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[3]?.assetCompletionStatus==1\">\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[3]?.asset.description}}</p>\n                                                        <div class=\"progrss-details\">\n                                                            <span class=\"day-remain\">{{assetUserJourney && assetUserJourney[3]?.dueDays}} days remaining</span>\n                                                            <!-- <span class=\"points\">{{assetUserJourney && assetUserJourney[3]?.asset.awardPoints}} points</span> -->\n                                                        </div>\n                                                        <div *ngIf=\"assetUserJourney && assetUserJourney[3]?.asset.contentType.id!=8 && assetUserJourney[3]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[3]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                                    </div>\n                                                </div>\n                                    </div>\n                                    <!-- <div *ngIf=\"!showNotCompleted\" (click)=\"unAssignedAssets('/cdt')\" class=\"topic-num\"></div> -->\n                                    <!-- <div *ngIf=\"showNotCompleted && count>=0\" (click)=\"unAssignedAssets('/cdt')\" class=\"topic-num\"></div> -->\n                                </div>\n                            \n                            <div class=\"basecamp\" [routerLink]=\"['/basecamp']\">\n                                <span>basecamp</span>\n                                <span><img src=\"assets/images/basecamp-icon.png\" alt=\"\"></span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </section>\n            <footer>\n                <div class=\"auto-container\">\n                    <div class=\"row \">\n                        <div class=\"col-md-12 \">\n                            <p class=\"footer1 \">© ALLERGAN 2019</p>\n                        </div>\n                    </div>\n                </div>\n            </footer>\n            <div *ngIf=\"assetloader\" >\n            <div class=\"loader\">Loading...</div>\n            <div class=\"loaderOverlay\"></div>\n            <div>\n        </div>\n        "

/***/ }),

/***/ "./src/app/allergan/topics/core-disease-training/core-disease-training.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/allergan/topics/core-disease-training/core-disease-training.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CoreDiseaseTrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreDiseaseTrainingComponent", function() { return CoreDiseaseTrainingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models */ "./src/app/models/index.ts");
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




var CoreDiseaseTrainingComponent = /** @class */ (function () {
    function CoreDiseaseTrainingComponent(route, router, homeService, commonService, ngZone) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.homeService = homeService;
        this.commonService = commonService;
        this.ngZone = ngZone;
        this.loadAll = false;
        this.mouseOvered1 = false;
        this.mouseOvered2 = false;
        this.mouseOvered3 = false;
        this.mouseOvered4 = false;
        this.mouseOvered5 = false;
        this.assetloader = false;
        this.basecampTrue = false;
        this.completedStatus = false;
        this.showNotCompleted = false;
        this.completedAssets = false;
        this.count = 0;
        this.queryUrl = "";
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.basecampTrue = true;
        this.url = this.commonService.getPreviousUrl();
        this.route.queryParams.subscribe(function (params) {
            _this.queryUrl = params['queryUrl'];
            _this.homeService.getOrderedAssetsFor(new _models__WEBPACK_IMPORTED_MODULE_2__["AssetJourneyRequestParams"](Number(params['userId']), Number(params['assetsTypeId']), Number(params['taId']), Number(params['productId']), Number(params['disId'])))
                .pipe()
                .subscribe(function (data) {
                _this.route.paramMap.subscribe(function (params) {
                    _this.showNotCompleted = false;
                    _this.assetUserJourney = data.data;
                    if (Number(_this.assetUserJourney.length) >= 1) {
                        _this.showNotCompleted = true;
                    }
                    _this.decrCount = 4;
                    // if (!this.showNotCompleted) this.decrCount = 4;
                    // else this.decrCount = 3;
                    _this.count = Number(_this.assetUserJourney.length);
                }, function (error) {
                });
                _this.homeService.getCompletedAssets(params['userId'], params['assetsTypeId'], params['productId'], params['disId'], params['taId'])
                    .pipe()
                    .subscribe(function (data) {
                    _this.lengthForData = data.data;
                    _this.showNotCompleted = false;
                    if (Number(_this.lengthForData.length) >= 1) {
                        _this.showNotCompleted = true;
                        _this.decrCount = 3;
                    }
                }, function (error) {
                });
            });
        });
    }
    CoreDiseaseTrainingComponent.prototype.ngOnInit = function () { };
    CoreDiseaseTrainingComponent.prototype.openAsset = function (assetUserJourney) {
        this.commonService.openAsset(this, assetUserJourney);
    };
    CoreDiseaseTrainingComponent.prototype.markAsComplete = function (assetJourneyId) {
        this.commonService.markAssetCompleted(this, assetJourneyId);
    };
    CoreDiseaseTrainingComponent.prototype.completed = function (url) {
        this.commonService.showCompletedAssets(this, url);
    };
    CoreDiseaseTrainingComponent.prototype.unAssignedAssets = function (url) {
        this.commonService.showUnAssignedAssets(this, url);
    };
    // assignedAssets(count:number,url:string){
    //      this.route.queryParams.subscribe(params => {    
    //     this.router.navigate(['/notshown/assigned/assets'], { queryParams:  {
    //       "unshowncount" :count,
    //       "url"   :url,
    //       "userId":params['userId'],
    //       "queryUrl":params['queryUrl'],
    //       "assetsTypeId":params['assetsTypeId'],
    //      "productId":params['productId'],
    //       "disId":params['disId'],
    //       "taId":params['taId']     
    //     }, skipLocationChange: true});
    //   })
    // }
    CoreDiseaseTrainingComponent.prototype.getAssetImage = function (assetImage) {
        return this.commonService.getAssetImage(assetImage);
    };
    CoreDiseaseTrainingComponent.prototype.getJourneyImage = function (count, assetUserJourney, mouseovered, showNotCompleted) {
        return this.commonService.getJourneyImage(count, assetUserJourney, mouseovered, showNotCompleted);
    };
    CoreDiseaseTrainingComponent.prototype.isClicked = function (event) {
        this.getQueuedAssets(this.url);
        event.stopPropagation();
    };
    CoreDiseaseTrainingComponent.prototype.isMouseHover = function (event) {
        event.stopPropagation();
    };
    CoreDiseaseTrainingComponent.prototype.getQueuedAssets = function (assetType) {
        this.commonService.getQueuedAssets(this, assetType);
    };
    CoreDiseaseTrainingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-core-disease-training',
            template: __webpack_require__(/*! ./core-disease-training.component.html */ "./src/app/allergan/topics/core-disease-training/core-disease-training.component.html"),
            styles: [__webpack_require__(/*! ./core-disease-training.component.css */ "./src/app/allergan/topics/core-disease-training/core-disease-training.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services__WEBPACK_IMPORTED_MODULE_3__["HomeService"], _services__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], CoreDiseaseTrainingComponent);
    return CoreDiseaseTrainingComponent;
}());



/***/ }),

/***/ "./src/app/allergan/topics/core-disease-training/index.ts":
/*!****************************************************************!*\
  !*** ./src/app/allergan/topics/core-disease-training/index.ts ***!
  \****************************************************************/
/*! exports provided: CoreDiseaseTrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_disease_training_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-disease-training.component */ "./src/app/allergan/topics/core-disease-training/core-disease-training.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreDiseaseTrainingComponent", function() { return _core_disease_training_component__WEBPACK_IMPORTED_MODULE_0__["CoreDiseaseTrainingComponent"]; });




/***/ }),

/***/ "./src/app/allergan/topics/core-product-training/core-product-training.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/allergan/topics/core-product-training/core-product-training.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mycontainer {\r\n    display: inline-block;\r\n    float: none;\r\n    color: #fff;}\r\n\r\n.section_tab {\r\n    top: 25% !important;\r\n}\r\n\r\nfooter {\r\n    position: absolute;\r\n    bottom: 0px;\r\n    width: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsZXJnYW4vdG9waWNzL2NvcmUtcHJvZHVjdC10cmFpbmluZy9jb3JlLXByb2R1Y3QtdHJhaW5pbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsV0FBVyxDQUFDOztBQUVoQjtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvYWxsZXJnYW4vdG9waWNzL2NvcmUtcHJvZHVjdC10cmFpbmluZy9jb3JlLXByb2R1Y3QtdHJhaW5pbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO31cclxuXHJcbi5zZWN0aW9uX3RhYiB7XHJcbiAgICB0b3A6IDI1JSAhaW1wb3J0YW50O1xyXG59XHJcbmZvb3RlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/allergan/topics/core-product-training/core-product-training.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/allergan/topics/core-product-training/core-product-training.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"min_contner scenario_05 dragbalsc\">\n        <div class=\"hedpart\">\n            <div class=\"boxed_wrapper\">\n                    <app-header-nav [bascampMessage]=\"basecampTrue\" ></app-header-nav>\n                <div class=\"breadcrumbs\">\n                    <ul>\n                        <li><span></span><a>Core Product Training</a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>             \n            <section class=\"section_tab dragblslide_1 dragbaltab\">\n                <div class=\"auto-container\">\n                        <div class=\"overlay\" *ngIf=\"loadAll\"></div>\n                        <div class=\"loader\" *ngIf=\"loadAll\" id=\"loader-2\">\n                            <span></span>\n                            <span></span>\n                            <span></span>\n                        </div>\n                    <div class=\"row\">\n                        <div class=\"col-md-11 col-sm-12\">\n                                <div class=\"menu-topics\">\n                                    <div class=\"topic-path\">\n                                        <div class=\"path path1\"></div>\n                                        <div class=\"path path2\"></div>\n                                        <div class=\"path path3 \"></div>\n                                        <div class=\"path path4 dotted\"></div>\n                                    </div>\n                                        <!-- completed -->\n                                    <div class=\"topic-num\"  *ngIf=\"showNotCompleted\" [ngClass]=\"{'completed': showNotCompleted,'locks':!showNotCompleted}\" (click)=\"completed('/cpt')\"></div>\n                                    <!-- upcoming -->\n                                    <div class=\"topic-num\" (click)=\"count>=1 ?openAsset(assetUserJourney[0]) : unAssignedAssets('/cpt')\" (mouseover)=\"mouseOvered1=true\" (mouseout)=\"mouseOvered1=false\"  [ngClass]=\"assetUserJourney?getJourneyImage(count,assetUserJourney[0],mouseOvered1,showNotCompleted):''\">\n        \n                                            <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[0]?.asset.contentType.id):'pdf'\">\n                                                    <div class=\"hottips\">\n                                                        <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[0]?.asset.title}}</p>\n                                                        <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[0]?.assetCompletionStatus==1\">In Progress</div>\n                                                        <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[0]?.assetCompletionStatus==0 ||assetUserJourney[0]?.assetCompletionStatus==null)\">Yet to start</div>\n                                                        <div class=\"inprogrss_bar\">\n                                                            <div class=\"outer-with\">\n                                                                <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[0]?.assetCompletionStatus==1\">\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[0]?.asset.description}}</p>\n                                                        <div class=\"progrss-details\">\n                                                            <span class=\"day-remain\">{{ assetUserJourney && assetUserJourney[0]?.dueDays}} days remaining</span>\n                                                            <!-- <span class=\"points\">{{ assetUserJourney && assetUserJourney[0]?.asset.awardPoints}} points</span> -->\n                                                        </div>\n                                                        <div *ngIf=\" assetUserJourney && assetUserJourney[0]?.asset.contentType.id!=8 && assetUserJourney[0]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[0]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                                    </div>\n                                                </div>\n                                    </div>\n                                    <!-- upcoming inprogress -->\n                                    <div class=\"topic-num\" (click)=\"count>=2 ? openAsset(assetUserJourney[1]) : unAssignedAssets('/cpt')\" (mouseover)=\"mouseOvered2=true\" (mouseout)=\"mouseOvered2=false\" [ngClass]=\"assetUserJourney?getJourneyImage(count,assetUserJourney[1],mouseOvered2,showNotCompleted):''\">\n                                        <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[1]?.asset.contentType.id):'pdf'\">\n                                                <div class=\"hottips\">\n                                                        <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[1]?.asset.title}}</p>\n                                                        <!--assetCompletionStatus-->\n                                                        <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[1]?.assetCompletionStatus==1\">In Progress</div>\n                                                        <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[1]?.assetCompletionStatus==0 ||assetUserJourney[1]?.assetCompletionStatus==null)\">Yet to start</div>\n                                                        <div class=\"inprogrss_bar\">\n                                                            <div class=\"outer-with\">\n            \n                                                                <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[1]?.assetCompletionStatus==1\">\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[1]?.asset.description}}</p>\n                                                        <div class=\"progrss-details\">\n                                                            <span class=\"day-remain\">{{assetUserJourney && assetUserJourney[1]?.dueDays}} days remaining</span>\n                                                            <!-- <span class=\"points\">{{assetUserJourney && assetUserJourney[1]?.asset.awardPoints}} points</span> -->\n                                                        </div>\n                                                        <div  *ngIf=\"assetUserJourney && assetUserJourney[1]?.asset.contentType.id!=8 && assetUserJourney[1]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[1]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                                    </div>\n                                        </div>\n                                    </div>\n                                    <!-- upcoming -->\n                                    <div class=\"topic-num\" (click)=\"count>=3 ? openAsset(assetUserJourney[2]) : unAssignedAssets('/cpt')\"  (mouseover)=\"mouseOvered3=true\" (mouseout)=\"mouseOvered3=false\"  [ngClass]=\"assetUserJourney?getJourneyImage(count,assetUserJourney[2],mouseOvered3,showNotCompleted):''\"> \n                                        <div class=\"topic_points\" (click) = \"isClicked($event)\"  (mouseover)=\"isMouseHover($event)\"  *ngIf=\"showNotCompleted && assetUserJourney?.length-3>0\">+<span>{{assetUserJourney && assetUserJourney.length-decrCount}}</span></div>   \n                                        <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[2]?.asset.contentType.id):'pdf'\">   \n                                        <div class=\"hottips\">\n                                                    <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[2]?.asset.title}}</p>\n                                                    <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[2]?.assetCompletionStatus==1\">In Progress</div>\n                                                    <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[2]?.assetCompletionStatus==0 ||assetUserJourney[2]?.assetCompletionStatus==null)\">Yet to start</div>\n                                                    <div class=\"inprogrss_bar\">\n                                                        <div class=\"outer-with\">\n                                                            <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[2]?.assetCompletionStatus==1\">\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[2]?.asset.description}}</p>\n                                                    <div class=\"progrss-details\">\n                                                        <span class=\"day-remain\">{{assetUserJourney && assetUserJourney[2]?.dueDays}} days remaining</span>\n                                                        <!-- <span class=\"points\">{{assetUserJourney && assetUserJourney[2]?.asset.awardPoints}} points</span> -->\n                                                    </div>\n                                                    <div *ngIf=\"assetUserJourney && assetUserJourney[2]?.asset.contentType.id!=8 && assetUserJourney[2]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[2]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                                </div>\n                                                </div>\n                                    </div>\n                                   \n                                   \n                                    <div *ngIf=\"!showNotCompleted\" class=\"topic-num\" (click)=\" count>=4 ? openAsset(assetUserJourney[3]):  unAssignedAssets('/cpt')\" (mouseover)=\"mouseOvered4=true\" (mouseout)=\"mouseOvered4=false\"  [ngClass]=\"assetUserJourney?getJourneyImage(count,assetUserJourney[3],mouseOvered4,showNotCompleted):''\">\n                                            <div class=\"topic_points\" (click)=\"isClicked($event)\" (mouseover)=\"isMouseHover($event)\"  *ngIf=\"!showNotCompleted && assetUserJourney?.length-4>0\">+<span>{{assetUserJourney && assetUserJourney.length-decrCount}}</span></div>\n                                            <!-- <div *ngIf=\"count>=4 && assetUserJourney?.length-4>0\" (click)=\"getQueuedAssets('/cpt')\"><a >Click Here to Access(+<span>{{assetUserJourney && assetUserJourney.length-4}})</span></a></div> -->\n                                            <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[3]?.asset.contentType.id):'pdf'\">\n                                                    <div class=\"hottips\">\n                                                        <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[3]?.asset.title}}</p>\n                                                        <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[3]?.assetCompletionStatus==1\">In Progress</div>\n                                                        <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[3]?.assetCompletionStatus==0 ||assetUserJourney[3]?.assetCompletionStatus==null)\">Yet to start</div>\n                                                        <div class=\"inprogrss_bar\">\n                                                            <div class=\"outer-with\">\n                                                                <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[3]?.assetCompletionStatus==1\">\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[3]?.asset.description}}</p>\n                                                        <div class=\"progrss-details\">\n                                                            <span class=\"day-remain\">{{ assetUserJourney && assetUserJourney[3]?.dueDays}} days remaining</span>\n                                                            <!-- <span class=\"points\">{{assetUserJourney && assetUserJourney[4]?.asset.awardPoints}} points</span> -->\n                                                        </div>\n                                                        <div *ngIf=\"assetUserJourney && assetUserJourney[3]?.asset.contentType.id!=8 && assetUserJourney[3]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[3]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                                    </div>\n                                                </div>\n                                    </div>\n                                    <!-- locks -->\n                                    <div class=\"topic-num\" (click)=\"unAssignedAssets('/cpt')\">\n                                        \n                                            <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[3]?.asset.contentType.id):'pdf'\">\n                                                    <div class=\"hottips\">\n                                                        <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[3]?.asset.title}}</p>\n                                                        <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[3]?.assetCompletionStatus==1\">In Progress</div>\n                                                        <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[3]?.assetCompletionStatus==0 ||assetUserJourney[3]?.assetCompletionStatus==null)\">Yet to start</div>\n                                                        <div class=\"inprogrss_bar\">\n                                                            <div class=\"outer-with\">\n                                                                <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[3]?.assetCompletionStatus==1\">\n                                                                </div>\n                                                            </div>\n                                                        </div>\n                                                        <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[3]?.asset.description}}</p>\n                                                        <div class=\"progrss-details\">\n                                                            <span class=\"day-remain\">{{assetUserJourney && assetUserJourney[3]?.dueDays}} days remaining</span>\n                                                            <!-- <span class=\"points\">{{assetUserJourney && assetUserJourney[3]?.asset.awardPoints}} points</span> -->\n                                                        </div>\n                                                        <div *ngIf=\"assetUserJourney && assetUserJourney[3]?.asset.contentType.id!=8 && assetUserJourney[3]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[3]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                                    </div>\n                                                </div>\n                \n                                    </div>\n                                   \n                                    <!-- <div *ngIf=\"!showNotCompleted\" (click)=\"unAssignedAssets('/cpt')\" class=\"topic-num\"></div> -->\n                                    <!-- <div *ngIf=\"showNotCompleted && count>=0\" (click)=\"unAssignedAssets('/cpt')\" class=\"topic-num\"></div> -->\n                                </div>\n                             \n                            <div class=\"basecamp\">\n                                <span>basecamp</span>\n                                <span><img src=\"assets/images/basecamp-icon.png\" alt=\"\"></span>\n\n                            </div>\n                         </div>\n                    </div>\n                </div>\n            </section>\n            <footer>\n                <div class=\"auto-container\">\n                    <div class=\"row \">\n                        <div class=\"col-md-12 \">\n                            <p class=\"footer1 \">© ALLERGAN 2019</p>\n                        </div>\n                    </div>\n                </div>\n            </footer>\n            <div *ngIf=\"assetloader\" >\n                <div class=\"loader\">Loading...</div>\n                <div class=\"loaderOverlay\"></div>\n                <div>\n            \n        </div>\n         "

/***/ }),

/***/ "./src/app/allergan/topics/core-product-training/core-product-training.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/allergan/topics/core-product-training/core-product-training.component.ts ***!
  \******************************************************************************************/
/*! exports provided: CoreProductTrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreProductTrainingComponent", function() { return CoreProductTrainingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models */ "./src/app/models/index.ts");
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




var CoreProductTrainingComponent = /** @class */ (function () {
    function CoreProductTrainingComponent(route, router, homeService, commonService, ngZone) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.homeService = homeService;
        this.commonService = commonService;
        this.ngZone = ngZone;
        this.loadAll = false;
        this.basecampTrue = false;
        this.mouseOvered1 = false;
        this.mouseOvered2 = false;
        this.mouseOvered3 = false;
        this.mouseOvered4 = false;
        this.mouseOvered5 = false;
        this.assetloader = false;
        this.completedStatus = false;
        this.showNotCompleted = false;
        this.completedAssets = false;
        this.count = 0;
        this.queryUrl = "";
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.basecampTrue = true;
        this.url = this.commonService.getPreviousUrl();
        this.route.queryParams.subscribe(function (params) {
            _this.queryUrl = params['queryUrl'];
            _this.homeService.getOrderedAssetsFor(new _models__WEBPACK_IMPORTED_MODULE_2__["AssetJourneyRequestParams"](Number(params['userId']), Number(params['assetsTypeId']), Number(params['taId']), Number(params['productId']), Number(params['disId'])))
                .pipe()
                .subscribe(function (data) {
                _this.route.paramMap.subscribe(function (params) {
                    _this.showNotCompleted = false;
                    _this.assetUserJourney = data.data;
                    if (Number(_this.assetUserJourney.length) >= 1) {
                        _this.showNotCompleted = true;
                    }
                    _this.decrCount = 4;
                    // if (!this.showNotCompleted) this.decrCount = 4;
                    //else this.decrCount = 3;
                    _this.count = Number(_this.assetUserJourney.length);
                }, function (error) {
                });
                _this.homeService.getCompletedAssets(params['userId'], params['assetsTypeId'], params['productId'], params['disId'], params['taId'])
                    .pipe()
                    .subscribe(function (data) {
                    _this.lengthForData = data.data;
                    _this.showNotCompleted = false;
                    if (Number(_this.lengthForData.length) >= 1) {
                        _this.showNotCompleted = true;
                        _this.decrCount = 3;
                    }
                }, function (error) {
                });
            });
        });
    }
    CoreProductTrainingComponent.prototype.ngOnInit = function () { };
    CoreProductTrainingComponent.prototype.openAsset = function (assetUserJourney) {
        this.commonService.openAsset(this, assetUserJourney);
    };
    CoreProductTrainingComponent.prototype.markAsComplete = function (assetJourneyId) {
        this.commonService.markAssetCompleted(this, assetJourneyId);
    };
    CoreProductTrainingComponent.prototype.completed = function (url) {
        this.commonService.showCompletedAssets(this, url);
    };
    CoreProductTrainingComponent.prototype.unAssignedAssets = function (url) {
        this.commonService.showUnAssignedAssets(this, url);
    };
    // assignedAssets(count:number,url:string){
    //      this.route.queryParams.subscribe(params => {    
    //     this.router.navigate(['/notshown/assigned/assets'], { queryParams:  {
    //       "unshowncount" :count,
    //       "url"   :url,
    //       "userId":params['userId'],
    //       "queryUrl":params['queryUrl'],
    //       "assetsTypeId":params['assetsTypeId'],
    //      "productId":params['productId'],
    //       "disId":params['disId'],
    //       "taId":params['taId']     
    //     }, skipLocationChange: true});
    //   })
    // }
    CoreProductTrainingComponent.prototype.getAssetImage = function (assetImage) {
        return this.commonService.getAssetImage(assetImage);
    };
    CoreProductTrainingComponent.prototype.getJourneyImage = function (count, assetUserJourney, mouseovered, showNotCompleted) {
        return this.commonService.getJourneyImage(count, assetUserJourney, mouseovered, showNotCompleted);
    };
    CoreProductTrainingComponent.prototype.isClicked = function (event) {
        this.getQueuedAssets(this.url);
        event.stopPropagation();
    };
    CoreProductTrainingComponent.prototype.isMouseHover = function (event) {
        event.stopPropagation();
    };
    CoreProductTrainingComponent.prototype.getQueuedAssets = function (assetType) {
        this.commonService.getQueuedAssets(this, assetType);
    };
    CoreProductTrainingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-core-product-training',
            template: __webpack_require__(/*! ./core-product-training.component.html */ "./src/app/allergan/topics/core-product-training/core-product-training.component.html"),
            styles: [__webpack_require__(/*! ./core-product-training.component.css */ "./src/app/allergan/topics/core-product-training/core-product-training.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services__WEBPACK_IMPORTED_MODULE_3__["HomeService"], _services__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], CoreProductTrainingComponent);
    return CoreProductTrainingComponent;
}());



/***/ }),

/***/ "./src/app/allergan/topics/core-product-training/index.ts":
/*!****************************************************************!*\
  !*** ./src/app/allergan/topics/core-product-training/index.ts ***!
  \****************************************************************/
/*! exports provided: CoreProductTrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_product_training_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-product-training.component */ "./src/app/allergan/topics/core-product-training/core-product-training.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreProductTrainingComponent", function() { return _core_product_training_component__WEBPACK_IMPORTED_MODULE_0__["CoreProductTrainingComponent"]; });




/***/ }),

/***/ "./src/app/allergan/topics/core-training/core-training.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/allergan/topics/core-training/core-training.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mycontainer {\r\n    display: inline-block;\r\n    float: none;\r\n    color: #fff;}\r\n.section_tab {\r\n    top: 0% !important;\r\n}\r\nfooter {\r\n    position: absolute;\r\n    bottom: 0px;\r\n    width: 100%;\r\n  }\r\n.footer1  {\r\n      color: #000;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsZXJnYW4vdG9waWNzL2NvcmUtdHJhaW5pbmcvY29yZS10cmFpbmluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxXQUFXLENBQUM7QUFDaEI7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztFQUNiO0FBQ0E7TUFDSSxXQUFXO0VBQ2YiLCJmaWxlIjoic3JjL2FwcC9hbGxlcmdhbi90b3BpY3MvY29yZS10cmFpbmluZy9jb3JlLXRyYWluaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXljb250YWluZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZjt9XHJcbi5zZWN0aW9uX3RhYiB7XHJcbiAgICB0b3A6IDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5mb290ZXIxICB7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/allergan/topics/core-training/core-training.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/allergan/topics/core-training/core-training.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"min_contner scenario_03 dragbalsc\">\n  <div class=\"hedpart\">\n      <div class=\"boxed_wrapper\">\n            <app-header-nav [bascampMessage]=\"basecampTrue\" ></app-header-nav>\n          <div class=\"breadcrumbs\">\n            <ul>\n                <li><span></span><a>Core Training</a></li>\n            </ul>\n        </div>\n      </div>\n  </div>\n       <section class=\"section_tab dragblslide_1 dragbaltab\">\n          <div class=\"auto-container\">\n                  <div class=\"overlay\" *ngIf=\"loadAll\"></div>\n                  <div class=\"loader\" *ngIf=\"loadAll\" id=\"loader-2\">\n                      <span></span>\n                      <span></span>\n                      <span></span>\n                  </div>\n                  \n              <div class=\"row\">\n                  <div class=\"col-md-11 col-sm-12\">\n                          <div class=\"menu-topics\">\n                                <div class=\"topic-path\">\n                                    <div class=\"path path1\"></div>\n                                    <div class=\"path path2\"></div>\n                                    <div class=\"path path3\"></div>\n                                    <div class=\"path path4 dotted\"></div>\n                                </div>\n                              <div class=\"topic-num\"  *ngIf=\"showNotCompleted\" [ngClass]=\"{'completed': showNotCompleted,'locks':!showNotCompleted}\" (click)=\"completed('/ct')\"></div>\n                                <div class=\"topic-num\" (click)=\"count>=1 ?openAsset(assetUserJourney[0]) : unAssignedAssets('/ct')\" (mouseover)=\"mouseOvered1=true\" (mouseout)=\"mouseOvered1=false\"  [ngClass]=\"assetUserJourney?getJourneyImage(count,assetUserJourney[0],mouseOvered1,showNotCompleted):''\">\n                                      <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[0]?.asset.contentType.id):'pdf'\">\n                                              <div class=\"hottips\">\n                                                  <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[0]?.asset.title}}</p>\n                                                  <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[0]?.assetCompletionStatus==1\">In Progress</div>\n                                                  <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[0]?.assetCompletionStatus==0 ||assetUserJourney[0]?.assetCompletionStatus==null)\">Yet to start</div>\n                                                  <div class=\"inprogrss_bar\">\n                                                      <div class=\"outer-with\">\n                                                          <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[0]?.assetCompletionStatus==1\">\n                                                          </div>\n                                                      </div>\n                                                  </div>\n                                                  <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[0]?.asset.description}}</p>\n                                                  <div class=\"progrss-details\">\n                                                      <span class=\"day-remain\">{{ assetUserJourney && assetUserJourney[0]?.dueDays}} days remaining</span>\n                                                      <!-- <span class=\"points\">{{ assetUserJourney && assetUserJourney[0]?.asset.awardPoints}} points</span> -->\n                                                  </div>\n                                            <div *ngIf=\" assetUserJourney && assetUserJourney[0]?.asset.contentType.id!=8 && assetUserJourney[0]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[0]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                              </div>\n                                          </div>\n                              </div>\n                              <!-- upcoming inprogress -->\n                                <div class=\"topic-num\"  (click)=\"count>=2 ? openAsset(assetUserJourney[1]) : unAssignedAssets('/ct')\" (mouseover)=\"mouseOvered2=true\" (mouseout)=\"mouseOvered2=false\" [ngClass]=\"assetUserJourney?getJourneyImage(count,assetUserJourney[1],mouseOvered2,showNotCompleted):''\">\n                                  <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[1]?.asset.contentType.id):'pdf'\">\n                                          <div class=\"hottips\">\n                                                  <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[1]?.asset.title}}</p>\n                                                  <!--assetCompletionStatus-->\n                                                  <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[1]?.assetCompletionStatus==1\">In Progress</div>\n                                                  <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[1]?.assetCompletionStatus==0 ||assetUserJourney[1]?.assetCompletionStatus==null)\">Yet to start</div>\n                                                  <div class=\"inprogrss_bar\">\n                                                      <div class=\"outer-with\">\n      \n                                                          <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[1]?.assetCompletionStatus==1\">\n                                                          </div>\n                                                      </div>\n                                                  </div>\n                                                  <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[1]?.asset.description}}</p>\n                                                  <div class=\"progrss-details\">\n                                                      <span class=\"day-remain\">{{assetUserJourney && assetUserJourney[1]?.dueDays}} days remaining</span>\n                                                      <!-- <span class=\"points\">{{assetUserJourney && assetUserJourney[1]?.asset.awardPoints}} points</span> -->\n                                                  </div>\n                                            <div  *ngIf=\"assetUserJourney && assetUserJourney[1]?.asset.contentType.id!==8 && assetUserJourney[1]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[1]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                              </div>\n                                  </div>\n                              </div>\n                                <div class=\"topic-num\" (click)=\"count>=3 ? openAsset(assetUserJourney[2]) : unAssignedAssets('/ct')\"  (mouseover)=\"mouseOvered3=true\" (mouseout)=\"mouseOvered3=false\"  [ngClass]=\"assetUserJourney?getJourneyImage(count,assetUserJourney[2],mouseOvered3,showNotCompleted):''\"> \n                                      <div class=\"topic_points\"  (click)=\"isClicked($event)\" (mouseover)=\"isMouseHover($event)\" *ngIf=\"showNotCompleted && assetUserJourney?.length-3>0\">+<span>{{assetUserJourney && assetUserJourney.length-decrCount}}</span></div>   \n                                  <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[2]?.asset.contentType.id):'pdf'\">   \n                                  <div class=\"hottips\">\n                                              <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[2]?.asset.title}}</p>\n                                              <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[2]?.assetCompletionStatus==1\">In Progress</div>\n                                              <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[2]?.assetCompletionStatus==0 ||assetUserJourney[2]?.assetCompletionStatus==null)\">Yet to start</div>\n                                              <div class=\"inprogrss_bar\">\n                                                  <div class=\"outer-with\">\n                                                      <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[2]?.assetCompletionStatus==1\">\n                                                      </div>\n                                                  </div>\n                                              </div>\n                                              <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[2]?.asset.description}}</p>\n                                              <div class=\"progrss-details\">\n                                                  <span class=\"day-remain\">{{assetUserJourney && assetUserJourney[2]?.dueDays}} days remaining</span>\n                                                  <!-- <span class=\"points\">{{assetUserJourney && assetUserJourney[2]?.asset.awardPoints}} points</span> -->\n                                              </div>\n                                            <div *ngIf=\"assetUserJourney && assetUserJourney[2]?.asset.contentType.id!=8 && assetUserJourney[2]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[2]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                          </div>\n                                          </div>\n                              </div>\n\n                            <!--  <div *ngIf=\"!showNotCompleted\" class=\"topic-num\" (click)=\" count>=4 ? openAsset(assetUserJourney[3]):  unAssignedAssets('/ct')\" (mouseover)=\"mouseOvered5=true\" (mouseout)=\"mouseOvered5=false\"  [ngClass]=\"{'upcoming': !showNotCompleted && count>=4&&assetUserJourney && assetUserJourney[3]?.asset.mandatory===false,'mandatory':!showNotCompleted&&assetUserJourney && assetUserJourney[3]?.asset.mandatory===true ,'inprogressred': !showNotCompleted && count>=4 &&mouseOvered5 && assetUserJourney && assetUserJourney[3]?.asset.mandatory===false  ,'inprogress':!showNotCompleted && count>=4&&mouseOvered5 && assetUserJourney && assetUserJourney[3]?.asset.mandatory===true,'active': !showNotCompleted && count>=4 &&mouseOvered5}\">-->\n                                <div class=\"topic-num\"   *ngIf=\"!showNotCompleted\" (click)=\"count>=4? openAsset(assetUserJourney[3]) :unAssignedAssets('/ct')\" (mouseover)=\"mouseOvered4=true\" (mouseout)=\"mouseOvered4=false\"  [ngClass]=\"assetUserJourney?getJourneyImage(count,assetUserJourney[3],mouseOvered4,showNotCompleted):''\">                                 \n                                      <div class=\"topic_points upper_point\"  (click)=\"isClicked($event)\" (mouseover)=\"isMouseHover($event)\" *ngIf=\"!showNotCompleted && assetUserJourney?.length-4>0\">+<span>{{assetUserJourney && assetUserJourney.length-decrCount}}</span></div>\n  \n                                      <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[3]?.asset.contentType.id):'pdf'\">\n                                              <div class=\"hottips\">\n                                                  <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[3]?.asset.title}}</p>\n                                                  <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[3]?.assetCompletionStatus==1\">In Progress</div>\n                                                  <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[3]?.assetCompletionStatus==0 ||assetUserJourney[3]?.assetCompletionStatus==null)\">Yet to start</div>\n                                                  <div class=\"inprogrss_bar\">\n                                                      <div class=\"outer-with\">\n                                                          <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[3]?.assetCompletionStatus==1\">\n                                                          </div>\n                                                      </div>\n                                                  </div>\n                                                  <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[3]?.asset.description}}</p>\n                                                  <div class=\"progrss-details\">\n                                                      <span class=\"day-remain\">{{ assetUserJourney && assetUserJourney[3]?.dueDays}} days remaining</span>\n                                                      <!-- <span class=\"points\">{{assetUserJourney && assetUserJourney[4]?.asset.awardPoints}} points</span> -->\n                                                  </div>\n                                            <div *ngIf=\"assetUserJourney && assetUserJourney[3]?.asset.contentType.id!=8 && assetUserJourney[3]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[3]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                              </div>\n                                          </div>\n                              </div>\n                              <!-- locks -->\n                              <div class=\"topic-num\" (click)=\"unAssignedAssets('/ct')\">\n                                  \n                                      <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[3]?.asset.contentType.id):'pdf'\">\n                                              <div class=\"hottips\">\n                                                  <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[3]?.asset.title}}</p>\n                                                  <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[3]?.assetCompletionStatus==1\">In Progress</div>\n                                                  <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[3]?.assetCompletionStatus==0 ||assetUserJourney[3]?.assetCompletionStatus==null)\">Yet to start</div>\n                                                  <div class=\"inprogrss_bar\">\n                                                      <div class=\"outer-with\">\n                                                          <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[3]?.assetCompletionStatus==1\">\n                                                          </div>\n                                                      </div>\n                                                  </div>\n                                                  <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[3]?.asset.description}}</p>\n                                                  <div class=\"progrss-details\">\n                                                      <span class=\"day-remain\">{{assetUserJourney && assetUserJourney[3]?.dueDays}} days remaining</span>\n                                                      <!-- <span class=\"points\">{{assetUserJourney && assetUserJourney[3]?.asset.awardPoints}} points</span> -->\n                                                  </div>\n                                                  <div *ngIf=\"assetUserJourney && assetUserJourney[3]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[3]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                              </div>\n                                          </div>\n                              </div>\n                              <!-- <div *ngIf=\"!showNotCompleted\" (click)=\"unAssignedAssets('/ct')\" class=\"topic-num\"></div> -->\n                              <!-- <div *ngIf=\"showNotCompleted && count>=0\" (click)=\"unAssignedAssets('/ct')\" class=\"topic-num\"></div> -->\n                          </div>\n                      \n                      <div class=\"basecamp\">\n                          <span>basecamp</span>\n                          <span><img src=\"assets/images/basecamp-icon.png\" alt=\"\"></span>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </section>\n      <footer>\n          <div class=\"auto-container\">\n              <div class=\"row \">\n                  <div class=\"col-md-12 \">\n                      <p class=\"footer1 \">© ALLERGAN 2019</p>\n                  </div>\n              </div>\n          </div>\n      </footer>\n      <div *ngIf=\"assetloader\" >\n        <div class=\"loader\">Loading...</div>\n        <div class=\"loaderOverlay\"></div>\n        <div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/allergan/topics/core-training/core-training.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/allergan/topics/core-training/core-training.component.ts ***!
  \**************************************************************************/
/*! exports provided: CoreTrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreTrainingComponent", function() { return CoreTrainingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models */ "./src/app/models/index.ts");
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




var CoreTrainingComponent = /** @class */ (function () {
    function CoreTrainingComponent(route, router, homeService, commonService, ngZone) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.homeService = homeService;
        this.commonService = commonService;
        this.ngZone = ngZone;
        this.loadAll = false;
        this.mouseOvered1 = false;
        this.mouseOvered2 = false;
        this.mouseOvered3 = false;
        this.mouseOvered4 = false;
        this.mouseOvered5 = false;
        this.assetloader = false;
        this.basecampTrue = false;
        this.completedStatus = false;
        this.showNotCompleted = false;
        this.completedAssets = false;
        this.count = 0;
        this.queryUrl = "";
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.basecampTrue = true;
        this.url = this.commonService.getPreviousUrl();
        this.route.queryParams.subscribe(function (params) {
            _this.queryUrl = params['queryUrl'];
            _this.homeService.getOrderedAssetsFor(new _models__WEBPACK_IMPORTED_MODULE_2__["AssetJourneyRequestParams"](Number(params['userId']), Number(params['assetsTypeId']), Number(params['taId']), Number(params['productId']), Number(params['disId'])))
                .pipe()
                .subscribe(function (data) {
                _this.route.paramMap.subscribe(function (params) {
                    _this.showNotCompleted = false;
                    _this.assetUserJourney = data.data;
                    if (Number(_this.assetUserJourney.length) >= 1) {
                        _this.showNotCompleted = true;
                    }
                    _this.decrCount = 4;
                    // if (!this.showNotCompleted) this.decrCount = 4;
                    // else this.decrCount = 3;
                    _this.count = Number(_this.assetUserJourney.length);
                }, function (error) {
                });
                _this.homeService.getCompletedAssets(params['userId'], params['assetsTypeId'], params['productId'], params['disId'], params['taId'])
                    .pipe()
                    .subscribe(function (data) {
                    _this.lengthForData = data.data;
                    _this.showNotCompleted = false;
                    if (Number(_this.lengthForData.length) >= 1) {
                        _this.showNotCompleted = true;
                        _this.decrCount = 3;
                    }
                }, function (error) {
                });
            });
        });
    }
    CoreTrainingComponent.prototype.ngOnInit = function () { };
    CoreTrainingComponent.prototype.openAsset = function (assetUserJourney) {
        this.commonService.openAsset(this, assetUserJourney);
    };
    CoreTrainingComponent.prototype.markAsComplete = function (assetJourneyId) {
        this.commonService.markAssetCompleted(this, assetJourneyId);
    };
    CoreTrainingComponent.prototype.completed = function (url) {
        this.commonService.showCompletedAssets(this, url);
    };
    CoreTrainingComponent.prototype.unAssignedAssets = function (url) {
        this.commonService.showUnAssignedAssets(this, url);
    };
    // assignedAssets(count:number,url:string){
    //      this.route.queryParams.subscribe(params => {    
    //     this.router.navigate(['/notshown/assigned/assets'], { queryParams:  {
    //       "unshowncount" :count,
    //       "url"   :url,
    //       "userId":params['userId'],
    //       "queryUrl":params['queryUrl'],
    //       "assetsTypeId":params['assetsTypeId'],
    //      "productId":params['productId'],
    //       "disId":params['disId'],
    //       "taId":params['taId']     
    //     }, skipLocationChange: true});
    //   })
    // }
    CoreTrainingComponent.prototype.getAssetImage = function (assetImage) {
        return this.commonService.getAssetImage(assetImage);
    };
    CoreTrainingComponent.prototype.getJourneyImage = function (count, assetUserJourney, mouseovered, showNotCompleted) {
        return this.commonService.getJourneyImage(count, assetUserJourney, mouseovered, showNotCompleted);
    };
    CoreTrainingComponent.prototype.isClicked = function (event) {
        this.getQueuedAssets(this.url);
        event.stopPropagation();
    };
    CoreTrainingComponent.prototype.isMouseHover = function (event) {
        event.stopPropagation();
    };
    CoreTrainingComponent.prototype.getQueuedAssets = function (assetType) {
        this.commonService.getQueuedAssets(this, assetType);
    };
    CoreTrainingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-core-training',
            template: __webpack_require__(/*! ./core-training.component.html */ "./src/app/allergan/topics/core-training/core-training.component.html"),
            styles: [__webpack_require__(/*! ./core-training.component.css */ "./src/app/allergan/topics/core-training/core-training.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services__WEBPACK_IMPORTED_MODULE_3__["HomeService"], _services__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], CoreTrainingComponent);
    return CoreTrainingComponent;
}());



/***/ }),

/***/ "./src/app/allergan/topics/core-training/index.ts":
/*!********************************************************!*\
  !*** ./src/app/allergan/topics/core-training/index.ts ***!
  \********************************************************/
/*! exports provided: CoreTrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_training_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core-training.component */ "./src/app/allergan/topics/core-training/core-training.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreTrainingComponent", function() { return _core_training_component__WEBPACK_IMPORTED_MODULE_0__["CoreTrainingComponent"]; });




/***/ }),

/***/ "./src/app/allergan/topics/field-tool-training/field-tool-training.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/allergan/topics/field-tool-training/field-tool-training.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mycontainer {\r\n    display: inline-block;\r\n    float: none;\r\n    color: #fff;\r\n}\r\n.footer1 {\r\n    color: #000;\r\n}\r\n.section_tab {\r\n    top: 0% !important;\r\n}\r\nfooter {\r\n    position: absolute;\r\n    bottom: 0px;\r\n    width: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsZXJnYW4vdG9waWNzL2ZpZWxkLXRvb2wtdHJhaW5pbmcvZmllbGQtdG9vbC10cmFpbmluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7RUFDYiIsImZpbGUiOiJzcmMvYXBwL2FsbGVyZ2FuL3RvcGljcy9maWVsZC10b29sLXRyYWluaW5nL2ZpZWxkLXRvb2wtdHJhaW5pbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5mb290ZXIxIHtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcbi5zZWN0aW9uX3RhYiB7XHJcbiAgICB0b3A6IDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/allergan/topics/field-tool-training/field-tool-training.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/allergan/topics/field-tool-training/field-tool-training.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"min_contner scenario_03 dragbalsc\">\n        <div class=\"hedpart\">\n            <div class=\"boxed_wrapper\">\n                    <app-header-nav [bascampMessage]=\"basecampTrue\" ></app-header-nav>\n                <div class=\"breadcrumbs\">\n                    <ul>\n                        <li><span></span><a>Key Field Tool Training</a></li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n        <section class=\"section_tab dragblslide_1 dragbaltab\">\n            <div class=\"auto-container\">\n                    <div class=\"overlay\" *ngIf=\"loadAll\"></div>\n                    <div class=\"loader\" *ngIf=\"loadAll\" id=\"loader-2\">\n                        <span></span>\n                        <span></span>\n                        <span></span>\n                    </div>\n                <div class=\"row\">\n                    <div class=\"col-md-11 col-sm-12 tabsimg\">\n                        <div class=\"menu-topics\">\n                            <div class=\"topic-path\">\n                                <div class=\"path path1\"></div>\n                                <div class=\"path path2\"></div>\n                                <div class=\"path path3 \"></div>\n                                <div class=\"path path4 dotted\"></div>\n                            </div>\n                            <div class=\"topic-num\"  *ngIf=\"showNotCompleted\" [ngClass]=\"{'completed': showNotCompleted,'locks':!showNotCompleted}\" (click)=\"completed('/ftt')\"></div>\n                                <div class=\"topic-num\" (click)=\"count>=1 ?openAsset(assetUserJourney[0]) : unAssignedAssets('/ftt')\" (mouseover)=\"mouseOvered1=true\" (mouseout)=\"mouseOvered1=false\"  [ngClass]=\"assetUserJourney?getJourneyImage(count,assetUserJourney[0],mouseOvered1,showNotCompleted):''\">\n\n                                    <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[0]?.asset.contentType.id):'pdf'\">\n                                            <div class=\"hottips\">\n                                                <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[0]?.asset.title}}</p>\n                                                <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[0]?.assetCompletionStatus==1\">In Progress</div>\n                                                <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[0]?.assetCompletionStatus==0 ||assetUserJourney[0]?.assetCompletionStatus==null)\">Yet to start</div>\n                                                <div class=\"inprogrss_bar\">\n                                                    <div class=\"outer-with\">\n                                                        <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[0]?.assetCompletionStatus==1\">\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[0]?.asset.description}}</p>\n                                                <div class=\"progrss-details\">\n                                                    <span class=\"day-remain\">{{ assetUserJourney && assetUserJourney[0]?.dueDays}} days remaining</span>\n                                                    <!-- <span class=\"points\">{{ assetUserJourney && assetUserJourney[0]?.asset.awardPoints}} points</span> -->\n                                                </div>\n                                            <div *ngIf=\" assetUserJourney && assetUserJourney[0]?.asset.contentType.id!=8 && assetUserJourney[0]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[0]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                            </div>\n                                        </div>\n                            </div>\n                            <!-- upcoming inprogress -->\n                                <div class=\"topic-num\"  (click)=\"count>=2 ? openAsset(assetUserJourney[1]) : unAssignedAssets('/ftt')\" (mouseover)=\"mouseOvered2=true\" (mouseout)=\"mouseOvered2=false\" [ngClass]=\"assetUserJourney?getJourneyImage(count,assetUserJourney[1],mouseOvered2,showNotCompleted):''\">\n                                <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[1]?.asset.contentType.id):'pdf'\">\n                                        <div class=\"hottips\">\n                                                <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[1]?.asset.title}}</p>\n                                                <!--assetCompletionStatus-->\n                                                <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[1]?.assetCompletionStatus==1\">In Progress</div>\n                                                <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[1]?.assetCompletionStatus==0 ||assetUserJourney[1]?.assetCompletionStatus==null)\">Yet to start</div>\n                                                <div class=\"inprogrss_bar\">\n                                                    <div class=\"outer-with\">\n    \n                                                        <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[1]?.assetCompletionStatus==1\">\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[1]?.asset.description}}</p>\n                                                <div class=\"progrss-details\">\n                                                    <span class=\"day-remain\">{{assetUserJourney && assetUserJourney[1]?.dueDays}} days remaining</span>\n                                                    <!-- <span class=\"points\">{{assetUserJourney && assetUserJourney[1]?.asset.awardPoints}} points</span> -->\n                                                </div>\n                                            <div  *ngIf=\"assetUserJourney && assetUserJourney[1]?.asset.contentType.id!==8 && assetUserJourney[1]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[1]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                            </div>\n                                </div>\n                            </div>\n                                <div class=\"topic-num\" (click)=\"count>=3 ? openAsset(assetUserJourney[2]) : unAssignedAssets('/ftt')\"  (mouseover)=\"mouseOvered3=true\" (mouseout)=\"mouseOvered3=false\"  [ngClass]=\"assetUserJourney?getJourneyImage(count,assetUserJourney[2],mouseOvered3,showNotCompleted):''\"> \n                                    <div class=\"topic_points\" (click)=\"isClicked($event)\" (mouseover)=\"isMouseHover($event)\" *ngIf=\"showNotCompleted && assetUserJourney?.length-3>0\">+<span>{{assetUserJourney && assetUserJourney.length-decrCount}}</span></div>   \n                                <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[2]?.asset.contentType.id):'pdf'\">   \n                                <div class=\"hottips\">\n                                            <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[2]?.asset.title}}</p>\n                                            <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[2]?.assetCompletionStatus==1\">In Progress</div>\n                                            <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[2]?.assetCompletionStatus==0 ||assetUserJourney[2]?.assetCompletionStatus==null)\">Yet to start</div>\n                                            <div class=\"inprogrss_bar\">\n                                                <div class=\"outer-with\">\n                                                    <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[2]?.assetCompletionStatus==1\">\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[2]?.asset.description}}</p>\n                                            <div class=\"progrss-details\">\n                                                <span class=\"day-remain\">{{assetUserJourney && assetUserJourney[2]?.dueDays}} days remaining</span>\n                                                <!-- <span class=\"points\">{{assetUserJourney && assetUserJourney[2]?.asset.awardPoints}} points</span> -->\n                                            </div>\n                                            <div *ngIf=\"assetUserJourney && assetUserJourney[2]?.asset.contentType.id!=8 && assetUserJourney[2]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[2]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                        </div>\n                                    </div>\n                                </div>\n\n                           <!-- <div *ngIf=\"!showNotCompleted\" class=\"topic-num\" (click)=\" count>=4 ? openAsset(assetUserJourney[3]):  unAssignedAssets('/ftt')\" (mouseover)=\"mouseOvered5=true\" (mouseout)=\"mouseOvered5=false\"  [ngClass]=\"{'upcoming': !showNotCompleted && count>=4&&assetUserJourney && assetUserJourney[3]?.asset.mandatory===false,'mandatory':!showNotCompleted&&assetUserJourney && assetUserJourney[3]?.asset.mandatory===true ,'inprogressred': !showNotCompleted && count>=4 &&mouseOvered5 && assetUserJourney && assetUserJourney[3]?.asset.mandatory===false  ,'inprogress':!showNotCompleted && count>=4&&mouseOvered5 && assetUserJourney && assetUserJourney[3]?.asset.mandatory===true,'active': !showNotCompleted && count>=4 &&mouseOvered5}\">-->\n                                <div class=\"topic-num\"   *ngIf=\"!showNotCompleted\" (click)=\"count>=4? openAsset(assetUserJourney[3]) :unAssignedAssets('/ftt')\" (mouseover)=\"mouseOvered4=true\" (mouseout)=\"mouseOvered4=false\"  [ngClass]=\"assetUserJourney?getJourneyImage(count,assetUserJourney[3],mouseOvered4,showNotCompleted):''\">                                 \n                                    <div class=\"topic_points\"  (click)=\"isClicked($event)\" (mouseover)=\"isMouseHover($event)\" *ngIf=\"!showNotCompleted && assetUserJourney?.length-4>0\">+<span>{{assetUserJourney && assetUserJourney.length-decrCount}}</span></div>\n\n                                    <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[3]?.asset.contentType.id):'pdf'\">\n                                            <div class=\"hottips\">\n                                                <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[3]?.asset.title}}</p>\n                                                <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[3]?.assetCompletionStatus==1\">In Progress</div>\n                                                <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[3]?.assetCompletionStatus==0 ||assetUserJourney[3]?.assetCompletionStatus==null)\">Yet to start</div>\n                                                <div class=\"inprogrss_bar\">\n                                                    <div class=\"outer-with\">\n                                                        <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[3]?.assetCompletionStatus==1\">\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[3]?.asset.description}}</p>\n                                                <div class=\"progrss-details\">\n                                                    <span class=\"day-remain\">{{ assetUserJourney && assetUserJourney[3]?.dueDays}} days remaining</span>\n                                                    <!-- <span class=\"points\">{{assetUserJourney && assetUserJourney[4]?.asset.awardPoints}} points</span> -->\n                                                </div>\n                                            <div *ngIf=\"assetUserJourney && assetUserJourney[3]?.asset.contentType.id!=8 && assetUserJourney[3]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[3]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                            </div>\n                                        </div>\n                            </div>\n                            <!-- locks -->\n                            <div class=\"topic-num\" (click)=\"unAssignedAssets('/ftt')\">\n                                \n                                    <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[3]?.asset.contentType.id):'pdf'\">\n                                            <div class=\"hottips\">\n                                                <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[3]?.asset.title}}</p>\n                                                <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[3]?.assetCompletionStatus==1\">In Progress</div>\n                                                <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[3]?.assetCompletionStatus==0 ||assetUserJourney[3]?.assetCompletionStatus==null)\">Yet to start</div>\n                                                <div class=\"inprogrss_bar\">\n                                                    <div class=\"outer-with\">\n                                                        <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[3]?.assetCompletionStatus==1\">\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[3]?.asset.description}}</p>\n                                                <div class=\"progrss-details\">\n                                                    <span class=\"day-remain\">{{assetUserJourney && assetUserJourney[3]?.dueDays}} days remaining</span>\n                                                    <!-- <span class=\"points\">{{assetUserJourney && assetUserJourney[3]?.asset.awardPoints}} points</span> -->\n                                                </div>\n                                                <div *ngIf=\"assetUserJourney && assetUserJourney[3]?.asset.contentType.id!=8 && assetUserJourney[3]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[3]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                            </div>\n                                        </div>\n        \n                            </div>\n                            <!-- <div *ngIf=\"!showNotCompleted\" (click)=\"unAssignedAssets('/ftt')\" class=\"topic-num\"></div> -->\n                            <!-- <div *ngIf=\"showNotCompleted && count>=0\" (click)=\"unAssignedAssets('/ftt')\" class=\"topic-num\"></div> -->\n                        </div>\n                        \n                        <div class=\"basecamp\">\n                            <span>basecamp</span>\n                            <span><img src=\"assets/images/basecamp-icon.png\" alt=\"\"></span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n        <footer>\n            <div class=\"auto-container\">\n                <div class=\"row \">\n                    <div class=\"col-md-12 \">\n                        <p class=\"footer1 \">© ALLERGAN 2019</p>\n                    </div>\n                </div>\n            </div>\n        </footer>\n        <div *ngIf=\"assetloader\" >\n            <div class=\"loader\">Loading...</div>\n            <div class=\"loaderOverlay\"></div>\n            <div>\n    </div>\n    "

/***/ }),

/***/ "./src/app/allergan/topics/field-tool-training/field-tool-training.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/allergan/topics/field-tool-training/field-tool-training.component.ts ***!
  \**************************************************************************************/
/*! exports provided: FieldToolTrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldToolTrainingComponent", function() { return FieldToolTrainingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models */ "./src/app/models/index.ts");
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




var FieldToolTrainingComponent = /** @class */ (function () {
    function FieldToolTrainingComponent(route, router, homeService, commonService, ngZone) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.homeService = homeService;
        this.commonService = commonService;
        this.ngZone = ngZone;
        this.loadAll = false;
        this.basecampTrue = false;
        this.mouseOvered1 = false;
        this.mouseOvered2 = false;
        this.mouseOvered3 = false;
        this.mouseOvered4 = false;
        this.mouseOvered5 = false;
        this.assetloader = false;
        this.completedStatus = false;
        this.showNotCompleted = false;
        this.completedAssets = false;
        this.count = 0;
        this.queryUrl = "";
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.basecampTrue = true;
        this.url = this.commonService.getPreviousUrl();
        this.route.queryParams.subscribe(function (params) {
            _this.queryUrl = params['queryUrl'];
            _this.homeService.getOrderedAssetsFor(new _models__WEBPACK_IMPORTED_MODULE_2__["AssetJourneyRequestParams"](Number(params['userId']), Number(params['assetsTypeId']), Number(params['taId']), Number(params['productId']), Number(params['disId'])))
                .pipe()
                .subscribe(function (data) {
                _this.route.paramMap.subscribe(function (params) {
                    _this.showNotCompleted = false;
                    _this.assetUserJourney = data.data;
                    if (Number(_this.assetUserJourney.length) >= 1) {
                        _this.showNotCompleted = true;
                    }
                    // if (!this.showNotCompleted) this.decrCount = 4;
                    // else this.decrCount = 3;
                    _this.decrCount = 4;
                    _this.count = Number(_this.assetUserJourney.length);
                }, function (error) {
                });
                _this.homeService.getCompletedAssets(params['userId'], params['assetsTypeId'], params['productId'], params['disId'], params['taId'])
                    .pipe()
                    .subscribe(function (data) {
                    _this.lengthForData = data.data;
                    _this.showNotCompleted = false;
                    if (Number(_this.lengthForData.length) >= 1) {
                        _this.showNotCompleted = true;
                        _this.decrCount = 3;
                    }
                }, function (error) {
                });
            });
        });
    }
    FieldToolTrainingComponent.prototype.ngOnInit = function () { };
    FieldToolTrainingComponent.prototype.openAsset = function (assetUserJourney) {
        this.commonService.openAsset(this, assetUserJourney);
    };
    FieldToolTrainingComponent.prototype.markAsComplete = function (assetJourneyId) {
        this.commonService.markAssetCompleted(this, assetJourneyId);
    };
    FieldToolTrainingComponent.prototype.completed = function (url) {
        this.commonService.showCompletedAssets(this, url);
    };
    FieldToolTrainingComponent.prototype.unAssignedAssets = function (url) {
        this.commonService.showUnAssignedAssets(this, url);
    };
    // assignedAssets(count:number,url:string){
    //      this.route.queryParams.subscribe(params => {    
    //     this.router.navigate(['/notshown/assigned/assets'], { queryParams:  {
    //       "unshowncount" :count,
    //       "url"   :url,
    //       "userId":params['userId'],
    //       "queryUrl":params['queryUrl'],
    //       "assetsTypeId":params['assetsTypeId'],
    //      "productId":params['productId'],
    //       "disId":params['disId'],
    //       "taId":params['taId']     
    //     }, skipLocationChange: true});
    //   })
    // }
    FieldToolTrainingComponent.prototype.getAssetImage = function (assetImage) {
        return this.commonService.getAssetImage(assetImage);
    };
    FieldToolTrainingComponent.prototype.getJourneyImage = function (count, assetUserJourney, mouseovered, showNotCompleted) {
        return this.commonService.getJourneyImage(count, assetUserJourney, mouseovered, showNotCompleted);
    };
    FieldToolTrainingComponent.prototype.isClicked = function (event) {
        this.getQueuedAssets(this.url);
        event.stopPropagation();
    };
    FieldToolTrainingComponent.prototype.isMouseHover = function (event) {
        event.stopPropagation();
    };
    FieldToolTrainingComponent.prototype.getQueuedAssets = function (assetType) {
        this.commonService.getQueuedAssets(this, assetType);
    };
    FieldToolTrainingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-field-tool-training',
            template: __webpack_require__(/*! ./field-tool-training.component.html */ "./src/app/allergan/topics/field-tool-training/field-tool-training.component.html"),
            styles: [__webpack_require__(/*! ./field-tool-training.component.css */ "./src/app/allergan/topics/field-tool-training/field-tool-training.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services__WEBPACK_IMPORTED_MODULE_3__["HomeService"], _services__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], FieldToolTrainingComponent);
    return FieldToolTrainingComponent;
}());



/***/ }),

/***/ "./src/app/allergan/topics/field-tool-training/index.ts":
/*!**************************************************************!*\
  !*** ./src/app/allergan/topics/field-tool-training/index.ts ***!
  \**************************************************************/
/*! exports provided: FieldToolTrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _field_tool_training_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field-tool-training.component */ "./src/app/allergan/topics/field-tool-training/field-tool-training.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FieldToolTrainingComponent", function() { return _field_tool_training_component__WEBPACK_IMPORTED_MODULE_0__["FieldToolTrainingComponent"]; });




/***/ }),

/***/ "./src/app/allergan/topics/launch-training/index.ts":
/*!**********************************************************!*\
  !*** ./src/app/allergan/topics/launch-training/index.ts ***!
  \**********************************************************/
/*! exports provided: LaunchTrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _launch_training_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./launch-training.component */ "./src/app/allergan/topics/launch-training/launch-training.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LaunchTrainingComponent", function() { return _launch_training_component__WEBPACK_IMPORTED_MODULE_0__["LaunchTrainingComponent"]; });




/***/ }),

/***/ "./src/app/allergan/topics/launch-training/launch-training.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/allergan/topics/launch-training/launch-training.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mycontainer {\r\n    display: inline-block;\r\n    float: none;\r\n    color: #fff;\r\n}\r\n.section_tab {\r\n    top: 0% !important;\r\n}\r\nfooter {\r\n    position: absolute;\r\n    bottom: 0px;\r\n    width: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsZXJnYW4vdG9waWNzL2xhdW5jaC10cmFpbmluZy9sYXVuY2gtdHJhaW5pbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsV0FBVztBQUNmO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvYWxsZXJnYW4vdG9waWNzL2xhdW5jaC10cmFpbmluZy9sYXVuY2gtdHJhaW5pbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5zZWN0aW9uX3RhYiB7XHJcbiAgICB0b3A6IDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/allergan/topics/launch-training/launch-training.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/allergan/topics/launch-training/launch-training.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"min_contner scenario_04 dragbalsc\">\n      <div class=\"hedpart\">\n          <div class=\"boxed_wrapper\">\n                <app-header-nav [bascampMessage]=\"basecampTrue\" ></app-header-nav>\n                <div class=\"breadcrumbs\">\n                    <ul>\n                        <li><span></span><a>Launch Training</a></li>\n                    </ul>\n                </div>\n          </div>\n      </div>             \n          <section class=\"section_tab dragblslide_1 dragbaltab\">\n              <div class=\"auto-container\">\n                      <div class=\"overlay\" *ngIf=\"loadAll\"></div>\n                      <div class=\"loader\" *ngIf=\"loadAll\" id=\"loader-2\">\n                          <span></span>\n                          <span></span>\n                          <span></span>\n                      </div>\n                  <div class=\"row\">\n                      <div class=\"col-md-11 col-sm-12\">\n                              <div class=\"menu-topics\">\n                                    <div class=\"topic-path\">\n                                        <div class=\"path path1\"></div>\n                                        <div class=\"path path2\"></div>\n                                        <div class=\"path path3 \"></div>\n                                        <div class=\"path path4 dotted\"></div>\n                                    </div>\n                                  <div class=\"topic-num\"  *ngIf=\"showNotCompleted\" [ngClass]=\"{'completed': showNotCompleted,'locks':!showNotCompleted}\" (click)=\"completed('/lt')\"></div>\n                                <div class=\"topic-num\" (click)=\"count>=1 ?openAsset(assetUserJourney[0]) : unAssignedAssets('/lt')\" (mouseover)=\"mouseOvered1=true\" (mouseout)=\"mouseOvered1=false\"  [ngClass]=\"assetUserJourney?getJourneyImage(count,assetUserJourney[0],mouseOvered1,showNotCompleted):''\">\n                                          <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[0]?.asset.contentType.id):'pdf'\">\n                                                  <div class=\"hottips\">\n                                                      <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[0]?.asset.title}}</p>\n                                                      <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[0]?.assetCompletionStatus==1\">In Progress</div>\n                                                      <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[0]?.assetCompletionStatus==0 ||assetUserJourney[0]?.assetCompletionStatus==null)\">Yet to start</div>\n                                                      <div class=\"inprogrss_bar\">\n                                                          <div class=\"outer-with\">\n                                                              <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[0]?.assetCompletionStatus==1\">\n                                                              </div>\n                                                          </div>\n                                                      </div>\n                                                      <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[0]?.asset.description}}</p>\n                                                      <div class=\"progrss-details\">\n                                                          <span class=\"day-remain\">{{ assetUserJourney && assetUserJourney[0]?.dueDays}} days remaining</span>\n                                                          <!-- <span class=\"points\">{{ assetUserJourney && assetUserJourney[0]?.asset.awardPoints}} points</span> -->\n                                                      </div>\n                                            <div *ngIf=\" assetUserJourney && assetUserJourney[0]?.asset.contentType.id!=8 && assetUserJourney[0]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[0]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                                  </div>\n                                              </div>\n                                  </div>\n                                  <!-- upcoming inprogress -->\n                                <div class=\"topic-num\"  (click)=\"count>=2 ? openAsset(assetUserJourney[1]) : unAssignedAssets('/lt')\" (mouseover)=\"mouseOvered2=true\" (mouseout)=\"mouseOvered2=false\" [ngClass]=\"assetUserJourney?getJourneyImage(count,assetUserJourney[1],mouseOvered2,showNotCompleted):''\">\n                                      <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[1]?.asset.contentType.id):'pdf'\">\n                                              <div class=\"hottips\">\n                                                      <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[1]?.asset.title}}</p>\n                                                      <!--assetCompletionStatus-->\n                                                      <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[1]?.assetCompletionStatus==1\">In Progress</div>\n                                                      <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[1]?.assetCompletionStatus==0 ||assetUserJourney[1]?.assetCompletionStatus==null)\">Yet to start</div>\n                                                      <div class=\"inprogrss_bar\">\n                                                          <div class=\"outer-with\">\n          \n                                                              <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[1]?.assetCompletionStatus==1\">\n                                                              </div>\n                                                          </div>\n                                                      </div>\n                                                      <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[1]?.asset.description}}</p>\n                                                      <div class=\"progrss-details\">\n                                                          <span class=\"day-remain\">{{assetUserJourney && assetUserJourney[1]?.dueDays}} days remaining</span>\n                                                          <!-- <span class=\"points\">{{assetUserJourney && assetUserJourney[1]?.asset.awardPoints}} points</span> -->\n                                                      </div>\n                                            <div  *ngIf=\"assetUserJourney && assetUserJourney[1]?.asset.contentType.id!==8 && assetUserJourney[1]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[1]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                                  </div>\n                                      </div>\n                                  </div>\n                                <div class=\"topic-num\" (click)=\"count>=3 ? openAsset(assetUserJourney[2]) : unAssignedAssets('/lt')\"  (mouseover)=\"mouseOvered3=true\" (mouseout)=\"mouseOvered3=false\"  [ngClass]=\"assetUserJourney?getJourneyImage(count,assetUserJourney[2],mouseOvered3,showNotCompleted):''\"> \n                                          <div class=\"topic_points\"  (click)=\"isClicked($event)\" (mouseover)=\"isMouseHover($event)\" *ngIf=\"showNotCompleted && assetUserJourney?.length-3>0\">+<span>{{assetUserJourney && assetUserJourney.length - decrCount}}</span></div>   \n                                      <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[2]?.asset.contentType.id):'pdf'\">   \n                                      <div class=\"hottips\">\n                                                  <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[2]?.asset.title}}</p>\n                                                  <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[2]?.assetCompletionStatus==1\">In Progress</div>\n                                                  <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[2]?.assetCompletionStatus==0 ||assetUserJourney[2]?.assetCompletionStatus==null)\">Yet to start</div>\n                                                  <div class=\"inprogrss_bar\">\n                                                      <div class=\"outer-with\">\n                                                          <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[2]?.assetCompletionStatus==1\">\n                                                          </div>\n                                                      </div>\n                                                  </div>\n                                                  <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[2]?.asset.description}}</p>\n                                                  <div class=\"progrss-details\">\n                                                      <span class=\"day-remain\">{{assetUserJourney && assetUserJourney[2]?.dueDays}} days remaining</span>\n                                                      <!-- <span class=\"points\">{{assetUserJourney && assetUserJourney[2]?.asset.awardPoints}} points</span> -->\n                                                  </div>\n                                            <div *ngIf=\"assetUserJourney && assetUserJourney[2]?.asset.contentType.id!=8 && assetUserJourney[2]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[2]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                              </div>\n                                              </div>\n                                  </div>\n      \n\n                                <div class=\"topic-num\"   *ngIf=\"!showNotCompleted\" (click)=\"count>=4? openAsset(assetUserJourney[3]) :unAssignedAssets('/lt')\" (mouseover)=\"mouseOvered4=true\" (mouseout)=\"mouseOvered4=false\"  [ngClass]=\"assetUserJourney?getJourneyImage(count,assetUserJourney[3],mouseOvered4,showNotCompleted):''\">                                 \n                                          <div class=\"topic_points\"  (click)=\"isClicked($event)\" *ngIf=\"!showNotCompleted && assetUserJourney?.length-4>0\">+<span>{{assetUserJourney && assetUserJourney.length- decrCount}}</span></div>\n      \n                                          <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[3]?.asset.contentType.id):'pdf'\">\n                                                  <div class=\"hottips\">\n                                                      <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[3]?.asset.title}}</p>\n                                                      <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[3]?.assetCompletionStatus==1\">In Progress</div>\n                                                      <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[3]?.assetCompletionStatus==0 ||assetUserJourney[3]?.assetCompletionStatus==null)\">Yet to start</div>\n                                                      <div class=\"inprogrss_bar\">\n                                                          <div class=\"outer-with\">\n                                                              <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[3]?.assetCompletionStatus==1\">\n                                                              </div>\n                                                          </div>\n                                                      </div>\n                                                      <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[3]?.asset.description}}</p>\n                                                      <div class=\"progrss-details\">\n                                                          <span class=\"day-remain\">{{ assetUserJourney && assetUserJourney[3]?.dueDays}} days remaining</span>\n                                                          <!-- <span class=\"points\">{{assetUserJourney && assetUserJourney[4]?.asset.awardPoints}} points</span> -->\n                                                      </div>\n                                            <div *ngIf=\"assetUserJourney && assetUserJourney[3]?.asset.contentType.id!=8 && assetUserJourney[3]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[3]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                                  </div>\n                                              </div>\n                                  </div>\n                                  <!-- locks -->\n                                  <div class=\"topic-num\" (click)=\"unAssignedAssets('/lt')\">\n                                      \n                                          <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[3]?.asset.contentType.id):'pdf'\">\n                                                  <div class=\"hottips\">\n                                                      <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[3]?.asset.title}}</p>\n                                                      <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[3]?.assetCompletionStatus==1\">In Progress</div>\n                                                      <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[3]?.assetCompletionStatus==0 ||assetUserJourney[3]?.assetCompletionStatus==null)\">Yet to start</div>\n                                                      <div class=\"inprogrss_bar\">\n                                                          <div class=\"outer-with\">\n                                                              <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[3]?.assetCompletionStatus==1\">\n                                                              </div>\n                                                          </div>\n                                                      </div>\n                                                      <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[3]?.asset.description}}</p>\n                                                      <div class=\"progrss-details\">\n                                                          <span class=\"day-remain\">{{assetUserJourney && assetUserJourney[3]?.dueDays}} days remaining</span>\n                                                          <!-- <span class=\"points\">{{assetUserJourney && assetUserJourney[3]?.asset.awardPoints}} points</span> -->\n                                                      </div>\n                                                      <div *ngIf=\"assetUserJourney && assetUserJourney[3]?.asset.contentType.id!=8 && assetUserJourney[3]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[3]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                                  </div>\n                                              </div>\n              \n                                  </div>\n                                  <!-- <div *ngIf=\"!showNotCompleted\" (click)=\"unAssignedAssets('/lt')\" class=\"topic-num\"></div> -->\n                                  <!-- <div *ngIf=\"showNotCompleted && count>=0\" (click)=\"unAssignedAssets('/lt')\" class=\"topic-num\"></div> -->\n                              </div>\n                          \n                          <div class=\"basecamp\">\n                              <span>basecamp</span>\n                              <span><img src=\"assets/images/basecamp-icon.png\" alt=\"\"></span>\n\n                          </div>\n                       </div>\n                  </div>\n              </div>\n          </section>\n          <footer>\n              <div class=\"auto-container\">\n                  <div class=\"row \">\n                      <div class=\"col-md-12 \">\n                          <p class=\"footer1 \">© ALLERGAN 2019</p>\n                      </div>\n                  </div>\n              </div>\n          </footer>\n          <div *ngIf=\"assetloader\" >\n            <div class=\"loader\">Loading...</div>\n            <div class=\"loaderOverlay\"></div>\n            <div>\n      </div>\n       "

/***/ }),

/***/ "./src/app/allergan/topics/launch-training/launch-training.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/allergan/topics/launch-training/launch-training.component.ts ***!
  \******************************************************************************/
/*! exports provided: LaunchTrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LaunchTrainingComponent", function() { return LaunchTrainingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models */ "./src/app/models/index.ts");
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




var LaunchTrainingComponent = /** @class */ (function () {
    function LaunchTrainingComponent(route, router, homeService, commonService, ngZone) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.homeService = homeService;
        this.commonService = commonService;
        this.ngZone = ngZone;
        this.loadAll = false;
        this.mouseOvered1 = false;
        this.mouseOvered2 = false;
        this.mouseOvered3 = false;
        this.mouseOvered4 = false;
        this.mouseOvered5 = false;
        this.assetloader = false;
        this.basecampTrue = false;
        this.completedStatus = false;
        this.showNotCompleted = false;
        this.completedAssets = false;
        this.count = 0;
        this.queryUrl = "";
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.basecampTrue = true;
        this.url = this.commonService.getPreviousUrl();
        this.route.queryParams.subscribe(function (params) {
            _this.queryUrl = params['queryUrl'];
            _this.homeService.getOrderedAssetsFor(new _models__WEBPACK_IMPORTED_MODULE_2__["AssetJourneyRequestParams"](Number(params['userId']), Number(params['assetsTypeId']), Number(params['taId']), Number(params['productId']), Number(params['disId'])))
                .pipe()
                .subscribe(function (data) {
                _this.route.paramMap.subscribe(function (params) {
                    _this.showNotCompleted = false;
                    _this.assetUserJourney = data.data;
                    if (Number(_this.assetUserJourney.length) >= 1) {
                        _this.showNotCompleted = true;
                    }
                    // if (!this.showNotCompleted) this.decrCount = 4;
                    // else this.decrCount = 3;
                    _this.decrCount = 4;
                    _this.count = Number(_this.assetUserJourney.length);
                }, function (error) {
                });
                _this.homeService.getCompletedAssets(params['userId'], params['assetsTypeId'], params['productId'], params['disId'], params['taId'])
                    .pipe()
                    .subscribe(function (data) {
                    _this.lengthForData = data.data;
                    _this.showNotCompleted = false;
                    if (Number(_this.lengthForData.length) >= 1) {
                        _this.showNotCompleted = true;
                        _this.decrCount = 3;
                    }
                }, function (error) {
                });
            });
        });
    }
    LaunchTrainingComponent.prototype.ngOnInit = function () { };
    LaunchTrainingComponent.prototype.openAsset = function (assetUserJourney) {
        this.commonService.openAsset(this, assetUserJourney);
    };
    LaunchTrainingComponent.prototype.markAsComplete = function (assetJourneyId) {
        this.commonService.markAssetCompleted(this, assetJourneyId);
    };
    LaunchTrainingComponent.prototype.completed = function (url) {
        this.commonService.showCompletedAssets(this, url);
    };
    LaunchTrainingComponent.prototype.unAssignedAssets = function (url) {
        this.commonService.showUnAssignedAssets(this, url);
    };
    // assignedAssets(count:number,url:string){
    //      this.route.queryParams.subscribe(params => {    
    //     this.router.navigate(['/notshown/assigned/assets'], { queryParams:  {
    //       "unshowncount" :count,
    //       "url"   :url,
    //       "userId":params['userId'],
    //       "queryUrl":params['queryUrl'],
    //       "assetsTypeId":params['assetsTypeId'],
    //      "productId":params['productId'],
    //       "disId":params['disId'],
    //       "taId":params['taId']     
    //     }, skipLocationChange: true});
    //   })
    // }
    LaunchTrainingComponent.prototype.getAssetImage = function (assetImage) {
        return this.commonService.getAssetImage(assetImage);
    };
    LaunchTrainingComponent.prototype.getJourneyImage = function (count, assetUserJourney, mouseovered, showNotCompleted) {
        return this.commonService.getJourneyImage(count, assetUserJourney, mouseovered, showNotCompleted);
    };
    LaunchTrainingComponent.prototype.isClicked = function (event) {
        this.getQueuedAssets(this.url);
        event.stopPropagation();
    };
    LaunchTrainingComponent.prototype.isMouseHover = function (event) {
        event.stopPropagation();
    };
    LaunchTrainingComponent.prototype.getQueuedAssets = function (assetType) {
        this.commonService.getQueuedAssets(this, assetType);
    };
    LaunchTrainingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-launch-training',
            template: __webpack_require__(/*! ./launch-training.component.html */ "./src/app/allergan/topics/launch-training/launch-training.component.html"),
            styles: [__webpack_require__(/*! ./launch-training.component.css */ "./src/app/allergan/topics/launch-training/launch-training.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services__WEBPACK_IMPORTED_MODULE_3__["HomeService"], _services__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], LaunchTrainingComponent);
    return LaunchTrainingComponent;
}());



/***/ }),

/***/ "./src/app/allergan/topics/medical-meetings/index.ts":
/*!***********************************************************!*\
  !*** ./src/app/allergan/topics/medical-meetings/index.ts ***!
  \***********************************************************/
/*! exports provided: MedicalMeetingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _medical_meetings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./medical-meetings.component */ "./src/app/allergan/topics/medical-meetings/medical-meetings.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MedicalMeetingsComponent", function() { return _medical_meetings_component__WEBPACK_IMPORTED_MODULE_0__["MedicalMeetingsComponent"]; });




/***/ }),

/***/ "./src/app/allergan/topics/medical-meetings/medical-meetings.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/allergan/topics/medical-meetings/medical-meetings.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mycontainer {\r\n    display: inline-block;\r\n    float: none;\r\n    color: #fff;}\r\n    .section_tab {\r\n        top: 20% !important;\r\n    }\r\n    footer {\r\n        position: absolute;\r\n        bottom: 0px;\r\n        width: 100%;\r\n      }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsZXJnYW4vdG9waWNzL21lZGljYWwtbWVldGluZ3MvbWVkaWNhbC1tZWV0aW5ncy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxXQUFXLENBQUM7SUFDWjtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxXQUFXO01BQ2IiLCJmaWxlIjoic3JjL2FwcC9hbGxlcmdhbi90b3BpY3MvbWVkaWNhbC1tZWV0aW5ncy9tZWRpY2FsLW1lZXRpbmdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXljb250YWluZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgZmxvYXQ6IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmZjt9XHJcbiAgICAuc2VjdGlvbl90YWIge1xyXG4gICAgICAgIHRvcDogMjAlICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBmb290ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/allergan/topics/medical-meetings/medical-meetings.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/allergan/topics/medical-meetings/medical-meetings.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"min_contner scenario_06 dragbalsc\">\n  <div class=\"hedpart\">\n      <div class=\"boxed_wrapper\">\n            <app-header-nav [bascampMessage]=\"basecampTrue\" ></app-header-nav>\n          <div class=\"breadcrumbs\">\n            <ul>\n                <li><span></span><a>Medical Meetings</a></li>\n            </ul>\n        </div>\n      </div>\n  </div>\n       <section class=\"section_tab dragblslide_1 dragbaltab\">\n          <div class=\"auto-container\">\n                  <div class=\"overlay\" *ngIf=\"loadAll\"></div>\n                  <div class=\"loader\" *ngIf=\"loadAll\" id=\"loader-2\">\n                      <span></span>\n                      <span></span>\n                      <span></span>\n                  </div>\n                  \n              <div class=\"row\">\n                  <div class=\"col-md-11 col-sm-12\">\n                          <div class=\"menu-topics\">\n                                <div class=\"topic-path\">\n                                    <div class=\"path path1\"></div>\n                                    <div class=\"path path2\"></div>\n                                    <div class=\"path path3\"></div>\n                                    <div class=\"path path4 dotted\"></div>\n                                </div>\n                                  <!-- completed -->\n                              <div class=\"topic-num\"  *ngIf=\"showNotCompleted\" [ngClass]=\"{'completed': showNotCompleted,'locks':!showNotCompleted}\" (click)=\"completed('/mm')\"></div>\n                                <div class=\"topic-num\" (click)=\"count>=1 ?openAsset(assetUserJourney[0]) : unAssignedAssets('/mm')\" (mouseover)=\"mouseOvered1=true\" (mouseout)=\"mouseOvered1=false\"  [ngClass]=\"assetUserJourney?getJourneyImage(count,assetUserJourney[0],mouseOvered1,showNotCompleted):''\">\n                                      <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[0]?.asset.contentType.id):'pdf'\">\n                                              <div class=\"hottips\">\n                                                  <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[0]?.asset.title}}</p>\n                                                  <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[0]?.assetCompletionStatus==1\">In Progress</div>\n                                                  <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[0]?.assetCompletionStatus==0 ||assetUserJourney[0]?.assetCompletionStatus==null)\">Yet to start</div>\n                                                  <div class=\"inprogrss_bar\">\n                                                      <div class=\"outer-with\">\n                                                          <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[0]?.assetCompletionStatus==1\">\n                                                          </div>\n                                                      </div>\n                                                  </div>\n                                                  <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[0]?.asset.description}}</p>\n                                                  <div class=\"progrss-details\">\n                                                      <span class=\"day-remain\">{{ assetUserJourney && assetUserJourney[0]?.dueDays}} days remaining</span>\n                                                      <!-- <span class=\"points\">{{ assetUserJourney && assetUserJourney[0]?.asset.awardPoints}} points</span> -->\n                                                  </div>\n                                            <div *ngIf=\" assetUserJourney && assetUserJourney[0]?.asset.contentType.id!=8 && assetUserJourney[0]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[0]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                              </div>\n                                          </div>\n                              </div>\n                              <!-- upcoming inprogress -->\n                                <div class=\"topic-num\"  (click)=\"count>=2 ? openAsset(assetUserJourney[1]) : unAssignedAssets('/mm')\" (mouseover)=\"mouseOvered2=true\" (mouseout)=\"mouseOvered2=false\" [ngClass]=\"assetUserJourney?getJourneyImage(count,assetUserJourney[1],mouseOvered2,showNotCompleted):''\">\n                                  <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[1]?.asset.contentType.id):'pdf'\">\n                                          <div class=\"hottips\">\n                                                  <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[1]?.asset.title}}</p>\n                                                  <!--assetCompletionStatus-->\n                                                  <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[1]?.assetCompletionStatus==1\">In Progress</div>\n                                                  <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[1]?.assetCompletionStatus==0 ||assetUserJourney[1]?.assetCompletionStatus==null)\">Yet to start</div>\n                                                  <div class=\"inprogrss_bar\">\n                                                      <div class=\"outer-with\">\n      \n                                                          <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[1]?.assetCompletionStatus==1\">\n                                                          </div>\n                                                      </div>\n                                                  </div>\n                                                  <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[1]?.asset.description}}</p>\n                                                  <div class=\"progrss-details\">\n                                                      <span class=\"day-remain\">{{assetUserJourney && assetUserJourney[1]?.dueDays}} days remaining</span>\n                                                      <!-- <span class=\"points\">{{assetUserJourney && assetUserJourney[1]?.asset.awardPoints}} points</span> -->\n                                                  </div>\n                                            <div  *ngIf=\"assetUserJourney && assetUserJourney[1]?.asset.contentType.id!==8 && assetUserJourney[1]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[1]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                              </div>\n                                  </div>\n                              </div>\n                                <div class=\"topic-num\" (click)=\"count>=3 ? openAsset(assetUserJourney[2]) : unAssignedAssets('/mm')\"  (mouseover)=\"mouseOvered3=true\" (mouseout)=\"mouseOvered3=false\"  [ngClass]=\"assetUserJourney?getJourneyImage(count,assetUserJourney[2],mouseOvered3,showNotCompleted):''\"> \n                                      <div class=\"topic_points\" (click)=\"isClicked($event)\" (mouseover)=\"isMouseHover($event)\"  *ngIf=\"showNotCompleted && assetUserJourney?.length-3>0\">+<span>{{assetUserJourney && assetUserJourney.length - decrCount}}</span></div>   \n                                  <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[2]?.asset.contentType.id):'pdf'\">   \n                                  <div class=\"hottips\">\n                                              <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[2]?.asset.title}}</p>\n                                              <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[2]?.assetCompletionStatus==1\">In Progress</div>\n                                              <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[2]?.assetCompletionStatus==0 ||assetUserJourney[2]?.assetCompletionStatus==null)\">Yet to start</div>\n                                              <div class=\"inprogrss_bar\">\n                                                  <div class=\"outer-with\">\n                                                      <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[2]?.assetCompletionStatus==1\">\n                                                      </div>\n                                                  </div>\n                                              </div>\n                                              <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[2]?.asset.description}}</p>\n                                              <div class=\"progrss-details\">\n                                                  <span class=\"day-remain\">{{assetUserJourney && assetUserJourney[2]?.dueDays}} days remaining</span>\n                                                  <!-- <span class=\"points\">{{assetUserJourney && assetUserJourney[2]?.asset.awardPoints}} points</span> -->\n                                              </div>\n                                            <div *ngIf=\"assetUserJourney && assetUserJourney[2]?.asset.contentType.id!=8 && assetUserJourney[2]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[2]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                          </div>\n                                          </div>\n                              </div>\n  \n                          <!--    <div *ngIf=\"!showNotCompleted\" class=\"topic-num\" (click)=\" count>=4 ? openAsset(assetUserJourney[3]):  unAssignedAssets('/mm')\" (mouseover)=\"mouseOvered5=true\" (mouseout)=\"mouseOvered5=false\"  [ngClass]=\"{'upcoming': !showNotCompleted && count>=4&&assetUserJourney && assetUserJourney[3]?.asset.mandatory===false,'mandatory':!showNotCompleted&&assetUserJourney && assetUserJourney[3]?.asset.mandatory===true ,'inprogressred': !showNotCompleted && count>=4 &&mouseOvered5 && assetUserJourney && assetUserJourney[3]?.asset.mandatory===false  ,'inprogress':!showNotCompleted && count>=4&&mouseOvered5 && assetUserJourney && assetUserJourney[3]?.asset.mandatory===true,'active': !showNotCompleted && count>=4 &&mouseOvered5}\">-->\n                                <div class=\"topic-num\"   *ngIf=\"!showNotCompleted\" (click)=\"count>=4? openAsset(assetUserJourney[3]) :unAssignedAssets('/mm')\" (mouseover)=\"mouseOvered4=true\" (mouseout)=\"mouseOvered4=false\"  [ngClass]=\"assetUserJourney?getJourneyImage(count,assetUserJourney[3],mouseOvered4,showNotCompleted):''\">                                 \n                                      <div class=\"topic_points\" (click)=\"isClicked($event)\" (mouseover)=\"isMouseHover($event)\" *ngIf=\"!showNotCompleted && assetUserJourney?.length-4>0\">+<span>{{assetUserJourney && assetUserJourney.length - decrCount}}</span></div>\n  \n                                      <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[3]?.asset.contentType.id):'pdf'\">\n                                              <div class=\"hottips\">\n                                                  <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[3]?.asset.title}}</p>\n                                                  <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[3]?.assetCompletionStatus==1\">In Progress</div>\n                                                  <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[3]?.assetCompletionStatus==0 ||assetUserJourney[3]?.assetCompletionStatus==null)\">Yet to start</div>\n                                                  <div class=\"inprogrss_bar\">\n                                                      <div class=\"outer-with\">\n                                                          <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[3]?.assetCompletionStatus==1\">\n                                                          </div>\n                                                      </div>\n                                                  </div>\n                                                  <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[3]?.asset.description}}</p>\n                                                  <div class=\"progrss-details\">\n                                                      <span class=\"day-remain\">{{ assetUserJourney && assetUserJourney[3]?.dueDays}} days remaining</span>\n                                                      <!-- <span class=\"points\">{{assetUserJourney && assetUserJourney[4]?.asset.awardPoints}} points</span> -->\n                                                  </div>\n                                            <div *ngIf=\"assetUserJourney && assetUserJourney[3]?.asset.contentType.id!=8 && assetUserJourney[3]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[3]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                              </div>\n                                          </div>\n                              </div>\n                              <!-- locks -->\n                              <div class=\"topic-num\" (click)=\"unAssignedAssets('/mm')\">\n                                  \n                                      <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[3]?.asset.contentType.id):'pdf'\">\n                                              <div class=\"hottips\">\n                                                  <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[3]?.asset.title}}</p>\n                                                  <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[3]?.assetCompletionStatus==1\">In Progress</div>\n                                                  <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[3]?.assetCompletionStatus==0 ||assetUserJourney[3]?.assetCompletionStatus==null)\">Yet to start</div>\n                                                  <div class=\"inprogrss_bar\">\n                                                      <div class=\"outer-with\">\n                                                          <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[3]?.assetCompletionStatus==1\">\n                                                          </div>\n                                                      </div>\n                                                  </div>\n                                                  <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[3]?.asset.description}}</p>\n                                                  <div class=\"progrss-details\">\n                                                      <span class=\"day-remain\">{{assetUserJourney && assetUserJourney[3]?.dueDays}} days remaining</span>\n                                                      <!-- <span class=\"points\">{{assetUserJourney && assetUserJourney[3]?.asset.awardPoints}} points</span> -->\n                                                  </div>\n                                                  <div *ngIf=\"assetUserJourney && assetUserJourney[3]?.asset.contentType.id!=8 && assetUserJourney[3]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[3]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                              </div>\n                                          </div>\n                              </div>\n                              <!-- <div *ngIf=\"!showNotCompleted\" (click)=\"unAssignedAssets('/mm')\" class=\"topic-num\"></div> -->\n                              <!-- <div *ngIf=\"showNotCompleted && count>=0\" (click)=\"unAssignedAssets('/mm')\" class=\"topic-num\"></div> -->\n                          </div>\n                      \n                      <div class=\"basecamp\">\n                          <span>basecamp</span>\n                          <span><img src=\"assets/images/basecamp-icon.png\" alt=\"\"></span>\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </section>\n      <footer>\n          <div class=\"auto-container\">\n              <div class=\"row \">\n                  <div class=\"col-md-12 \">\n                      <p class=\"footer1 \">© ALLERGAN 2019</p>\n                  </div>\n              </div>\n          </div>\n      </footer>\n      <div *ngIf=\"assetloader\" >\n        <div class=\"loader\">Loading...</div>\n        <div class=\"loaderOverlay\"></div>\n        <div>\n  </div>\n  "

/***/ }),

/***/ "./src/app/allergan/topics/medical-meetings/medical-meetings.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/allergan/topics/medical-meetings/medical-meetings.component.ts ***!
  \********************************************************************************/
/*! exports provided: MedicalMeetingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicalMeetingsComponent", function() { return MedicalMeetingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models */ "./src/app/models/index.ts");
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




var MedicalMeetingsComponent = /** @class */ (function () {
    function MedicalMeetingsComponent(route, router, homeService, commonService, ngZone) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.homeService = homeService;
        this.commonService = commonService;
        this.ngZone = ngZone;
        this.basecampTrue = false;
        this.loadAll = false;
        this.mouseOvered1 = false;
        this.mouseOvered2 = false;
        this.mouseOvered3 = false;
        this.mouseOvered4 = false;
        this.mouseOvered5 = false;
        this.assetloader = false;
        this.completedStatus = false;
        this.showNotCompleted = false;
        this.completedAssets = false;
        this.count = 0;
        this.queryUrl = "";
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.basecampTrue = true;
        this.url = this.commonService.getPreviousUrl();
        this.route.queryParams.subscribe(function (params) {
            _this.queryUrl = params['queryUrl'];
            _this.homeService.getOrderedAssetsFor(new _models__WEBPACK_IMPORTED_MODULE_2__["AssetJourneyRequestParams"](Number(params['userId']), Number(params['assetsTypeId']), Number(params['taId']), Number(params['productId']), Number(params['disId'])))
                .pipe()
                .subscribe(function (data) {
                _this.route.paramMap.subscribe(function (params) {
                    _this.showNotCompleted = false;
                    _this.assetUserJourney = data.data;
                    if (Number(_this.assetUserJourney.length) >= 1) {
                        _this.showNotCompleted = true;
                    }
                    // if (!this.showNotCompleted) this.decrCount = 4;
                    // else this.decrCount = 3;
                    _this.decrCount = 4;
                    _this.count = Number(_this.assetUserJourney.length);
                }, function (error) {
                });
                _this.homeService.getCompletedAssets(params['userId'], params['assetsTypeId'], params['productId'], params['disId'], params['taId'])
                    .pipe()
                    .subscribe(function (data) {
                    _this.lengthForData = data.data;
                    _this.showNotCompleted = false;
                    if (Number(_this.lengthForData.length) >= 1) {
                        _this.showNotCompleted = true;
                        _this.decrCount = 3;
                    }
                }, function (error) {
                });
            });
        });
    }
    MedicalMeetingsComponent.prototype.ngOnInit = function () { };
    MedicalMeetingsComponent.prototype.openAsset = function (assetUserJourney) {
        this.commonService.openAsset(this, assetUserJourney);
    };
    MedicalMeetingsComponent.prototype.markAsComplete = function (assetJourneyId) {
        this.commonService.markAssetCompleted(this, assetJourneyId);
    };
    MedicalMeetingsComponent.prototype.completed = function (url) {
        this.commonService.showCompletedAssets(this, url);
    };
    MedicalMeetingsComponent.prototype.unAssignedAssets = function (url) {
        this.commonService.showUnAssignedAssets(this, url);
    };
    // assignedAssets(count:number,url:string){
    //      this.route.queryParams.subscribe(params => {    
    //     this.router.navigate(['/notshown/assigned/assets'], { queryParams:  {
    //       "unshowncount" :count,
    //       "url"   :url,
    //       "userId":params['userId'],
    //       "queryUrl":params['queryUrl'],
    //       "assetsTypeId":params['assetsTypeId'],
    //      "productId":params['productId'],
    //       "disId":params['disId'],
    //       "taId":params['taId']     
    //     }, skipLocationChange: true});
    //   })
    // }
    MedicalMeetingsComponent.prototype.getAssetImage = function (assetImage) {
        return this.commonService.getAssetImage(assetImage);
    };
    MedicalMeetingsComponent.prototype.getJourneyImage = function (count, assetUserJourney, mouseovered, showNotCompleted) {
        return this.commonService.getJourneyImage(count, assetUserJourney, mouseovered, showNotCompleted);
    };
    MedicalMeetingsComponent.prototype.isClicked = function (event) {
        this.getQueuedAssets(this.url);
        event.stopPropagation();
    };
    MedicalMeetingsComponent.prototype.isMouseHover = function (event) {
        event.stopPropagation();
    };
    MedicalMeetingsComponent.prototype.getQueuedAssets = function (assetType) {
        this.commonService.getQueuedAssets(this, assetType);
    };
    MedicalMeetingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-medical-meetings',
            template: __webpack_require__(/*! ./medical-meetings.component.html */ "./src/app/allergan/topics/medical-meetings/medical-meetings.component.html"),
            styles: [__webpack_require__(/*! ./medical-meetings.component.css */ "./src/app/allergan/topics/medical-meetings/medical-meetings.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services__WEBPACK_IMPORTED_MODULE_3__["HomeService"], _services__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], MedicalMeetingsComponent);
    return MedicalMeetingsComponent;
}());



/***/ }),

/***/ "./src/app/allergan/topics/new-hire-training/index.ts":
/*!************************************************************!*\
  !*** ./src/app/allergan/topics/new-hire-training/index.ts ***!
  \************************************************************/
/*! exports provided: NewHireTrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _new_hire_training_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-hire-training.component */ "./src/app/allergan/topics/new-hire-training/new-hire-training.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NewHireTrainingComponent", function() { return _new_hire_training_component__WEBPACK_IMPORTED_MODULE_0__["NewHireTrainingComponent"]; });




/***/ }),

/***/ "./src/app/allergan/topics/new-hire-training/new-hire-training.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/allergan/topics/new-hire-training/new-hire-training.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mycontainer {\r\n    display: inline-block;\r\n    float: none;\r\n    color: #fff;}\r\n\r\n.section_tab {\r\n    top: 0% !important;\r\n}\r\n\r\nfooter {\r\n    position: absolute;\r\n    bottom: 0px;\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsZXJnYW4vdG9waWNzL25ldy1oaXJlLXRyYWluaW5nL25ldy1oaXJlLXRyYWluaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFdBQVcsQ0FBQzs7QUFFaEI7SUFDSSxrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2FsbGVyZ2FuL3RvcGljcy9uZXctaGlyZS10cmFpbmluZy9uZXctaGlyZS10cmFpbmluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm15Y29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgY29sb3I6ICNmZmY7fVxyXG5cclxuLnNlY3Rpb25fdGFiIHtcclxuICAgIHRvcDogMCUgIWltcG9ydGFudDtcclxufVxyXG5mb290ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/allergan/topics/new-hire-training/new-hire-training.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/allergan/topics/new-hire-training/new-hire-training.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"min_contner scenario_08 dragbalsc\">\n    <div class=\"hedpart\">\n        <div class=\"boxed_wrapper\">\n                <app-header-nav [bascampMessage]=\"basecampTrue\" ></app-header-nav>\n            <div class=\"breadcrumbs\">\n                <ul>\n                    <li><span></span><a>New Hire Training</a></li>\n                </ul>\n            </div>\n        </div>\n    </div>\n         <section class=\"section_tab dragblslide_1 dragbaltab\">\n            <div class=\"auto-container\">\n                    <div class=\"overlay\" *ngIf=\"loadAll\"></div>\n                    <div class=\"loader\" *ngIf=\"loadAll\" id=\"loader-2\">\n                        <span></span>\n                        <span></span>\n                        <span></span>\n                    </div>\n                    \n                <div class=\"row\">\n                    <div class=\"col-md-11 col-sm-12\">\n                            <div class=\"menu-topics\">\n                                <div class=\"topic-path\">\n                                    <div class=\"path path1\"></div>\n                                    <div class=\"path path2\"></div>\n                                    <div class=\"path path3 \"></div>\n                                    <div class=\"path path4 dotted\"></div>\n                                </div>\n                                    <!-- completed -->\n                                <div class=\"topic-num\"  *ngIf=\"showNotCompleted\" [ngClass]=\"{'completed': showNotCompleted,'locks':!showNotCompleted}\" (click)=\"completed('/nht')\"></div>\n                                <!-- upcoming -->\n                                <div class=\"topic-num\" (click)=\"count>=1 ?openAsset(assetUserJourney[0]) : unAssignedAssets('/nht')\" (mouseover)=\"mouseOvered1=true\" (mouseout)=\"mouseOvered1=false\"  [ngClass]=\"assetUserJourney?getJourneyImage(count,assetUserJourney[0],mouseOvered1,showNotCompleted):''\">\n                                    <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[0]?.asset.contentType.id):'pdf'\">\n                                        <div class=\"hottips\">\n                                            <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[0]?.asset.title}}</p>\n                                            <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[0]?.assetCompletionStatus==1\">In Progress</div>\n                                            <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[0]?.assetCompletionStatus==0 ||assetUserJourney[0]?.assetCompletionStatus==null)\">Yet to start</div>\n                                            <div class=\"inprogrss_bar\">\n                                                <div class=\"outer-with\">\n                                                    <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[0]?.assetCompletionStatus==1\">\n                                                    </div>\n                                                </div>\n                                            </div>\n                                            <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[0]?.asset.description}}</p>\n                                            <div class=\"progrss-details\">\n                                                <span class=\"day-remain\">{{ assetUserJourney && assetUserJourney[0]?.dueDays}} days remaining</span>\n                                                <!-- <span class=\"points\">{{ assetUserJourney && assetUserJourney[0]?.asset.awardPoints}} points</span> -->\n                                            </div>\n                                            <div *ngIf=\" assetUserJourney && assetUserJourney[0]?.asset.contentType.id!=8 && assetUserJourney[0]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[0]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <!-- upcoming inprogress -->\n                                <div class=\"topic-num\"  (click)=\"count>=2 ? openAsset(assetUserJourney[1]) : unAssignedAssets('/nht')\" (mouseover)=\"mouseOvered2=true\" (mouseout)=\"mouseOvered2=false\" [ngClass]=\"assetUserJourney?getJourneyImage(count,assetUserJourney[1],mouseOvered2,showNotCompleted):''\">\n                                    <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[1]?.asset.contentType.id):'pdf'\">\n                                            <div class=\"hottips\">\n                                                    <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[1]?.asset.title}}</p>\n                                                    <!--assetCompletionStatus-->\n                                                    <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[1]?.assetCompletionStatus==1\">In Progress</div>\n                                                    <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[1]?.assetCompletionStatus==0 ||assetUserJourney[1]?.assetCompletionStatus==null)\">Yet to start</div>\n                                                    <div class=\"inprogrss_bar\">\n                                                        <div class=\"outer-with\">\n        \n                                                            <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[1]?.assetCompletionStatus==1\">\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[1]?.asset.description}}</p>\n                                                    <div class=\"progrss-details\">\n                                                        <span class=\"day-remain\">{{assetUserJourney && assetUserJourney[1]?.dueDays}} days remaining</span>\n                                                        <!-- <span class=\"points\">{{assetUserJourney && assetUserJourney[1]?.asset.awardPoints}} points</span> -->\n                                                    </div>\n                                            <div  *ngIf=\"assetUserJourney && assetUserJourney[1]?.asset.contentType.id!==8 && assetUserJourney[1]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[1]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                                </div>\n                                    </div>\n                                </div>\n                                <!-- upcoming -->\n\t\t\t\t\t\t\t    <div class=\"topic-num\" (click)=\"count>=3 ? openAsset(assetUserJourney[2]) : unAssignedAssets('/nht')\"  (mouseover)=\"mouseOvered3=true\" (mouseout)=\"mouseOvered3=false\"  [ngClass]=\"assetUserJourney?getJourneyImage(count,assetUserJourney[2],mouseOvered3,showNotCompleted):''\"> \n                                        <div class=\"topic_points\"  (click)=\"isClicked($event)\" (mouseover)=\"isMouseHover($event)\" *ngIf=\"showNotCompleted && assetUserJourney?.length-3>0\">+<span>{{assetUserJourney && assetUserJourney.length-decrCount}}</span></div>   \n                                    <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[2]?.asset.contentType.id):'pdf'\">   \n                                    <div class=\"hottips\">\n                                                <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[2]?.asset.title}}</p>\n                                                <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[2]?.assetCompletionStatus==1\">In Progress</div>\n                                                <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[2]?.assetCompletionStatus==0 ||assetUserJourney[2]?.assetCompletionStatus==null)\">Yet to start</div>\n                                                <div class=\"inprogrss_bar\">\n                                                    <div class=\"outer-with\">\n                                                        <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[2]?.assetCompletionStatus==1\">\n                                                        </div>\n                                                    </div>\n                                                </div>\n                                                <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[2]?.asset.description}}</p>\n                                                <div class=\"progrss-details\">\n                                                    <span class=\"day-remain\">{{assetUserJourney && assetUserJourney[2]?.dueDays}} days remaining</span>\n                                                    <!-- <span class=\"points\">{{assetUserJourney && assetUserJourney[2]?.asset.awardPoints}} points</span> -->\n                                                </div>\n                                            <div *ngIf=\"assetUserJourney && assetUserJourney[2]?.asset.contentType.id!=8 && assetUserJourney[2]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[2]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                            </div>\n                                            </div>\n                                </div>\n    \n                                <div class=\"topic-num\"   *ngIf=\"!showNotCompleted\" (click)=\" count>=4 ? openAsset(assetUserJourney[3]):  unAssignedAssets('/nht')\" (mouseover)=\"mouseOvered5=true\" (mouseout)=\"mouseOvered5=false\" [ngClass]=\"assetUserJourney?getJourneyImage(count,assetUserJourney[3],mouseOvered4,showNotCompleted):''\">\n                                        <div class=\"topic_points\"  (click)=\"isClicked($event)\" (mouseover)=\"isMouseHover($event)\" *ngIf=\"!showNotCompleted && assetUserJourney?.length-4>0\">+<span>{{assetUserJourney && assetUserJourney.length-decrCount}}</span></div>\n    \n                                        <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[3]?.asset.contentType.id):'pdf'\">\n                                                <div class=\"hottips\">\n                                                    <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[3]?.asset.title}}</p>\n                                                    <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[3]?.assetCompletionStatus==1\">In Progress</div>\n                                                    <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[3]?.assetCompletionStatus==0 ||assetUserJourney[3]?.assetCompletionStatus==null)\">Yet to start</div>\n                                                    <div class=\"inprogrss_bar\">\n                                                        <div class=\"outer-with\">\n                                                            <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[3]?.assetCompletionStatus==1\">\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[3]?.asset.description}}</p>\n                                                    <div class=\"progrss-details\">\n                                                        <span class=\"day-remain\">{{ assetUserJourney && assetUserJourney[3]?.dueDays}} days remaining</span>\n                                                        <!-- <span class=\"points\">{{assetUserJourney && assetUserJourney[4]?.asset.awardPoints}} points</span> -->\n                                                    </div>\n                                            <div *ngIf=\"assetUserJourney && assetUserJourney[3]?.asset.contentType.id!=8 && assetUserJourney[3]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[3]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                                </div>\n                                            </div>\n                                </div>\n                                <!-- locks -->\n                                <div class=\"topic-num\" (click)=\"unAssignedAssets('/nht')\">\n                                    \n                                        <div class=\"trending-topic dp_down\" [ngClass]=\"assetUserJourney?getAssetImage(assetUserJourney[3]?.asset.contentType.id):'pdf'\">\n                                                <div class=\"hottips\">\n                                                    <p class=\"text_hip1\">{{assetUserJourney && assetUserJourney[3]?.asset.title}}</p>\n                                                    <div class=\"inprogrss\" *ngIf=\"assetUserJourney && assetUserJourney[3]?.assetCompletionStatus==1\">In Progress</div>\n                                                    <div class=\"inprogrss\" *ngIf=\"assetUserJourney && (assetUserJourney[3]?.assetCompletionStatus==0 ||assetUserJourney[3]?.assetCompletionStatus==null)\">Yet to start</div>\n                                                    <div class=\"inprogrss_bar\">\n                                                        <div class=\"outer-with\">\n                                                            <div class=\"cur-prog\" *ngIf=\"assetUserJourney && assetUserJourney[3]?.assetCompletionStatus==1\">\n                                                            </div>\n                                                        </div>\n                                                    </div>\n                                                    <p class=\"text-para-1\">{{assetUserJourney && assetUserJourney[3]?.asset.description}}</p>\n                                                    <div class=\"progrss-details\">\n                                                        <span class=\"day-remain\">{{assetUserJourney && assetUserJourney[3]?.dueDays}} days remaining</span>\n                                                        <!-- <span class=\"points\">{{assetUserJourney && assetUserJourney[3]?.asset.awardPoints}} points</span> -->\n                                                    </div>\n                                                    <div *ngIf=\"assetUserJourney && assetUserJourney[3]?.asset.contentType.id!=8 && assetUserJourney[3]?.assetCompletionStatus==1\" class=\"mark_btn\" (click)=\"markAsComplete(assetUserJourney[3]?.id);$event.stopPropagation();\">Mark as complete</div>\n                                                </div>\n                                            </div>\n                                </div>\n                                <!-- <div *ngIf=\"!showNotCompleted\" (click)=\"unAssignedAssets('/nht')\" class=\"topic-num\"></div> -->\n                                <!-- <div *ngIf=\"showNotCompleted && count>=0\" (click)=\"unAssignedAssets('/nht')\" class=\"topic-num\"></div> -->\n                            </div>\n                        \n                        <div class=\"basecamp\">\n                            <span>basecamp</span>\n                            <span><img src=\"assets/images/basecamp-icon.png\" alt=\"\"></span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n        <footer>\n            <div class=\"auto-container\">\n                <div class=\"row \">\n                    <div class=\"col-md-12 \">\n                        <p class=\"footer1 \">© ALLERGAN 2019</p>\n                    </div>\n                </div>\n            </div>\n        </footer>\n        <div *ngIf=\"assetloader\" >\n            <div class=\"loader\">Loading...</div>\n            <div class=\"loaderOverlay\"></div>\n            <div>\n    </div>\n    "

/***/ }),

/***/ "./src/app/allergan/topics/new-hire-training/new-hire-training.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/allergan/topics/new-hire-training/new-hire-training.component.ts ***!
  \**********************************************************************************/
/*! exports provided: NewHireTrainingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewHireTrainingComponent", function() { return NewHireTrainingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models */ "./src/app/models/index.ts");
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




var NewHireTrainingComponent = /** @class */ (function () {
    function NewHireTrainingComponent(route, router, homeService, commonService, ngZone) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.homeService = homeService;
        this.commonService = commonService;
        this.ngZone = ngZone;
        this.basecampTrue = false;
        this.loadAll = false;
        this.mouseOvered1 = false;
        this.mouseOvered2 = false;
        this.mouseOvered3 = false;
        this.mouseOvered4 = false;
        this.mouseOvered5 = false;
        this.assetloader = false;
        this.completedStatus = false;
        this.showNotCompleted = false;
        this.completedAssets = false;
        this.count = 0;
        this.queryUrl = "";
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.basecampTrue = true;
        this.url = this.commonService.getPreviousUrl();
        this.route.queryParams.subscribe(function (params) {
            _this.queryUrl = params['queryUrl'];
            _this.homeService.getOrderedAssetsFor(new _models__WEBPACK_IMPORTED_MODULE_2__["AssetJourneyRequestParams"](Number(params['userId']), Number(params['assetsTypeId']), Number(params['taId']), Number(params['productId']), Number(params['disId'])))
                .pipe()
                .subscribe(function (data) {
                _this.route.paramMap.subscribe(function (params) {
                    _this.showNotCompleted = false;
                    _this.assetUserJourney = data.data;
                    if (Number(_this.assetUserJourney.length) >= 1) {
                        _this.showNotCompleted = true;
                    }
                    // if (!this.showNotCompleted) this.decrCount = 4;
                    // else this.decrCount = 3;
                    _this.decrCount = 4;
                    _this.count = Number(_this.assetUserJourney.length);
                }, function (error) {
                });
                _this.homeService.getCompletedAssets(params['userId'], params['assetsTypeId'], params['productId'], params['disId'], params['taId'])
                    .pipe()
                    .subscribe(function (data) {
                    _this.lengthForData = data.data;
                    _this.showNotCompleted = false;
                    if (Number(_this.lengthForData.length) >= 1) {
                        _this.showNotCompleted = true;
                        _this.decrCount = 3;
                    }
                }, function (error) {
                });
            });
        });
    }
    NewHireTrainingComponent.prototype.ngOnInit = function () { };
    NewHireTrainingComponent.prototype.openAsset = function (assetUserJourney) {
        this.commonService.openAsset(this, assetUserJourney);
    };
    NewHireTrainingComponent.prototype.markAsComplete = function (assetJourneyId) {
        this.commonService.markAssetCompleted(this, assetJourneyId);
    };
    NewHireTrainingComponent.prototype.completed = function (url) {
        this.commonService.showCompletedAssets(this, url);
    };
    NewHireTrainingComponent.prototype.unAssignedAssets = function (url) {
        this.commonService.showUnAssignedAssets(this, url);
    };
    // assignedAssets(count:number,url:string){
    //      this.route.queryParams.subscribe(params => {    
    //     this.router.navigate(['/notshown/assigned/assets'], { queryParams:  {
    //       "unshowncount" :count,
    //       "url"   :url,
    //       "userId":params['userId'],
    //       "queryUrl":params['queryUrl'],
    //       "assetsTypeId":params['assetsTypeId'],
    //      "productId":params['productId'],
    //       "disId":params['disId'],
    //       "taId":params['taId']     
    //     }, skipLocationChange: true});
    //   })
    // }
    NewHireTrainingComponent.prototype.getAssetImage = function (assetImage) {
        return this.commonService.getAssetImage(assetImage);
    };
    NewHireTrainingComponent.prototype.getJourneyImage = function (count, assetUserJourney, mouseovered, showNotCompleted) {
        return this.commonService.getJourneyImage(count, assetUserJourney, mouseovered, showNotCompleted);
    };
    NewHireTrainingComponent.prototype.isClicked = function (event) {
        this.getQueuedAssets(this.url);
        event.stopPropagation();
    };
    NewHireTrainingComponent.prototype.isMouseHover = function (event) {
        event.stopPropagation();
    };
    NewHireTrainingComponent.prototype.getQueuedAssets = function (assetType) {
        this.commonService.getQueuedAssets(this, assetType);
    };
    NewHireTrainingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-new-hire-training',
            template: __webpack_require__(/*! ./new-hire-training.component.html */ "./src/app/allergan/topics/new-hire-training/new-hire-training.component.html"),
            styles: [__webpack_require__(/*! ./new-hire-training.component.css */ "./src/app/allergan/topics/new-hire-training/new-hire-training.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services__WEBPACK_IMPORTED_MODULE_3__["HomeService"], _services__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], NewHireTrainingComponent);
    return NewHireTrainingComponent;
}());



/***/ }),

/***/ "./src/app/allergan/topics/quiz-topics/quiz-topic.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/allergan/topics/quiz-topics/quiz-topic.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Quiz */\r\n.quiz_container {\r\n    background-image: url('quiz_bg.jpg');\r\n    min-height: 100vh;\r\n    background-size: cover;\r\n    background-position: right 0px;\r\n}\r\n.quiz_wrap {\r\n    margin: 0px;\r\n    position: relative;\r\n    min-height: 100vh;\r\n}\r\n.quiz_header {\r\n    text-align: right;\r\n}\r\n.quiz_header > img {\r\n    padding: 30px 30px 0px;\r\n}\r\n.quiz_title_wrap {\r\n    /* display: block; */\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    left: 50px;\r\n}\r\n.quiz_title_wrap > h2 {\r\n    color: #fff;\r\n    font-size: 30px;\r\n}\r\n.btnStart {\r\n    background-color: #46b344;\r\n    border-radius: 200px;\r\n    color: #fff;\r\n    padding: 8px 25px;\r\n    margin-top: 30px;\r\n    outline: none;\r\n    font-size: 14px;\r\n}\r\n.btnStart:focus {\r\n    outline: none;\r\n}\r\n.quiz_shell_wrap {\r\n    /* display: none; */\r\n    padding: 0px 30px;\r\n}\r\n.quiz_shell_wrap > h2 {\r\n    color: #fff;\r\n    font-size: 40px;\r\n}\r\n.quiz_shell {\r\n    padding: 40px;\r\n    background-color: #fff;\r\n    position: relative;\r\n    min-height: 400px;\r\n    border-radius: 25px;\r\n}\r\n.quest {\r\n    align-items: flex-end;\r\n    margin: 0px;\r\n}\r\n.quest_Bool_list > input[type=\"radio\"]:checked,input[type=\"checkbox\"]:checked,\r\n.quest_Bool_list > input[type=\"radio\"]:not(:checked),input[type=\"checkbox\"]:not(:checked) {\r\n    position: absolute;\r\n    left: -9999px;\r\n}\r\n.quest_Bool_list > input[type=\"radio\"]:checked + label,input[type=\"checkbox\"]:checked + label,\r\n.quest_Bool_list > input[type=\"radio\"]:not(:checked) + label ,input[type=\"checkbox\"]:not(:checked) + label\r\n{\r\n    position: relative;\r\n    padding-left: 28px;\r\n    cursor: pointer;\r\n    line-height: 20px;\r\n    display: inline-block;\r\n    color: #666;\r\n}\r\n.quest_Bool_list > input[type=\"radio\"]:checked + label:before,\r\n.quest_Bool_list > input[type=\"radio\"]:not(:checked) + label:before {\r\n    content: '';\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 20px;\r\n    height: 20px;\r\n    border: 1px solid #ddd;\r\n    border-radius: 100%;\r\n    background: #fff;\r\n}\r\n.quest_Bool_list > input[type=\"checkbox\"]:checked + label:before,\r\n.quest_Bool_list > input[type=\"checkbox\"]:not(:checked) + label:before {\r\n    content: '';\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 20px;\r\n    height: 20px;\r\n    border: 1px solid #ddd;\r\n    /* border-radius: 100%; */\r\n    background: #fff;\r\n}\r\n.quest_Bool_list > input[type=\"radio\"]:checked + label:after,\r\n.quest_Bool_list > input[type=\"radio\"]:not(:checked) + label:after {\r\n    content: '';\r\n    width: 12px;\r\n    height: 12px;\r\n    background: #0c2f45;\r\n    position: absolute;\r\n    top: 4px;\r\n    left: 4px;\r\n    border-radius: 100%;\r\n    transition: all 0.2s ease;\r\n}\r\n.quest_Bool_list > input[type=\"checkbox\"]:checked + label:after,\r\n.quest_Bool_list > input[type=\"checkbox\"]:not(:checked) + label:after {\r\n    content: '';\r\n    width: 12px;\r\n    height: 12px;\r\n    background: #0c2f45;\r\n    position: absolute;\r\n    top: 4px;\r\n    left: 4px;\r\n    /* border-radius: 100%; */\r\n    transition: all 0.2s ease;\r\n}\r\n.quest_Bool_list > input[type=\"radio\"]:not(:checked) + label:after ,input[type=\"checkbox\"]:not(:checked) + label:after {\r\n    opacity: 0;\r\n    transform: scale(0);\r\n}\r\n.quest_Bool_list > input[type=\"radio\"]:checked + label:after , input[type=\"checkbox\"]:checked + label:after {\r\n    opacity: 1;\r\n    transform: scale(1);\r\n}\r\n.quest_Bool {\r\n    padding-left: 75px;\r\n    padding-top: 15px;\r\n}\r\n.quest_Bool_list {\r\n    padding: 15px 15px 15px 0px;\r\n}\r\n.quest_Bool_list > label {\r\n    width: 100%;\r\n}\r\n.btn_submit {\r\n    background-color: #46b344;\r\n    color: #fff;\r\n    border-radius: 200px;\r\n    padding: 6px 30px;\r\n    font-size: 14px;\r\n}\r\n.quest_alert {\r\n    position: absolute;\r\n    bottom: 0px;\r\n    left: 0px;\r\n    width: 100%;\r\n    text-align: center;\r\n    padding: 10px;\r\n}\r\n.quest_alert_wrong {\r\n    background-color: #e76044;\r\n}\r\n.quest_alert_correct {\r\n    background-color: #46b344;\r\n}\r\n.answ_status {\r\n    color: #fff;\r\n    vertical-align: middle;\r\n    margin-right: 30px;\r\n}\r\n.btn_continue {\r\n    background-color: #fff;\r\n    color: #58595b;\r\n    border-radius: 200px;\r\n    padding: 6px 25px;\r\n}\r\n.quiz_foot {\r\n    height: auto;\r\n    position: absolute;\r\n    bottom: 0px;\r\n    padding: 15px 30px;\r\n    color: #fff;\r\n}\r\n.quest_index {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n.quest_txt {\r\n    display: inline-block;\r\n    color: #58595b;\r\n    font-size: 20px;\r\n    padding-left: 0px;\r\n    margin-bottom: 0px;\r\n}\r\n.quest_txt::after {\r\n    content: '';\r\n    display: block;\r\n    height: 1px;\r\n    width: 100%;\r\n    background-color: #a1a1a1;\r\n    margin-top: 15px;\r\n}\r\n.result_wrap {\r\n    /* display: block; */\r\n    position: absolute;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    left: 50px;\r\n    text-align: center;\r\n    border-radius: 25px;\r\n}\r\n.result > h2 {\r\n    color: #fff;\r\n    font-size: 32px;\r\n}\r\n.result > p {\r\n    color: #fff;\r\n    font-size: 32px;\r\n    margin-top: 30px;\r\n}\r\n.result > span .pass {\r\n    font-size: 40px;\r\n    color: #46b344;\r\n \r\n}\r\n.result > span .fail {\r\n    font-size: 40px;\r\n    color: #e75131;\r\n}\r\n.actual-result {\r\n    margin: 30px 0px;\r\n}\r\n.actual-result > span {\r\n    display: block;\r\n    font-size: 24px;\r\n    color: #fff;\r\n}\r\n.btnRetake {\r\n    background-color: #e75131;\r\n    border-radius: 200px;\r\n    padding: 8px 20px;\r\n    font-size: 18px;\r\n    color: #fff;\r\n    margin-top: 30px;\r\n}\r\n.btnRetake > img {\r\n    margin: 0px 10px;\r\n}\r\n.btnComplete {\r\n    background-color: #46b344;\r\n    border-radius: 200px;\r\n    padding: 8px 20px;\r\n    font-size: 18px;\r\n    color: #fff;\r\n    margin-top: 30px;\r\n}\r\n.btnCancel {\r\n    background-color: #46b344;\r\n    border-radius: 200px;\r\n    padding: 8px 20px;\r\n    font-size: 18px;\r\n    color: #fff;\r\n    margin-top: 30px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsZXJnYW4vdG9waWNzL3F1aXotdG9waWNzL3F1aXotdG9waWMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxTQUFTO0FBQ1Q7SUFDSSxvQ0FBOEQ7SUFDOUQsaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0Qiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsMkJBQTJCO0lBQzNCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztBQUNmO0FBQ0E7O0lBRUksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7QUFDQTs7O0lBR0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixXQUFXO0FBQ2Y7QUFDQTs7SUFFSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjtBQUVBOztJQUVJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCO0FBR0E7O0lBRUksV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULG1CQUFtQjtJQUVuQix5QkFBeUI7QUFDN0I7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QseUJBQXlCO0lBRXpCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksVUFBVTtJQUVWLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksVUFBVTtJQUVWLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztJQUNkLFdBQVc7SUFDWCxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsMkJBQTJCO0lBQzNCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7SUFDZixjQUFjOztBQUVsQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7QUFDbEI7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixXQUFXO0FBQ2Y7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsV0FBVztJQUNYLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FsbGVyZ2FuL3RvcGljcy9xdWl6LXRvcGljcy9xdWl6LXRvcGljLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBRdWl6ICovXHJcbi5xdWl6X2NvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL3F1aXpfYmcuanBnXCIpO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgMHB4O1xyXG59XHJcbi5xdWl6X3dyYXAge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxufVxyXG4ucXVpel9oZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLnF1aXpfaGVhZGVyID4gaW1nIHtcclxuICAgIHBhZGRpbmc6IDMwcHggMzBweCAwcHg7XHJcbn1cclxuLnF1aXpfdGl0bGVfd3JhcCB7XHJcbiAgICAvKiBkaXNwbGF5OiBibG9jazsgKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgbGVmdDogNTBweDtcclxufVxyXG4ucXVpel90aXRsZV93cmFwID4gaDIge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLmJ0blN0YXJ0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NmIzNDQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMDBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogOHB4IDI1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uYnRuU3RhcnQ6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxuLnF1aXpfc2hlbGxfd3JhcCB7XHJcbiAgICAvKiBkaXNwbGF5OiBub25lOyAqL1xyXG4gICAgcGFkZGluZzogMHB4IDMwcHg7XHJcbn1cclxuLnF1aXpfc2hlbGxfd3JhcCA+IGgyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcbi5xdWl6X3NoZWxsIHtcclxuICAgIHBhZGRpbmc6IDQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG59XHJcbi5xdWVzdCB7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBtYXJnaW46IDBweDtcclxufVxyXG4ucXVlc3RfQm9vbF9saXN0ID4gaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQsaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQsXHJcbi5xdWVzdF9Cb29sX2xpc3QgPiBpbnB1dFt0eXBlPVwicmFkaW9cIl06bm90KDpjaGVja2VkKSxpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06bm90KDpjaGVja2VkKSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAtOTk5OXB4O1xyXG59XHJcbi5xdWVzdF9Cb29sX2xpc3QgPiBpbnB1dFt0eXBlPVwicmFkaW9cIl06Y2hlY2tlZCArIGxhYmVsLGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWwsXHJcbi5xdWVzdF9Cb29sX2xpc3QgPiBpbnB1dFt0eXBlPVwicmFkaW9cIl06bm90KDpjaGVja2VkKSArIGxhYmVsICxpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06bm90KDpjaGVja2VkKSArIGxhYmVsXHJcbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmctbGVmdDogMjhweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgY29sb3I6ICM2NjY7XHJcbn1cclxuLnF1ZXN0X0Jvb2xfbGlzdCA+IGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWw6YmVmb3JlLFxyXG4ucXVlc3RfQm9vbF9saXN0ID4gaW5wdXRbdHlwZT1cInJhZGlvXCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuXHJcbi5xdWVzdF9Cb29sX2xpc3QgPiBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSxcclxuLnF1ZXN0X0Jvb2xfbGlzdCA+IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpub3QoOmNoZWNrZWQpICsgbGFiZWw6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDEwMCU7ICovXHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcblxyXG5cclxuLnF1ZXN0X0Jvb2xfbGlzdCA+IGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIsXHJcbi5xdWVzdF9Cb29sX2xpc3QgPiBpbnB1dFt0eXBlPVwicmFkaW9cIl06bm90KDpjaGVja2VkKSArIGxhYmVsOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMGMyZjQ1O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0cHg7XHJcbiAgICBsZWZ0OiA0cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxufVxyXG5cclxuLnF1ZXN0X0Jvb2xfbGlzdCA+IGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIsXHJcbi5xdWVzdF9Cb29sX2xpc3QgPiBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl06bm90KDpjaGVja2VkKSArIGxhYmVsOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMGMyZjQ1O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0cHg7XHJcbiAgICBsZWZ0OiA0cHg7XHJcbiAgICAvKiBib3JkZXItcmFkaXVzOiAxMDAlOyAqL1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcclxufVxyXG4ucXVlc3RfQm9vbF9saXN0ID4gaW5wdXRbdHlwZT1cInJhZGlvXCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDphZnRlciAsaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6Y2hlY2tlZCkgKyBsYWJlbDphZnRlciB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxufVxyXG4ucXVlc3RfQm9vbF9saXN0ID4gaW5wdXRbdHlwZT1cInJhZGlvXCJdOmNoZWNrZWQgKyBsYWJlbDphZnRlciAsIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWw6YWZ0ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbn1cclxuLnF1ZXN0X0Jvb2wge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA3NXB4O1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbn1cclxuLnF1ZXN0X0Jvb2xfbGlzdCB7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDE1cHggMTVweCAwcHg7XHJcbn1cclxuLnF1ZXN0X0Jvb2xfbGlzdCA+IGxhYmVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5idG5fc3VibWl0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NmIzNDQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogNnB4IDMwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5xdWVzdF9hbGVydCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4ucXVlc3RfYWxlcnRfd3Jvbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U3NjA0NDtcclxufVxyXG4ucXVlc3RfYWxlcnRfY29ycmVjdCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDZiMzQ0O1xyXG59XHJcbi5hbnN3X3N0YXR1cyB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbn1cclxuLmJ0bl9jb250aW51ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgY29sb3I6ICM1ODU5NWI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMDBweDtcclxuICAgIHBhZGRpbmc6IDZweCAyNXB4O1xyXG59XHJcbi5xdWl6X2Zvb3Qge1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4ucXVlc3RfaW5kZXgge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4ucXVlc3RfdHh0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbG9yOiAjNTg1OTViO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuLnF1ZXN0X3R4dDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTFhMWExO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG4ucmVzdWx0X3dyYXAge1xyXG4gICAgLyogZGlzcGxheTogYmxvY2s7ICovXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgIGxlZnQ6IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG59XHJcbi5yZXN1bHQgPiBoMiB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxufVxyXG4ucmVzdWx0ID4gcCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMzJweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuLnJlc3VsdCA+IHNwYW4gLnBhc3Mge1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgY29sb3I6ICM0NmIzNDQ7XHJcbiBcclxufVxyXG4ucmVzdWx0ID4gc3BhbiAuZmFpbCB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICBjb2xvcjogI2U3NTEzMTtcclxufVxyXG5cclxuLmFjdHVhbC1yZXN1bHQge1xyXG4gICAgbWFyZ2luOiAzMHB4IDBweDtcclxufVxyXG4uYWN0dWFsLXJlc3VsdCA+IHNwYW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uYnRuUmV0YWtlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlNzUxMzE7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMDBweDtcclxuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbi5idG5SZXRha2UgPiBpbWcge1xyXG4gICAgbWFyZ2luOiAwcHggMTBweDtcclxufVxyXG5cclxuLmJ0bkNvbXBsZXRlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NmIzNDQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMDBweDtcclxuICAgIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59XHJcbi5idG5DYW5jZWwge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ2YjM0NDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwMHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/allergan/topics/quiz-topics/quiz-topic.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/allergan/topics/quiz-topics/quiz-topic.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"quiz_container container\">\r\n        <div class=\"quiz_wrap row\">\r\n            <header class=\"quiz_header col-xs col-sm-12 col-md-12 col-lg-12\">\r\n                <img src=\"assets/images/logo2.png\" alt=\"Logo\">\r\n            </header>\r\n            <section class=\"quiz_title_wrap col-xs col-sm-6 col-md-5 col-lg-4\" *ngIf=\"quiz_title_wrap\">\r\n                <h2>{{quizName}}</h2>\r\n                 <button class=\"btn btnStart\" (click)=\"openQuestionPop()\" *ngIf=\"btnStart\">Let's Start</button>\r\n    &nbsp;&nbsp;        <button class=\"btn btnStart\"  (click)=\"goBack(url)\">Cancel</button>\r\n            </section>\r\n            <section class=\"quiz_shell_wrap col-xs col-sm-12 col-md-12 col-lg-12\" *ngIf=\"quiz_shell_wrap\">\r\n                <h2>Question</h2>\r\n                <div class=\"quiz_shell\">\r\n                    <div class=\"quiz_shell_scroll\">\r\n                        <div class=\"quest row\">\r\n                            <span class=\"quest_index col-md-1 col-lg-1\"><img src=\"assets/images/quest.png\" alt=\"quest\"></span>\r\n                            <div class=\"colse_btn\"><button (click)=\"goBack(url)\"></button></div> \r\n                            <h2 class=\"quest_txt col-md-11 col-lg-11\">{{question}}</h2>\r\n                        </div>\r\n                        <div class=\"quest_Bool\">\r\n                            <form action=\"#\">\r\n                                <div class=\"quest_Bool_list\"  *ngFor=\"let answer of answers\">                               \r\n                                  <input id=\"test{{answer.id}}\" *ngIf=\"questionType=='SINGLE_CHOICE'\" [value]=\"answer.id\" type=\"radio\" name=\"radio-group\"  [(ngModel)]=\"radioSelected\" (change)=\"onToggle(answer.id,$event)\"  [disabled]=\"isDisabled\">\r\n                                  <input id=\"test{{answer.id}}\"  *ngIf=\"questionType=='MULTIPLE_CHOICE'\" [value]=\"answer.id\" type=\"checkbox\" name=\"check-group\"   [(ngModel)]=\"answer.checked\" (change)=\"onToggle(answer.id,$event)\" [disabled]=\"isDisabled\">\r\n                                  <label for=\"test{{answer.id}}\">{{answer.text}}</label>\r\n                                </div>                          \r\n                              </form>\r\n                            <div class=\"qust_submit\" *ngIf=\"qust_submit\">\r\n                                <button class=\"btn btn_submit\" (click)='onSubmit()'>Submit</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"quest_alert {{quest_alert}}\" *ngIf=\"quest_alert_visible\">\r\n                        <!-- For Correct Answer -->\r\n                        <!-- <span class=\"answ_status\"><img src=\"src/images/correct.png\" alt=\"\"> Correct Answer</span> -->\r\n                        <span class=\"answ_status\"><img src=\"../assets/images/{{quest_alert_image}}.png\" alt=\"\">{{quest_alert_text}}</span>\r\n                        <button class=\"btn btn_continue\" (click)='onContinue()'>Continue</button>\r\n                    </div>\r\n                </div>\r\n            </section>\r\n            <section class=\"result_wrap col-xs col-sm-6 col-md-5 col-lg-4\" *ngIf=\"result_wrap\">\r\n                <div class=\"result\">\r\n                    <h2>Result:</h2>\r\n                    <p>Your Score</p>\r\n                    <span class=\"score\">{{score}} Points ({{passPercentage | number:'2.0-0'}}%)</span>\r\n                    <div class=\"actual-result\">\r\n                       <img src=\"../assets/images/{{result_image}}.png\" alt=\"result_icon\">\r\n                        <span [ngClass]=\"{'pass':btnComplete,'fail':btnRetake}\" >{{text_result}}</span>\r\n                       \r\n                    </div>\r\n                    <button class=\"btn\"  [ngClass]=\"{'btnRetake':btnRetake}\" *ngIf=\"btnRetake\" (click)=\"clickRetake(journeyId)\">                        \r\n                        <img src=\"../assets/images/reload.png\" alt=\"reload\">Retake                     \r\n                    </button>                   \r\n                    <button class=\"btn\" *ngIf=\"!btnRetake\" [ngClass]=\"{'btnComplete':btnComplete}\" (click)=\"markAsComplete(journeyId);$event.stopPropagation();\">Mark Complete</button>\r\n                    <button class=\"btn btnCancel\"  (click)=\"goBack(url)\">Cancel</button>\r\n                </div>\r\n            </section>\r\n            <footer class=\"quiz_foot col-xs col-sm-12 col-md-12 col-lg-12\">\r\n                <span>&copy; ALLERGAN 2019</span>\r\n            </footer>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "./src/app/allergan/topics/quiz-topics/quiz-topic.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/allergan/topics/quiz-topics/quiz-topic.component.ts ***!
  \*********************************************************************/
/*! exports provided: QuizTopicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizTopicComponent", function() { return QuizTopicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_home_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/home.service */ "./src/app/services/home.service.ts");
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var src_app_models_quizuserresponse__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/quizuserresponse */ "./src/app/models/quizuserresponse.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuizTopicComponent = /** @class */ (function () {
    function QuizTopicComponent(route, router, homeService, commonService) {
        this.route = route;
        this.router = router;
        this.homeService = homeService;
        this.commonService = commonService;
        this.basecampTrue = false;
        this.quizId = 0;
        this.quiz_shell_wrap = false;
        this.quest_alert_text = "";
        this.quest_alert_visible = false;
        this.i = 0;
        this.qust_submit = true;
        this.score = 0;
        this.btnStart = true;
        this.result_wrap = false;
        this.actual_result = true;
        this.btnRetake = false;
        this.btnComplete = false;
        this.quiz_title_wrap = true;
        this.result_image = "";
        this.text_result = "";
        this.answerList = [];
        this.answerCount = 0;
        this.jsonUserAnswer = [];
        this.jsonCorrectAnswer = [];
        this.isDisabled = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.basecampTrue = true;
        this.url = this.commonService.getPreviousUrl().toString();
    }
    QuizTopicComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.quizId == 0) {
            this.route.queryParams.subscribe(function (params) {
                _this.userId = params['userId'],
                    _this.queryUrl = params['queryUrl'],
                    _this.assetsTypeId = params['assetsTypeId'],
                    _this.productId = params['productId'],
                    _this.disId = params['disId'],
                    _this.taId = params['taId'],
                    _this.quizId = params['quizId'],
                    _this.journeyId = params['journeyId'];
            });
        }
        this.homeService.getQuizQuestions(this.quizId).pipe()
            .subscribe(function (data) {
            _this.quiz = data.data;
            _this.quizName = _this.quiz.title;
            _this.questionIds = _this.quiz.jsonData.toString().replace('[', '').replace(']', '').split(','); //Array.of((this.quiz.jsonData).json());
        }, function (error) { });
    };
    QuizTopicComponent.prototype.clickRetake = function (journeyId) {
        this.i = 0;
        this.score = 0;
        this.nOfQuestions = 0;
        this.ngOnInit();
        this.result_wrap = false;
        this.quest_alert_visible = false;
        this.openQuestionPop();
        this.quiz_title_wrap = true;
        this.isDisabled = false;
    };
    QuizTopicComponent.prototype.openQuestionPop = function () {
        this.btnStart = false;
        this.quiz_title_wrap = false;
        this.quiz_shell_wrap = true;
        this.totalQuestions = this.questionIds.length;
        console.log(" this.questionIds : " + this.questionIds);
        this.questionId = Number(this.questionIds[this.i]);
        this.getQuestion(this.questionId);
        this.nOfQuestions = this.questionIds.length;
        this.btnStart = false;
        this.qust_submit = false;
    };
    QuizTopicComponent.prototype.getQuestion = function (questionId) {
        var _this = this;
        this.questionId = Number(questionId);
        this.homeService.getQuestionById(this.questionId).pipe()
            .subscribe(function (data) {
            _this.questionData = data.data;
            console.log(_this.questionData);
            if (_this.questionData != null) {
                _this.jsonData = JSON.parse(_this.questionData.jsonData);
                _this.question = _this.jsonData.question;
                _this.answers = _this.jsonData.answers;
                _this.questionType = _this.jsonData.questionType;
            }
            else {
                _this.qust_submit = true;
                _this.totalQuestions--;
                _this.nOfQuestions--;
                _this.i++;
                _this.onContinue();
            }
        }, function (error) { });
    };
    QuizTopicComponent.prototype.onSubmit = function () {
        this.qust_submit = false;
        this.isDisabled = true;
        if (this.questionType == "MULTIPLE_CHOICE") {
            var thisCount = 0;
            for (var _i = 0, _a = this.answers; _i < _a.length; _i++) {
                var answer = _a[_i];
                if (answer.correct == true)
                    this.jsonCorrectAnswer.push(answer.id);
                if ((this.answerList.indexOf(answer.id) > -1) && answer.correct == true) {
                    this.jsonUserAnswer.push(answer.id);
                    thisCount++;
                }
            }
            if (this.answerCount == thisCount) {
                console.log(thisCount + " : answercount is correct" + this.answerCount);
                this.quest_alert = 'quest_alert_correct';
                this.quest_alert_image = 'correct';
                this.quest_alert_text = ' Correct Answer';
                this.score++;
                this.isCorrect = true;
            }
            else {
                console.log(thisCount + " :answercount is wrong" + this.answerCount);
                this.quest_alert = 'quest_alert_wrong';
                this.quest_alert_image = 'wrong';
                this.quest_alert_text = ' Incorrect Answer';
                this.isCorrect = false;
            }
            this.answerList = [];
        }
        else if (this.questionType == "SINGLE_CHOICE") {
            for (var _b = 0, _c = this.answers; _b < _c.length; _b++) {
                var answer = _c[_b];
                if (answer.correct == true)
                    this.jsonCorrectAnswer.push(answer.id);
                if (answer.id == this.radioSelected) {
                    this.jsonUserAnswer.push(answer.id);
                    if (answer.correct == true) {
                        this.quest_alert = 'quest_alert_correct';
                        this.quest_alert_image = 'correct';
                        this.quest_alert_text = ' Correct Answer';
                        this.isCorrect = true;
                        this.score++;
                        break;
                    }
                    else {
                        this.quest_alert = 'quest_alert_wrong';
                        this.quest_alert_image = 'wrong';
                        this.quest_alert_text = ' Incorrect Answer';
                        this.isCorrect = false;
                        break;
                    }
                }
            }
        }
        // this.qust_submit = false;
        this.quest_alert_visible = true;
        this.quizUserResponse = new src_app_models_quizuserresponse__WEBPACK_IMPORTED_MODULE_4__["QuizUserResponse"]();
        this.quizUserResponse.userId = this.userId;
        this.quizUserResponse.quizId = this.quizId;
        this.quizUserResponse.journeyId = this.journeyId;
        this.quizUserResponse.questionId = this.questionId;
        this.quizUserResponse.jsonUserAnswer = this.jsonUserAnswer;
        this.quizUserResponse.jsonCorrectAnswer = this.jsonCorrectAnswer;
        this.quizUserResponse.isCorrect = this.isCorrect;
        this.quizUserResponse.attempt = 1;
        this.homeService.insertQuizUserResponse(this.quizUserResponse).pipe().subscribe(function (data) {
        }, function (error) {
        });
        this.jsonUserAnswer = [];
        this.jsonCorrectAnswer = [];
        this.totalQuestions--;
        this.i++;
    };
    QuizTopicComponent.prototype.onContinue = function () {
        console.log("totalQuestions: " + this.totalQuestions);
        console.log(" this.i: " + this.i);
        if (this.totalQuestions != 0) {
            this.quest_alert_visible = false;
            this.questionId = Number(this.questionIds[this.i]);
            console.log(" this.questionId: " + this.questionId);
            this.getQuestion(this.questionId);
            this.isDisabled = false;
            // this.qust_submit = true;
        }
        else {
            this.quiz_shell_wrap = false;
            this.quiz_title_wrap = false;
            this.result_wrap = true;
            console.log("Score: " + this.score + "this.nOfQuestions :" + this.nOfQuestions);
            this.passPercentage = (this.score / this.nOfQuestions) * 100;
            if (this.passPercentage >= 80) {
                this.btnComplete = true;
                this.btnRetake = false;
                this.result_image = "result_pass";
                this.text_result = "Congratulations!";
            }
            else {
                this.btnRetake = true;
                this.btnComplete = false;
                this.result_image = "result_fail";
                this.text_result = "Failed! Please try again";
            }
        }
    };
    QuizTopicComponent.prototype.onToggle = function (answerId, event) {
        if (!this.qust_submit)
            this.qust_submit = true;
        this.answers.answer = event;
        if (this.answerList.indexOf(answerId) > -1) {
            this.answerList.splice(this.answerList.indexOf(answerId), 1);
        }
        else {
            this.answerList.push(answerId);
        }
        this.answerCount = this.answerList.length;
    };
    QuizTopicComponent.prototype.markAsComplete = function (journeyId) {
        var _this = this;
        this.commonService.markAssetCompleted(this, journeyId);
        console.log("joouniD: " + this.journeyId);
        //     this.homeService.completeJourney(journeyId, String(this.currentUser.id))
        //       .pipe()
        //       .subscribe(
        //         data => {
        //           console.log("Success in complete")
        //          },
        //         error => {
        // console.log("Error in complete")
        //         });
        console.log("this.url" + this.url);
        this.route.queryParams.subscribe(function (params) {
            _this.router.navigate([_this.url], {
                queryParams: {
                    "userId": _this.userId,
                    "queryUrl": _this.queryUrl,
                    "assetsTypeId": _this.assetsTypeId,
                    "productId": _this.productId,
                    "disId": _this.disId,
                    "taId": _this.taId
                }, skipLocationChange: true
            });
        });
    };
    QuizTopicComponent.prototype.goBack = function (url) {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.router.navigate([url], {
                queryParams: {
                    "userId": _this.currentUser.id,
                    "queryUrl": params['queryUrl'],
                    "assetsTypeId": params['assetsTypeId'],
                    "productId": params['productId'],
                    "disId": params['disId'],
                    "taId": params['taId']
                }, skipLocationChange: true
            });
        });
    };
    QuizTopicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quiz-topic',
            template: __webpack_require__(/*! ./quiz-topic.component.html */ "./src/app/allergan/topics/quiz-topics/quiz-topic.component.html"),
            styles: [__webpack_require__(/*! ./quiz-topic.component.css */ "./src/app/allergan/topics/quiz-topics/quiz-topic.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], src_app_services_home_service__WEBPACK_IMPORTED_MODULE_2__["HomeService"], src_app_services_common_service__WEBPACK_IMPORTED_MODULE_3__["CommonService"]])
    ], QuizTopicComponent);
    return QuizTopicComponent;
}());



/***/ }),

/***/ "./src/app/allergan/topics/top-manu/top-manu.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/allergan/topics/top-manu/top-manu.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsbGVyZ2FuL3RvcGljcy90b3AtbWFudS90b3AtbWFudS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/allergan/topics/top-manu/top-manu.component.html":
/*!******************************************************************!*\
  !*** ./src/app/allergan/topics/top-manu/top-manu.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"auto-container\">\n<div class=\"row\">\n<div class=\"col-md-9 col-sm-9\">\n    <div class=\"main-logo hidden-xs\">\n        <a href=\"index.html\"><img src=\"assets/images/logo2.png\" alt=\"\"></a>\n    </div>\n    <div class=\"menu_tab\">\n        <button type=\"button\" id=\"menu_btn\" class=\"navbar\" data-toggle=\"collapse\"></button>\n        <div class=\"collapse mobile_menu\">\n            <ul class=\"nav navbar-nav\">\n                <li class=\"active\"><a href=\"#\" class=\"\">My Profile</a></li>\n                <li><a href=\"\" class=\"\">Scientific Foundations</a></li>\n                <li><a href=\"\" class=\"\">Core Product Data</a></li>\n                <li><a href=\"\" class=\"\">Pipeline and Launch</a></li>\n                <li><a href=\"\" class=\"\">Field Tools</a></li>\n                <li><a href=\"\" class=\"\">Hot Topics</a></li>\n                <li><a href=\"\" class=\"\">Medical Meetings</a></li>\n                <li><a href=\"\" class=\"\">Expert Talks</a></li>\n                <li><a href=\"\" class=\"\">Compliance Wire</a></li>\n            </ul>\n        </div>\n    </div>\n    <div class=\"searchic\">\n        <input type=\"text\" class=\"search_test\" name=\"\">\n        <button type=\"button\" class=\"search_ic\" id=\"search_btn\"></button>\n    </div>\n    <div class=\"bread_cumb\">\n        <ul>\n            <li><span></span><a href=\"\">Home</a></li>\n        </ul>\n    </div>\n</div>\n<div class=\"col-md-2 col-sm-2\">\n    <div class=\"user_name\">\n        <div class=\"username\">Hi, Sameer <span>MSL</span></div>\n    </div>\n</div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/allergan/topics/top-manu/top-manu.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/allergan/topics/top-manu/top-manu.component.ts ***!
  \****************************************************************/
/*! exports provided: TopManuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopManuComponent", function() { return TopManuComponent; });
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

var TopManuComponent = /** @class */ (function () {
    function TopManuComponent() {
    }
    TopManuComponent.prototype.ngOnInit = function () {
    };
    TopManuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-top-manu',
            template: __webpack_require__(/*! ./top-manu.component.html */ "./src/app/allergan/topics/top-manu/top-manu.component.html"),
            styles: [__webpack_require__(/*! ./top-manu.component.css */ "./src/app/allergan/topics/top-manu/top-manu.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TopManuComponent);
    return TopManuComponent;
}());



/***/ }),

/***/ "./src/app/allergan/topics/topics.component.css":
/*!******************************************************!*\
  !*** ./src/app/allergan/topics/topics.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mycontainer {display: inline-block;\r\n    float: none;\r\n    color: #fff;}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsZXJnYW4vdG9waWNzL3RvcGljcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGNBQWMscUJBQXFCO0lBQy9CLFdBQVc7SUFDWCxXQUFXLENBQUMiLCJmaWxlIjoic3JjL2FwcC9hbGxlcmdhbi90b3BpY3MvdG9waWNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubXljb250YWluZXIge2Rpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZsb2F0OiBub25lO1xyXG4gICAgY29sb3I6ICNmZmY7fSJdfQ== */"

/***/ }),

/***/ "./src/app/allergan/topics/topics.component.html":
/*!*******************************************************!*\
  !*** ./src/app/allergan/topics/topics.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hedpart\">\n    <div class=\"boxed_wrapper\">\n        <app-header-nav [bascampMessage]=\"basecampTrue\" ></app-header-nav>\n        <div class=\"breadcrumbs\">\n            <ul>\n\n                <li><a></a></li>\n            </ul>\n        </div>\n    </div>\n</div>\n<!-- <app-assetsmap></app-assetsmap> -->"

/***/ }),

/***/ "./src/app/allergan/topics/topics.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/allergan/topics/topics.component.ts ***!
  \*****************************************************/
/*! exports provided: TopicsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopicsComponent", function() { return TopicsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TopicsComponent = /** @class */ (function () {
    function TopicsComponent(route, homeService, router) {
        this.route = route;
        this.homeService = homeService;
        this.router = router;
        this.getTopicsComponent = true;
        this.searchActive = false;
        this.basecampTrue = false;
        this.navClick = false;
        this.status = false;
        this.myVar = false;
        this.assetsTypeId = 0;
        this.show = true;
        this.queryUrl = "";
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.basecampTrue = true;
    }
    TopicsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.assetsTypeId = params['assetsTypeId'];
            _this.queryUrl = params['queryUrl'];
        });
    };
    TopicsComponent.prototype.toggleCollapse = function () {
        this.searchActive = !this.searchActive;
    };
    TopicsComponent.prototype.navBarActive = function () {
        this.navClick = !this.navClick;
    };
    TopicsComponent.prototype.onClickedOutside = function () {
        this.navClick = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TopicsComponent.prototype, "getTopicsComponent", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TopicsComponent.prototype, "show", void 0);
    TopicsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-topics',
            template: __webpack_require__(/*! ./topics.component.html */ "./src/app/allergan/topics/topics.component.html"),
            styles: [__webpack_require__(/*! ./topics.component.css */ "./src/app/allergan/topics/topics.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services__WEBPACK_IMPORTED_MODULE_2__["HomeService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TopicsComponent);
    return TopicsComponent;
}());



/***/ }),

/***/ "./src/app/allergan/unassined-assets/index.ts":
/*!****************************************************!*\
  !*** ./src/app/allergan/unassined-assets/index.ts ***!
  \****************************************************/
/*! exports provided: UnassinedAssetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _unassined_assets_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unassined-assets.component */ "./src/app/allergan/unassined-assets/unassined-assets.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnassinedAssetsComponent", function() { return _unassined_assets_component__WEBPACK_IMPORTED_MODULE_0__["UnassinedAssetsComponent"]; });




/***/ }),

/***/ "./src/app/allergan/unassined-assets/unassined-assets.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/allergan/unassined-assets/unassined-assets.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".overflow {\r\n    display: block;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    background-color: rgba(0,0,0,0.8);\r\n    z-index: 2;\r\n}\r\n.boxed_wrapper {\r\n    height: 100vh;\r\n}\r\n.select_course.small_pop {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 50% !important;\r\n    max-width: 933px;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    right: 0;\r\n    z-index: 3;\r\n    transform: translateY(-50%) !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWxsZXJnYW4vdW5hc3NpbmVkLWFzc2V0cy91bmFzc2luZWQtYXNzZXRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsU0FBUztJQUNULFFBQVE7SUFDUixpQ0FBaUM7SUFDakMsVUFBVTtBQUNkO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGNBQWM7SUFDZCxRQUFRO0lBQ1IsVUFBVTtJQUNWLHNDQUFzQztBQUMxQyIsImZpbGUiOiJzcmMvYXBwL2FsbGVyZ2FuL3VuYXNzaW5lZC1hc3NldHMvdW5hc3NpbmVkLWFzc2V0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm92ZXJmbG93IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjgpO1xyXG4gICAgei1pbmRleDogMjtcclxufVxyXG4uYm94ZWRfd3JhcHBlciB7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5zZWxlY3RfY291cnNlLnNtYWxsX3BvcCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiA1MCUgIWltcG9ydGFudDtcclxuICAgIG1heC13aWR0aDogOTMzcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB6LWluZGV4OiAzO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/allergan/unassined-assets/unassined-assets.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/allergan/unassined-assets/unassined-assets.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"min_contner silde_14 ht100\">\n         \n      <app-topics [getTopicsComponent]=\"isSearchActive\"></app-topics>\n    \n        <div class=\"boxed_wrapper\">\n             \n            <!-- Select course popUP -->\n            <div class=\"select_course small_pop\">\n               <section class=\"pop_container\">\n                  <div class=\"pop-content\">\n                    <div class=\"pop-head\">\n                            <div class=\"row unassined-row\">\n                                 <!-- <button class=\"btn btn-info btn-lg previous\" (click)=\"goBack(url)\">Go Back</button> -->\n                            <div class=\"colse_btn\"><button (click)=\"goBack(url)\"></button></div> \n                           <div class=\"col-md-6 col-sm-6\">\n                                <h3><span></span>Unassigned Courses</h3>\n                            </div>\n                            <div class=\"col-md-6 col-sm-6 form_btns\">\n                                 <button class=\"cancel_btn\" (click)=\"cancel(url)\" type=\"button\">Cancel</button>\n                                 <button class=\"updat_btn\" [disabled]=\"unassinedAssets\" (click)=\"updateAll()\">Add To Journey</button>\n                         </div>\n                        </div>\n                     </div>\n                     <div id=\"pop_small\" class=\"pop-scroll-bx\">\n                        <div class=\"scroll-bx-inner\">\n                           <div class=\"small_pop_items\">\n                              <ul class=\"course_trainigs row\" >\n                                 <li *ngFor=\"let course of courses\" class=\"col-6 col-sm-6 col-md-3 col-lg-3\">\n                                    <div class=\"course_no\">\n                                       <p [title]=\"course.title\">{{course.title}}</p>\n                                       <div class=\"course_btns\">\n                                          <span *ngIf=\"course?.contentType?.id===1 || course?.contentType?.id===6\" class=\"ppt_btn\"></span>\n                                              <span *ngIf=\"course?.contentType?.id===2 || course?.contentType?.id===3\" class=\"doc_btn\"></span>                                            \n                                              <span *ngIf=\"course?.contentType?.id===4\" class=\"pdf_btn\"></span>\n                                              <span *ngIf=\"course?.contentType?.id===5\" class=\"play_btn\"></span>\n                                              <span *ngIf=\"course?.contentType?.id===7\" class=\"text_btn\"></span>\n                                              <span *ngIf=\"course?.contentType?.id===8\" class=\"quiz_btn\"></span>\n                                              <!-- <span *ngIf=\"course?.asset?.contentType?.id===12\" class=\"zip_btn\"></span> For future if needed uncomment-->                          \n                                              <span *ngIf=\"course?.contentType?.id===11\" class=\"link_btn\"></span>\n                                             </div>\n                                       \n    \n                                       <div class=\"add_course\"><span>Add Course</span><input  class=\"mat-checkbox-inner-container\" (change)=\"onCheckboxChagen($event, course.id)\" type=\"checkbox\"></div>\n                                    </div>\n                                 </li>\n                                 <div class=\"col-md-12 col-sm-12\" style = \"text-align:center;\" *ngIf=\"unassinedAssets\">\n                                    <p>Course not available.</p>\n                                 </div>\n                              </ul>\n                           </div>\n                           \n\n\n\n                           \n                        </div>\n                     </div>\n                  </div>\n               </section>\n            </div>\n            <footer>\n                <div class=\"auto-container\">\n                    <div class=\"row \">\n                        <div class=\"col-md-12 \">\n                            <!-- <p class=\"footer1 \">© ALLERGAN 2019</p> -->\n                        </div>\n                    </div>\n                </div>\n            </footer>\n            \n        </div>\n        <div class=\"overflow\"></div>\n    </div>"

/***/ }),

/***/ "./src/app/allergan/unassined-assets/unassined-assets.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/allergan/unassined-assets/unassined-assets.component.ts ***!
  \*************************************************************************/
/*! exports provided: UnassinedAssetsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnassinedAssetsComponent", function() { return UnassinedAssetsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UnassinedAssetsComponent = /** @class */ (function () {
    function UnassinedAssetsComponent(route, router, homeService) {
        this.route = route;
        this.router = router;
        this.homeService = homeService;
        this.isSearchActive = false;
        this.unassinedIds = new Array();
        this.unassinedAssets = true;
        this.unassinedAssetsFlag = true;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    UnassinedAssetsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.unassinedAssets = true;
            _this.url = params['url'];
            _this.homeService.getUnassignedAssetsFor(params['userId'], params['assetsTypeId'], params['productId'], params['disId'], params['taId'])
                .pipe()
                .subscribe(function (data) {
                _this.courses = data.data;
                //  alert(this.courses.length);
                if (Number(_this.courses.length) > 0) {
                    _this.unassinedAssets = false;
                    _this.unassinedAssetsFlag = false;
                }
            }, function (error) {
            });
        });
    };
    UnassinedAssetsComponent.prototype.onCheckboxChagen = function (event, value) {
        this.unassinedIds.push(Number(value));
        if (Number(this.unassinedIds.length) > 0) {
            this.unassinedAssets = false;
        }
    };
    UnassinedAssetsComponent.prototype.cancel = function (url) {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.router.navigate([url], { queryParams: {
                    "userId": _this.currentUser.id,
                    "queryUrl": params['queryUrl'],
                    "assetsTypeId": params['assetsTypeId'],
                    "productId": params['productId'],
                    "disId": params['disId'],
                    "taId": params['taId']
                }, skipLocationChange: true });
        });
    };
    UnassinedAssetsComponent.prototype.goBack = function (url) {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.router.navigate([url], { queryParams: {
                    "userId": _this.currentUser.id,
                    "queryUrl": params['queryUrl'],
                    "assetsTypeId": params['assetsTypeId'],
                    "productId": params['productId'],
                    "disId": params['disId'],
                    "taId": params['taId']
                }, skipLocationChange: true });
        });
    };
    UnassinedAssetsComponent.prototype.updateAll = function () {
        var _this = this;
        if (Number(this.unassinedIds.length) == 0) {
            this.unassinedAssets = true;
            return;
        }
        this.homeService.unAssigenedAssets(this.unassinedIds, this.currentUser.id).subscribe(function (data) {
            _this.route.queryParams.subscribe(function (params) {
                _this.unassinedAssets = true;
                _this.homeService.getUnassignedAssetsFor(params['userId'], params['assetsTypeId'], params['productId'], params['disId'], params['taId'])
                    .pipe()
                    .subscribe(function (data) {
                    _this.courses = data.data;
                    //  alert(this.courses.length);
                    if (Number(_this.courses.length) > 0) {
                        _this.unassinedAssets = false;
                    }
                    _this.route.queryParams.subscribe(function (params) {
                        _this.router.navigate([_this.url], { queryParams: {
                                "userId": _this.currentUser.id,
                                "queryUrl": params['queryUrl'],
                                "assetsTypeId": params['assetsTypeId'],
                                "productId": params['productId'],
                                "disId": params['disId'],
                                "taId": params['taId']
                            }, skipLocationChange: true });
                    });
                }, function (error) {
                });
            });
        }, function (error) {
        });
    };
    UnassinedAssetsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-unassined-assets',
            template: __webpack_require__(/*! ./unassined-assets.component.html */ "./src/app/allergan/unassined-assets/unassined-assets.component.html"),
            styles: [__webpack_require__(/*! ./unassined-assets.component.css */ "./src/app/allergan/unassined-assets/unassined-assets.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services__WEBPACK_IMPORTED_MODULE_2__["HomeService"]])
    ], UnassinedAssetsComponent);
    return UnassinedAssetsComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"container\">\n                <alert></alert>\n                <router-outlet></router-outlet>\n    </div>\n\n\n\n<!--<div class=\"text-center\">\n   \n</div>-->"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives */ "./src/app/directives/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards */ "./src/app/guards/index.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./helpers */ "./src/app/helpers/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services */ "./src/app/services/index.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./register */ "./src/app/register/index.ts");
/* harmony import */ var _navbar_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navbar.service */ "./src/app/navbar.service.ts");
/* harmony import */ var _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./userprofile/userprofile.component */ "./src/app/userprofile/userprofile.component.ts");
/* harmony import */ var _allergan_basecamp_basecamp_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./allergan/basecamp/basecamp.component */ "./src/app/allergan/basecamp/basecamp.component.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var _allergan_success_success_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./allergan/success/success.component */ "./src/app/allergan/success/success.component.ts");
/* harmony import */ var _allergan_load_load_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./allergan/load/load.component */ "./src/app/allergan/load/load.component.ts");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-click-outside */ "./node_modules/ng-click-outside/lib/index.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _allergan_therapeuticareas_therapeuticareas_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./allergan/therapeuticareas/therapeuticareas.component */ "./src/app/allergan/therapeuticareas/therapeuticareas.component.ts");
/* harmony import */ var _allergan_mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./allergan/mainpage/mainpage.component */ "./src/app/allergan/mainpage/mainpage.component.ts");
/* harmony import */ var _allergan_topics_topics_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./allergan/topics/topics.component */ "./src/app/allergan/topics/topics.component.ts");
/* harmony import */ var _allergan_completedassets_completedassets_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./allergan/completedassets/completedassets.component */ "./src/app/allergan/completedassets/completedassets.component.ts");
/* harmony import */ var _allergan_unassined_assets_unassined_assets_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./allergan/unassined-assets/unassined-assets.component */ "./src/app/allergan/unassined-assets/unassined-assets.component.ts");
/* harmony import */ var _allergan_topics_assetsmap_assetsmap_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./allergan/topics/assetsmap/assetsmap.component */ "./src/app/allergan/topics/assetsmap/assetsmap.component.ts");
/* harmony import */ var _allergan_topics_alertForTopics__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./allergan/topics/alertForTopics */ "./src/app/allergan/topics/alertForTopics/index.ts");
/* harmony import */ var _allergan_completed_courses_completed_courses_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./allergan/completed-courses/completed-courses.component */ "./src/app/allergan/completed-courses/completed-courses.component.ts");
/* harmony import */ var _allergan_topics_core_product_training_core_product_training_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./allergan/topics/core-product-training/core-product-training.component */ "./src/app/allergan/topics/core-product-training/core-product-training.component.ts");
/* harmony import */ var _allergan_topics_core_disease_training_core_disease_training_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./allergan/topics/core-disease-training/core-disease-training.component */ "./src/app/allergan/topics/core-disease-training/core-disease-training.component.ts");
/* harmony import */ var _allergan_topics_field_tool_training_field_tool_training_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./allergan/topics/field-tool-training/field-tool-training.component */ "./src/app/allergan/topics/field-tool-training/field-tool-training.component.ts");
/* harmony import */ var _allergan_topics_compliance_wire_compliance_wire_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./allergan/topics/compliance-wire/compliance-wire.component */ "./src/app/allergan/topics/compliance-wire/compliance-wire.component.ts");
/* harmony import */ var _allergan_topics_top_manu_top_manu_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./allergan/topics/top-manu/top-manu.component */ "./src/app/allergan/topics/top-manu/top-manu.component.ts");
/* harmony import */ var _allergan_topics_medical_meetings__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./allergan/topics/medical-meetings */ "./src/app/allergan/topics/medical-meetings/index.ts");
/* harmony import */ var _allergan_not_shown_assigned_assets_not_shown_assigned_assets_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./allergan/not-shown-assigned-assets/not-shown-assigned-assets.component */ "./src/app/allergan/not-shown-assigned-assets/not-shown-assigned-assets.component.ts");
/* harmony import */ var _allergan_topics_core_training__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./allergan/topics/core-training */ "./src/app/allergan/topics/core-training/index.ts");
/* harmony import */ var _allergan_topics_new_hire_training__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./allergan/topics/new-hire-training */ "./src/app/allergan/topics/new-hire-training/index.ts");
/* harmony import */ var _admin_services_groupservice__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./admin/services/groupservice */ "./src/app/admin/services/groupservice.ts");
/* harmony import */ var _admin_services_sharedservice__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./admin/services/sharedservice */ "./src/app/admin/services/sharedservice.ts");
/* harmony import */ var _admin_services_metadataService__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./admin/services/metadataService */ "./src/app/admin/services/metadataService.ts");
/* harmony import */ var _admin_services_assetservices__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./admin/services/assetservices */ "./src/app/admin/services/assetservices.ts");
/* harmony import */ var _admin_services_questionbankservice__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./admin/services/questionbankservice */ "./src/app/admin/services/questionbankservice.ts");
/* harmony import */ var _admin_services_batchimportservice__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./admin/services/batchimportservice */ "./src/app/admin/services/batchimportservice.ts");
/* harmony import */ var _allergan_topics_launch_training_launch_training_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./allergan/topics/launch-training/launch-training.component */ "./src/app/allergan/topics/launch-training/launch-training.component.ts");
/* harmony import */ var _admin_services_quizservice__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./admin/services/quizservice */ "./src/app/admin/services/quizservice.ts");
/* harmony import */ var _allergan_topics_quiz_topics_quiz_topic_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./allergan/topics/quiz-topics/quiz-topic.component */ "./src/app/allergan/topics/quiz-topics/quiz-topic.component.ts");
/* harmony import */ var _allergan_shared_shared_module__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./allergan/shared/shared.module */ "./src/app/allergan/shared/shared.module.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














;

;




;














;
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ng_click_outside__WEBPACK_IMPORTED_MODULE_19__["ClickOutsideModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["routing"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_16__["NgMultiSelectDropDownModule"].forRoot(),
                _allergan_shared_shared_module__WEBPACK_IMPORTED_MODULE_46__["SharedModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _directives__WEBPACK_IMPORTED_MODULE_6__["AlertComponent"],
                _home__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _login__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _register__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _userprofile_userprofile_component__WEBPACK_IMPORTED_MODULE_14__["UserprofileComponent"],
                _allergan_basecamp_basecamp_component__WEBPACK_IMPORTED_MODULE_15__["BasecampComponent"],
                _allergan_success_success_component__WEBPACK_IMPORTED_MODULE_17__["SuccessComponent"],
                _allergan_load_load_component__WEBPACK_IMPORTED_MODULE_18__["LoadComponent"],
                _allergan_therapeuticareas_therapeuticareas_component__WEBPACK_IMPORTED_MODULE_20__["TherapeuticareasComponent"],
                _allergan_mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_21__["MainpageComponent"], _allergan_topics_topics_component__WEBPACK_IMPORTED_MODULE_22__["TopicsComponent"],
                _allergan_unassined_assets_unassined_assets_component__WEBPACK_IMPORTED_MODULE_24__["UnassinedAssetsComponent"],
                _allergan_completedassets_completedassets_component__WEBPACK_IMPORTED_MODULE_23__["CompletedassetsComponent"],
                _allergan_topics_alertForTopics__WEBPACK_IMPORTED_MODULE_26__["AlertForTopicsComponent"],
                _allergan_topics_assetsmap_assetsmap_component__WEBPACK_IMPORTED_MODULE_25__["AssetsmapComponent"],
                _allergan_completed_courses_completed_courses_component__WEBPACK_IMPORTED_MODULE_27__["CompletedCoursesComponent"],
                _allergan_topics_core_product_training_core_product_training_component__WEBPACK_IMPORTED_MODULE_28__["CoreProductTrainingComponent"],
                _allergan_topics_core_disease_training_core_disease_training_component__WEBPACK_IMPORTED_MODULE_29__["CoreDiseaseTrainingComponent"],
                _allergan_topics_field_tool_training_field_tool_training_component__WEBPACK_IMPORTED_MODULE_30__["FieldToolTrainingComponent"],
                _allergan_topics_compliance_wire_compliance_wire_component__WEBPACK_IMPORTED_MODULE_31__["ComplianceWireComponent"],
                _allergan_topics_top_manu_top_manu_component__WEBPACK_IMPORTED_MODULE_32__["TopManuComponent"],
                _allergan_topics_medical_meetings__WEBPACK_IMPORTED_MODULE_33__["MedicalMeetingsComponent"],
                _allergan_not_shown_assigned_assets_not_shown_assigned_assets_component__WEBPACK_IMPORTED_MODULE_34__["NotShownAssignedAssetsComponent"],
                _allergan_topics_core_training__WEBPACK_IMPORTED_MODULE_35__["CoreTrainingComponent"],
                _allergan_topics_new_hire_training__WEBPACK_IMPORTED_MODULE_36__["NewHireTrainingComponent"],
                _allergan_topics_launch_training_launch_training_component__WEBPACK_IMPORTED_MODULE_43__["LaunchTrainingComponent"],
                _allergan_topics_quiz_topics_quiz_topic_component__WEBPACK_IMPORTED_MODULE_45__["QuizTopicComponent"],
            ],
            providers: [
                _guards__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"],
                _navbar_service__WEBPACK_IMPORTED_MODULE_13__["NavbarService"],
                _services__WEBPACK_IMPORTED_MODULE_9__["AlertService"],
                _services__WEBPACK_IMPORTED_MODULE_9__["AuthenticationService"],
                _services__WEBPACK_IMPORTED_MODULE_9__["UserService"],
                _admin_services_groupservice__WEBPACK_IMPORTED_MODULE_37__["GroupService"],
                _admin_services_sharedservice__WEBPACK_IMPORTED_MODULE_38__["sharedservice"],
                _services__WEBPACK_IMPORTED_MODULE_9__["CommonService"],
                _admin_services_metadataService__WEBPACK_IMPORTED_MODULE_39__["MetaDataService"],
                _admin_services_questionbankservice__WEBPACK_IMPORTED_MODULE_41__["QuestionBankService"],
                _admin_services_assetservices__WEBPACK_IMPORTED_MODULE_40__["AssetService"],
                _admin_services_quizservice__WEBPACK_IMPORTED_MODULE_44__["QuizService"],
                _admin_services_batchimportservice__WEBPACK_IMPORTED_MODULE_42__["BatchImportService"],
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_8__["JwtInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _helpers__WEBPACK_IMPORTED_MODULE_8__["ErrorInterceptor"], multi: true },
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_47__["HashLocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_47__["HashLocationStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _allergan_success__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./allergan/success */ "./src/app/allergan/success/index.ts");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/app/home/index.ts");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login */ "./src/app/login/index.ts");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register */ "./src/app/register/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards */ "./src/app/guards/index.ts");
/* harmony import */ var _userprofile__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./userprofile */ "./src/app/userprofile/index.ts");
/* harmony import */ var _allergan_basecamp__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./allergan/basecamp */ "./src/app/allergan/basecamp/index.ts");
/* harmony import */ var _allergan_load__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./allergan/load */ "./src/app/allergan/load/index.ts");
/* harmony import */ var _allergan_mainpage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./allergan/mainpage */ "./src/app/allergan/mainpage/index.ts");
/* harmony import */ var _allergan_completed_courses__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./allergan/completed-courses */ "./src/app/allergan/completed-courses/index.ts");
/* harmony import */ var _allergan_completedassets__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./allergan/completedassets */ "./src/app/allergan/completedassets/index.ts");
/* harmony import */ var _allergan_topics_assetsmap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./allergan/topics/assetsmap */ "./src/app/allergan/topics/assetsmap/index.ts");
/* harmony import */ var _allergan_unassined_assets__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./allergan/unassined-assets */ "./src/app/allergan/unassined-assets/index.ts");
/* harmony import */ var _allergan_topics_core_product_training__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./allergan/topics/core-product-training */ "./src/app/allergan/topics/core-product-training/index.ts");
/* harmony import */ var _allergan_topics_field_tool_training__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./allergan/topics/field-tool-training */ "./src/app/allergan/topics/field-tool-training/index.ts");
/* harmony import */ var _allergan_topics_core_disease_training__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./allergan/topics/core-disease-training */ "./src/app/allergan/topics/core-disease-training/index.ts");
/* harmony import */ var _allergan_topics_compliance_wire__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./allergan/topics/compliance-wire */ "./src/app/allergan/topics/compliance-wire/index.ts");
/* harmony import */ var _allergan_topics_medical_meetings__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./allergan/topics/medical-meetings */ "./src/app/allergan/topics/medical-meetings/index.ts");
/* harmony import */ var _allergan_not_shown_assigned_assets__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./allergan/not-shown-assigned-assets */ "./src/app/allergan/not-shown-assigned-assets/index.ts");
/* harmony import */ var _allergan_topics_core_training__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./allergan/topics/core-training */ "./src/app/allergan/topics/core-training/index.ts");
/* harmony import */ var _allergan_topics_new_hire_training__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./allergan/topics/new-hire-training */ "./src/app/allergan/topics/new-hire-training/index.ts");
/* harmony import */ var _allergan_topics_launch_training__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./allergan/topics/launch-training */ "./src/app/allergan/topics/launch-training/index.ts");
/* harmony import */ var _allergan_topics_quiz_topics_quiz_topic_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./allergan/topics/quiz-topics/quiz-topic.component */ "./src/app/allergan/topics/quiz-topics/quiz-topic.component.ts");
























var appRoutes = [
    { path: 'allergan', component: _home__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'update/profile', component: _userprofile__WEBPACK_IMPORTED_MODULE_6__["UserprofileComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'basecamp', component: _allergan_basecamp__WEBPACK_IMPORTED_MODULE_7__["BasecampComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'main', component: _allergan_mainpage__WEBPACK_IMPORTED_MODULE_9__["MainpageComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'success', component: _allergan_success__WEBPACK_IMPORTED_MODULE_1__["SuccessComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'load', component: _allergan_load__WEBPACK_IMPORTED_MODULE_8__["LoadComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'completed/courses', component: _allergan_completed_courses__WEBPACK_IMPORTED_MODULE_10__["CompletedCoursesComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'topic', component: _allergan_topics_assetsmap__WEBPACK_IMPORTED_MODULE_12__["AssetsmapComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'cpt', component: _allergan_topics_core_product_training__WEBPACK_IMPORTED_MODULE_14__["CoreProductTrainingComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'ftt', component: _allergan_topics_field_tool_training__WEBPACK_IMPORTED_MODULE_15__["FieldToolTrainingComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'cdt', component: _allergan_topics_core_disease_training__WEBPACK_IMPORTED_MODULE_16__["CoreDiseaseTrainingComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'cw', component: _allergan_topics_compliance_wire__WEBPACK_IMPORTED_MODULE_17__["ComplianceWireComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'completed/assets', component: _allergan_completedassets__WEBPACK_IMPORTED_MODULE_11__["CompletedassetsComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'unassigned/assets', component: _allergan_unassined_assets__WEBPACK_IMPORTED_MODULE_13__["UnassinedAssetsComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'notshown/assigned/assets', component: _allergan_not_shown_assigned_assets__WEBPACK_IMPORTED_MODULE_19__["NotShownAssignedAssetsComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'quiz/assets', component: _allergan_topics_quiz_topics_quiz_topic_component__WEBPACK_IMPORTED_MODULE_23__["QuizTopicComponent"], canActivate: [_guards__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] },
    { path: 'login', component: _login__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _register__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'mm', component: _allergan_topics_medical_meetings__WEBPACK_IMPORTED_MODULE_18__["MedicalMeetingsComponent"] },
    { path: 'ct', component: _allergan_topics_core_training__WEBPACK_IMPORTED_MODULE_20__["CoreTrainingComponent"] },
    { path: 'nht', component: _allergan_topics_new_hire_training__WEBPACK_IMPORTED_MODULE_21__["NewHireTrainingComponent"] },
    { path: 'lt', component: _allergan_topics_launch_training__WEBPACK_IMPORTED_MODULE_22__["LaunchTrainingComponent"] },
    // { path: 'admin', 
    // loadChildren: './admin/route/route-routing#RouteRoutingModule',
    // canActivate: [AuthGuard],
    // data: { roles: ['admin']}
    {
        path: 'not-found',
        loadChildren: './directives/not-found/not-found-routing.module#NotFoundRoutingModule'
    },
    // otherwise redirect to home
    { path: 'admin',
        loadChildren: './admin/route/route-routing#RouteRoutingModule',
        canActivate: [_guards__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
        data: { roles: ['admin'] }
    },
    { path: '', redirectTo: 'allergan', pathMatch: 'full' },
    {
        path: '**',
        redirectTo: 'not-found'
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { useHash: true, enableTracing: true });


/***/ }),

/***/ "./src/app/directives/alert.component.html":
/*!*************************************************!*\
  !*** ./src/app/directives/alert.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "./src/app/directives/alert.component.ts":
/*!***********************************************!*\
  !*** ./src/app/directives/alert.component.ts ***!
  \***********************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return AlertComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = /** @class */ (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AlertComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'alert',
            template: __webpack_require__(/*! ./alert.component.html */ "./src/app/directives/alert.component.html")
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["AlertService"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/directives/index.ts":
/*!*************************************!*\
  !*** ./src/app/directives/index.ts ***!
  \*************************************/
/*! exports provided: AlertComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.component */ "./src/app/directives/alert.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertComponent", function() { return _alert_component__WEBPACK_IMPORTED_MODULE_0__["AlertComponent"]; });




/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser) {
            JSON.stringify(currentUser.roles);
            if (route.data.roles && route.data.roles.indexOf(currentUser.roles.admin) === -1) {
                this.router.navigate(['/']);
                return false;
            }
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/index.ts":
/*!*********************************!*\
  !*** ./src/app/guards/index.ts ***!
  \*********************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "./src/app/helpers/error.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/helpers/error.interceptor.ts ***!
  \**********************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            if (err.status === 401) {
                _this.authenticationService.logout();
                location.reload(true);
            }
            var error = err.error.errors || err.statusText;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }));
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]])
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/helpers/index.ts":
/*!**********************************!*\
  !*** ./src/app/helpers/index.ts ***!
  \**********************************/
/*! exports provided: ErrorInterceptor, JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error.interceptor */ "./src/app/helpers/error.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return _error_interceptor__WEBPACK_IMPORTED_MODULE_0__["ErrorInterceptor"]; });

/* harmony import */ var _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./jwt.interceptor */ "./src/app/helpers/jwt.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return _jwt_interceptor__WEBPACK_IMPORTED_MODULE_1__["JwtInterceptor"]; });



//export * from './fake-backend';


/***/ }),

/***/ "./src/app/helpers/jwt.interceptor.ts":
/*!********************************************!*\
  !*** ./src/app/helpers/jwt.interceptor.ts ***!
  \********************************************/
/*! exports provided: JwtInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtInterceptor", function() { return JwtInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var JwtInterceptor = /** @class */ (function () {
    function JwtInterceptor(authenticationService) {
        this.authenticationService = authenticationService;
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var currentUser = this.authenticationService.currentUserValue;
        if (currentUser && currentUser.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + currentUser.token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]])
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host{\r\n    height: 100vh;\r\n    /* background-color: blue; */\r\n    text-align: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.min_contner {\r\n    max-width: none;\r\n    margin: none;\r\n}\r\n.section_tab {\r\n     height: 100%;\r\n}\r\n.Slide1 .section_tab,\r\n.Slide2 .section_tab {\r\n    height: 100%;\r\n    flex:5;\r\n}\r\n.mout_upper_img {\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 50px;\r\n}\r\n.mout_upper_img img {\r\n    height: 130px; \r\n    margin-right: 12px;\r\n}\r\nfooter.patern_bg {\r\n    background-size: cover;\r\n    background-repeat: no-repeat;\r\n    background-position: 50% 50%;\r\n    flex:1;\r\n}\r\nfooter.patern_bg p {\r\n    text-align: center;\r\n    padding-top: 5px;\r\n}\r\n.boxed_wrapper {\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.auto-container {\r\n    margin: 0px;\r\n    flex: 2;\r\n    height: auto;\r\n}\r\n.mout_upper_img {\r\n    position: absolute;\r\n    width: 250px;\r\n    height: auto;\r\n    top: 70%;\r\n    right: 14%;\r\n    transform: translateY(-50%);\r\n    z-index: 2;\r\n  \r\n}\r\n.mout_upper_img img {\r\n    height: inherit;\r\n    width: inherit;\r\n}\r\n@media only screen and (max-width: 767px) {\r\n    .btn.greent_btn {\r\n        background: #275899;\r\n        border-radius: 60px;\r\n        font-size: 14px;\r\n        text-transform: uppercase;\r\n        margin-top: 20px;\r\n        padding: 6px 8px;\r\n        color: #fff;\r\n    }\r\n    .firant_page p {\r\n        font-size: 18px;\r\n        margin-top: 12px;\r\n        /* font-weight: bold; */\r\n    }\r\n\r\n    .firant_page img{\r\n        max-width: 60%;\r\n    }\r\n    \r\n}\r\n@media only screen and (max-width: 500px) {\r\n    .btn.greent_btn {\r\n        background: #275899;\r\n        border-radius: 60px;\r\n        font-size: 14px;\r\n        text-transform: uppercase;\r\n        margin-top: 20px;\r\n        padding: 6px 8px;\r\n        color: #fff;\r\n    }\r\n    .firant_page p {\r\n        font-size: 14px;\r\n        margin-top: 10px;\r\n        /* font-weight: bold; */\r\n    }\r\n\r\n    .firant_page img{\r\n        max-width: 50%;\r\n    }\r\n    \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsWUFBWTtBQUNoQjtBQUNBO0tBQ0ssWUFBWTtBQUNqQjtBQUNBOztJQUVJLFlBQVk7SUFDWixNQUFNO0FBQ1Y7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1Qiw0QkFBNEI7SUFDNUIsTUFBTTtBQUNWO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksV0FBVztJQUNYLE9BQU87SUFDUCxZQUFZO0FBQ2hCO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixRQUFRO0lBQ1IsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQixVQUFVOztBQUVkO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztBQUNsQjtBQUNBO0lBQ0k7UUFDSSxtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZix5QkFBeUI7UUFDekIsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixXQUFXO0lBQ2Y7SUFDQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7QUFFSjtBQUNBO0lBQ0k7UUFDSSxtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLGVBQWU7UUFDZix5QkFBeUI7UUFDekIsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQixXQUFXO0lBQ2Y7SUFDQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmx1ZTsgKi9cclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbi5taW5fY29udG5lciB7XHJcbiAgICBtYXgtd2lkdGg6IG5vbmU7XHJcbiAgICBtYXJnaW46IG5vbmU7XHJcbn1cclxuLnNlY3Rpb25fdGFiIHtcclxuICAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLlNsaWRlMSAuc2VjdGlvbl90YWIsXHJcbi5TbGlkZTIgLnNlY3Rpb25fdGFiIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsZXg6NTtcclxufVxyXG4ubW91dF91cHBlcl9pbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDUwcHg7XHJcbn1cclxuLm1vdXRfdXBwZXJfaW1nIGltZyB7XHJcbiAgICBoZWlnaHQ6IDEzMHB4OyBcclxuICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxufVxyXG5mb290ZXIucGF0ZXJuX2JnIHtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcclxuICAgIGZsZXg6MTtcclxufVxyXG5cclxuZm9vdGVyLnBhdGVybl9iZyBwIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5ib3hlZF93cmFwcGVyIHtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4uYXV0by1jb250YWluZXIge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBmbGV4OiAyO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4ubW91dF91cHBlcl9pbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgdG9wOiA3MCU7XHJcbiAgICByaWdodDogMTQlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgei1pbmRleDogMjtcclxuICBcclxufVxyXG4ubW91dF91cHBlcl9pbWcgaW1nIHtcclxuICAgIGhlaWdodDogaW5oZXJpdDtcclxuICAgIHdpZHRoOiBpbmhlcml0O1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5idG4uZ3JlZW50X2J0biB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzI3NTg5OTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNnB4IDhweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIC5maXJhbnRfcGFnZSBwIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgICAvKiBmb250LXdlaWdodDogYm9sZDsgKi9cclxuICAgIH1cclxuXHJcbiAgICAuZmlyYW50X3BhZ2UgaW1ne1xyXG4gICAgICAgIG1heC13aWR0aDogNjAlO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgLmJ0bi5ncmVlbnRfYnRuIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMjc1ODk5O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDYwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICBwYWRkaW5nOiA2cHggOHB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgLmZpcmFudF9wYWdlIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIC8qIGZvbnQtd2VpZ2h0OiBib2xkOyAqL1xyXG4gICAgfVxyXG5cclxuICAgIC5maXJhbnRfcGFnZSBpbWd7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA1MCU7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"min_contner Slide1\">\n\n    <div class=\"boxed_wrapper\">\n        <div class=\"auto-container\">\n            <div class=\"row\">\n                <div class=\"col-md-2\">\n                    <div class=\"main-logo\">\n                        <a><img src=\"assets/images/logo2.png\" alt=\"\"></a>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <section class=\"section_tab\">\n            <div class=\"auto-container\">\n                <div class=\"row\">\n                    <div class=\"col-md-6 col-sm-12 col-md-offset-1 firant_page\">\n                        <h3>Welcome to</h3>\n                        <div class=\"suceed_logo\">\n                            <img src=\"assets/images/Allergan_Suceed_Logo.png\" alt=\"logo\">\n                        </div>\n                        <a (click)=\"logout();\">Logout</a>\n                        <p>A platform for all your training needs. We have collated all your training needs in one place\n                            for easier access and to enhance your learning experience.</p>\n                        <div class=\"btn greent_btn\" (click)=\"onUpdateProfile()\">Start YOUR TREK!</div>\n                    </div>\n                </div>\n                <div class=\"mout_upper_img\" ><img src=\"assets/images/ft_img_1.png\"></div>\n            </div>\n        </section>\n        <footer class=\"patern_bg\">\n            <div class=\"auto-container\">\n                <div class=\"row \">\n                    <div class=\"col-md-12 \">\n                        <p class=\"footer1 \">© ALLERGAN 2019</p>\n                    </div>\n                </div>\n            </div>\n\n\n        </footer>\n    </div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = /** @class */ (function () {
    // region:Array<any>=[];
    function HomeComponent(userService, homeService, router) {
        this.userService = userService;
        this.homeService = homeService;
        this.router = router;
        this.users = [];
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.logout = function () {
        localStorage.removeItem('currentUser');
        localStorage.clear();
        location.reload();
        // alert(localStorage.getItem('currentUser'));
        // this.router.navigate(['/login']);
    };
    HomeComponent.prototype.onUpdateProfile = function () {
        var _this = this;
        this.homeService.updateProfile(this.currentUser.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])())
            .subscribe(function (data) {
            if (data.data.status == false) {
                //this.region.push(data.data.region);
                _this.router.navigate(['/update/profile']);
            }
            else {
                _this.router.navigate(['/basecamp']);
            }
        }, function (error) {
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ selector: 'home-coponent',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"), styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")] }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_3__["UserService"], _services__WEBPACK_IMPORTED_MODULE_3__["HomeService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/index.ts":
/*!*******************************!*\
  !*** ./src/app/home/index.ts ***!
  \*******************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return _home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"]; });




/***/ }),

/***/ "./src/app/login/index.ts":
/*!********************************!*\
  !*** ./src/app/login/index.ts ***!
  \********************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return _login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"]; });




/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row\">\n        <div class=\"col-sm-6 offset-sm-3\"> \n<h2>Login</h2>\n\n\n<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n            <div *ngIf=\"f.username.errors.minlength\">Username must be at least 3 characters</div>\n\n            \n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n       \n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n                <div *ngIf=\"f.password.errors.required\">Password is required</div>\n                <div *ngIf=\"f.password.errors.minlength\">Password must be at least 5 characters</div>\n            </div>\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\n        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        <!-- <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a> -->\n    </div>\n</form>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, route, router, authenticationService, alertService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.isLoggedIn$ = false;
        this.loading = false;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)]]
        });
        this.authenticationService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.isLoggedIn$ = true;
            _this.authenticationService.currentUser.subscribe(function (x) {
                _this.currentUser = x;
            });
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html") }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/AssetJourneyRequestParams.ts":
/*!*****************************************************!*\
  !*** ./src/app/models/AssetJourneyRequestParams.ts ***!
  \*****************************************************/
/*! exports provided: AssetJourneyRequestParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetJourneyRequestParams", function() { return AssetJourneyRequestParams; });
var AssetJourneyRequestParams = /** @class */ (function () {
    function AssetJourneyRequestParams(userId, assetTypeId, therapeuticId, poductId, diseaseStateId) {
        this.userId = userId;
        this.assetTypeId = assetTypeId;
        this.therapeuticId = therapeuticId;
        this.poductId = poductId;
        this.diseaseStateId = diseaseStateId;
    }
    return AssetJourneyRequestParams;
}());



/***/ }),

/***/ "./src/app/models/ProductAndDiseaseIds.ts":
/*!************************************************!*\
  !*** ./src/app/models/ProductAndDiseaseIds.ts ***!
  \************************************************/
/*! exports provided: ProductAndDiseaseIds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAndDiseaseIds", function() { return ProductAndDiseaseIds; });
var ProductAndDiseaseIds = /** @class */ (function () {
    function ProductAndDiseaseIds(taId, productId, diseaseId, queryUrl) {
        this.taId = taId;
        this.productId = productId;
        this.diseaseId = diseaseId;
        this.queryUrl = queryUrl;
    }
    return ProductAndDiseaseIds;
}());



/***/ }),

/***/ "./src/app/models/Therapeuticareas.ts":
/*!********************************************!*\
  !*** ./src/app/models/Therapeuticareas.ts ***!
  \********************************************/
/*! exports provided: Therapeuticareas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Therapeuticareas", function() { return Therapeuticareas; });
var Therapeuticareas = /** @class */ (function () {
    function Therapeuticareas() {
    }
    return Therapeuticareas;
}());



/***/ }),

/***/ "./src/app/models/country.ts":
/*!***********************************!*\
  !*** ./src/app/models/country.ts ***!
  \***********************************/
/*! exports provided: Country */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return Country; });
var Country = /** @class */ (function () {
    function Country(id, regionId, name) {
        this.id = id;
        this.regionId = regionId;
        this.name = name;
    }
    return Country;
}());



/***/ }),

/***/ "./src/app/models/index.ts":
/*!*********************************!*\
  !*** ./src/app/models/index.ts ***!
  \*********************************/
/*! exports provided: AssetJourneyRequestParams, User, Region, Country, Update, ProductAndDiseaseIds, Therapeuticareas, Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user */ "./src/app/models/user.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _user__WEBPACK_IMPORTED_MODULE_0__["User"]; });

/* harmony import */ var _region__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./region */ "./src/app/models/region.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Region", function() { return _region__WEBPACK_IMPORTED_MODULE_1__["Region"]; });

/* harmony import */ var _country__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./country */ "./src/app/models/country.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return _country__WEBPACK_IMPORTED_MODULE_2__["Country"]; });

/* harmony import */ var _update__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./update */ "./src/app/models/update.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Update", function() { return _update__WEBPACK_IMPORTED_MODULE_3__["Update"]; });

/* harmony import */ var _AssetJourneyRequestParams__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AssetJourneyRequestParams */ "./src/app/models/AssetJourneyRequestParams.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AssetJourneyRequestParams", function() { return _AssetJourneyRequestParams__WEBPACK_IMPORTED_MODULE_4__["AssetJourneyRequestParams"]; });

/* harmony import */ var _ProductAndDiseaseIds__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProductAndDiseaseIds */ "./src/app/models/ProductAndDiseaseIds.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProductAndDiseaseIds", function() { return _ProductAndDiseaseIds__WEBPACK_IMPORTED_MODULE_5__["ProductAndDiseaseIds"]; });

/* harmony import */ var _Therapeuticareas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Therapeuticareas */ "./src/app/models/Therapeuticareas.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Therapeuticareas", function() { return _Therapeuticareas__WEBPACK_IMPORTED_MODULE_6__["Therapeuticareas"]; });

/* harmony import */ var _role__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./role */ "./src/app/models/role.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return _role__WEBPACK_IMPORTED_MODULE_7__["Role"]; });











/***/ }),

/***/ "./src/app/models/quizuserresponse.ts":
/*!********************************************!*\
  !*** ./src/app/models/quizuserresponse.ts ***!
  \********************************************/
/*! exports provided: QuizUserResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizUserResponse", function() { return QuizUserResponse; });
var QuizUserResponse = /** @class */ (function () {
    function QuizUserResponse() {
    }
    return QuizUserResponse;
}());



/***/ }),

/***/ "./src/app/models/region.ts":
/*!**********************************!*\
  !*** ./src/app/models/region.ts ***!
  \**********************************/
/*! exports provided: Region */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Region", function() { return Region; });
var Region = /** @class */ (function () {
    function Region(id, name) {
        this.id = id;
        this.name = name;
    }
    return Region;
}());



/***/ }),

/***/ "./src/app/models/role.ts":
/*!********************************!*\
  !*** ./src/app/models/role.ts ***!
  \********************************/
/*! exports provided: Role */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Role", function() { return Role; });
var Role = /** @class */ (function () {
    function Role() {
        this["user"] = "";
        this["admin"] = "";
    }
    return Role;
}());



/***/ }),

/***/ "./src/app/models/update.ts":
/*!**********************************!*\
  !*** ./src/app/models/update.ts ***!
  \**********************************/
/*! exports provided: Update */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Update", function() { return Update; });
var Update = /** @class */ (function () {
    function Update(firstname, lastname, regionValue, email, country, ta, diseasestate, product) {
        if (diseasestate === void 0) { diseasestate = []; }
        if (product === void 0) { product = []; }
        this.firstname = firstname;
        this.lastname = lastname;
        this.regionValue = regionValue;
        this.email = email;
        this.country = country;
        this.ta = ta;
        this.diseasestate = diseasestate;
        this.product = product;
    }
    return Update;
}());



/***/ }),

/***/ "./src/app/models/user.ts":
/*!********************************!*\
  !*** ./src/app/models/user.ts ***!
  \********************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
        this.role = [];
        this.groups = [{ "id": 0, "name": "" }];
    }
    return User;
}());



/***/ }),

/***/ "./src/app/navbar.service.ts":
/*!***********************************!*\
  !*** ./src/app/navbar.service.ts ***!
  \***********************************/
/*! exports provided: NavbarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarService", function() { return NavbarService; });
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

var NavbarService = /** @class */ (function () {
    function NavbarService() {
        this.visible = false;
    }
    NavbarService.prototype.hide = function () { this.visible = false; };
    NavbarService.prototype.show = function () { this.visible = true; };
    NavbarService.prototype.toggle = function () { this.visible = !this.visible; };
    NavbarService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], NavbarService);
    return NavbarService;
}());



/***/ }),

/***/ "./src/app/register/index.ts":
/*!***********************************!*\
  !*** ./src/app/register/index.ts ***!
  \***********************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.component */ "./src/app/register/register.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return _register_component__WEBPACK_IMPORTED_MODULE_0__["RegisterComponent"]; });




/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Register</h2>\n<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"form-group\">\n        <label for=\"name\">Name</label>\n        <input type=\"text\" formControlName=\"name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" />\n        <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.name.errors.required\">Name is required</div>\n            <div *ngIf=\"f.username.errors.minlength\">Name must be at least 8 characters</div>\n            <div *ngIf=\"f.username.errors.maxlength\">Name must be less then 30 characters</div>\n        </div>\n    </div>\n\n    <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" formControlName=\"username\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.username.errors }\" />\n        <div *ngIf=\"submitted && f.username.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.username.errors.required\">Username is required</div>\n            <div *ngIf=\"f.username.errors.minlength\">Username must be at least 8 characters</div>\n            <div *ngIf=\"f.username.errors.maxlength\">Username must be less then 30 characters</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <label for=\"password\">Password</label>\n        <input type=\"password\" formControlName=\"password\"  class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n        <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\n            <div *ngIf=\"f.password.errors.required\">Password is required</div>\n            <div *ngIf=\"f.password.errors.minlength\">Password must be at least 8 characters</div>\n            <div *ngIf=\"f.password.errors.maxlength\">Password must be less then 30 characters</div>\n            <div *ngIf=\"f.password.errors?.pattern\">Password must be alphanumeric</div>\n        </div>\n    </div>\n    <div class=\"form-group\">\n        <button [disabled]=\"loading\" class=\"btn btn-primary\">Register</button>\n        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n    </div>\n</form>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder, router, userService, alertService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.userService = userService;
        this.alertService = alertService;
        this.loading = false;
        this.submitted = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/")]]
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        this.loading = true;
        this.userService.register(this.registerForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])())
            .subscribe(function (data) {
            _this.alertService.success('Registration successful', true);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({ template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html") }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _services__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["AlertService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/services/alert.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alert.service.ts ***!
  \*******************************************/
/*! exports provided: AlertService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return AlertService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = /** @class */ (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.keepAfterNavigationChange = false;
        router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                if (_this.keepAfterNavigationChange) {
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    AlertService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AlertService);
    return AlertService;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/*!****************************************************!*\
  !*** ./src/app/services/authentication.service.ts ***!
  \****************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        // alert(JSON.stringify(localStorage.getItem('currentUser')));
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }
    Object.defineProperty(AuthenticationService.prototype, "currentUserValue", {
        get: function () {
            return this.currentUserSubject.value;
        },
        enumerable: true,
        configurable: true
    });
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        ///users/authenticate
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + "/api/allergan/stp/login", { username: username, password: password })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (user) {
            if (user && user.token) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                _this.currentUserSubject.next(user);
            }
            return user;
        }));
    };
    AuthenticationService.prototype.logout = function () {
        //   this.nav.hide();
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/common.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models_AssetJourneyRequestParams__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/AssetJourneyRequestParams */ "./src/app/models/AssetJourneyRequestParams.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var currentCrumb = "";
var CommonService = /** @class */ (function () {
    function CommonService(router) {
        var _this = this;
        this.router = router;
        this._breadCrumb = "";
        this.previousUrl = undefined;
        this.currentUrl = undefined;
        this.rootList = [{ id: 1, title: 'Basecamp', routerLink: '/basecamp', urlLink: '/basecamp', userId: "", assetsTypeId: "" }];
        this.currentUrl = this.router.url;
        router.events.subscribe(function (event) {
            //   if (event instanceof NavigationEnd) {        
            //     this.previousUrl = this.currentUrl;
            //     this.currentUrl = event.url;
            //   };
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["ResolveEnd"]) {
                _this.previousUrl = _this.currentUrl;
                _this.currentUrl = event.url;
            }
            ;
        });
    }
    CommonService.prototype.getRootList = function () {
        return this.rootList;
    };
    CommonService.prototype.clearRootList = function () {
        this.rootList.splice(0, this.rootList.length);
    };
    CommonService.prototype.addElementToRootList = function (indexType, input, routerLink, urlLink, userId, assetsTypeId) {
        if (input != undefined) {
            var elementupdated = true;
            for (var R = 0; R < this.rootList.length; R++) {
                var currentElement = this.rootList[R];
                if (currentElement.id == indexType) {
                    elementupdated = false;
                    currentElement.title = input;
                    currentElement.userId = userId;
                    currentElement.routerLink = routerLink;
                    currentElement.urlLink = urlLink;
                    currentElement.assetsTypeId = assetsTypeId;
                }
            }
            if (elementupdated) {
                this.rootList.push({ id: indexType, title: input, routerLink: routerLink, urlLink: urlLink, userId: userId, assetsTypeId: assetsTypeId });
            }
            // alert(elementupdated);
        }
    };
    CommonService.prototype.getRootUrlList = function () {
        return this.rootList;
    };
    Object.defineProperty(CommonService.prototype, "breadCrumb", {
        get: function () {
            return this._breadCrumb;
        },
        set: function (breadCrumb) {
            this._breadCrumb = breadCrumb;
        },
        enumerable: true,
        configurable: true
    });
    CommonService.prototype.getAssetImage = function (assetImage) {
        if (assetImage >= 0) {
            if (assetImage == 1 || assetImage == 6) {
                return "ppt";
            }
            else if (assetImage == 2 || assetImage == 3) {
                return "doc";
            }
            else if (assetImage == 4) {
                return "pdf";
            }
            else if (assetImage == 5) {
                return "video";
            }
            else if (assetImage == 7) {
                return "txt";
            }
            else if (assetImage == 8) {
                return "quiz";
            }
            else if (assetImage == 9 || assetImage == 10) {
                return "xls";
            }
            else if (assetImage == 11) {
                return "link";
            }
            else if (assetImage == 12) {
                return "zip";
            }
        }
    };
    // getAssetImage(assetImage: String) {
    //   if (assetImage != null) {
    //     if (assetImage.indexOf('.pdf') > -1) { return "pdf"; }
    //     else if (assetImage.indexOf('.mp4') > -1) { return "video"; }
    //     else if (assetImage.indexOf('.doc') > -1 || assetImage.indexOf('.docx') > -1) { return "doc"; }
    //     else if (assetImage.indexOf('.doc') > -1 || assetImage.indexOf('.docx') > -1) { return "doc"; }
    //     else if (assetImage.indexOf('.xls') > -1 || assetImage.indexOf('.xlsx') > -1) { return "xls"; }
    //     else if (assetImage.indexOf('.ppt') > -1 || assetImage.indexOf('.pptx') > -1) { return "ppt"; }
    //     else if (assetImage.indexOf('.txt') > -1) { return "txt"; }
    //     else if (assetImage.indexOf('.zip') > -1) { return "zip"; }
    //     else { return "quiz"; }
    //   }
    // }
    CommonService.prototype.getJourneyImage = function (count, assetUserJourney, mouseOvered, showNotCompleted) {
        var journeyClass = " ";
        if ((count >= 1 || count >= 2 || count >= 3 || count >= 4) && assetUserJourney) {
            if (assetUserJourney.asset.contentType.id != 8 && (assetUserJourney.asset.mandatory === false || !showNotCompleted)) {
                journeyClass += " upcoming ";
            }
            if (assetUserJourney.asset.mandatory === true && assetUserJourney.asset.contentType.id != 8) {
                journeyClass += " mandatory ";
            }
            if (assetUserJourney.asset.contentType.id != 8 && mouseOvered && assetUserJourney.asset.mandatory === false) {
                journeyClass += " inprogressred ";
            }
            if (mouseOvered && assetUserJourney.asset.mandatory === true && assetUserJourney.asset.contentType.id != 8) {
                journeyClass += " inprogress ";
            }
            if (mouseOvered) {
                journeyClass += " active ";
            }
            if (assetUserJourney.asset.contentType.id == 8 && (assetUserJourney.asset.mandatory === true || assetUserJourney.asset.mandatory === false)) {
                journeyClass += " quiz inprogressquiz";
            }
        }
        //   if(count>=1 && assetUserJourney && assetUserJourney.asset.mandatory===false){
        //    journeyClass +=" upcoming ";
        //   }
        //   if(assetUserJourney && assetUserJourney.asset.mandatory===true && assetUserJourney.asset.contentType.id!=8){
        //    journeyClass +=" mandatory ";
        //   }
        //   if(count>0 && mouseOvered && assetUserJourney &&assetUserJourney.asset.mandatory===false){
        //    journeyClass +=" inprogressred ";
        //   }
        //   if(count>0 && mouseOvered && assetUserJourney &&assetUserJourney.asset.mandatory===true && assetUserJourney.asset.contentType.id!=8){
        //    journeyClass +=" inprogress ";
        //   }
        //   if(count>0 && mouseOvered){
        //    journeyClass +=" active ";
        //   }
        //   if(count>0 && assetUserJourney && assetUserJourney.asset.mandatory===true  && assetUserJourney.asset.contentType.id==8){
        //    journeyClass +=" quiz inprogressquiz";
        //   }
        return journeyClass;
    };
    CommonService.prototype.getPreviousUrl = function () {
        if (this.previousUrl != null)
            return this.previousUrl = this.previousUrl.substr(0, this.previousUrl.indexOf('?'));
        else
            return this.previousUrl = "/main";
    };
    CommonService.prototype.openAsset = function (thisInst, assetUserJourney) {
        //alert("kkkkk");
        thisInst.assetloader = true;
        console.log("journy id: " + assetUserJourney.id);
        console.log("assetUserJourney.asset.contentType.id:" + JSON.stringify(assetUserJourney));
        if (assetUserJourney.asset.contentType.id == 11) {
            window.open("https://" + assetUserJourney.asset.deepLink, '_blank');
            thisInst.assetloader = false;
        }
        else if (assetUserJourney.asset.contentType.id == 8) {
            thisInst.route.queryParams.subscribe(function (params) {
                thisInst.router.navigate(['/quiz/assets'], {
                    queryParams: {
                        "url": assetUserJourney.asset.assetType,
                        "userId": params['userId'],
                        "quizId": assetUserJourney.asset.fileName,
                        "journeyId": assetUserJourney.id,
                        "queryUrl": params['queryUrl'],
                        "assetsTypeId": params['assetsTypeId'],
                        "productId": params['productId'],
                        "disId": params['disId'],
                        "taId": params['taId']
                    }, skipLocationChange: true
                });
            });
            thisInst.assetloader = false;
        }
        else {
            //alert("22");
            thisInst.homeService.openAsset(thisInst.currentUser.id, assetUserJourney.id)
                .pipe()
                .subscribe(function (content) {
                console.log("response: " + content);
                if (navigator.appVersion.toString().indexOf('.NET') > 0) {
                    var blob = new Blob([content], { type: content.type });
                    window.navigator.msSaveBlob(blob, assetUserJourney.asset.fileName);
                    thisInst.assetloader = false;
                }
                else {
                    var blob = new Blob([content], { type: content.type }), url = window.URL.createObjectURL(blob);
                    window.open(url);
                    thisInst.assetloader = false;
                }
                thisInst.route.queryParams.subscribe(function (params) {
                    thisInst.homeService.getOrderedAssetsFor(new _models_AssetJourneyRequestParams__WEBPACK_IMPORTED_MODULE_2__["AssetJourneyRequestParams"](Number(params['userId']), Number(params['assetsTypeId']), Number(params['taId']), Number(params['productId']), Number(params['disId'])))
                        .pipe()
                        .subscribe(function (data) {
                        thisInst.route.paramMap.subscribe(function (params) {
                            // this.showNotCompleted=false;
                            thisInst.assetUserJourney = data.data;
                            if (Number(thisInst.assetUserJourney.length) >= 1) {
                                //this.showNotCompleted=true;
                            }
                            thisInst.count = Number(thisInst.assetUserJourney.length);
                            // alert(this.count);
                        }, function (error) {
                            thisInst.assetloader = false;
                        });
                    }, function (error) {
                        thisInst.assetloader = false;
                    });
                });
            }, function (error) {
                console.log("error2: " + error);
                thisInst.assetloader = false;
            });
        }
    };
    CommonService.prototype.showCompletedAssets = function (thisInst, url) {
        thisInst.route.queryParams.subscribe(function (params) {
            thisInst.router.navigate(['completed/courses'], {
                queryParams: {
                    "userId": params['userId'],
                    "url": url,
                    "queryUrl": thisInst.queryUrl,
                    "assetsTypeId": params['assetsTypeId'],
                    "productId": params['productId'],
                    "disId": params['disId'],
                    "taId": params['taId']
                }, skipLocationChange: true
            });
        });
    };
    CommonService.prototype.showUnAssignedAssets = function (thisInst, url) {
        thisInst.route.queryParams.subscribe(function (params) {
            thisInst.router.navigate(['/unassigned/assets'], {
                queryParams: {
                    "userId": params['userId'],
                    "url": url,
                    "queryUrl": params['queryUrl'],
                    "assetsTypeId": params['assetsTypeId'],
                    "productId": params['productId'],
                    "disId": params['disId'],
                    "taId": params['taId']
                }, skipLocationChange: true
            });
        });
    };
    CommonService.prototype.getQueuedAssets = function (thisInst, assetType) {
        thisInst.route.queryParams.subscribe(function (params) {
            thisInst.router.navigate(['/notshown/assigned/assets'], {
                queryParams: {
                    "userId": params['userId'],
                    "url": assetType,
                    "queryUrl": params['queryUrl'],
                    "assetsTypeId": params['assetsTypeId'],
                    "productId": params['productId'],
                    "disId": params['disId'],
                    "taId": params['taId'],
                    "unshowncount": (thisInst.assetUserJourney.length - thisInst.decrCount)
                }, skipLocationChange: true
            });
        });
    };
    CommonService.prototype.markAssetCompleted = function (thisInst, assetJourneyId) {
        console.log("assetJourneyId: " + assetJourneyId);
        thisInst.homeService.completeJourney(assetJourneyId, String(thisInst.currentUser.id))
            .pipe()
            .subscribe(function (data) {
            if (data.data) {
                thisInst.loadAll = true;
                thisInst.route.queryParams.subscribe(function (params) {
                    thisInst.homeService.getOrderedAssetsFor(new _models_AssetJourneyRequestParams__WEBPACK_IMPORTED_MODULE_2__["AssetJourneyRequestParams"](Number(params['userId']), Number(params['assetsTypeId']), Number(params['taId']), Number(params['productId']), Number(params['disId'])))
                        .pipe()
                        .subscribe(function (data) {
                        thisInst.route.paramMap.subscribe(function (params) {
                            thisInst.loadAll = false;
                            thisInst.showNotCompleted = false;
                            thisInst.assetUserJourney = data.data;
                            if (Number(thisInst.assetUserJourney.length) >= 1) {
                                thisInst.showNotCompleted = true;
                            }
                            thisInst.count = Number(thisInst.assetUserJourney.length);
                        }, function (error) {
                        });
                        thisInst.homeService.getCompletedAssets(params['userId'], params['assetsTypeId'], params['productId'], params['disId'], params['taId'])
                            .pipe()
                            .subscribe(function (data) {
                            thisInst.lengthForData = data.data;
                            console.log("lengthForData: " + thisInst.lengthForData);
                            thisInst.showNotCompleted = false;
                            //this.completedStatus=true;
                            if (Number(thisInst.lengthForData.length) >= 1) {
                                // this.completedStatus=false;
                                thisInst.showNotCompleted = true;
                            }
                        }, function (error) {
                        });
                    });
                });
            }
        }, function (error) {
        });
    };
    CommonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/services/home.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/home.service.ts ***!
  \******************************************/
/*! exports provided: HomeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return HomeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
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



var HomeService = /** @class */ (function () {
    function HomeService(http) {
        this.http = http;
    }
    HomeService.prototype.updateProfile = function (id) {
        ///users/authenticate
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/user/detail/" + id);
    };
    HomeService.prototype.getRegion = function () {
        ///users/authenticate
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/user/region");
    };
    HomeService.prototype.getDiseaseState = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/user/diseasestate/" + id);
    };
    HomeService.prototype.getAssets = function (id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/user/asset-type/" + Number(id));
    };
    HomeService.prototype.getTherapeuticAreas = function (userId, assetId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/user/therapeutic-areas/" + Number(userId) + "/" + Number(assetId));
    };
    HomeService.prototype.getdiseaseStatesProducts = function (userid, id) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/user/" + userid + "/" + id);
    };
    HomeService.prototype.getCompletedAssetsFor = function (assetJourneyParams) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/user/asset/journey");
    };
    HomeService.prototype.getOrderedAssetsFor = function (assetJourneyParams) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/user/asset/journey/ordered-assets?userId=" +
            assetJourneyParams.userId + '&assetTypeId=' + assetJourneyParams.assetTypeId + '&therrapeuticAreaId=' + assetJourneyParams.therapeuticId +
            '&productId=' + assetJourneyParams.poductId + '&diseaseStateId=' + assetJourneyParams.diseaseStateId);
    };
    HomeService.prototype.getUnassignedAssetsFor = function (userId, assetsTypeId, productId, disId, taId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("userId", userId).set("assetTypeId", assetsTypeId).set("productId", productId).set("diseaseStateId", disId).set("therrapeuticAreaId", taId);
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/user/asset/journey/unassigned-assets", { params: params });
    };
    HomeService.prototype.addAssetsFor = function (userId, assetTypeId, therapeuticId, poductId, diseaseStateId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/user/asset/journey");
    };
    HomeService.prototype.getCompletedAssets = function (userId, assetsTypeId, productId, disId, taId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("userId", userId).set("assetTypeId", assetsTypeId).set("productId", productId).set("diseaseStateId", disId).set("therrapeuticAreaId", taId);
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/user/asset/journey/completed-assets", { params: params });
    };
    HomeService.prototype.completeJourney = function (assetJourneyId, userId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set("assetJourneyId", assetJourneyId).set("userId", userId).set("status", "2");
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/user/asset/journey/change-asset-status", { params: params });
    };
    HomeService.prototype.openAsset = function (userId, assetJourneyId) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/user/asset/journey/open-asset?assetJourneyId=" + assetJourneyId + '&userId=' + userId;
        return this.http.get(url, { responseType: 'blob' });
    };
    HomeService.prototype.downloadPDF = function (userId, assetJourneyId) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/user/asset/journey/open-asset?assetJourneyId=" + assetJourneyId + '&userId=' + userId;
        return this.http.get(url, { responseType: 'blob' });
    };
    HomeService.prototype.unAssigenedAssets = function (listIds, userId) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/user/asset/journey/add-asset/" + userId, listIds);
    };
    HomeService.prototype.notificationMarkAsSeen = function (notifcationIds, userId) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/user/asset/journey/open-asset?userId=" + userId + '&notifcationIds=' + notifcationIds;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/user/notification/mark-as-seen?userId=" + userId, notifcationIds);
    };
    HomeService.prototype.getUserNotifications = function (userId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/user/notification/user-notifications?userId=" + userId);
    };
    HomeService.prototype.getQuizQuestions = function (quizId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/user/get-quiz/" + quizId);
    };
    HomeService.prototype.getQuestionById = function (questionId) {
        return this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/user/getQuizquestion/" + questionId);
    };
    HomeService.prototype.insertQuizUserResponse = function (quizUserResponse) {
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiUrl + "/api/allergan/stp/v4/user/insertQuizUserResponse", quizUserResponse);
    };
    HomeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], HomeService);
    return HomeService;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: AlertService, AuthenticationService, UserService, HomeService, CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _alert_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.service */ "./src/app/services/alert.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertService", function() { return _alert_service__WEBPACK_IMPORTED_MODULE_0__["AlertService"]; });

/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return _authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"]; });

/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });

/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.service */ "./src/app/services/home.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HomeService", function() { return _home_service__WEBPACK_IMPORTED_MODULE_3__["HomeService"]; });

/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common.service */ "./src/app/services/common.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return _common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]; });








/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models */ "./src/app/models/index.ts");
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
    // getAll() {
    //     return this.http.get<User[]>(`${environment.apiUrl}/users`);
    // }
    UserService.prototype.register = function (user) {
        var role = new _models__WEBPACK_IMPORTED_MODULE_3__["User"]();
        role.role.push("user");
        role.username = user.username;
        role.password = user.password;
        role.name = user.name;
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/allergan/stp/signup", role);
    };
    UserService.prototype.update = function (userId, update) {
        return this.http.put(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl + "/api/allergan/stp/v4/user/update/" + userId, update);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/userprofile/index.ts":
/*!**************************************!*\
  !*** ./src/app/userprofile/index.ts ***!
  \**************************************/
/*! exports provided: UserprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _userprofile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userprofile.component */ "./src/app/userprofile/userprofile.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserprofileComponent", function() { return _userprofile_component__WEBPACK_IMPORTED_MODULE_0__["UserprofileComponent"]; });




/***/ }),

/***/ "./src/app/userprofile/userprofile.component.css":
/*!*******************************************************!*\
  !*** ./src/app/userprofile/userprofile.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* .multiselect-dropdown[_ngcontent-c1] .dropdown-btn[_ngcontent-c1] {\r\n    /* display: inline-block;\r\n    border: 1px solid #adadad;\r\n    width: 100%;\r\n    padding: 6px 12px;\r\n    margin-bottom: 0;\r\n    font-weight: 400;\r\n    line-height: 1.52857143;\r\n    text-align: left;\r\n    vertical-align: middle;\r\n    cursor: pointer;\r\n    background-image: none;\r\n    border-radius: 4px; */\r\n    /* color: #d9d9d9 !important;\r\n} */ \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnByb2ZpbGUvdXNlcnByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O3lCQVl5QjtJQUNyQjtHQUNEIiwiZmlsZSI6InNyYy9hcHAvdXNlcnByb2ZpbGUvdXNlcnByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIC5tdWx0aXNlbGVjdC1kcm9wZG93bltfbmdjb250ZW50LWMxXSAuZHJvcGRvd24tYnRuW19uZ2NvbnRlbnQtYzFdIHtcclxuICAgIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhZGFkYWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDZweCAxMnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS41Mjg1NzE0MztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDsgKi9cclxuICAgIC8qIGNvbG9yOiAjZDlkOWQ5ICFpbXBvcnRhbnQ7XHJcbn0gKi8gIl19 */"

/***/ }),

/***/ "./src/app/userprofile/userprofile.component.html":
/*!********************************************************!*\
  !*** ./src/app/userprofile/userprofile.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n    <div class=\"min_contner\">\n        <div class=\"boxed_wrapper\">\n            <section class=\"mainmenu-area\">\n                <div class=\"auto-container\">\n                    <div class=\"row\">\n                        <div class=\"col-md-2\">\n                            <div class=\"main-logo\">\n                                <a><img src=\"assets/images/logo2.png\" alt=\"\"></a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </section>\n            <section class=\"section_tab\">\n                <div class=\"auto-container\">\n                    <div class=\"row\">\n                        <div class=\"col-md-6 col-sm-12 col-md-offset-1 login_page\">\n                            <p>Let’s get to know you better!</p>\n                            <form [formGroup]=\"userprofile\" class=\"form\">\n                                <input type=\"text\" formControlName=\"firstname\" name=\"firstname\" [(ngModel)]=\"currentUser.firstName\">\n                                <input type=\"text\" formControlName=\"lastname\" name=\"lastname\" [(ngModel)]=\"currentUser.name\">\n                                <input type=\"email\" formControlName=\"email\" name=\"email\" [(ngModel)]=\"currentUser.email\">\n                                <div class=\"row\">\n                                        <div class=\"col-md-6 col-sm-12\">\n                                                <select id=\"gds-cr-one\" formControlName=\"regionValue\"  [(ngModel)]=\"allregions\" (change)=\"onSelect($event.target.value)\">\n                                                        <option class=\"s-smal\"  [ngValue]=\"'none'\" disabled>Region</option>\n                                                    <option *ngFor=\"let regions of region\" value={{regions.id}} class=\"s-smal\">{{regions.name}}</option>\n                                                </select>\n                                            </div>\n                                    <div class=\"col-md-6 col-sm-12\">\n                                        <select class=\"input-medium bfh-countries\" formControlName=\"country\"   [(ngModel)]=\"allCountrys\" >\n                                                <option class=\"s-smal\"  [ngValue]=\"'none'\" disabled>Country</option>\n                                                <option *ngFor=\"let country of countrys \" class=\"s-smal\" value= {{country.id}}>{{country.name}}</option>\n                                        </select>\n                                    </div>\n                                   \n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-md-12\">\n                                       \n                                            <select id=\"gds-or-two\"  formControlName=\"ta\"  [(ngModel)]=\"ta\"  (change)=\"onSelectTA($event.target.value)\">\n                                             \n                                                <option class=\"s-smal\"  [ngValue]=\"'none'\" disabled>SELECT TA's</option>\n                                                <option *ngFor=\"let therapeuticAreas of therapeuticArea\" value={{therapeuticAreas.id}} class=\"s-smal\">{{therapeuticAreas.name}}</option>\n                                            </select>\n                                       \n                                    </div>\n                                </div>\n                                <div class=\"row\">\n                                    <div class=\"col-md-6 col-sm-12\">\n                                            <ng-multiselect-dropdown\n                                            [placeholder]=\"'Disease State'\"\n                                            [data]=\"dropdownList\"\n                                            [(ngModel)]=\"selectedItems\"\n                                            [settings]=\"dropdownSettings\"\n                                            (onSelect)=\"onItemSelect($event)\"\n                                            (onSelectAll)=\"onSelectAll($event)\"\n                                            formControlName=\"diseasestate\" style=\"\n                                            color: #d9d9d9;\"                                        \n                                          >\n                                          </ng-multiselect-dropdown>\n                                    </div>\n                                        <!-- <input id=\"disease\" type=\"text\" name=\"Disease State\" placeholder=\"Disease State\"></div> -->\n                                    <div class=\"col-md-6 col-sm-12\">\n\n                                            <ng-multiselect-dropdown\n                                            [placeholder]=\"'Product'\"\n                                            [data]=\"dropdownListProduct\"\n                                            [(ngModel)]=\"selectedItemsProduct\"\n                                            [settings]=\"dropdownSettingsProduct\"\n                                            (onSelect)=\"onItemSelectProduct($event)\"\n                                            (onSelectAll)=\"onSelectAllProduct($event)\"\n                                            formControlName=\"product\"\n                                            style=\"\n                                            color: #d9d9d9;\"          \n                                          >\n                                          </ng-multiselect-dropdown>\n                                    </div>\n                                </div>\n                            </form>\n                            <div class=\"btn greent_btn_1\" (click)=\"onUpdateProfile()\">UPDATE PROFILE</div>\n                        </div>\n                    </div>\n                </div>\n            </section>\n\n            \n            <footer>\n                <div class=\"auto-container\">\n                    <div class=\"row \">\n                        <div class=\"col-md-12 \">\n                            <p class=\"footer1 \">© ALLERGAN 2019</p>\n                        </div>\n                    </div>\n                </div>\n            </footer>\n        </div>\n      \n    </div>\n\n    <home-coponent hidden></home-coponent>"

/***/ }),

/***/ "./src/app/userprofile/userprofile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/userprofile/userprofile.component.ts ***!
  \******************************************************/
/*! exports provided: UserprofileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserprofileComponent", function() { return UserprofileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models */ "./src/app/models/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services */ "./src/app/services/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserprofileComponent = /** @class */ (function () {
    function UserprofileComponent(formBuilder, route, router, homeService, userService) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.homeService = homeService;
        this.userService = userService;
        this.allregions = 'none';
        this.ta = 'none';
        this.allCountrys = 'none';
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.dropdownListProduct = [];
        this.selectedItemsProduct = [];
        this.dropdownSettingsProduct = {};
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.homeService.getRegion().pipe().subscribe(function (data) {
            _this.region = data.data.region;
            _this.state = data.data.country;
            _this.therapeuticArea = data.data.therapeuticArea;
            // this.selectedItems = [
            //   { item_id: 3, item_text: 'Pune' },
            //   { item_id: 4, item_text: 'Navsari' }
            // ];
            _this.dropdownSettings = {
                singleSelection: false,
                idField: 'item_id',
                textField: 'item_text',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                itemsShowLimit: 3,
                allowSearchFilter: true
            };
            _this.dropdownSettingsProduct = {
                singleSelection: false,
                idField: 'item_id',
                textField: 'item_text',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                itemsShowLimit: 3,
                allowSearchFilter: true
            };
        }, function (error) {
        });
    }
    UserprofileComponent.prototype.onSelectTA = function (tsId) {
        var _this = this;
        this.homeService.getDiseaseState(Number(tsId)).pipe().subscribe(function (data) {
            _this.dropdownList = data.data[0].diseaseStates;
            _this.dropdownListProduct = data.data[0].products;
        }, function (error) {
        });
    };
    UserprofileComponent.prototype.onSelect = function (countryid) {
        this.countrys = this.state.filter(function (item) { return item.regionId == countryid; });
    };
    UserprofileComponent.prototype.ngOnInit = function () {
        this.userprofile = this.formBuilder.group({
            firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            regionValue: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            country: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            ta: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]],
            diseasestate: [[]],
            product: [[]]
        });
    };
    UserprofileComponent.prototype.onItemSelect = function (item) {
        console.log(item);
    };
    UserprofileComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    Object.defineProperty(UserprofileComponent.prototype, "f", {
        get: function () { return this.userprofile.controls; },
        enumerable: true,
        configurable: true
    });
    UserprofileComponent.prototype.onItemSelectProduct = function (itemProduct) {
        console.log(itemProduct);
    };
    UserprofileComponent.prototype.onSelectAllProduct = function (itemsProduct) {
        console.log(itemsProduct);
    };
    UserprofileComponent.prototype.onUpdateProfile = function () {
        var _this = this;
        if (this.userprofile.invalid) {
            return;
        }
        var update = new _models__WEBPACK_IMPORTED_MODULE_3__["Update"](this.f.firstname.value, this.f.lastname.value, Number(this.f.regionValue.value), this.f.email.value, Number(this.f.country.value), Number(this.f.ta.value), this.f.diseasestate.value, this.f.product.value);
        console.log(update);
        this.userService.update(this.currentUser.id, update).pipe().subscribe(function (data) {
            _this.router.navigate(['/success']);
        }, function (error) {
        });
        //  this.router.navigate(['/success']);
        // this.router.navigate(['/load']);
    };
    UserprofileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-userprofile',
            template: __webpack_require__(/*! ./userprofile.component.html */ "./src/app/userprofile/userprofile.component.html"),
            styles: [__webpack_require__(/*! ./userprofile.component.css */ "./src/app/userprofile/userprofile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services__WEBPACK_IMPORTED_MODULE_4__["HomeService"],
            _services__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], UserprofileComponent);
    return UserprofileComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    //4000
    // apiUrl: 'https://allergan-stp-uat.indegene.com/stp-restapi'
    // apiUrl: 'https://blrdev.indegene.com/stp-restapi'
    apiUrl: 'http://localhost:9090'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\allergan-stp-non-okta\allergan-stp-frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map