import {Component} from '@angular/core';
@Component({
	moduleId: module.id,
    selector:'flowDesigner-list',
    templateUrl: "./flowDesign.html"
})
export class FlowDesignerComponent{
    retrievedImgName=localStorage.getItem("imgName");
}