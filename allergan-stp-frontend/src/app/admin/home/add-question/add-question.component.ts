import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { MetaDataService } from '../../services/metadataService';
import { AlertService } from 'src/app/services';
import { QuestionBankService } from '../../services/questionbankservice';
import { QSData } from '../../model/AnswerData';
import { Answer } from '../../model/Answer';
import { Question } from '../../model/Question';



@Component({
  selector: 'app-admin-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']

})


export class AddQuestionComponent implements OnInit { 
   
    constructor(
        private formBuilder: FormBuilder,
        private metaService: MetaDataService,
        private alertService: AlertService,
        private questionBankService : QuestionBankService,
        private fb: FormBuilder,
        private router: Router) {  }
        questions:  [{}];
        qsData:[{}]
        assetTypes : [{id:0, userName:""}];

        correctFlag : Array<any> = [];

        therapeuticAreaMap = new Map();
        diseaseMap= new Map();
        productMap= new Map();
        radioDisplay : boolean = true;
        checkBoxDisplay: boolean = false;
        radioSelected: any;
        choiceLetters : Array<any> = ['A', 'B', 'C', 'D', 'E', 'F'];
        taMessage: boolean = false;
        assetTypeMessage : boolean = false;
        ansMessage: string = '';
        nameArray: Array<any> = [
          {
            'index' : 0,
            'name': 'A',
            'val': ''
          },
          {
            'index' : 1,
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

    ngOnInit() {       
        this.metaService.getAllAssetTypes().pipe(first()).subscribe(assetTypes => {  
            this.assetTypes = assetTypes.data;
        });
    }

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
    console.log(type);
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
        this.correctFlag.push(a.index);
      }else{
        if(this.correctFlag.indexOf(a.index) > -1){
          this.correctFlag.splice(this.correctFlag.indexOf(a.index), 1);
        }else{
          this.correctFlag.push(a.index);
        }
      }
        if(this.correctFlag.length > 0){ this.ansMessage = ''; }else{ this.ansMessage = 'Please select atleast one Answer.'; }
      console.log(this.correctFlag);
    }

    onSubmit() {
      if(this.correctFlag.length == 0){
        this.ansMessage = 'Please select atleast one Answer.';
      }else{
          this.assetTypeMessage = false; 
          this.taMessage = false;
        let qsData = new QSData();
        let answerArray : Array<Answer> = [];
        
        this.nameArray.forEach(n => {
          if(n.val.length > 0){
            let answer = new Answer();
  
            if(this.correctFlag.indexOf(n.index) > -1){
              answer.correct = true;
            }else{
              answer.correct = false;
            }
            answer.text = n.val;
            answerArray.push(answer);
          }
        });
  
       
        qsData.answers = answerArray;
        console.log(qsData.answers);
        qsData.questionType = this.model.QType;
        qsData.question = this.model.question;
  
        let question=new Question();
        question.title=this.model.title;
          if(this.model.assetTypeId > 0){
            question.assetTypeId=this.model.assetTypeId;
          }else{
            this.assetTypeMessage = true;
          }
         
          if(this.model.therapeuticAreaId > 0){            
            question.therapeuticAreaId = this.model.therapeuticAreaId;
          }else{
            this.taMessage = true;
          }

        question.diseaseStateId = this.model.diseaseStateId;
        question.productId = this.model.productId;
        question.status= 'true';
  
        question.qsData = qsData;
        console.log(qsData.answers);
          if(question.assetTypeId > 0 && question.therapeuticAreaId > 0){
          this.questionBankService.addQuestion(question).pipe(first()).subscribe(questionss => {   
          this.questionBankService.getAllQuestions().pipe(first()).subscribe(questionss => {      
            this.questions = questionss.data;
          }); 
          this.router.navigate(['/admin/questionBank']);   
          this.alertService.success('Successfully Added.');
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
   let obj ;
   let last:any = this.nameArray[this.nameArray.length-1];
    
    if(last == undefined){
       obj = {
        'index' : 0,
        'name': this.choiceLetters[0],
        'val': ''
        }
    }else{
       obj = {
        'index' : last.index + 1,
        'name': this.choiceLetters[last.index + 1],
        'val': ''
        }
    }   
    if(this.choiceLetters[last.index + 1] != undefined){
      this.nameArray.push(obj);
    }
  }

  onRemoveRow(rowIndex:number){ 
    let i;
    console.log(rowIndex);
    console.log(this.nameArray); 

    this.nameArray.forEach(n => {
      if(n.index == rowIndex){
         i = this.nameArray.indexOf(n);
      }
    });
   console.log(i);

      this.nameArray.splice(i,1);
  }
  
}