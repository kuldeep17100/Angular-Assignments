import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {
  public employee=[];
  constructor(private emp:EmployeeService) { }

  ngOnInit(): void {
    this.employee=this.emp.getEmp();
  }

}
