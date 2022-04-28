"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@angular/core/testing");
const advertisement_service_service_1 = require("./advertisement-service.service");
describe('AdvertisementServiceService', () => {
    let service;
    beforeEach(() => {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(advertisement_service_service_1.AdvertisementServiceService);
    });
    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
