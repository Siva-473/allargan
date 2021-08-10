import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';


import { Router } from '@angular/router';
import { BatchImportService } from '../../services/batchimportservice';
import { AlertService, HomeService } from '../../../services';

@Component({
  selector: 'app-admin-batch-import',
  templateUrl: './batch-import.component.html',
  styleUrls: ['./batch-import.component.css']

})
export class BatchImportComponent implements OnInit {
  constructor(private formBuilder:FormBuilder, private batchImportService: BatchImportService, 
  private alertService :AlertService, private _homeService:HomeService, private sanitizer: DomSanitizer){}

  userForm:FormGroup;
  assetForm:FormGroup;
  questionForm:FormGroup;
  public userBatchFile : string = "No file choosen";
  public assetBatchFile : string = "No file choosen";
  public questionBatchFile : string = "No file choosen";
  public userFile;
  userTemplat; 
  assetTemplat; 
  questionTemplat;
  public IE_B:boolean = false;
  public CH_B:boolean = false;

  public assetFileUploaded : File = null;
  public usersFileUploaded : File = null;
  public questFileUploaded : File = null;
  
  ngOnInit(): void {
    this.assetForm = this.formBuilder.group({
      batchImportAssetFile: ['']
    });
    this.userForm = this.formBuilder.group({
      batchImportUserFile : ['']
    })  
    this.questionForm = this.formBuilder.group({
      batchImportQuestionFile : ['']
    })

    this._homeService.openTemplat("Users.xlsx")
     .pipe()
     .subscribe(
       content => {
        var blob = new Blob([content], { type: content.type });  
        this.userTemplat = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
       }, error => {
         console.log("User Templat Download Error.")
       }
     );


    this._homeService.openTemplat("Assets.xlsx")
     .pipe()
     .subscribe(
       content => {
        var blob = new Blob([content], { type: content.type });  
        this.assetTemplat = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
       }, error => {
         console.log("Asset Templat Download Error.")
       }
     );
    this._homeService.openTemplat("Questions.xlsx")
     .pipe()
     .subscribe(
        content => {
        var blob = new Blob([content], { type: content.type });  
        this.questionTemplat = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
       }, error => {
         console.log("Question Templat Download Error.")
       }
    );
    if (navigator.userAgent.indexOf('Edge') >= 0){  // for Edge
       this.IE_B = false;
       this.CH_B = true;
    }else if (navigator.appVersion.toString().indexOf('.NET') > 0) { // for IE browser
      this.IE_B = true;
      this.CH_B = false; 
    } else {
      this.CH_B = true; 
      this.IE_B = false; 
    }
  }
  onSubmitBatchImportQuestionForm(event){
    if(this.questionForm.controls.batchImportQuestionFile.value.length == 0){
      this.alertService.success("Please select file to import questions.");
    }else{
      var questionFormData = new FormData();
      questionFormData.append('file', this.questFileUploaded, this.questFileUploaded.name);
      questionFormData.append('inputFileName', this.questFileUploaded.name);
      this.batchImportService.batchImportQuestion(questionFormData)
      .pipe().subscribe(
        data =>{
          var successCount = 0;
          var questionUpdateCount = 0;
          var failCount = 0;
          if(data.length == 0){
            this.alertService.success("Total questions imported: 0");
          }else if(data.length >= 1){
            for(var R = 0; R < data.length; R++){
              var currentElement = data[R];
              console.dir(currentElement);
              if( currentElement.processMessage == "Added.."){
                successCount++;
              }else if( currentElement.processMessage == "Updated.."){
                questionUpdateCount++;
              }else{
                failCount++;
              }
            }
            this.alertService.success("Total questions imported: "+ successCount +", updated :"+questionUpdateCount+", fail : "+ failCount);
          }
  
        },
        erroor => {
          this.alertService.error("Error !");
        }
      );

    }
  }

  onQuestionFileChange(files: FileList) {
    this.questFileUploaded = files.item(0);
    this.questionBatchFile = this.questFileUploaded.name;
  }

  onSubmitBatchImportAssetForm(event){
     
    if(this.assetForm.controls.batchImportAssetFile.value.length == 0){
      this.alertService.success("Please select file to import assets.");
    }else{
      var formData2 = new FormData();
      formData2.append('file', this.assetFileUploaded, this.assetFileUploaded.name);
      formData2.append('inputFileName', this.assetFileUploaded.name);
      this.batchImportService.batchImportAsset(formData2)
      .pipe().subscribe(
        data =>{
          
          var successCount = 0;
          var updatedCount = 0;
          var failCount = 0;
          if(data.length == 0){
            this.alertService.success("Total assets imported: 0");
          }else if(data.length >= 1){
            for(var R = 0; R < data.length; R++){
              var currentElement = data[R];
              console.dir(currentElement);
              if( currentElement.processMessage == "Asset Stored.."){
                successCount++;
              }else if(currentElement.processMessage == "Updated!"){
                updatedCount++;
              }else{
                failCount++;
              }
            }
            this.alertService.success("Total assets imported: "+ successCount +" , Updated : "+updatedCount+", Failed : "+ failCount);
          }
        },
        erroor => {
          this.alertService.error("Error !");
        }
      );

    }
  }
  onAssetFileChange(files: FileList) {
      this.assetFileUploaded = files.item(0);
      this.assetBatchFile = this.assetFileUploaded.name;
  }
  ////--------------------------------------------------------------------------------------------------------
  onSubmitBatchImportUserForm(event){
    if(this.userForm.controls.batchImportUserFile.value.length == 0){
      this.alertService.success("Please select file to import users.");
    }else{
      var formData = new FormData();
      formData.append('file', this.usersFileUploaded, this.usersFileUploaded.name);
      formData.append('inputFileName', this.usersFileUploaded.name);
      this.batchImportService.batchImportUser(formData)
      .pipe().subscribe(
        data =>{
          var successCount = 0;
          var updatedCount = 0;
          var failCount = 0;
          if(data.length == 0){
            this.alertService.success("Total users imported: 0");
          }else if(data.length >= 1){
            for(var R = 0; R < data.length; R++){
              var currentElement = data[R];
              console.dir(currentElement);
              if( currentElement.processMessage == "Stored..!"){
                successCount++;
              }else if(currentElement.processMessage == "Updated..!"){
                updatedCount++;
              }else{
                failCount++;
              }
            }
            this.alertService.success("Total users imported: "+ successCount +" , updated : "+updatedCount+", failed : "+ failCount);
          }
        },
        erroor => {
          this.alertService.error("Error !");
        }
      );

    }
  }
  onUserFileChange(files:FileList) {
    this.usersFileUploaded = files.item(0);
    this.userBatchFile = this.usersFileUploaded.name;
  }
///----------------------------------------------------------
openTemplate(templateName:string):any{
  this.batchImportService.openTemplate(templateName)
  .pipe()
     .subscribe(content => {
      if(navigator.appVersion.toString().indexOf('.NET') > 0){
        var blob = new Blob([content], { type: content.type});
        window.navigator.msSaveBlob(blob);
      }else{
        var blob = new Blob([content], { type: content.type}),
        url = window.URL.createObjectURL(blob);
        window.open(url);
      }
     });
 }

///----------------------------------------------------------
 openAsset(fileName : string) {
   this._homeService.openTemplat(fileName)
     .pipe()
     .subscribe(
       content => {
         if (navigator.userAgent.indexOf('Edge') >= 0){  // for Edge
           console.log('Edge');
           var blob = new Blob([content], { type: content.type });
           window.navigator.msSaveOrOpenBlob(blob, fileName);
         }
         if (navigator.appVersion.toString().indexOf('.NET') > 0) { // for IE browser
           var blob = new Blob([content], { type: content.type });
           window.navigator.msSaveBlob(blob, fileName);
         } else {
           var blob = new Blob([content], { type: content.type }),
             url = window.URL.createObjectURL(blob);
           window.open(url, fileName);
         }
       }, error => {
         console.log("Error")
       }
     );

}
///----------------------------------------------------------
}