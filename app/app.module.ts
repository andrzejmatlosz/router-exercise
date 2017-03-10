import { AuthGuard } from './core/auth-guard';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'

import { MovieModule } from './movies/movie.module';
import { CarModule } from './cars/car.module';
import { AdminModule } from './admin/admin.module';
import { AboutModule } from './about/about.module';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';

import { UserService } from './core/user.service';

@NgModule({
    imports: [
        BrowserModule,
        MovieModule,
        CarModule,
        AdminModule,
        AboutModule,
        AppRoutingModule
    ],
    declarations: [ 
        AppComponent,
        NavigationComponent,
        HomeComponent,
        LoginComponent,
        PageNotFoundComponent
    ],
    bootstrap: [ AppComponent ],
    providers: [
        UserService,
        AuthGuard
    ]
})
export class AppModule { }