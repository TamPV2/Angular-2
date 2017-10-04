import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Employee } from './employee';


@Injectable()
export class EmployeesService {
  private apiUrl = 'http://59ccae50a4bf0b00111186cd.mockapi.io/api/Employees';
  constructor(private _http: Http) {

  }
  GetList(): Observable<Employee[]> {
    return this._http.get(this.apiUrl).map((reponse: Response) => reponse.json());
  }
  Find(keysearch: string): Observable<Employee[]> {
    return this._http.get(this.apiUrl + '?search=' + keysearch).map((reponse: Response) => reponse.json());
  }
  GetSingle(id: number): Observable<Employee> { // get detail
    return this._http.get(this.apiUrl + '/' + id).map((response: Response) => response.json());
  }
  Update(id: number, data: any): Observable<Employee> { // edit
    return this._http.put(this.apiUrl + '/' + id, data).map((response: Response) => response.json());
  }
  Add(data: any): Observable<Employee> { // add
    return this._http.post(this.apiUrl, data).map((response: Response) => response.json());
  }
  Delete(id: number): Observable<Employee> { // add
    return this._http.delete(this.apiUrl + '/' + id).map((response: Response) => response.json());
  }
}
