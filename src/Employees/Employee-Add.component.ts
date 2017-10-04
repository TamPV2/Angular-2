import { Component } from '@angular/core';
import { EmployeesService } from '../service/Employees.service';
import { AppComponent } from '../app/app.component';
// tslint:disable-next-line:import-blacklist
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-employeeAdd',
    templateUrl: './Employee-Add.component.html',
    styleUrls: ['./Employees.component.css'],
    providers: [EmployeesService]
})
export class EmployeesAddComponent {
    public employee: any;

    constructor(private router: Router, private activeteRoute: ActivatedRoute, public employeeService: EmployeesService) {
    }
    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit(): void {
        this.employee = {};
    }
    GotoEmployee() {
        this.router.navigate(['employees']);
    }
    Add() {
        this.employeeService.Add(this.employee).subscribe(response => {
            if (response) {
                alert('Add success');
                this.router.navigate(['employees']);
            }
        });
    }
}

