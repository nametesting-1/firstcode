import { Component, OnInit } from '@angular/core';
import { admin,user,Product } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit {

  addadmin:admin =new admin();
  constructor( private service:StudentService) { }

  ngOnInit(): void {
    this.addadmin =new admin();
  }
  createadmin(){

    this.service.createadmin(this.addadmin).subscribe(data=>
      {alert('your account created successfully.');
    this.addadmin=new admin();
    console.log("admin"+data);
    });
  }
}
