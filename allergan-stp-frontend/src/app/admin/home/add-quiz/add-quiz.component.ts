import { Component, OnInit } from "@angular/core";
import { first } from "rxjs/operators";
import { QuizService } from '../../services/quizservice';
import { Router } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { MetaDataService } from "../../services/metadataService";
import { QuestionBankService } from '../../services/questionbankservice';
import { Quiz } from "../../model/quiz";
import { AlertService } from "src/app/services/alert.service";

@Component({
    selector: 'app-admin-quiz',
    templateUrl: './add-quiz.component.html',
    styleUrls: ['./add-quiz.component.css']
  })
  export class AddQuizComponent implements OnInit {
    assetTypes : [{id:0, userName:""}];
    therapeuticAreaList: Array<string> = [];
    diseaseList: Array<string> = [];
    productList: Array<string> = [];
    checkedList: Array<number> = [];
    questions:  [{}];
    quiz:  [{}];
    questionCount = 0;
    cloneMessage: string = "";
    
    constructor(
      private metaService: MetaDataService,
      private questionBankService: QuestionBankService,
      private quizService: QuizService,
      private formBuilder: FormBuilder,
      private alertService: AlertService,
      private router: Router
      ) { 
        
      }
      
    ngOnInit() {
      this.checkedList = [];
      this.questionBankService.getAllQuestions().pipe(first()).subscribe(questions => {  
        this.questions=questions;           
      });
      this.metaService.getAllAssetTypes().pipe(first()).subscribe(assetTypes => {  
          this.assetTypes = assetTypes.data;
      });
      this.metaService.getTherapeuticAreaMap().pipe(first()).subscribe(TA => { 
          TA.data.forEach(ta => {
              this.therapeuticAreaList.push(ta.name);
              ta.products.forEach(prod => {
                this.productList.push(prod.name);
              });
              ta.diseaseStates.forEach(disease => {
                this.diseaseList.push(disease.name);
              });
          });
      }); 
      console.log( this.diseaseList);
    }

    
    model: any = { };

    getThearpeuticAreas(assetTypeId){
      this.therapeuticAreaList = [];
      this.metaService.getTherapeuticAreas(assetTypeId).pipe(first()).subscribe(therapeutic => { 
          therapeutic.data.forEach(ta => {
            this.therapeuticAreaList.push(ta.name);
          });
      });
    }
  
    getdiseaseAndProducts(taName){
      this.metaService.getTherapeuticAreaMap().pipe(first()).subscribe(TA => { 
        TA.data.forEach(ta => {
          if(taName === ta.name){
            this.productList = [];
            this.diseaseList = [];
            ta.products.forEach(prod => {
              this.productList.push(prod.name);
            });
            ta.diseaseStates.forEach(disease => {
              this.diseaseList.push(disease.name);
            });
          }                
        });
      });    
    }
    

    onCheckboxChange(questionId,$event){
      if(this.checkedList.indexOf(questionId) > -1){
        this.checkedList.splice(this.checkedList.indexOf(questionId), 1);
      }else{
        this.checkedList.push(questionId);
      }
      this.questionCount = this.checkedList.length;
      if(this.checkedList.length > 0){
        this.cloneMessage = '';
      }else{
        this.cloneMessage = 'Atleast one question should be selected.';
      }
    }

    onSubmit() {
      console.log(this.checkedList+"json"+this.checkedList.toString().split(','));
      if(this.checkedList.length > 0){
        this.cloneMessage = '';
      let quiz=new Quiz();
      quiz.title = this.model.title
      quiz.jsonData=this.checkedList;

      this.quizService.insertQuiz(quiz).pipe(first()).subscribe(q => { 
        this.quizService.getQuiz().pipe(first()).subscribe(quizz => {      
          this.quiz = quizz.data;
        });
        this.checkedList = [];
        this.router.navigate(['/admin/quiz']);
        this.alertService.success('Successfully Added.');
          window.scroll(0,0);
        },
        error => {
          this.alertService.error(error);
          window.scroll(0,0);
      });
      }else{
        this.cloneMessage = 'Atleast one question should be selected.';
    }
  }

    cancelQuiz(){
      this.checkedList = [];
     // this.router.navigate(['/admin/quiz']);
    }  
  }