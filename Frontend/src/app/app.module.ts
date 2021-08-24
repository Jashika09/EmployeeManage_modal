import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './userpanel/login/login.component';
import { HomeComponent } from './userpanel/home/home.component';
import { AdminHomeComponent } from './adminpanel/admin-home/admin-home.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AdminHomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule, FormsModule,
    ReactiveFormsModule,
    AppRoutingModule

    
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
