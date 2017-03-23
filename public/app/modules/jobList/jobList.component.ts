import {Component} from '@angular/core';
import {MaterialService} from "./../../material.service";
import {Material} from "./../../material";
import {Http} from "@angular/http";
import {JobDetailsComponent} from './../dataView/JobDetails.component';
import {Router} from '@angular/router';
/// <reference path="../jquery.d.ts"/>

@Component({
    selector:'jobList-list',
    moduleId: module.id,
    providers: [MaterialService],
    templateUrl: "./jobList.component.html"
})

export class JobListComponent{
    materials: Material[];
    errorMessage: string;
    searchText: string = "";
    sort: string="";
    constructor(private service: MaterialService,private http: Http, private router:Router) {
        //this.materials = new Array<Material>();
    }
    public data: any[];
    public filterQuery = "";
    public rowsOnPage = 10;
    public sortBy = "email";
    public sortOrder = "asc";

   ngOnInit() {
      this.service.getMaterials().subscribe(
            data => this.data = data,
            error => this.errorMessage = <any>error
        );
    }
   
   public remove(item:any) {
        let index = this.data.indexOf(item);
        if(index>-1) {
            this.data.splice(index, 1);
        }
    }

    public view(item:any) {
        this.router.navigate(['/jobdetails']);
        localStorage.setItem("Data", JSON.stringify(item));
    }

    changeSorting(columnName) {
        

    }
}