import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/userservices';
import { AlertService } from '../../../services';
import { EditUser } from '../../model/EditUser'

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery'
import { User } from 'src/app/models';

import { EditUserName } from '../../model/editUserName';
import { ManagerDto } from '../../model/managerDTO';
import { TaDto } from '../../model/taDto';
import { Country } from '../../model';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  currentUser: User;
  editForm: FormGroup;
  taForm: FormGroup;
  edituserprofile:Boolean=false;
  userstatus:boolean=false;
  countryName: any;
  editmanagerForm: FormGroup;
  editUser: EditUser = new EditUser();
  countrys: string = "";
  managerEmail: string = "";
  countryForm: FormGroup;
  selectLanguage: String;
  dropdownList: any = [];
  regionList: any = [];
  therputicAreaList: any = [];
  productList: any = [];
  productListTa:any=[];
  countryOfOpa:any=[];
  listPustProduct:Array<any>=[]
  productItems = [];
  diseaseList: any = [];
  diseaseListTA:any=[];
  country:any={id:0,name:"",product:[],disState:[]};
  diseaseItems = [];
  diseaseItemsList=[];
  managername: any = { id: '', name: '', email: '' };
  selectedItems = [];
  therputicAreaItems=[];
  productItemsTa=[];
  countryOf=[];
  services = {};
  dropdownSettings = {};
  dropdownSettingsTa = {};
  dropdownSettingsTaList = {};
  dropdownListProduct = [];
  selectedItemsProduct = [];
  rolePresent:boolean=false;
  dropdownSettingsProduct = {};
  roles: Object[] = [{ id: 0, name: "" }];
  region: [
    { id: 0, name: "" }
  ];
  status=[];

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private formBuilder: FormBuilder, private userservice: UserService, private alertService: AlertService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if (this.currentUser.role.find(x => x['name'] == "ROLE_ADMIN" ) != undefined ) {
      this.rolePresent = true;
    }

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.dropdownSettingsTaList = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 20,
      allowSearchFilter: true
    };

    this.dropdownSettingsTa = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 20,
      allowSearchFilter: true
    };

    this.dropdownSettingsProduct = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    
    this.route.params.subscribe(params =>
      this.userservice.editUser(Number(params['id'])).pipe().subscribe(users => {
       console.log(users.data);
        this.editUser = users.data;
        this.userstatus=this.editUser.status;
        this.dropdownList = this.editUser.item; 
        this.selectedItems = this.dropdownList;
        this.productList = this.editUser.product;
        this.productItems = this.productList;
        this.managername = this.editUser.manager[0];
        this.countryName = this.editUser.country[0];
        this.diseaseList = this.editUser.diseasestate;
        this.diseaseItems = this.diseaseList;
        this.countryOfOpa=this.editUser.country
        this.countryOf= this.countryOfOpa;
      //  console.log(JSON.stringify(this.editUser.country));
        for (var i = this.editUser.roles.length - 1; i >= 0; i--) {
          for (var j = 0; j < this.editUser.userRoles.length; j++) {
            if (this.editUser.roles[i] && (this.editUser.roles[i]['name'] === this.editUser.userRoles[j]['name'])) {
              this.editUser.roles.splice(i, 1);
            }
          }
        }
        this.therputicAreaList=this.editUser.therapeuticArea;
        this.regionList=this.editUser.region;
   // alert(JSON.stringify(this.regionList));
        for (var i = this.editUser.groups.length - 1; i >= 0; i--) {
          for (var j = 0; j < this.editUser.userGroups.length; j++) {
            if (this.editUser.groups[i] && (this.editUser.groups[i]['name'] === this.editUser.userGroups[j]['name'])) {
              this.editUser.groups.splice(i, 1);
            }
          }
        }
      },
        error => {
          this.alertService.error(error);
        }
      )
    )
  }


  ngOnInit() {
    this.createForm();
  }

  pushUserRole(role: Country) {
    this.editUser.roles.push(role);
    this.editUser.userRoles = this.editUser.userRoles.filter((ele) => { return ele['name'] != role.name; });
  }

  pushData(role: Country) {
    this.editUser.userRoles.push(role);
    this.editUser.roles = this.editUser.roles.filter((ele) => { return ele['name'] != role.name; });
  }

  pushGroupData(group: Country) {
    this.editUser.userGroups.push(group);
    this.editUser.groups = this.editUser.groups.filter((ele) => { return ele['name'] != group.name; });

  }

  pushUserGroup(userGroup: Country) {
    this.editUser.groups.push(userGroup);
    this.editUser.userGroups = this.editUser.userGroups.filter((ele) => { return ele['name'] != userGroup.name; });
  }

  onItemSelect(item: any) {
    console.log(item);
  }


  onTAItemSelect(item: Number) {
  this.taForm.value.therapeutic.push(this.editUser.therapeuticArea.find(x => x.item_id == item));
    this.productListTa=this.editUser.therapeuticArea.find(x => x.item_id == item).product;
    this.diseaseListTA=this.editUser.therapeuticArea.find(x => x.item_id == item).disState;
  }


  regionSelect(item: Number) {

    this.countryOfOpa=this.editUser.region.find(x=> x.item_id ==item).country
  //  / alert(JSON.stringify(this.countryOfOpa));
   
    }

 // ;
  productTASelect(item: any) {
    this.taForm.value.product.push(item);
    
  }

  disTASelect(item: any) {
    this.taForm.value.diseasestate.push(item);
    
  }

  disTASelectAll(items: Object[]) {
    items.forEach(ele=>{
      this.taForm.value.diseasestate.push(ele);
    })
  }

  onProductsTASelectAll(items: Object[]) {
    items.forEach(ele=>{
      this.taForm.value.product.push(ele);
    })
  }

  countrySelectAll(items: Object[]) {
   
  }

// this.taForm.value.diseasestate.push(element);
  productSelect(item: any) {
  
  }
  countrySelect(item: any) {
  
  }
  diseaseSelect(item: any) {
  }
  onSelectAll(items: any) {
  }

  onProductsSelectAll(items: any) {
  }

  onDiseaseSelectAll(items: any) {
  }

  get f() { return this.countryForm.controls; }
  createForm() {

    this.countryForm = this.formBuilder.group({
      firstname: ['',  [Validators.required,Validators.minLength(3)]],
      homeCountry:[''],
      lastnames: [''],
      status:[],
      mail: ['',  [Validators.required,Validators.email]],
      title: [''],
      etype: ['']
     // countryControl: ['', Validators.required],


    });

    this.taForm = this.formBuilder.group({
      therapeutic: [],
      therapeuticList: [],
      diseasestateList:[],
      productList:[],
      diseasestate: [],
      product: [],
    });
    this.editmanagerForm = this.formBuilder.group({
      managerEmail: ['', Validators.required],
      userRegion:[''],
      countryList:[],
      managerNameForm: ['', Validators.required],
    });

  }
  customComparator: () => {}

  onSelect(countryid: any) {

  }

  editUserProfiles() {
    this.edituserprofile=true;
    if (this.countryForm.invalid) {
      return;
    }

    if (this.editmanagerForm.invalid) {
      return;
    }
    
  
  

    var taDto = new TaDto(this.taForm.value.diseasestate, this.taForm.value.product, this.taForm.value.therapeutic);
    var editUserName = new EditUserName(
      this.countryForm.value.countryControl,
      this.countryForm.value.etype,
      this.countryForm.value.firstname,
      this.countryForm.value.lastnames,
      this.countryForm.value.mail,
      this.countryForm.value.title,
      this.userstatus,
        this.countryForm.value. homeCountry,
      this.editmanagerForm.value.countryList
    );

    var manager = new ManagerDto(
      this.editmanagerForm.value.managerNameForm.id,
      this.editmanagerForm.value.managerNameForm.name,
      this.editmanagerForm.value.managerNameForm.email
    );
//alertService
    this.userservice.editUserService(this.editUser.id, editUserName, manager, taDto, this.editUser.userRoles,this.editUser.userGroups).pipe().subscribe(

      data => {
       
       // location.reload();
        this.alertService.success(data.data);
        window.scroll(0,0);
        
    },
    error => {
      this.alertService.error(error);
      window.scroll(0,0);
    }

    );

    

  }

  userStatus($event,Id:number){
       
    if($event.target.checked==false){
      this.userstatus=true;
    }
    if($event.target.checked==true){
      this.userstatus=false;
    }

  }


}
