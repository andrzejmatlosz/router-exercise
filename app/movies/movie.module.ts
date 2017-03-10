
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';

import { MovieRoutingModule } from './movie-routing.module';

import { MovieListComponent } from './movieList.component';
import { MovieDetailsComponent } from './movieDetails.component';
import { MovieHomeComponent } from './movieHome.component';

import { MoviesService } from './movies.service';

@NgModule({
    imports: [ 
        CommonModule,
        MovieRoutingModule
    ],
    declarations: [ 
        MovieListComponent,
        MovieDetailsComponent,
        MovieHomeComponent
    ],
    providers: [ MoviesService ]
})
export class MovieModule { 
}