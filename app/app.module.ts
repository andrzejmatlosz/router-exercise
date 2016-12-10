
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'

import { ActorModule } from './actors/actor.module';
import { CarModule } from './cars/car.module';
import { MovieModule } from './movies/movie.module';
import { AdminModule } from './admin/admin.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';

@NgModule({
    imports: [
        BrowserModule,
        ActorModule,
        CarModule,
        MovieModule,
        AdminModule,
        AppRoutingModule
    ],
    declarations: [ 
        AppComponent,
        NavigationComponent,
        HomeComponent,
        LoginComponent,
        PageNotFoundComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }