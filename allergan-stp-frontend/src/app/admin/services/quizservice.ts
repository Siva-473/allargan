import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Quiz } from "../model/quiz";


@Injectable()
export class QuizService {
  constructor(private http: HttpClient) { }

  getQuiz() {
    return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/get-all-active-quiz`);
  }

  deleteQuiz(Id:Number){
    return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/delete-quiz/`+Id);
  }

  insertQuiz(q: Quiz){
    return this.http.post(`${environment.apiUrl}/api/allergan/stp/v4/admin/create-quiz`, q);
  }

  getQuizById(Id:Number){
    return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/user/get-quiz/`+Id);
  }

  updateQuiz(q: Quiz, checkList:  Array<number>){
    let quiz=new Quiz();
    quiz.id = q.id;
    quiz.title = q.title
    quiz.jsonData=checkList;
   
    return this.http.post(`${environment.apiUrl}/api/allergan/stp/v4/admin/update-quiz`, quiz);
  }
}