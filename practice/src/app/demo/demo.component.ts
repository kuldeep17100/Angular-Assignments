import { Component, Input, Output, EventEmitter} from '@angular/core'
import { EmployeeService } from '../employee.service';


@Component({
    selector:'app-demo',
    templateUrl:'./demo.component.html',
    styleUrls:['./demo.component.css']
})

export class demoComponent{
    
    name="Kuldeep";
    myId="id1";
    isDisabled=true;
    isSuccess="text-success";
    isFailed=false;
    greeting="";
    mssg="";
    printName="";
    colors=['red','blue','green','orange'];

    public employees=[];
    constructor(private emp:EmployeeService){
        
    }
    ngOnInit():void{
        this.employees=this.emp.getEmp();
    }

    messg={
        "text-success":!this.isFailed,
        "text-failed":this.isFailed
    }
    isGood=true;
    uKnow={
        color:'white',
        backgroundColor:'blue'//can't use - , thats why used camelCase
    }
    place:string;
    ok;
    onClick(){
        this.place="Central Perk";
    }
    onLog(event){
        this.ok=event.type;
        console.log(event);
    }
    @Input() public data;
    @Output() public childEvent= new EventEmitter();
    fireEvent(){
        this.childEvent.emit("Hey Kuldeep");
    }
}