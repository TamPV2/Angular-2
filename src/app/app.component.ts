import { Component, OnInit} from '@angular/core';
import {LoginService } from '../service/Login.Service';
import { LoginComponent} from '../Login/Login.component';
import { Router } from '@angular/router';
import { TestComponent} from '../app/test.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public isLoggedIn: boolean;
  public layqua: number;
  constructor(private router: Router, private loginSErvice: LoginService, private test: TestComponent) {  }
  Logout() {
    this.loginSErvice.SetLogin(false);
    alert('Con me m tuan anh');
    this.router.navigate(['/']);
    this.ngOnInit();
  }
  ngOnInit() {
    this.isLoggedIn = this.loginSErvice.IsLogged();
  }
}
