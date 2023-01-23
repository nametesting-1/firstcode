import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public Usertype:string ='';
  public userID:string ='';
  public password:string ='';
  public id!: string;
  public pword!: string;
  constructor(private service:StudentService,private router: Router) { }

  ngOnInit(): void {
  }

  Login(){
    if(this.Usertype==='admin'){
      this.service.getOneadmin(this.userID).subscribe(data=>{
        this.id=data.name;
        this.pword=data.password;
        if((this.id===this.userID) && (this.pword===this.password)){
          this.router.navigate(['all'])
        }else{
          alert('Incorrect Login Details');
          this.router.navigate(['addadmin']);
        }},error=>{console.log(error);
      });
    }
    if(this.Usertype==='user'){
      this.service.getOneuser(this.userID).subscribe(
        data=>{
          this.id=data.name;
          this.pword=data.password;
          if((this.id===this.userID)&&(this.pword===this.password)){
            this.router.navigate(['userall']);
          }
          else{
            alert('Incorrect Login Details');
            this.router.navigate(['adduser']);
          }
        },error=>{console.log(error);}
        
      );
    }
  }
}
