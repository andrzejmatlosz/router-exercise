import { Component } from '@angular/core';
import { MoviesService } from './movies.service';

@Component({
  template: `
    <h2>MOVIES</h2>

    `,
  providers: [ MoviesService ]
})
export class MovieCenterComponent { }