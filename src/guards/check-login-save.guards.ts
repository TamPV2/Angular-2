import {CanDeactivate} from '@angular/router';
import { Injectable } from '@angular/core';
import {EmployeeDetailComponent } from '../Employees/EmployeeDetail.component';

@Injectable()
export class CheckLoginSaveGuard implements CanDeactivate<EmployeeDetailComponent> {
    canDeactivate(component: EmployeeDetailComponent) {
        alert('You can not leave this page without saving data');
        return false;
    }
}
