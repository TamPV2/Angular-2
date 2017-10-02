import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    public _isLoggin: boolean;
    IsLogged(): boolean {
        return this._isLoggin;
    }
    SetLogin(IsLogged: boolean) {
        this._isLoggin = IsLogged;
    }
}
