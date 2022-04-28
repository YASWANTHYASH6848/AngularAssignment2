"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementFormComponentComponent = void 0;
const core_1 = require("@angular/core");
const adsModel_1 = require("../adsModel");
const table_1 = require("@angular/material/table");
let AdvertisementFormComponentComponent = class AdvertisementFormComponentComponent {
    constructor(router) {
        this.router = router;
        this.Myname = "Neeraj";
        this.categoryList = ['Furniture', 'Hardware', 'Mobile'];
        this.ads = new adsModel_1.adsModel("", "", "", "");
        this.adsList = [];
        this.dataSource = [];
        this.displayedColumns = ['title', 'name', 'category', 'discription'];
        // parent communication 
        this.childEvent = new core_1.EventEmitter();
        this.isSubmitted = false;
    }
    ngOnInit() {
    }
    onSubmit() {
        this.adsList.push(this.ads);
        let obj = {
            title: this.ads.title,
            name: this.ads.name,
            category: this.ads.category,
            discription: this.ads.discription
        };
        this.dataSource.push(obj);
        this.isSubmitted = true;
        this.childEvent.emit(this.dataSource);
        //this.router.navigate(["advertisementTable"]);
    }
};
__decorate([
    (0, core_1.ViewChild)(table_1.MatTable, { static: true })
], AdvertisementFormComponentComponent.prototype, "table", void 0);
__decorate([
    (0, core_1.Output)()
], AdvertisementFormComponentComponent.prototype, "childEvent", void 0);
AdvertisementFormComponentComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-advertisement-form-component',
        templateUrl: './advertisement-form-component.component.html',
        styleUrls: ['./advertisement-form-component.component.css']
    })
], AdvertisementFormComponentComponent);
exports.AdvertisementFormComponentComponent = AdvertisementFormComponentComponent;
