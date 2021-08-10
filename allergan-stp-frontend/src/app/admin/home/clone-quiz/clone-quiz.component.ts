import { Component, OnInit } from "@angular/core";
import { first } from "rxjs/operators";
import { QuizService } from '../../services/quizservice';
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { MetaDataService } from "../../services/metadataService";
import { QuestionBankService } from '../../services/questionbankservice';
import { AlertService } from "src/app/services";
import { User } from "src/app/models";
import { Quiz } from '../../model/quiz';

@Component({
    selector: 'app-admin-clone-quiz',
    templateUrl: './clone-quiz.component.html',
    styleUrls: ['./clone-quiz.component.css']
  })

  export class CloneQuizComponent implements OnInit {
    currentUser: User;
    selectedQuestionsList = [];
    editQuiz: Quiz = new Quiz();
    title: string = '';
    id: number;
    jsonData: Array<string>
    clone_confirm : boolean = false;
    clone_overlay : boolean = false;

    assetTypes : [{id:0, userName:""}];
    therapeuticAreaList: Array<string> = [];
    diseaseList: Array<string> = [];
    productList: Array<string> = [];
    checkedList: Array<number> = [];
    questions:  [{}];
    quiz:  [{}];
    questionCount = 0;
    zero : number = 0;
    cloneMessage: string = "";

    constructor(
        private fb: FormBuilder, 
        private route: ActivatedRoute, 
        private formBuilder: FormBuilder, 
        private alertService: AlertService,
        private metaService: MetaDataService,
        private questionBankService: QuestionBankService,
        private router: Router,
        private quizService: QuizService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));    
    
        this.route.params.subscribe(params =>
          this.quizService.getQuizById(Number(params['id'])).pipe().subscribe(quizz => {
            this.editQuiz = quizz.data;  
            console.log(this.editQuiz); 
            this.model.id = this.editQuiz.id;    
            this.model.title = this.editQuiz.title; 
            this.jsonData = this.editQuiz.jsonData.toString().replace('[','').replace(']','').split(',');
            this.checkedList = this.jsonData.map(Number);
            if(this.checkedList.indexOf(this.zero) > -1){
              this.checkedList.splice(this.checkedList.indexOf(this.zero), 1);
            }
            this.questionCount = this.checkedList.length  
          },
            error => {
              this.alertService.error(error);    
            }
          )
        )
    
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
    
    cancelQuiz(){
      this.checkedList = [];
      this.router.navigate(['/admin/quiz']);
    }

    cancelClone(){
      this.clone_confirm = false;
      this.clone_overlay = false; 
    }

    onCheckboxChange(questionId,$event){
      if(this.checkedList.indexOf(questionId) > -1){
        this.checkedList.splice(this.checkedList.indexOf(questionId), 1);
      }else{
        this.checkedList.push(questionId);
      }
      console.log(this.checkedList);
      this.questionCount = this.checkedList.length;
      if(this.checkedList.length > 0){
        this.cloneMessage = '';
      }else{
        this.cloneMessage = 'Atleast one question should be selected.';
      }
    }

    onSubmit() {
      this.clone_confirm = true;
      this.clone_overlay = true;   
      
      this.model.clonetitle = this.model.title;
    }

    confirmClone(){
      if(this.checkedList.length > 0){
        this.cloneMessage = '';
        let quiz=new Quiz();
        quiz.title = this.model.clonetitle
        quiz.jsonData=this.checkedList;
  
        this.quizService.insertQuiz(quiz).pipe(first()).subscribe(q => { 
          this.quizService.getQuiz().pipe(first()).subscribe(quizz => {      
             this.quiz = quizz.data;
           });
           this.checkedList = [];
           this.router.navigate(['/admin/quiz']);
           this.alertService.success('Success.');
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
  }