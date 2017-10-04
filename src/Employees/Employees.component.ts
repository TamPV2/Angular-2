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
        this.load();
    }
    getID(value) {
        this.aa.layqua = value;
    }
    Delete(id: number) {
        // tslint:disable-next-line:prefer-const
        let confirmResult = confirm('Are you sure to delete?');
        if (confirmResult) {
            this.employeService.Delete(id).subscribe(response => {
                if (response) {
                    alert('Delete success');
                    this.load();
                }
            });
        }
    }
    load() {
        this.employeService.GetList().subscribe((response: any) => {
            this.employees = response;
            console.log(this.employees);
        });
    }
}

