"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvertisementTableComponentComponent = void 0;
const core_1 = require("@angular/core");
const table_1 = require("@angular/material/table");
const edit_product_component_component_1 = require("../edit-product-component/edit-product-component.component");
let AdvertisementTableComponentComponent = class AdvertisementTableComponentComponent {
    constructor(dialog, adsService) {
        this.dialog = dialog;
        this.adsService = adsService;
        this.msg = "edit";
        this.search = "";
        this.isSearched = true;
        // parent communication 
        this.childEvent = new core_1.EventEmitter();
        this.displayedColumns = ['title', 'name', 'category', 'discription'];
    }
    deleteData(id) {
        for (let i = 0; i < this.name1.length; ++i) {
            if (this.name1[i].title === id) {
                this.name1.splice(i, 1);
            }
        }
    }
    ngOnInit() {
        this.name1 = this.adsService.getAllAdvertises();
        console.log(this.name1);
    }
    // using services delete
    deleteDataApi(obj) {
        this.name1 = this.adsService.deleteAdvertise(obj);
    }
    // using service search
    searchAd() {
        console.log(this.search);
        this.name1 = this.adsService.getAdvertise(this.search);
    }
    openDialog(action, obj) {
        obj.action = action;
        const dialogRef = this.dialog.open(edit_product_component_component_1.EditProductComponentComponent, {
            width: '250px',
            data: obj
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result.event == 'Update') {
                this.updateRowData(result.data);
            }
        });
    }
    // update using service
    updateRow(obj) {
        this.name1 = this.adsService.updateAdvertise(obj);
    }
    updateRowData(row_obj) {
        this.name1 = this.name1.filter((value, key) => {
            if (value.title == row_obj.title) {
                value.name = row_obj.name;
            }
            return true;
        });
    }
};
__decorate([
    (0, core_1.Input)('parentData')
], AdvertisementTableComponentComponent.prototype, "name1", void 0);
__decorate([
    (0, core_1.Output)()
], AdvertisementTableComponentComponent.prototype, "childEvent", void 0);
__decorate([
    (0, core_1.ViewChild)(table_1.MatTable, { static: true })
], AdvertisementTableComponentComponent.prototype, "table", void 0);
AdvertisementTableComponentComponent = __decorate([
    (0, core_1.Component)({
        selector: 'app-advertisement-table-component',
        templateUrl: './advertisement-table-component.component.html',
        styleUrls: ['./advertisement-table-component.component.css']
    })
], AdvertisementTableComponentComponent);
exports.AdvertisementTableComponentComponent = AdvertisementTableComponentComponent;
