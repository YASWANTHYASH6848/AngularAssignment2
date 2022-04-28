"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutingModule = void 0;
const core_1 = require("@angular/core");
const router_1 = require("@angular/router");
const advertisement_form_component_component_1 = require("./advertisement-form-component/advertisement-form-component.component");
const advertisement_table_component_component_1 = require("./advertisement-table-component/advertisement-table-component.component");
const edit_product_component_component_1 = require("./edit-product-component/edit-product-component.component");
const routes = [
    { path: 'advertisementTable', component: advertisement_table_component_component_1.AdvertisementTableComponentComponent },
    { path: 'advertisement', component: advertisement_form_component_component_1.AdvertisementFormComponentComponent },
    { path: 'editAds', component: edit_product_component_component_1.EditProductComponentComponent }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    (0, core_1.NgModule)({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
