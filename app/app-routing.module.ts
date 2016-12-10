
import { NgModule }      from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { ActorRoutingModule } from './actors/actor-routing.module';
import { CarRoutingModule } from './cars/car-routing.module';
import { MovieRoutingModule } from './movies/movie-routing.module';

import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';

import { AuthGuard } from './core/authGuard.service';

const appRoutes: Routes = [

];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }