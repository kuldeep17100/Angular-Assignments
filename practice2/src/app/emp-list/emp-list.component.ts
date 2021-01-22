import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  public employees=[];
  public errorMessg="";
  constructor(private emp:EmpService){

  }
  ngOnInit():void{
      this.emp.getEmp().
      subscribe(data => this.employees=data, error=>this.errorMessg=error);
  }

}
