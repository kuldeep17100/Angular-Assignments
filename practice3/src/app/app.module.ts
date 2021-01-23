import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponent } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepDetailComponent } from './dep-detail/dep-detail.component';
import { DepOverComponent } from './dep-over/dep-over.component';
import { DepConComponent } from './dep-con/dep-con.component';
@NgModule({
  declarations: [
    AppComponent,
    routingComponent,
    PageNotFoundComponent,
    DepDetailComponent,
    DepOverComponent,
    DepConComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
