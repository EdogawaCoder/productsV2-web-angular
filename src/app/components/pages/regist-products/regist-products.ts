import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-regist-products',
  imports: [],
  templateUrl: './regist-products.html',
  styleUrl: './regist-products.css'
})
export class RegistProducts {

  private http: HttpClient = inject(HttpClient);
  
  ngOnInit(): void {
    
    this.http.get('http://localhost:8082/api/v1/categories')
    .subscribe(
    (res) => {
      console.log(res);
    });

  }

}
