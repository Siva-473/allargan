import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { GroupService } from '../../services/groupservice';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { sharedservice } from '../../services/sharedservice';
import { MetaDataService } from '../../services/metadataService';
import { AlertService } from 'src/app/services';

@Component({
  selector: 'app-admin-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  addGroup_show : boolean = false;
  submitBtn : boolean = true;
  updateBTn : boolean = false;
  submitted = false;

  groups:  [{id:0,name:"",description:"",status:false}];
  mappedAssetIDs: Array<number> = [];
  mappedUserIDs:Array<number> = [];
  constructor(
    private formBuilder: FormBuilder,
    private groupService:GroupService,
    private service:sharedservice,
    private metaService: MetaDataService,
    private alertService: AlertService,
    private router: Router) {  }

  ngOnInit() {
    this.groupService.getGroups().pipe(first()).subscribe(groups => {      
        this.groups = groups.data;

        groups.data.forEach(g => {

          this.metaService.getMappedAssets(g.id).pipe().subscribe(data => {  
            this.mappedAssetIDs = [];
            data.data.forEach(a => {
                this.mappedAssetIDs.push(a.id);
              });
              g.assetCount = this.mappedAssetIDs.length;
          });   
          
          this.metaService.getMappedUsers(g.id).pipe(first()).subscribe(users => {  
            this.mappedUserIDs = [];
            users.data.forEach(u => {
               this.mappedUserIDs.push(u.id);
             });
             g.userCount = this.mappedUserIDs.length;
           });

        });

    });
  }

  model: any = {};
 
  onSubmit() {
    if(this.model.id > 0){
      this.groupService.editGroup(this.model).pipe(first()).subscribe(groups => {
        this.cancelGroup();
        this.groupService.getGroups().pipe(first()).subscribe(groups => {      
            this.groups = groups.data;

            this.alertService.success('Successfully Updated.');
            window.scroll(0,0);
          },
          error => {
            this.alertService.error(error);
            window.scroll(0,0);
        });
      });      
    }else{
      this.groupService.insertGroup(this.model).pipe(first()).subscribe(groups => { 
        this.cancelGroup();
        this.groupService.getGroups().pipe(first()).subscribe(groups => {      
            this.groups = groups.data;

            this.alertService.success('Successfully Added.');
            window.scroll(0,0);
          },
          error => {
            this.alertService.error(error);
            window.scroll(0,0);
        });
      });
    }
    
  }

  onAddGroupClick() {
    this.addGroup_show=true;
    this.submitBtn  = true;
    this.updateBTn  = false;

    this.model.id = '';
    this.model.name = '';
    this.model.description = '';       
  }

  onEditGroupClick($event,Id:number){
    this.addGroup_show=true;

    this.submitBtn  = false;
    this.updateBTn  = true;

    this.groupService.findGroupById(Id).pipe(first()).subscribe(groups => {
      this.model.id = groups.data.id;
      this.model.name = groups.data.name;
      this.model.description = groups.data.description;       
    });
  }

  onDeleteGroupClick($event,Id:number){
    this.groupService.deleteGroup(Id).pipe(first()).subscribe(groups => {
        this.groups = groups.data;    
        this.alertService.success('Successfully Deleted.');
        window.scroll(0,0);
      },
      error => {
        this.alertService.error(error);
        window.scroll(0,0);
    
    });
  }

  cancelGroup(){
    this.addGroup_show=false;
  }  

  changeStatus($event,Id:number){    
    let status='false';
    if($event.target.checked== false){
      status='true';
    }

    this.groupService.changeStatus(status,Id).pipe(first()).subscribe(groups => {
        this.groups = groups.data;      
    });    
  }

  shareGrpDetails(grpId: number, grp: string){    
    this.service.saveData(grpId, grp); 
    this.router.navigate(['/admin/group/map']);
  }
}
