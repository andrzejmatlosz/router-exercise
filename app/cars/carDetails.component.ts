import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CarsService } from './cars.service';

@Component({
    selector: 're-car-details',
    templateUrl: 'app/cars/carDetails.component.html'
})
export class CarDetailsComponent {

    car: {id, model, name};

    constructor(private carsService: CarsService,
            private router: Router, 
            private activatedRoute: ActivatedRoute) {
        // read id parameter from snapshot
        // download one car with specific id from service
    }

    gotoCars() {
        // add navigation back to cars list
    }
}