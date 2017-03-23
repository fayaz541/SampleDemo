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
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var http_1 = require('@angular/http');
var topnav_1 = require('./shared/topNavBar/topnav');
var sidebar_1 = require('./shared/sideNavBar/sidebar');
var mainnav_1 = require('./shared/mainNav/mainnav');
var angular2_datatable_1 = require('angular2-datatable');
var material_service_1 = require("./material.service");
var search_pipe_1 = require("./search.pipe");
var app_routing_module_1 = require('./app-routing.module');
var app_routing_module_2 = require('./app-routing.module');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, angular2_datatable_1.DataTableModule, forms_1.FormsModule, router_1.RouterModule, http_1.HttpModule, app_routing_module_2.AppRoutingModule],
            declarations: [app_component_1.AppComponent, topnav_1.TopNavComponent, sidebar_1.SidebarComponent, mainnav_1.MainNavComponent, app_routing_module_1.routingComponents, search_pipe_1.SearchPipe],
            providers: [material_service_1.MaterialService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map