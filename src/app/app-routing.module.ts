import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentCreateComponent } from './student-create/student-create.component';
import { StudentAllComponent } from './student-all/student-all.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddadminComponent } from './addadmin/addadmin.component';
import { AdduserComponent } from './adduser/adduser.component';
import { UserallComponent } from './userall/userall.component';
import { BillComponent } from './bill/bill.component';


const routes: Routes = [
  {path: 'all', component: StudentAllComponent},
  {path: 'add', component: StudentCreateComponent},
  {path: 'edit/:name', component: StudentEditComponent},
  {path: 'login' , component : LoginComponent},
  {path:'addadmin',component:AddadminComponent},
  {path:'adduser',component:AdduserComponent},
  {path: 'userall',component:UserallComponent},
  {path:'bill/:name',component:BillComponent},
  {path: '', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
