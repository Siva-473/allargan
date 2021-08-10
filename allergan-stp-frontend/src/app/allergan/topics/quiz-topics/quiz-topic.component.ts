import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd, RoutesRecognized } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';
import { CommonService } from 'src/app/services/common.service';
import { QuizUserResponse } from 'src/app/models/quizuserresponse';
import { pairwise, first } from 'rxjs/operators';

@Component({
  selector: 'app-quiz-topic',
  templateUrl: './quiz-topic.component.html',
  styleUrls: ['./quiz-topic.component.css']
})
export class QuizTopicComponent implements OnInit {
  basecampTrue:boolean=false;
  userId: number;
  queryUrl: string;
  assetsTypeId: Number;
  productId: Number;
  disId: Number;
  taId: Number;
  quizId: number = 0;
  quiz: any;
  radioSelected: any;
  checkSelected: any;
  questionIds: Array<string>;
  tempQuestionIds: Array<string>;
  quiz_shell_wrap: boolean = false;
  question: any;
  jsonData: any;
  answers: any;
  questionType: any;
  questionData: any;
  quest_alert: string;
  quest_alert_image: string;
  quest_alert_text: string = "";
  quest_alert_visible: boolean = false
  totalQuestions: number;
  i: number = 0;
  qust_submit: boolean = true;
  score: number = 0;
  nOfQuestions: number;
  passPercentage: number=0;
  quizName: string;
  btnStart: boolean = false;
  result_wrap: boolean = false;
  actual_result: boolean = true;
  btnRetake: boolean = false;
  btnComplete: boolean = false;
  quiz_title_wrap: boolean = true;
  result_image: string = "";
  text_result: string = "";
  answerList: Array<number> = [];
  correct: boolean;
  currentUser: any;
  journeyId: any;
  quizUserResponse: QuizUserResponse;
  questionId: number;
  jsonUserAnswer: Array<number> = [];
  jsonCorrectAnswer: Array<number> = [];
  url: string;
  isDisabled: boolean=false;
  isCorrect: boolean = false;
  maxAttempt : number = 0;
  scoreForAnswerdQuestions : number = 0;
  answeredQuestions : number = 0;
  retakeFlag : boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private homeService: HomeService, private commonService: CommonService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.basecampTrue=true;
    this.url = this.commonService.getPreviousUrl().toString();
  }

  ngOnInit(): void {  
    this.maxAttempt = 0;

    if (this.quizId == 0) {
      this.route.queryParams.subscribe(params => {
          this.userId = params['userId'],
          this.queryUrl = params['queryUrl'],
          this.assetsTypeId = params['assetsTypeId'],
          this.productId = params['productId'],
          this.disId = params['disId'],
          this.taId = params['taId'],
          this.quizId = params['quizId'],
          this.journeyId = params['journeyId']
      });
    }

    this.homeService.getMaxAttempt(this.userId, this.quizId, this.journeyId).pipe(first()).subscribe(data => {  
       this.maxAttempt = data;
    });
    
    this.homeService.getQuizQuestions(this.quizId).pipe()
      .subscribe(
        data => {
          this.quiz = data.data;
          this.quizName = this.quiz.title;
          this.questionIds = this.quiz.jsonData.toString().replace('[', '').replace(']', '').split(',');//Array.of((this.quiz.jsonData).json());
          this.tempQuestionIds = this.questionIds;
          console.log(this.questionIds);
        },
        error => { });
    
    setTimeout( ()=>{
      this.homeService.getUnAnsweredQuestionsForUser(this.userId, this.quizId, this.journeyId).pipe()
      .subscribe(
        data => {
          if( data.length > 0 ) {
            this.scoreForAnswerdQuestions = 0;
            this.answeredQuestions = 0;

            data.forEach((obj)=>{              
              this.questionIds = this.questionIds.map(function (el) {
                return el.trim();
              });

              if(this.questionIds.indexOf(obj.questionId.id.toString()) !== -1){
                this.answeredQuestions++;
                if(obj.correct){
                  this.scoreForAnswerdQuestions++;
                }
                this.questionIds.splice(this.questionIds.indexOf(obj.questionId.id.toString()), 1);
              }
            });
          }
          if(this.questionIds.length == 0){
            this.questionIds = this.tempQuestionIds;
            this.totalQuestions = this.questionIds.length;
            if(data.length >= this.totalQuestions){
              this.maxAttempt = this.maxAttempt + 1;
            }
          }
          console.log('retakeFlag'+this.retakeFlag);
          if(this.questionIds.length > 0 && this.retakeFlag){
            this.scoreForAnswerdQuestions = 0;
            this.answeredQuestions = 0;
            this.openQuestionPop();
          }
          console.log(this.questionIds);
          this.btnStart = true;
        },
        error => { });
      }, 5000)

        
      
  
  }


  clickRetake(journeyId:number) {
    this.questionIds = [];
    this.radioSelected = null;
    this.checkSelected = null;

    this.question = null;
    this.answers = null;

    this.i = 0;
    this.score = 0;
    this.scoreForAnswerdQuestions = 0;
    this.answeredQuestions = 0;
    this.nOfQuestions = 0;
    this.retakeFlag = true;
    this.ngOnInit();
    this.result_wrap = false;
    this.quest_alert_visible = false;  
    this.openQuestionPop();
    this.quiz_title_wrap = true;
    this.isDisabled=false;
  }

  openQuestionPop() {
      this.btnStart = false;
      this.quiz_title_wrap = false;
      this.quiz_shell_wrap = true;
      this.totalQuestions = this.questionIds.length;
      console.log(" this.questionIds : "+this.questionIds)
      this.questionId = Number(this.questionIds[this.i]);
      if(this.questionId > 0){this.getQuestion(this.questionId);}
      this.nOfQuestions = this.questionIds.length;
      this.btnStart = false;
      this.qust_submit = false;
  }
  getQuestion(questionId: Number) {
    this.questionId = Number(questionId);
    this.homeService.getQuestionById(this.questionId).pipe()
      .subscribe(
        data => {
          this.questionData = data.data;
          console.log("this.questionData : "+this.questionData);
          if (this.questionData != null) {
            this.jsonData = JSON.parse(this.questionData.jsonData)
            this.question = this.jsonData.question;
            this.answers = this.jsonData.answers;
            this.questionType = this.jsonData.questionType;
          }
          else if(this.questionData == null){}
          else  {
           // this.qust_submit = true;
            //if(this.questionData == null) {this.question="Questions Not available";}
            this.totalQuestions--;
            this.nOfQuestions--;
            this.i++;
            this.onContinue();
          }
        },
        error => { });
  }
  onSubmit() {
    this.qust_submit = false;
    this.isDisabled=true;
    this.jsonUserAnswer = [];
    if (this.questionType == "MULTIPLE_CHOICE") {
      for (let answer of this.answers) {
        if (answer.correct == true) {
          this.jsonCorrectAnswer.push(answer.id);}
         
        if ((this.answerList.indexOf(answer.id) > -1 ) && answer.correct == true) {
          this.jsonUserAnswer.push(answer.id);
        }
      }
      if((this.answerList.length != this.jsonCorrectAnswer.length) || (this.answerList.length != this.jsonUserAnswer.length)){
        this.isCorrect = false;
      }else{
        this.isCorrect = true;
      }
      // if (this.jsonCorrectAnswer.length == this.answerList.length) {
        // if (this.jsonUserAnswer.length == this.jsonCorrectAnswer.length) {
      if(this.isCorrect){
        this.quest_alert = 'quest_alert_correct';
        this.quest_alert_image = 'correct';
        this.quest_alert_text = ' Correct Answer';
        this.score++;
        this.correct = true;

      }
      else {
        this.quest_alert = 'quest_alert_wrong'
        this.quest_alert_image = 'wrong';
        this.quest_alert_text = ' Incorrect Answer';
        this.correct = false;
      }
      // this.answerList = [];

    }


    else if (this.questionType == "SINGLE_CHOICE") {
      for (let answer of this.answers) {
        if (answer.correct == true) this.jsonCorrectAnswer.push(answer.id);
        if (answer.id == this.radioSelected) {
          this.jsonUserAnswer.push(answer.id);
          if (answer.correct == true) {
            this.quest_alert = 'quest_alert_correct';
            this.quest_alert_image = 'correct';
            this.quest_alert_text = ' Correct Answer';
            this.correct = true;
            this.score++;
            break;
          }
          else {
            this.quest_alert = 'quest_alert_wrong'
            this.quest_alert_image = 'wrong';
            this.quest_alert_text = ' Incorrect Answer';
            this.correct = false;
            break;
          }
        }
        this.answerList = this.jsonUserAnswer;
      }
    }
   // this.qust_submit = false;
    this.quest_alert_visible = true;
    this.quizUserResponse = new QuizUserResponse();
    this.quizUserResponse.userId = this.userId;
    this.quizUserResponse.quizId = this.quizId;
    this.quizUserResponse.journeyId=this.journeyId;
    this.quizUserResponse.questionId = this.questionId;
    this.quizUserResponse.jsonUserAnswer = this.answerList;
    this.quizUserResponse.jsonCorrectAnswer = this.jsonCorrectAnswer;
    this.quizUserResponse.correct = this.correct;
    this.quizUserResponse.attempt = this.maxAttempt;
    this.homeService.insertQuizUserResponse(this.quizUserResponse).pipe().subscribe(data => {
    },
      error => {

      });
    this.jsonUserAnswer = [];
    this.jsonCorrectAnswer = [];
    this.totalQuestions--;
    this.i++;
  }

  onContinue() {
   console.log("totalQuestions: "+this.totalQuestions);
    this.answerList = [];
    if (this.totalQuestions != 0) {
      this.quest_alert_visible = false;
      this.questionId = Number(this.questionIds[this.i]);
      console.log(" this.questionId: "+ this.questionId)
      this.getQuestion(this.questionId);
      this.isDisabled=false;
     // this.qust_submit = true;
    }
    else {
      this.quiz_shell_wrap = false;
      this.quiz_title_wrap = false;
      this.result_wrap = true;
      this.passPercentage = ((this.score + this.scoreForAnswerdQuestions) / (this.nOfQuestions + this.answeredQuestions)) * 100;
      this.maxAttempt = this.maxAttempt + 1;
     // this.passPercentage=(this.passPercentage<=0)?0:this.passPercentage;
      if (this.passPercentage >= 80) {
        this.btnComplete = true;
        this.btnRetake = false;
        this.result_image = "result_pass";
        this.text_result = "Congratulations!"
      }
      else {
        this.btnRetake = true;
        this.btnComplete = false;
        this.result_image = "result_fail";
        this.text_result = "Failed! Please try again"
      }
    }

  }
 
  onToggle(answerId, event) {
   if(!this.qust_submit) this.qust_submit = true;
    this.answers.answer = event;
    if (this.answerList.indexOf(answerId)> -1) {
      this.answerList.splice(this.answerList.indexOf(answerId), 1);
    } else {
      this.answerList.push(answerId);
    }
    // this.answerCount = this.answerList.length;
  }

  markAsComplete(journeyId:string) {
    this.commonService.markAssetCompleted(this,journeyId);
//     this.homeService.completeJourney(journeyId, String(this.currentUser.id))
//       .pipe()
//       .subscribe(
//         data => {
//           console.log("Success in complete")
//          },
//         error => {
// console.log("Error in complete")
//         });
    this.route.queryParams.subscribe(params => {
      this.router.navigate([this.url], {
        queryParams: {
          "userId": this.userId,
          "queryUrl": this.queryUrl,
          "assetsTypeId": this.assetsTypeId,
          "productId": this.productId,
          "disId": this.disId,
          "taId": this.taId
        }, skipLocationChange: true
      });
    })

  }

  goBack(url: String) {
    this.route.queryParams.subscribe(params => {
      this.router.navigate([url], {
        queryParams: {
          "userId": this.currentUser.id,
          "queryUrl": params['queryUrl'],
          "assetsTypeId": params['assetsTypeId'],
          "productId": params['productId'],
          "disId": params['disId'],
          "taId": params['taId']
        }, skipLocationChange: true
      });
    });
  }

}