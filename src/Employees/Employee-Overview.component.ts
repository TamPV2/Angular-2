import { Component, OnInit, OnDestroy } from '@angular/core';
// tslint:disable-next-line:import-blacklist
import {Subscription} from 'rxjs';
import {Router, ActivatedRoute} from '@angular/router';
@Component({
    selector: 'app-employee-overview',
    template: `<h1> This Is Overview</h1>`
})
// tslint:disable-next-line:one-line
export class EmployeeOverviewComponent implements OnInit, OnDestroy {
    public parenRouterID: number;
    public sub: Subscription;
    constructor(private router: Router, private activatedRoute: ActivatedRoute) {

    }
    ngOnInit(): void {
        this.sub = this.activatedRoute.parent.params.subscribe(params => {
            this.parenRouterID = params['id'];
            alert('ms get id : ' + this.parenRouterID);
        });
    }
    ngOnDestroy(): void {
    }
}
