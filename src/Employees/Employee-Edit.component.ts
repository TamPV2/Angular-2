import { Component } from '@angular/core';
import { EmployeesService } from '../service/Employees.service';
import { AppComponent } from '../app/app.component';
// tslint:disable-next-line:import-blacklist
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-employeeedit',
    templateUrl: './Employee-Edit.component.html',
    styleUrls: ['./Employees.component.css'],
    providers: [EmployeesService]
})
export class EmployeesEditComponent {
    public _id: number;
    public subscription: Subscription;
    public employee: any;

    constructor(private router: Router, private activeteRoute: ActivatedRoute, public employeeService: EmployeesService) {
    }
    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit(): void {
        this.subscription = this.activeteRoute.params.subscribe(param => {
            this._id = param['id'];
        });
        this.employeeService.GetSingle(this._id).subscribe((data) => {
            this.employee = data;
        });
    }
    // tslint:disable-next-line:use-life-cycle-interface
    ngOnDestroy(): void {
        this.subscription.unsubscribe(); // huy
    }
    GotoEmployee() {
        this.router.navigate(['employees']);
    }
    SaveForm() {
        this.employeeService.Update(this._id, this.employee).subscribe(response => {
            if (response) {
                alert('Update success');
                this.router.navigate(['employees']);
            }
        });
    }
}

