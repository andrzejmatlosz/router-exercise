import { Router } from '@angular/router';
import { Injectable }       from '@angular/core';

@Injectable() 
export class UserService {
    isLogged: boolean = false;
    isAdmin: boolean = false;
    url: string = null;

    constructor(private router: Router) {

    }

    login (isAdmin: boolean) {
        this.isLogged = true;
        this.isAdmin = isAdmin;
        if (this.url) {
            this.router.navigate([this.url]);
        } else {
            this.router.navigate(['home']);
        }
    }
}
