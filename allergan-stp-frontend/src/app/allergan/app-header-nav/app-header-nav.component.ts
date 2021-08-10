import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../../models';
import { HomeService, CommonService } from '../../services';
import { interval, Subscription } from 'rxjs';
@Component({
  selector: 'app-header-nav',
  templateUrl: './app-header-nav.component.html',
  styleUrls: ['./app-header-nav.component.css']
})
export class AppHeaderNavComponent implements OnInit {

  currentUser: User;
  badgeShow:boolean=false;
  isnotificaion: boolean = false;
  notifications: [{ id: 0, message: "" }];
  notificationSize: number = 0;
  notificationIds = new Array();
  source = interval(20000);//20 secs
  isnotificaionbodshow: Boolean = false;
  navClick: boolean = false;
  assetsType: [{ id: 0, userName: "", total: 0, completed: 0, started: 0, notStarted: 0 }];
  queryUrl: string = "";
  breadCrumb: string = "";
  group: any = { id: 0, name: "" };
  assetsTypeId: number = 0;
  public rootList = [];
  @Input() bascampMessage: boolean;
  basecampValue1: boolean = false;
  basecampValue2: boolean = true;
  rolePresent: boolean = false;
  constructor(private route: ActivatedRoute, private homeService: HomeService, private commonService: CommonService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (this.currentUser.groups == undefined) {

      this.currentUser.groups.push({ id: 0, name: "" });
    }

    if (this.currentUser.role.find(x => x['name'] != "ROLE_USER") != undefined) {
      this.rolePresent = true;
    }
    this.group = this.currentUser.groups[0];
    this.breadCrumb = this.commonService.breadCrumb;
    this.route.queryParams.subscribe(params => {

      if (params.userId != undefined) {
        commonService.addElementToRootList(2, params['urls'], '/main', params['urls'], params['userId'], params['assetsTypeId']);
      }
      this.queryUrl = params['urls'];
      this.assetsTypeId = params['assetsTypeId'];
      this.queryUrl = params['queryUrl'];
    });
    this.homeService.getAssets(this.currentUser.id)
      .pipe()
      .subscribe(
        data => {
          this.assetsType = data.data;
          // alert(JSON.stringify(data.data));


        },
        error => {

        });

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

  ngOnInit() {
    this.rootList = this.commonService.getRootList();

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
  //  showNotifications(){
  //    this.isnotificaionbodshow;
  //   // alert("showNotifications");
  //  }
  onClickedOutside() {
    this.navClick = false;
  }
  navBarActive() {
    this.navClick = !this.navClick;
  }
  subscription = interval(20000).subscribe(val => this.loadNotifications());

}
