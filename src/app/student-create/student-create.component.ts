import { Component, OnInit } from '@angular/core';
import { StudentService } from './../student.service';
import { Product } from '../student';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {
  // form backing object
  product: Product;
  // message to ui
  message: string;

  // inject service class
  constructor(private service: StudentService) { }

  ngOnInit(): void {
    // when page is loaded clear form data
    this.product = new Product();
  }

  // tslint:disable-next-line: typedef
  createStudent() {
    this.service.createStudent(this.product)
    .subscribe(data => {
      this.message = data; // read message
      this.product = new Product(); // clear form
    }, error => {
      console.log(error);
    });
  }

}
