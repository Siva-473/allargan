import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { FormBuilder } from '@angular/forms';
import { QuestionBankService } from '../../services/questionbankservice';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/services/alert.service';



@Component({
  selector: 'app-admin-question-bank',
  templateUrl: './question-bank.component.html',
  styleUrls: ['./question-bank.component.css']

})


export class QuestionBankComponent implements OnInit {

    constructor(
        private formBuilder: FormBuilder,
        private questionBankService:QuestionBankService,
        private alertService: AlertService,
        private router: Router) {  }
        questions:  [{}];
        qsData:[{}]
    ngOnInit() {       
        this.questionBankService.getAllQuestions().pipe(first()).subscribe(questions => {   
            console.log(questions) ;  
            this.questions=questions;           
        });
    }

    deleteQuestion($event, questionID: Number){
        this.questionBankService.deleteQuestion(questionID).pipe(first()).subscribe(questions => {
            this.questionBankService.getAllQuestions().pipe(first()).subscribe(questions => {   
                console.log(questions) ;  
                this.questions=questions;    
                this.alertService.success('Successfully Deleted.');
                window.scroll(0,0);
                },
                error => {
                this.alertService.error(error);
                window.scroll(0,0);       
            });
        });

        

    }
    

    
}