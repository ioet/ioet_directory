import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from 'rxjs/Rx';

import { Employee } from '../class/employee';

//var url = "http://localhost:3000";
var url = "";

@Injectable()
export class EmployeeService {

	constructor(
		private http: HttpClient
	){}

	searchByName(nombre: String): Observable<Employee[]> {
    return this.http.get<Employee[]>(url + `/staff/all/${nombre}`)
  }

  searchById(id: String): Observable<Employee> {
    return this.http.get<Employee>(url + `/staff/employee/${id}`)
  }

}