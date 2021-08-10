import { Component, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService, CommonService } from '../../services';
import { User, ProductAndDiseaseIds, Therapeuticareas } from '../../models';
import { MainpageComponent } from '../mainpage'
@Component({
  selector: 'app-therapeuticareas',
  templateUrl: './therapeuticareas.component.html',
  styleUrls: ['./therapeuticareas.component.css']
  // host: {
  //   '(document:click)': 'closePopup($event)',
  // },
})
export class TherapeuticareasComponent implements AfterViewInit {
  currentUser: User;
  noTAs: Boolean = false;
  status: boolean = false;
  ta: Therapeuticareas[] = [];
  diseaseState: [{ id: 0, name: "", description: "", status: 0 }];
  products: [{ id: 0, name: "", status: 0 }];
  showProducts: Boolean = false;
  noData: boolean = false;
  numberCount: Number = null;
  colorActive: Boolean = false;
  noDiseasStates: boolean = false;
  showLoding: Boolean = false;
  selectedProduct: number = null;
  selectedDState: number = null;
  selectedIndex: number = null;
  showDiseaseStates: Boolean = false;
  mouseOvered: Boolean = false;
  taId: number = 0;
  queryUrl: string = "";
  //@Input() child:MainpageComponent;
  @Output() someEvent = new EventEmitter<ProductAndDiseaseIds>();
  breadCrumb="";

  constructor(private route: ActivatedRoute, private homeService: HomeService,private commonService:CommonService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));  
    this.commonService.breadCrumb="";
    this.route.queryParams.subscribe(params => {
      this.queryUrl = params['urls'];
      this.noTAs = false;
      this.commonService.breadCrumb=this.queryUrl;
      this.homeService.getTherapeuticAreas(Number(params['userId']), params['assetsTypeId'])
        .pipe()
        .subscribe(
          data => {
            this.ta = data.data;
            console.log(this.ta);
            if (Number(this.ta.length) == 0) {
              this.noTAs = true;
            }
            this.ta.sort((a, b) => a.userName.localeCompare(b.userName));
          },
          error => {
          });
    });
  }

  ngAfterViewInit() {
  }
  

  ngOnInit() {



  }
  // removepop($event) {
  //   const fig = document.querySelectorAll('.figbx')
  //   // console.log($event.target.parentElement.className)
  //   if($event.target.parentElement.className === 'figbx actives') {
  //     $event.target.parentElement.className === 'figbx active actives'
  //   }else {
  //     fig.forEach(el => {
  //       el.className = 'figbx';
  //     })
  //   }
  // }

  loadDiseaseState(diseaseStateId: number, i: number) {
    this.selectedDState = i;
    setTimeout(() => {

      this.someEvent.emit(new ProductAndDiseaseIds(this.taId, 0, diseaseStateId, this.queryUrl));
    },
      300);
  }

  loadSuccessProduct(productId: number, i: number) {
    this.selectedProduct = i;
    setTimeout(() => {
      this.someEvent.emit(new ProductAndDiseaseIds(this.taId, productId, 0, this.queryUrl));
    },
      300);
      

  }

  changeStyle($event, index: number) {
    this.selectedIndex = index;
    if($event.target.className === 'figur') {
      $event.target.parentElement.classList.add('actives');
    }else if($event.target.className === 'fig-title') {
      $event.target.parentElement.parentElement.parentElement.classList.add('actives');
    }
  }
  changeStyleAdd($event) {
    if($event.target.className === 'figur') {
      $event.target.parentElement.classList.add('activePop');
    } else if($event.target.className === 'fig-title') {
      $event.target.parentElement.parentElement.parentElement.classList.add('activePop');
    }
  }
  changeStyleRemove($event, index: number) {
    if($event.target.className === 'figur') {
      this.selectedIndex = index;
      $event.target.parentElement.classList.remove('activePop');
    }else if($event.target.className === 'fig-title') {
      $event.target.parentElement.parentElement.parentElement.classList.remove('activePop');
    }
  }
  removePop($event) {
    if($event.target.className === 'overlay') {
      const figbx = document.querySelector('.figbx');
      figbx.classList.remove('activePop')
      
    }
  }
  updateRootList(index: number, taId){
    this.commonService.addElementToRootList(3,taId.name,'','',"", "");
  }
  updateRootListForDiseaseState(i, diseaseStates){
    this.commonService.addElementToRootList(4,diseaseStates.name,'','',"", "");
  }
  updateRootListForProduct(i, product){
    this.commonService.addElementToRootList(4,product.name,'','',"", "");
  }

  diseaseStatesProducts(index: number, taId: number) {

    this.numberCount = index;
    this.taId = taId;
    this.colorActive = true;
    this.showDiseaseStates = false;
    this.showProducts = false;
    this.showLoding = true;
    this.noData = false;
    this.noDiseasStates = false;

    this.status = !this.status;
    //this.showProducts=true;
    this.homeService.getdiseaseStatesProducts(this.currentUser.id, taId)
      .pipe()
      .subscribe(
        data => {

          this.showLoding = false;
          this.showDiseaseStates = true;
          this.showProducts = true;
          this.diseaseState = data.data.diseaseStates;
          this.diseaseState.sort((a, b) => a.name.localeCompare(b.name));

          this.products = data.data.products;
          this.products.sort((a, b) => a.name.localeCompare(b.name));
          if (Number(this.products.length) == 0) {
            this.noData = true;
          }
          if (Number(this.diseaseState.length) == 0) {
            this.noDiseasStates = true;
          }


        },
        error => {

        });


  }
  getBreadCrumb(breadCrumb:string){  
   this.commonService.breadCrumb=this.commonService.breadCrumb+" / "+breadCrumb;
  }
}

