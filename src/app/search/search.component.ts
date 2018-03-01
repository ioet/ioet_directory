import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Employee } from '../class/employee';

import 'hammerjs';

var url = "http://localhost:3000";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  employees: Employee[]

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  search(nombre: String) {
    this.employees = []
    if(nombre !== ''){
      this.http.get<Employee[]>(url + `/staff/${nombre}`).subscribe(heroes => this.employees = heroes);
    }
  }

}
