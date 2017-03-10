import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from './movies.service';

@Component({
    selector: 're-movie-list',
    templateUrl: 'app/movies/movieList.component.html'
})
export class MovieListComponent {

    movies: Array<{id, title, director}>;

    constructor (private moviesService: MoviesService,
    private router: Router, private activatedRoute: ActivatedRoute) {
        this.movies = moviesService.getMovies();
    }

    selectMovie (movie) {
        //... add navigation to movie details. Plase use navigation related to activated route
    }

}