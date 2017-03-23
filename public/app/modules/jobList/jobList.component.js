"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var material_service_1 = require("./../../material.service");
var http_1 = require("@angular/http");
var router_1 = require('@angular/router');
/// <reference path="../jquery.d.ts"/>
var JobListComponent = (function () {
    function JobListComponent(service, http, router) {
        this.service = service;
        this.http = http;
        this.router = router;
        this.searchText = "";
        this.filterQuery = "";
        this.rowsOnPage = 10;
        this.sortBy = "email";
        this.sortOrder = "asc";
        //this.materials = new Array<Material>();
    }
    JobListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getMaterials().subscribe(function (data) { return _this.data = data; }, function (error) { return _this.errorMessage = error; });
    };
    JobListComponent.prototype.remove = function (item) {
        var index = this.data.indexOf(item);
        if (index > -1) {
            this.data.splice(index, 1);
        }
    };
    JobListComponent.prototype.view = function (item) {
        this.router.navigate(['/jobdetails']);
        localStorage.setItem("Data", JSON.stringify(item));
    };
    JobListComponent = __decorate([
        core_1.Component({
            selector: 'jobList-list',
            moduleId: module.id,
            providers: [material_service_1.MaterialService],
            templateUrl: "./jobList.component.html"
        }), 
        __metadata('design:paramtypes', [material_service_1.MaterialService, http_1.Http, router_1.Router])
    ], JobListComponent);
    return JobListComponent;
}());
exports.JobListComponent = JobListComponent;
//# sourceMappingURL=jobList.component.js.map