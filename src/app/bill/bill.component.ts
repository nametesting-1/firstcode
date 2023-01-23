import { Component, OnInit } from '@angular/core';
import { StudentService } from './../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, user } from '../student';
import { stringify } from 'querystring';
import { STRING_TYPE } from '@angular/compiler';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

   // declare variables
   name: string;
   product: Product;
   quant:number;
   user:user;
   address:string;
   getquant: number;
  

  constructor(private service:StudentService,private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.name = this.activatedRoute.snapshot.params['name'];
    // make service call to get student object
    this.service.getOneStudent(this.name).subscribe(
      data => {
      this.product = data;
      this.getquant=this.product.quantity;
      console.log(this.product);
    }, error => {
      console.log(error);
    });
 
  }

 /* updateStudent() {
    this.service.updateStudent(this.name, this.product)
    .subscribe( data => {
      console.log(data);
      this.router.navigate(['all']);
    });
  }*/

  order(){
   
      this.quant=this.product.quantity;
   
    alert("ordered Sucessfully");
    this.service.updatequantity(this.name,this.quant).subscribe(
      data=>{
        console.log(data);
        this.router.navigate(['userall']);
      }
    );
   
  
}
}
