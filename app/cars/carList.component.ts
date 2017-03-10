import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CarsService } from './cars.service';

@Component({
    selector: 're-car-list',
    templateUrl: 'app/cars/carList.component.html'
})
export class CarListComponent {
    
    cars: Array<{id, model, name}>;

    constructor (private carsService: CarsService, 
            private router: Router) {
        this.cars = carsService.getCars();
    }

    selectCar (car) {
        // ... add navigation to car details
    }
}