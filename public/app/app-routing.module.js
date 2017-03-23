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
var router_1 = require('@angular/router');
//import { EmployeeListComponent} from './employee.component';
//import { DepartmentListComponent} from './department.component';
var dashboard_component_1 = require('./modules/dashboard/dashboard.component');
var flowDesigner_component_1 = require('./modules/flowDesign/flowDesigner.component');
var seismicDrive_component_1 = require('./modules/seismicDrive/seismicDrive.component');
var jobList_component_1 = require('./modules/jobList/jobList.component');
var viewer_component_1 = require('./modules/viewer/viewer.component');
var JobDetails_component_1 = require('./modules/dataView/JobDetails.component');
var routes = [
    //{path:'departments', component:DepartmentListComponent},
    //{path:'employees', component: EmployeeListComponent},
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'seismicdrive', component: seismicDrive_component_1.SeismicDriveComponent },
    { path: 'flowdesigner', component: flowDesigner_component_1.FlowDesignerComponent },
    { path: 'joblist', component: jobList_component_1.JobListComponent },
    { path: 'viewer', component: viewer_component_1.ViewerComponent },
    { path: 'jobdetails', component: JobDetails_component_1.JobDetailsComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(routes)
            ],
            exports: [
                router_1.RouterModule
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//export const routingComponents=[DepartmentListComponent, EmployeeListComponent]
exports.routingComponents = [dashboard_component_1.DashboardComponent, flowDesigner_component_1.FlowDesignerComponent, seismicDrive_component_1.SeismicDriveComponent, jobList_component_1.JobListComponent, viewer_component_1.ViewerComponent, JobDetails_component_1.JobDetailsComponent];
//# sourceMappingURL=app-routing.module.js.map