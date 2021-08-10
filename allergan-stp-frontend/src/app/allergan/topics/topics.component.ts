import { Component,Input,Output,EventEmitter, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HomeService} from '../../services';
import { User,AssetJourneyRequestParams } from '../../models';
import{MainpageComponent} from '../mainpage'

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {
  @Input() getTopicsComponent: boolean=true;
  searchActive:boolean=false;
  basecampTrue:boolean=false;
  navClick:boolean=false;
  currentUser: User;
  status: boolean = false;
  assetType:[{id:0,name:""}]
  ta:[{id:0,userName:""}];
  diseaseState:[{id:0,name:"",description:"",status:0}];
  products:[{id:0,name:"",status:0}];
  myVar:boolean =false; 
  assetsTypeId:number=0;
  @Input() show:boolean=true;
  queryUrl:string="";
  
  constructor( private route: ActivatedRoute,private homeService: HomeService , private router: Router) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.basecampTrue=true
    }
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.assetsTypeId=params['assetsTypeId']
      this.queryUrl=params['queryUrl']
    })
    
  }

  toggleCollapse() {
    this.searchActive=!this.searchActive;
   }

  navBarActive(){
    this.navClick=!this.navClick;
  }
    
  onClickedOutside() {
    this.navClick=false;
  }

}
