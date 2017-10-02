import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../service/Login.Service';

@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-Login',
    templateUrl: './Login.component.html',
    styleUrls: ['./Login.component.css']
})
export class LoginComponent {
    constructor(private router: Router, private loggin: LoginService) {
    }
    CheckLogin(value: any) {
        if (value.username === 'admin' && value.password === '123') {
            this.loggin.SetLogin(true);
            this.router.navigate(['/']);
        }
    }
}
