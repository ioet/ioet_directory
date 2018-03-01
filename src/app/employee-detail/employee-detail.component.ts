import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Employee } from '../class/employee'
import { EmployeeService } from '../services/employee.service'

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

	employee: Employee = new Employee
  controlador: Boolean = false

  constructor(
  	private route: ActivatedRoute,
  	private employeeService: EmployeeService
  ) { }

  ngOnInit() {
  	this.getEmployee()
  }

  getEmployee(): void {
  	const idEmployee = this.route.snapshot.params.id
  	this.employeeService.searchById(idEmployee).subscribe(data => {
  		this.employee = data[0]
  	})
  }

}


