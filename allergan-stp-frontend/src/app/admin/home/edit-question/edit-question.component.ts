import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder } from "@angular/forms";
import { AlertService } from 'src/app/services';
import { User } from "src/app/models";
import { QuestionBankService } from "../../services/questionbankservice";
import { Question } from '../../model/Question';
import { MetaDataService } from "../../services/metadataService";
import { first } from "rxjs/operators";
import { Answer } from "../../model/Answer";
import { QSData } from "../../model/AnswerData";

@Component({
    selector: 'app-admin-edit-question',
    templateUrl: './edit-question.component.html',
    styleUrls: ['./edit-question.component.css']
  
  })

    export class EditQuestionComponent implements OnInit { 
      ngOnInit() {       
        this.metaService.getAllAssetTypes().pipe(first()).subscribe(assetTypes => {  
          this.assetTypes = assetTypes.data;
          console.log(this.assetTypes)
        });
      }
      currentUser: User;   
      editQuestion: any ;// Question = new Question();
      assetTypes : [{id:0, userName:""}];

      therapeuticAreaMap = new Map();
      diseaseMap= new Map();
      productMap= new Map();
      radioDisplay : boolean = true;
      checkBoxDisplay: boolean = false;
      correctFlag : Array<any> = [];
      answers: any;
      radioSelected: any;
      choiceLetters : Array<any> = ['A', 'B', 'C', 'D', 'E', 'F'];
      taMessage: boolean = false;
      assetTypeMessage : boolean = false;
      ansMessage: string = '';
      nameArray: Array<any> = [
        {
          'index' : 0,
          'name': 'A',
          'text': '',
          'correct': ''
        },
        {
          'index' : 1,
          'name': 'B',
          'text': '',
          'correct': ''
        },
        {
          'index' : 2,
          'name': 'C',
          'text': '',
          'correct': ''
        },
        {
          'index' : 3,
          'name': 'D',
          'text': '',
          'correct': ''
        },
        {
          'index' : 4,
          'name': 'E',
          'text': '',
          'correct': ''
        },        
        {
          'index' : 5,
          'name': 'F',
          'text': '',
          'correct': ''
        }
      ];

      constructor(
          private formBuilder: FormBuilder,
          private alertService: AlertService,
          private route: ActivatedRoute,
          private questionBankService:QuestionBankService,          
          private metaService: MetaDataService,
          private router: Router) { 
            this.currentUser = JSON.parse(localStorage.getItem('currentUser'));   

            this.route.params.subscribe(params =>
              this.questionBankService.getQuestionById(Number(params['id'])).pipe().subscribe(question => {
                this.editQuestion = question.data;   
                this.model.id = this.editQuestion.id;   
                this.model.title =  this.editQuestion.title;
                this.model.question = JSON.parse(this.editQuestion.jsonData).question;
                console.log('this.editQuestion.assetTypeId'+this.editQuestion.assetTypeId);
                this.model.assetTypeId = this.editQuestion.assetTypeId;
                if(this.model.assetTypeId > 0){
                  this.getThearpeuticAreas(this.model.assetTypeId);
                }
             //   this.model.assetTypeId = this.editQuestion.assetTypeId;
                this.model.therapeuticAreaId = this.editQuestion.therapeuticAreaId;
                if(this.model.therapeuticAreaId > 0){
                  this.getdiseaseAndProducts(this.model.therapeuticAreaId);
                }
                this.model.diseaseStateId = this.editQuestion.diseaseStateId;
                this.model.productId = this.editQuestion.productId;
                this.model.QType = JSON.parse(this.editQuestion.jsonData).questionType;
                if(this.model.QType){
                  this.typeSection(this.model.QType);
                }
                this.answers = JSON.parse(this.editQuestion.jsonData).answers;

                console.log(this.answers);
                this.answers.forEach(a => {
                  if(a.correct == true){this.correctFlag.push(a.id);}
                });
                // JSON.parse(this.editQuestion.jsonData).answers.forEach(q => {
                //   console.log(q);

                //   this.nameArray.forEach(n => {
                //     this.model.div.val = n.text;
                //   });
                // });
                
              },
                error => {
                  this.alertService.error(error);    
                }
              )
            )

           }

        questions:  [{}];
        model: any = { };

        getThearpeuticAreas(assetTypeId){
          this.assetTypeMessage = false;
        if(assetTypeId == 0){ this.assetTypeMessage = true; }else{
          this.therapeuticAreaMap.clear()
          this.metaService.getTherapeuticAreas(assetTypeId).pipe(first()).subscribe(therapeutic => { 
              therapeutic.data.forEach(ta => {
                this.therapeuticAreaMap.set(ta.id, ta.name);
              });
          });
        }
    }
     
        getdiseaseAndProducts(taID){
            this.taMessage = false;
        if(taID == 0){ this.taMessage = true; }else{
            this.metaService.getTherapeuticAreaMap().pipe(first()).subscribe(TA => { 
              TA.data.forEach(ta => {
                if(taID == ta.id){
                  this.productMap.clear();
                this.diseaseMap.clear();
                  ta.products.forEach(prod => {
                    this.productMap.set(prod.id,prod.name);
                  });
                  ta.diseaseStates.forEach(disease => {
                    this.diseaseMap.set(disease.id, disease.name);
                  });
                }                
              });
            });    
        }
    }
    
        typeSection(type){
          if(type === 'SINGLE_CHOICE'){
        this.correctFlag = [] ;
            this.checkBoxDisplay = false;
            this.radioDisplay = true;
        this.radioSelected = null;
          }else{
        this.correctFlag = [] ;
            this.checkBoxDisplay = true;
            this.radioDisplay = false;
          }
        }

    
	    onItemChange(a){
	      console.log(this.model.QType);
	      if(this.model.QType === 'SINGLE_CHOICE'){ 
	        this.correctFlag = [] ;
          this.correctFlag.push(a.id);
          console.log(this.correctFlag);
	      }else{
	        if(this.correctFlag.indexOf(a.id) > -1){
	          this.correctFlag.splice(this.correctFlag.indexOf(a.id), 1);
	        }else{
	          this.correctFlag.push(a.id);
	        }
        }
        if(this.correctFlag.length > 0){ this.ansMessage = ''; }else{ this.ansMessage = 'Please select atleast one Answer.'; }
	      console.log(this.correctFlag);
	    }
    
        onSubmit() {
          console.log('on submit');
	if(this.correctFlag.length == 0){
	        this.ansMessage = 'Please select atleast one Answer.';
	      }else{
          console.log('inside');
          this.assetTypeMessage = false; 
          this.taMessage = false;
          
          console.log('onSubmit');
          let qsData = new QSData();
          let answerArray : Array<Answer> = [];
          
          this.answers.forEach(n => {
            // console.log(n);
            let answer = new Answer();

            if(this.correctFlag.indexOf(n.id) > -1){
              answer.correct = true;
            }else{
              answer.correct = false;
            }
            // // answer.correct = n.correct;
            answer.id = n.id;
            answer.text = n.text;
            answerArray.push(answer);
          });
          console.log(answerArray)
        
          qsData.answers = answerArray;
          qsData.questionType = this.model.QType;
          qsData.question = this.model.question;

          let question=new Question();
          question.id = this.model.id;
          question.title=this.model.title;
          if(this.model.assetTypeId > 0){
            question.assetTypeId=this.model.assetTypeId;
          }else{
            this.assetTypeMessage = true;
          }
         console.log(question.assetTypeId);
          if(this.model.therapeuticAreaId > 0){            
            question.therapeuticAreaId = this.model.therapeuticAreaId;
          }else{
            this.taMessage = true;
          }

         
          question.diseaseStateId = this.model.diseaseStateId;
          question.productId = this.model.productId;
          question.status= 'true';

          question.qsData = qsData;
          console.log(question);
          if(question.assetTypeId > 0 && question.therapeuticAreaId > 0){
            this.questionBankService.editQuestion(question).pipe(first()).subscribe(questionss => {   
              this.questionBankService.getAllQuestions().pipe(first()).subscribe(questionss => {      
                this.questions = questionss.data;
              }); 
              this.router.navigate(['/admin/questionBank']);   
              this.alertService.success('Successfully Updated.');
                window.scroll(0,0);
              },
              error => {
                this.alertService.error(error);
                window.scroll(0,0);
            });  
	    }
          }
          
        }
 onAddRow() {
   console.log(11);
   let obj ;
   let last:any = this.answers[this.answers.length-1];
    console.log(last);
    if(last == undefined){
       obj = {
        'id' : 0,
        'text': '',
        'correct': ''
        }
    }else{
       obj = {
        'id' : 0,
        'text': '',
        'correct': ''
        }
    }   
    console.log(obj);
    // if(this.answers[last.index + 1] != undefined){
    if(obj){
      this.answers.push(obj);
    }
  }

  onRemoveRow(rowIndex:number){ 
    let i;

    this.answers.forEach(n => {
      if(n.id == rowIndex){
         i = this.answers.indexOf(n);
      }
    });
   console.log(i);

      this.answers.splice(i,1);
  }

  }
