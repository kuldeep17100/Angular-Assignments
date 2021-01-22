import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { demoComponent } from './demo/demo.component';
import { Demo2Component } from './demo2/demo2.component';
import { EmployeeService } from './employee.service';


@NgModule({
  declarations: [
    demoComponent,
    AppComponent,
    Demo2Component,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
