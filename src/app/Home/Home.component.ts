import {Component} from '@angular/core';
import { AppComponent} from '../app.component';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'app-Home',
    templateUrl: './Home.component.html',
    styleUrls: ['./Home.component.css']
})
export class HomeComponent {
    // tslint:disable-next-line:no-inferrable-types
    public num: number = 1;
    constructor(private app: AppComponent) {}
    Cong() {
        this.num = this.num + 1;
        this.app.layqua = this.num;
    }
}
