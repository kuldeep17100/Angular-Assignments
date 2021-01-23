import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepConComponent } from './dep-con/dep-con.component';
import { DepDetailComponent } from './dep-detail/dep-detail.component';
import { DepListComponent } from './dep-list/dep-list.component';
import { DepOverComponent } from './dep-over/dep-over.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'',redirectTo:'/departments', pathMatch:'full'},
  {path: 'departments', component:DepListComponent},
  {
    path: 'departments/:id',
    component:DepDetailComponent,
    children:[
      {path:'overview',component:DepOverComponent},
      {path:'contact', component:DepConComponent}
    ]
  },
  {path: 'employees', component:EmpListComponent},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [DepListComponent,
                                EmpListComponent,
                                PageNotFoundComponent,
                                DepDetailComponent,
                                DepOverComponent,
                                DepConComponent];
