import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpParams, HttpClient,HttpHeaders   } from '@angular/common/http';
import { AssetJourneyRequestParams} from '../models';
import { params } from '../../environments/HttpParams';
import { ResponseContentType } from '@angular/http';
import { from } from 'rxjs';
import { QuizUserResponse } from '../models/quizuserresponse';
@Injectable({
  providedIn: 'root'
})
export class HomeService {  

  constructor(private http: HttpClient) { }


  updateProfile(id:Number) {
    ///users/authenticate
     return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/user/detail/`+id);
  }

getRegion() {
  ///users/authenticate
   return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/user/region`);
}
getDiseaseState(id :Number){

  return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/user/diseasestate/`+id);
}

getAssets(id:number){
  return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/user/asset-type/`+Number(id));
}


getPointsAndBadges(userId:number){
  return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/user/points/badges/`+Number(userId));
}

leadersShow(userId:number){
  return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/user/leader/board/`+Number(userId));
}

getTherapeuticAreas(userId:Number,assetId:Number){
  return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/user/therapeutic-areas/`+Number(userId)+`/`+Number(assetId));
}

getdiseaseStatesProducts(userid:Number,id:Number){
 
  return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/user/`+userid+"/"+id);
}
getCompletedAssetsFor(assetJourneyParams:AssetJourneyRequestParams){
   return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/user/asset/journey`);
}
getOrderedAssetsFor(assetJourneyParams:AssetJourneyRequestParams){
  return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/user/asset/journey/ordered-assets?userId=`+
  assetJourneyParams.userId+'&assetTypeId='+assetJourneyParams.assetTypeId+'&therrapeuticAreaId='+ assetJourneyParams.therapeuticId+
  '&productId='+assetJourneyParams.poductId+'&diseaseStateId='+assetJourneyParams.diseaseStateId);
}
getUnassignedAssetsFor(userId:string,assetsTypeId:string,productId:string,disId:string,taId:string){
  let params=new HttpParams().set("userId", userId).set("assetTypeId",assetsTypeId).set("productId",productId).set("diseaseStateId",disId).set("therrapeuticAreaId",taId);
  return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/user/asset/journey/unassigned-assets`,{params});
}
addAssetsFor(userId:Number,assetTypeId:Number,therapeuticId:Number,poductId:Number,diseaseStateId:Number){
  return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/user/asset/journey`);
}

getCompletedAssets(userId:string,assetsTypeId:string,productId:string,disId:string,taId:string){

  let params=new HttpParams().set("userId", userId).set("assetTypeId",assetsTypeId).set("productId",productId).set("diseaseStateId",disId).set("therrapeuticAreaId",taId);

  return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/user/asset/journey/completed-assets`,{params});
}

completeJourney(assetJourneyId:string,userId:string){
  let params=new HttpParams().set("assetJourneyId", assetJourneyId).set("userId",userId).set("status","2");
  return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/user/asset/journey/change-asset-status`,{params});

}

openAsset(userId:number,assetJourneyId:number):any{
  let url=`${environment.apiUrl}/api/allergan/stp/v4/user/asset/journey/open-asset?assetJourneyId=`+assetJourneyId+'&userId='+userId;
  return this.http.get(url,  { responseType: 'blob' });
 
}
openTemplat(fileName:string):any{
  console.log("fileName : "+fileName);
  let url=`${environment.apiUrl}/api/allergan/stp/v4/admin/batchImportAssets/open-templat/`+fileName;
  return this.http.get(url,  { responseType: 'blob' });
 
}




changeAssetStatusAsInprogress(userId:number,assetJourneyId:number):any{
  return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/user/asset/journey/mark-asset-inprogress?assetJourneyId=`+assetJourneyId+'&userId='+userId);
}
downloadPDF(userId:number,assetJourneyId:number): any {
  let url=`${environment.apiUrl}/api/allergan/stp/v4/user/asset/journey/open-asset?assetJourneyId=`+assetJourneyId+'&userId='+userId;
   return this.http.get(url, { responseType: 'blob' });
 
}


unAssigenedAssets(listIds:any[],userId:number ) {
  return this.http.post(`${environment.apiUrl}/api/allergan/stp/v4/user/asset/journey/add-asset/`+userId, listIds);
}
notificationMarkAsSeen(notifcationIds:any[],userId:number ) {
  let url=`${environment.apiUrl}/api/allergan/stp/v4/user/asset/journey/open-asset?userId=`+userId+'&notifcationIds='+notifcationIds;
  return this.http.post(`${environment.apiUrl}/api/allergan/stp/v4/user/notification/mark-as-seen?userId=`+userId, notifcationIds);
}
getUserNotifications(userId:number ) {
  return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/user/notification/user-notifications?userId=`+userId);
}

getQuizQuestions(quizId:Number) {
  return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/user/get-quiz/`+quizId);
}

getQuestionById(questionId:Number) {
  return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/user/getQuizquestion/`+questionId);
}

insertQuizUserResponse(quizUserResponse:QuizUserResponse) {
  return this.http.post<any>(`${environment.apiUrl}/api/allergan/stp/v4/user/insertQuizUserResponse`,quizUserResponse);
}

getUnAnsweredQuestionsForUser(userId:Number, quizId:Number, journeyId: Number){
  return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/user/getUnAnsweredQuestionsForUser/`+userId+`/`+quizId+ `/`+journeyId);
}

getMaxAttempt(userId:Number, quizId:Number, journeyId: Number){
  return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/user/getMaxAttempt/`+userId+`/`+quizId+ `/`+journeyId);
}
}
