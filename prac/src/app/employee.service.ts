import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  getEmp(){
    return [
      {"id":1, "name":"Kuldeep", "age":22},
      {"id":1, "name":"Ayush", "age":23}
    ]
  }
  constructor() { }
}
