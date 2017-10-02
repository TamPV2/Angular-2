import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EmployeesService {
    private apiUrl = 'http://59ccae50a4bf0b00111186cd.mockapi.io/api/Employees';
    constructor(private _http: Http) {

    }
    GetList(): Observable<any[]> {
      return this._http.get(this.apiUrl).map((reponse: Response) => reponse.json());
    }
    GetSingle(id: number): Observable<any> { // get detail
      return this._http.get(this.apiUrl + '/' + id).map((response: Response) => response.json());
  }
}
