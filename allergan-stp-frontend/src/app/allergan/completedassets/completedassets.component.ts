import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from '@angular/router';
import { HomeService} from '../../services';
import{User} from '../../models';
@Component({
  selector: 'app-completedassets',
  templateUrl: './completedassets.component.html',
  styleUrls: ['./completedassets.component.css']
})
export class CompletedassetsComponent implements OnInit {
  currentUser: User;
  url:string;
  isSearchActive = false;
  courses:[{asset:{title:"",awardPoints:0}}];
  constructor(private route: ActivatedRoute,private router: Router,private homeService: HomeService) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }
  ngOnInit() {

    
  
this.route.queryParams.subscribe(params => {
   this.url=params['url']
    this.homeService.getCompletedAssets(params['userId'],params['assetsTypeId'],params['productId'],params['disId'],params['taId'])
      .pipe()
       .subscribe(
           data => {
            this.courses=data.data;
              
           },
           error => {
           
           });
      
         

  
})

  }
  goBack(url:String){
    this.route.queryParams.subscribe(params => {
     
      this.router.navigate([url], { queryParams:  {
        "userId":this.currentUser.id,
        "queryUrl":params['queryUrl'],
        "assetsTypeId":params['assetsTypeId'],
        "productId":params['productId'],
        "disId":params['disId'],
        "taId":params['taId']


      }, skipLocationChange: true});
    })
  }
}
