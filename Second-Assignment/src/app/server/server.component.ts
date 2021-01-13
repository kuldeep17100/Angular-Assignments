import {Component} from '@angular/core'

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styleUrls:['./server.component.css']
})
export class serverComponent{
    username: string='Kuldeep';
    serverID: number=10;
    serverStatus: string='Offline';
    allowNewServer=false;
    serverCreationStatus="No server was created";
    serverName='Test';
    constructor(){
        setTimeout(()=>{
            this.allowNewServer=true;
        },2000)
    }

    getServerName(){
        return this.serverStatus;
    }

    onCreateServer(){
        this.serverCreationStatus="Server was created. Name is "+this.serverName;
    }
    onUpdate(event:Event){//any
        //console.log(event);
        this.serverName=(<HTMLInputElement>event.target).value;
        //if we use any, we dont have to typecast it
    }
    onClick(){
        this.username='';
    }

}