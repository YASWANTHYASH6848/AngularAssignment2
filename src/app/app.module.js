"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const platform_browser_1 = require("@angular/platform-browser");
const core_1 = require("@angular/core");
const app_routing_module_1 = require("./app-routing.module");
const app_component_1 = require("./app.component");
const advertisement_form_component_component_1 = require("./advertisement-form-component/advertisement-form-component.component");
const animations_1 = require("@angular/platform-browser/animations");
const forms_1 = require("@angular/forms");
const material_module_1 = require("./material/material.module");
const advertisement_table_component_component_1 = require("./advertisement-table-component/advertisement-table-component.component");
const edit_product_component_component_1 = require("./edit-product-component/edit-product-component.component");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, core_1.NgModule)({
        declarations: [
            app_component_1.AppComponent,
            advertisement_form_component_component_1.AdvertisementFormComponentComponent,
            advertisement_table_component_component_1.AdvertisementTableComponentComponent,
            edit_product_component_component_1.EditProductComponentComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_module_1.AppRoutingModule,
            animations_1.BrowserAnimationsModule,
            forms_1.FormsModule,
            material_module_1.MaterialModule
        ],
        providers: [],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
