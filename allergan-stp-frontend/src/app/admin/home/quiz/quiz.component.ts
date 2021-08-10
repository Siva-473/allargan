import { Component, OnInit } from "@angular/core";
import { first, map } from 'rxjs/operators';
import { QuizService } from '../../services/quizservice';
import { Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { AlertService } from "src/app/services/alert.service";

@Component({
    selector: 'app-admin-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.css']
  })
  export class QuizComponent implements OnInit {
    selected :any;
    quiz:  [{id:0,title:""}];
    zero : number = 0;
    constructor(
      private formBuilder: FormBuilder,
      private quizService:QuizService,
      private alertService: AlertService,
      private router: Router) {  }
      
    ngOnInit() {
      this.quizService.getQuiz().pipe(first()).subscribe(quizz => {      
          this.quiz = quizz.data;
      });
    }

    getQuestionSize(data: string) {
      let selectedList = [];
      selectedList =data.toString().replace('[','').replace(']','').split(',').map(Number);
      if(selectedList.indexOf(this.zero) > -1 ){
        selectedList.splice(selectedList.indexOf(this.zero), 1);
      }
      return selectedList.length;
    }

    deleteQuizClick($event,Id:number){
      this.quizService.deleteQuiz(Id).pipe(first()).subscribe(quizz => {
          this.quiz = quizz.data; 
          
          this.alertService.success('Successfully Deleted.');
            window.scroll(0,0);
          },
          error => {
            this.alertService.error(error);
            window.scroll(0,0);

      });
    }

    openClone($event,Id:number){    
      this.selected = Id;
      $event.stopPropagation();
    }
    isActive(item) {
      return this.selected === item;
    };
  }