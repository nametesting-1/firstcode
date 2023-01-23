import { Component, OnInit } from '@angular/core';
import { Product,user,admin } from '../student';
import { StudentService } from '../student.service';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {

  adduser:user=new user();

  constructor(private service:StudentService) { }

  ngOnInit(): void {
    this.adduser=new user();

  }

  createuser(){
    this.service.createuser(this.adduser).subscribe(data=>{
      alert(this.adduser.name+" your account is created Successfully");
      this.adduser=new user();
    }
      );
  }
}
