import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentAllComponent } from './student-all/student-all.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentEditComponent } from './student-edit/student-edit.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { AddadminComponent } from './addadmin/addadmin.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UserallComponent } from './userall/userall.component';

import { BillComponent } from './bill/bill.component';
import { UserheaderComponent } from './userheader/userheader.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentAllComponent,
    StudentCreateComponent,
    StudentEditComponent,
    LoginComponent,
    AddadminComponent,
    AdduserComponent,
    UserallComponent,
    BillComponent,
    UserheaderComponent,
    AdminheaderComponent
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
