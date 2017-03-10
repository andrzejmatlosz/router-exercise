
import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieListComponent } from './movieList.component';
import { MovieDetailsComponent } from './movieDetails.component';
import { MovieHomeComponent } from './movieHome.component';

const movieRoutes: Routes = [
    {
    path: 'movies',
    component: MovieListComponent,
    children: [
      {
        path: '',
        component: MovieHomeComponent,
      },
      {
        path: ':id',
        component: MovieDetailsComponent,
      }
    ]
  }
];

@NgModule({
    imports: [ 
        RouterModule.forChild(movieRoutes)
    ],
    exports: [ 
        RouterModule
    ]
})
export class MovieRoutingModule { }