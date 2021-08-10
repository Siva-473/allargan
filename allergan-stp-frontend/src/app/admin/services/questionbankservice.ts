import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpParams, HttpClient,HttpHeaders   } from '@angular/common/http';
import { ResponseContentType } from '@angular/http';
import { from } from 'rxjs';
import { QuestionBank } from '../../models/questionbank';
import { first } from 'rxjs/operators';
import { Question } from '../model/Question';
import { QSData } from '../model/AnswerData';
import { Answer } from '../model/Answer';

@Injectable()
export class QuestionBankService {
  constructor(private http: HttpClient) { }

  getAllQuestions() {
    return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/quizQuestionsGetAll`);
  }

  deleteQuestion(Id:Number){    
    return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/admin/quizQuestionDelete/`+Id);
  }

  addQuestion(q: Question) {
     return this.http.post(`${environment.apiUrl}/api/allergan/stp/v4/admin/quizQuestionsInsert`, q);
  }

  getQuestionById(Id:Number){
    return this.http.get<any>(`${environment.apiUrl}/api/allergan/stp/v4/user/getQuizquestion/`+Id);
  }

  editQuestion(q: Question){
    return this.http.post(`${environment.apiUrl}/api/allergan/stp/v4/admin/quizQuestionsUpdate`, q);
  }
}