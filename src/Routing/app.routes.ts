import {Routes, RouterModule} from '@angular/router';
import { HomeComponent} from '../app/Home/Home.component';
import { EmployeesComponent} from '../Employees/Employees.component';
import { EmployeeDetailComponent} from '../Employees/EmployeeDetail.component';
import {NotFoundComponent} from '../app/NotFound/NotFound.component';
import {EmployeeOverviewComponent } from '../Employees/Employee-Overview.component';
import {EmployeeProjectComponent } from '../Employees/Employee-Project.component';
import { LoginComponent} from '../Login/Login.component';
import {CheckLoginGuard} from '../guards/check-login.guard';
import {CheckLoginSaveGuard} from '../guards/check-login-save.guards';
const routing: Routes = [
    {path: '', component: HomeComponent},
    {path: 'employees', component: EmployeesComponent, canActivate: [CheckLoginGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'Employees-Detail/:id', component: EmployeeDetailComponent, canDeactivate: [CheckLoginSaveGuard]
    , children: [
        {path: 'overview', component: EmployeeOverviewComponent},
        {path: 'project', component: EmployeeProjectComponent}
    ]},
    { path: '**', component: NotFoundComponent }
];
export const appRoutes = RouterModule.forRoot(routing);
