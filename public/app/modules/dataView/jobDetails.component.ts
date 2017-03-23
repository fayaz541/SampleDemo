import {Component, Input} from '@angular/core';
 
@Component({
    selector:'jobDetails-list',
    moduleId: module.id,
    templateUrl: "./jobDetails.component.html"
    
})
export class JobDetailsComponent{


//var retrievedData:any;
retrievedData=localStorage.getItem("Data");
Data1 = JSON.parse(this.retrievedData);

}
 
//alert(Data1.mname);
  //  @Input() item.mname:string="";
// our array
