import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models';
import { HomeService, CommonService } from '../../services';
import { interval, Subscription } from 'rxjs';
@Component({
  selector: 'app-basecamp',
  templateUrl: './basecamp.component.html',
  styleUrls: ['./basecamp.component.css']
})
export class BasecampComponent implements OnInit {
  searchActive: boolean = false;
  currentUser: User;

  navClick: boolean = false;
  assetsType: [{ id: 0, userName: "", total: 0, completed: 0, started: 0, notStarted: 0 }];
  notifications: [{ id: 0, message: "" }];
  notificationSize: number = 0;
  notificationIds = new Array();
  source = interval(20000);//20 secs
  isnotificaionbodshow: string = "";

  constructor(private homeService: HomeService, private _commonService: CommonService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));

    this.homeService.getAssets(this.currentUser.id)
      .pipe()
      .subscribe(
        data => {
       
          this.assetsType = data.data;
          console.log("this.asset : "+this.assetsType);
        },
        error => {

        });

  }

  ngOnInit() {

    this._commonService.clearRootList();
    this._commonService.addElementToRootList(1, 'Basecamp', '/basecamp', '/basecamp', "", "");
  }

  type(id: any) {


  }
  toggleCollapse() {
    this.searchActive = !this.searchActive;
  }

  navBarActive() {
    this.navClick = !this.navClick;
  }

  onClickedOutside() {
    this.navClick = false;
  }
  markAllAsSeen() {
    this.notifications.forEach(notification => {
      this.notificationIds.push(Number(notification.id));
    });
    this.markNotificationsAsSeen();
  }
  markAsSeen(id: number) {
    this.notificationIds.push(Number(id));
    this.markNotificationsAsSeen();
  }
  markNotificationsAsSeen() {
    this.homeService.notificationMarkAsSeen(this.notificationIds, this.currentUser.id)
      .pipe()
      .subscribe(
        data => {
          //window.location.reload();
          this.homeService.getUserNotifications(this.currentUser.id)
            .pipe()
            .subscribe(
              data => {
                this.notifications = data.data;
                this.notificationSize = this.notifications.length;
              },
              error => {

              });
        },
        error => {

        });
  }

  loadNotifications() {
    this.homeService.getUserNotifications(this.currentUser.id)
      .pipe()
      .subscribe(
        data => {
          this.notifications = data.data;
          this.notificationSize = this.notifications.length;
        },
        error => {

        });
  }
  showNotifications() {
    this.isnotificaionbodshow = "hover_showbox";
    // alert("showNotifications");
  }

  subscription = interval(20000).subscribe(val => this.loadNotifications());

}
