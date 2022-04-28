"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialModule = void 0;
const core_1 = require("@angular/core");
const form_field_1 = require("@angular/material/form-field");
const button_1 = require("@angular/material/button");
const input_1 = require("@angular/material/input");
const icon_1 = require("@angular/material/icon");
const select_1 = require("@angular/material/select");
const table_1 = require("@angular/material/table");
const tooltip_1 = require("@angular/material/tooltip");
const toolbar_1 = require("@angular/material/toolbar");
const dialog_1 = require("@angular/material/dialog");
const materialList = [
    form_field_1.MatFormFieldModule,
    button_1.MatButtonModule,
    input_1.MatInputModule,
    icon_1.MatIconModule,
    select_1.MatSelectModule,
    table_1.MatTableModule,
    tooltip_1.MatTooltipModule,
    toolbar_1.MatToolbarModule,
    dialog_1.MatDialogModule
];
let MaterialModule = class MaterialModule {
};
MaterialModule = __decorate([
    (0, core_1.NgModule)({
        exports: [materialList],
        imports: [materialList]
    })
], MaterialModule);
exports.MaterialModule = MaterialModule;
