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


@NgModule({
  declarations: [
    AppComponent, EmployeesComponent, HomeComponent, EmployeeDetailComponent, NotFoundComponent,
    EmployeeOverviewComponent, EmployeeProjectComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    appRoutes
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
