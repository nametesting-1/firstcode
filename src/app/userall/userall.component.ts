import { Component, OnInit } from '@angular/core';
import { admin, Product, user } from '../student';
import { StudentService } from '../student.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-userall',
  templateUrl: './userall.component.html',
  styleUrls: ['./userall.component.css']
})
export class UserallComponent implements OnInit {

  products: Product[];
  message: string;
  quant:any;
  constructor(private service:StudentService,private router:Router) { }

  ngOnInit(): void {
    this.getAllStudents();
  }
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

editStudent(name: string) {
  this.router.navigate(['bill', name]);
}

}
