import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddDemoComponent } from './components/add-demo/add-demo.component';
import { DemoDetailsComponent } from './components/demo-details/demo-details.component';
import { DemosListComponent } from './components/demos-list/demos-list.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddDemoComponent,
    DemoDetailsComponent,
    DemosListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
