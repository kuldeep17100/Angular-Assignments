import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,ParamMap } from '@angular/router';
@Component({
  selector: 'app-dep-list',
  template: `
    <h3>
      Department List
    </h3>
    <ul *ngFor="let dep of departments">
    <a>
    <button (click)="onSelect(dep)" [class.selected]="isSel(dep)">{{dep.id}}-{{ dep.name}}</button>
    </a>
    </ul>
  `,

  styles: [`
  .selected{
    color:red;
  }
  `]
})
export class DepListComponent implements OnInit {
  public selID;
  departments=[
    {"id":1,"name":"Angular"},
    {"id":2,"name":"MongoDB"},
    {"id":3,"name":"Ruby"},
    {"id":4,"name":"Bootstrap"},
    {"id":5,"name":"Ruby"}
  ]

  constructor(private router:Router, private acR:ActivatedRoute) { }

  ngOnInit(): void {
    this.acR.paramMap.subscribe((params: ParamMap) =>{
      let id = parseInt(params.get('id'));
      this.selID=id;
    });
  }

  onSelect(dep){
   // this.router.navigate(['/departments',dep.id]);
   this.router.navigate([dep.id],{relativeTo: this.acR})

  }
  isSel(dep){
    return dep.id==this.selID;
  }

}
