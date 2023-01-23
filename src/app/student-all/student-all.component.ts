import { StudentService } from './../student.service';
import { Product } from './../student';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-all',
  templateUrl: './student-all.component.html',
  styleUrls: ['./student-all.component.css']
})
export class StudentAllComponent implements OnInit {
  // send this data to UI
  products: Product[];
  message: string;
  // inject service layer
  constructor(private service: StudentService, private router: Router) { }

  // on page load call this method
  ngOnInit(): void {
    this.getAllStudents();
  }
  // fetch data from backend application using service
  // tslint:disable-next-line: typedef
  getAllStudents() {
    return this.service.getAllStudents()
    .subscribe(
      data => {
        this.products = data;
      }, error => {
        console.log(error);
      }
    );
  }

  // tslint:disable-next-line: typedef
  deleteStudent(name: string) {
    if (confirm('Do you want to delete?')) {
      this.service.deleteOneStudent(name).subscribe(data => {
        this.message = data;
        this.getAllStudents();
      }, error => {
        console.log(error);
      });
    } else {
      this.message = '';
    }
  }

  // tslint:disable-next-line: typedef
  editStudent(name: string) {
    this.router.navigate(['edit', name]);
  }

}
