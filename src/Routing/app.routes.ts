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
import {EmployeesEditComponent } from '../Employees/Employee-Edit.component';
import { EmployeesAddComponent } from '../Employees/Employee-Add.component';

const routing: Routes = [
    {path: '', component: HomeComponent},
    {path: 'employees', component: EmployeesComponent}, // , canActivate: [CheckLoginGuard]  theem vao de yeu cau dang nhap
    {path: 'Employees-Edit/:id', component: EmployeesEditComponent},
    {path: 'Employees-AddNew', component: EmployeesAddComponent},
    {path: 'login', component: LoginComponent},
    {path: 'Employees-Detail/:id', component: EmployeeDetailComponent// , canDeactivate: [CheckLoginSaveGuard]
    , children: [
        {path: 'overview', component: EmployeeOverviewComponent},
        {path: 'project', component: EmployeeProjectComponent}
    ]},
    { path: '**', component: NotFoundComponent }
];
export const appRoutes = RouterModule.forRoot(routing);
