import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../service/Employees.service';
import { AppComponent } from '../app/app.component';

@Component({
    selector: 'app-employee',
    templateUrl: './Employees.component.html',
    styleUrls: ['./Employees.component.css'],
    providers: [EmployeesService]
})
export class EmployeesComponent implements OnInit {
    public employees: any[];
    public pages: number[];
    constructor(private employeService: EmployeesService, private aa: AppComponent) {
    }
    ngOnInit(): void {
        this.employeService.GetList().subscribe((response: any) => {
            this.employees = response;
            console.log(this.employees);
        });
    }
    getID(value) {
        this.aa.layqua = value;
    }
}

