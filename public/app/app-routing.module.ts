import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { EmployeeListComponent} from './employee.component';
//import { DepartmentListComponent} from './department.component';
import { DashboardComponent} from './modules/dashboard/dashboard.component';
import { FlowDesignerComponent} from './modules/flowDesign/flowDesigner.component';
import { SeismicDriveComponent } from './modules/seismicDrive/seismicDrive.component';
import { JobListComponent } from './modules/jobList/jobList.component';
import { ViewerComponent } from './modules/viewer/viewer.component';
import {JobDetailsComponent} from './modules/dataView/jobDetails.component';

const routes: Routes = [
     //{path:'departments', component:DepartmentListComponent},
   //{path:'employees', component: EmployeeListComponent},
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {path:'dashboard',component:DashboardComponent },
    {path:'seismicdrive', component: SeismicDriveComponent},
   {path:'flowdesigner', component: FlowDesignerComponent},
   {path:'joblist', component: JobListComponent},
   {path:'viewer', component: ViewerComponent},
   {path:'jobdetails', component: JobDetailsComponent}
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)

    ],
    exports:[
        RouterModule
    ]

})

export class AppRoutingModule{}

//export const routingComponents=[DepartmentListComponent, EmployeeListComponent]
export const routingComponents=[DashboardComponent, FlowDesignerComponent,SeismicDriveComponent,JobListComponent,ViewerComponent, JobDetailsComponent]
