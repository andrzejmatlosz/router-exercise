import * as url from 'url';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from './movies.service';

@Component({
    selector: 're-movie-details',
    templateUrl: 'app/movies/movieDetails.component.html'
})
export class MovieDetailsComponent {

    movie: {id, title, director};

    constructor (private moviesService: MoviesService,
            private router: Router, 
            private activatedRoute: ActivatedRoute) {
        //... add subscripton to params from activated route
        // eery time when new parameter will be available then 
        // new movie should be downloaded from movieService
    }

    gotoMovies () {
        //.. add navigation to on level up relative to current activated route
    }
}