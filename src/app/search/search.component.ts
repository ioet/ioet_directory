import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { Employee } from '../class/employee';
import { EmployeeService } from '../services/employee.service';

import 'hammerjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  employees: Employee[]

  constructor(
    private employeeService: EmployeeService
   ) { }

  ngOnInit() {
  }

  search(nombre: String) {
    this.employees = []
    if(nombre !== ''){
      this.employeeService.searchByName(nombre).subscribe(heroes => this.employees = heroes);
    }
  }

}
