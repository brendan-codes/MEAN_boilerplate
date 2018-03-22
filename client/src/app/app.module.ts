import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// HTTP client module needed for ANY HTTP
import { HttpClientModule } from '@angular/common/http';
// Forms module needed for any form submits
import { FormsModule } from '@angular/forms';

import { QuestionService } from './question.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewComponent } from './new/new.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, // import routing
    HttpClientModule, // import http
    FormsModule // import forms
  ],
  providers: [QuestionService], // remember to provide your services
  bootstrap: [AppComponent]
})
export class AppModule { }
