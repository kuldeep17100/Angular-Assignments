import { Component} from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
    selector:'app-emp-detail',
    templateUrl:'./emp-detail.component.html',
    styleUrls:['./emp-detail.component.css']
})

export class EmpDetailCoponent{
    public employees=[];
    public errorMessg="";
    constructor(private emp:EmpService){

    }
    ngOnInit():void{
        this.emp.getEmp().
        subscribe(data => this.employees=data, error=>this.errorMessg=error);
    }
}