import { Component} from '@angular/core'
@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styleUrls:['./server.component.css']
})
export class serverComponent{
    ifClicked=false;
    ifClick=false;
    log=[];
    onClick(){
    this.ifClicked = this.ifClicked===false?true:false;
    //this.log.push(this.log.length+1);
    this.log.push(new Date);

    }
}  