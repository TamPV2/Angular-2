import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {EmployeesComponent} from '../Employees/Employees.component';
import { HttpModule } from '@angular/http';
import {appRoutes } from '../Routing/app.routes';
import { HomeComponent} from '../app/Home/Home.component';
import { EmployeeDetailComponent } from '../Employees/EmployeeDetail.component';
import { EmployeesService } from '../service/Employees.service';
import { NotFoundComponent} from '../app/NotFound/NotFound.component';
import {EmployeeOverviewComponent } from '../Employees/Employee-Overview.component';
import {EmployeeProjectComponent } from '../Employees/Employee-Project.component';
import { LoginComponent} from '../Login/Login.component';
import { FormsModule } from '@angular/forms';
import {LoginService} from '../service/Login.Service';
import {CheckLoginGuard} from '../guards/check-login.guard';
import {CheckLoginSaveGuard} from '../guards/check-login-save.guards';
import { TestComponent} from '../app/test.component';
import {EmployeesEditComponent } from '../Employees/Employee-Edit.component';
import { EmployeesAddComponent } from '../Employees/Employee-Add.component';

@NgModule({
  declarations: [
    AppComponent, EmployeesComponent, HomeComponent, EmployeeDetailComponent, NotFoundComponent,
    EmployeeOverviewComponent, EmployeeProjectComponent, LoginComponent, TestComponent,
    EmployeesEditComponent, EmployeesAddComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    appRoutes,
    FormsModule
  ],
  providers: [EmployeesService, LoginService, CheckLoginGuard, CheckLoginSaveGuard, LoginComponent, TestComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
