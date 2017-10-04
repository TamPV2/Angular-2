import { Component, OnInit } from '@angular/core';
import { AppComponent} from '../app/app.component';
import { Router } from '@angular/router';
import { LoginComponent } from '../Login/Login.component';
@Component({
    // tslint:disable-next-line:component-selector
    selector: 'test',
    template: `
    <button class = "btn btn-danger" (click) = Cong()>Click</button>
    <input type="text" value = "{{num}}"/>
    `
})
export class TestComponent   {

    // tslint:disable-next-line:no-inferrable-types
    public num: number = 1;
    Cong() {
        this.num = this.num + 1;
    }
}
