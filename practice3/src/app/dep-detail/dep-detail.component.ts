import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router,ParamMap} from '@angular/router';
@Component({
  selector: 'app-dep-detail',
  template: `
    <h4>
      Department-Details
    </h4>

    <button (click)="showOver()">Overview</button>
    <button (click)="showCon()">Contacts</button>
    <router-outlet> </router-outlet>

    <p>{{"You Have Selected the Department with ID : "+ID}}
    <br>
    <button (click)="goPrevious()">Previous</button>
    <br>
    <button (click)="goNext()">Next</button>
    <br>
    <button (click)="goBack()">Back to Departments</button>
  `,
  styles: [
  ]
})
export class DepDetailComponent implements OnInit {
  public ID;
  constructor(private acR:ActivatedRoute, private rou:Router) { }

  ngOnInit(): void {
    //let id = parseInt(this.acR.snapshot.paramMap.get('id'));
    //this.ID=id;
      this.acR.paramMap.subscribe((params: ParamMap) =>{
      let id = parseInt(params.get('id'));
      this.ID=id;
    });
  }
  goPrevious(){
    let preID=this.ID-1;
    this.rou.navigate(['/departments', preID])
  }
  goNext(){
    let nextID=this.ID+1;
    this.rou.navigate(['/departments', nextID])
  }
  goBack(){
    let selID=this.ID ? this.ID:null;
    //this.rou.navigate(['/departments',{id:selID}]);
    this.rou.navigate(['../',{id: selID}], {relativeTo:this.acR});
  }
  showOver(){
    this.rou.navigate(['overview'],{relativeTo:this.acR});
  }
  showCon(){
    this.rou.navigate(['contact'],{relativeTo:this.acR});
  }

}
