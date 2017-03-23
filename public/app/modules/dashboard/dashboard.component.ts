/// <reference path="./../../../jquery.d.ts"/>
import {Component} from '@angular/core';
import {Router} from '@angular/router';
//import {MainNavComponent} from './mainnav';

@Component({
	moduleId: module.id,
    selector:'dashboard-list',
    templateUrl: "./dashboardView.html",
    styles: [`
    .slb-table {
      margin-left: 30px;
      margin-right: 54px;
    }
  `],
})
export class DashboardComponent{
	
     constructor( private router:Router) {}
	 ngOnInit() {
		$('.slb-table').css({"margin-left": "30px","margin-right": "54px"});
    }
	getimageData(bannerImg:any) {
        this.router.navigate(['/flowdesigner']);
        bannerImg = event.currentTarget;
        let imgName = bannerImg.offsetParent.innerText;
        localStorage.setItem("imgName", imgName);
    }
	
}