import { Component, ViewChild,OnInit ,AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { User,Region,Country,Update } from '../models';
import { UserService,HomeService} from '../services';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',

  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements  OnInit{
 // @ViewChild(HomeComponent) region:HomeComponent;
  userprofile: FormGroup;
  currentUser: User;
  allregions = 'none';
  ta='none';
  allCountrys='none';
  message:any;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  dropdownListProduct=[];
  selectedItemsProduct = [];
  dropdownSettingsProduct= {};
  region: [
    {id:0,name:""}
  ];
  countrys: Country[];
  state:[
    {
       id: 0,regionId:0, name: ""
    }
  ]
  therapeuticArea:[
    {
    id:0,
    name:"",
    diseaseStates:[{}],
    product:[{}]
    }
  ]

  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private router: Router,private homeService: HomeService
   ,private userService: UserService ) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.homeService.getRegion().pipe().subscribe(
      data => {
        this.region=data.data.region;
       this.state=data.data.country;
       this.therapeuticArea=data.data.therapeuticArea;
      
      
      // this.selectedItems = [
      //   { item_id: 3, item_text: 'Pune' },
      //   { item_id: 4, item_text: 'Navsari' }
      // ];
      this.dropdownSettings = {
        singleSelection: false,
        idField: 'item_id',
        textField: 'item_text',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 3,
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
      },
      error => {
      });
  }
  onSelectTA(tsId :any){
    this.homeService.getDiseaseState(Number(tsId)).pipe().subscribe(
      data => {
       this.dropdownList = data.data[0].diseaseStates;
       this.dropdownListProduct=data.data[0].products;
      
      },
      error => {
      
      });
  }
  onSelect(countryid :any) {    
    this.countrys = this.state.filter((item)=> item.regionId == countryid);
  }

  

  ngOnInit() {

    this.userprofile = this.formBuilder.group({
      firstname: ['', [Validators.required,Validators.minLength(3)]],
      lastname: ['', [Validators.required,Validators.minLength(3)]],
      regionValue:['',Validators.required],
      email: ['', [Validators.required,Validators.minLength(3)]],
      country: ['', [Validators.required,Validators.minLength(3)]],
      ta: ['', [Validators.required,Validators.minLength(3)]],
      diseasestate: [[]],
      product: [[]]
  });    
  }


  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }


  get f() { return this.userprofile.controls; }
  onItemSelectProduct(itemProduct: any) {
    console.log(itemProduct);
  }
  onSelectAllProduct(itemsProduct: any) {
    console.log(itemsProduct);
  }


  onUpdateProfile() {

    if (this.userprofile.invalid) {
      return;
  }

  let update=new Update(this.f.firstname.value,this.f.lastname.value,Number(this.f.regionValue.value),
  this.f.email.value,Number(this.f.country.value),Number(this.f.ta.value),this.f.diseasestate.value,
  this.f.product.value
  )
  console.log(update);
  this.userService.update(this.currentUser.id,update).pipe().subscribe(
    data => {
    
      this.router.navigate(['/success']);
    },
    error => {
    
    });

  //  this.router.navigate(['/success']);
   // this.router.navigate(['/load']);
}

}
