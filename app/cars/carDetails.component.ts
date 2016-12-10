import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CarsService } from './cars.service';

@Component({
    selector: 're-car-details',
    templateUrl: 'app/cars/carDetails.component.html'
})
export class CarDetailsComponent {

    car: {id, model, name};

    constructor(private carsService: CarsService) {
        //this.car = this.carsService.getCar(id);
    }

    gotoCars() {
        
    }
}