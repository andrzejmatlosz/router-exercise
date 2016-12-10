import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from './movies.service';

@Component({
    selector: 're-movie-details',
    templateUrl: 'app/movies/movieDetails.component.html'
})
export class MovieDetailsComponent {

    movie: {id, title, director};

    constructor (private moviesService: MoviesService) {
        
    }

    gotoMovies () {
        
    }
}