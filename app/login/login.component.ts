import { UserService } from '../core/user.service';
import { Component } from '@angular/core';

@Component({
    selector: 're-login',
    templateUrl: 'app/login/login.component.html'
})
export class LoginComponent {

    constructor(private userService: UserService) {

    }

    login(isAdmin: boolean) {
        this.userService.login(isAdmin);
    }
}