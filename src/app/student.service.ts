import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { admin, Product, user } from './student';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private basePath = 'http://localhost:8090/rest/electronic';

  constructor(private http: HttpClient) { }


  getAllStudents(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.basePath}/all`);
  }

  deleteOneStudent(name: string): Observable<any> {
    return this.http.delete(`${this.basePath}/remove/${name}`, {responseType: 'text'});
  }

  createStudent(product: Product): Observable<any> {
    return this.http.post(`${this.basePath}/product/save`, product, {responseType: 'text'});
  }

  getOneStudent(name: string): Observable<Product> {
    return this.http.get<Product>(`${this.basePath}/one/${name}`);
  }

  updateStudent(name: string, product: Product): Observable<any> {
    return this.http.put(`${this.basePath}/modify/${name}`, product, {responseType : 'text'});
  }

  getOneadmin(name: string): Observable<admin> {
    return this.http.get<admin>(`${this.basePath}/getadmin/${name}`);
  }

  getOneuser(name: string): Observable<user> {
    return this.http.get<user>(`${this.basePath}/getuser/${name}`);
  }
  createadmin(admin: admin): Observable<any> {
    return this.http.post(`${this.basePath}/admin/save`, admin, {responseType: 'text'});
  }

  createuser(user: user): Observable<any> {
    return this.http.post(`${this.basePath}/user/save`, user, {responseType: 'text'});
  }

  updatequantity(name:string,quant:number){
    return this.http.get<Product>(`${this.basePath}/quantity/`+name+'/'+quant);
  }
}
