import {Component, OnInit, OnDestroy} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { EmployeesService } from '../service/Employees.service';
// tslint:disable-next-line:import-blacklist


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-EmployeeDetail',
    templateUrl: './EmployeeDetail.component.html',
    styleUrls: ['./Employees.component.css']
})
export class EmployeeDetailComponent implements OnInit, OnDestroy {
    public _id: number;
    public subscription: Subscription;
    public employee: any;

    constructor(private router: Router, private activeteRoute: ActivatedRoute, public employeeService: EmployeesService) {
    }
    ngOnInit(): void {
        this.subscription = this.activeteRoute.params.subscribe(param => {
            this._id = param['id'];
        });
        this.employeeService.GetSingle(this._id).subscribe((data) => {
            this.employee = data;
        });
    }
    ngOnDestroy(): void {
        this.subscription.unsubscribe(); // huy
    }
    GoToList() {
        this.router.navigate(['Employees']);
    }
    GotoEmployee() {
        this.router.navigate(['employees']);
    }
}
