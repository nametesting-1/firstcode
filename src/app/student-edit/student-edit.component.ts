import { Component, OnInit } from '@angular/core';
import { StudentService } from './../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../student';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {
  // declare variables
  name: string;
  product: Product;

  // inject service and acivated Route param
  constructor(private service: StudentService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // read id sent by all component as /edit/id
    // tslint:disable-next-line: no-string-literal
    this.name = this.activatedRoute.snapshot.params['name'];
    // make service call to get student object
    this.service.getOneStudent(this.name).subscribe(
      data => {
      this.product = data;
      console.log(this.product);
    }, error => {
      console.log(error);
    });
  }

  // tslint:disable-next-line: typedef
  updateStudent() {
    this.service.updateStudent(this.name, this.product)
    .subscribe( data => {
      console.log(data);
      
      this.router.navigate(['all']);
    });
  }

}
