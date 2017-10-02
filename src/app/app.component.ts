import { Component, OnInit} from '@angular/core';
import {LoginService } from '../service/Login.Service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public isLoggedIn: boolean;
  constructor(private loginSErvice: LoginService) {
  }
  Logout() {
    this.loginSErvice.SetLogin(false);
    alert('Con me m tuan anh');
  }
  ngOnInit() {
    this.isLoggedIn = this.loginSErvice.IsLogged();
  }
}
