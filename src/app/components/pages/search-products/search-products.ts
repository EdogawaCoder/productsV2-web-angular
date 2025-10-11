import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';

@Component({
  selector: 'app-search-products',
  imports: [
    CommonModule
  ],
  templateUrl: './search-products.html',
  styleUrl: './search-products.css'
})
export class SearchProducts {

  private http: HttpClient = inject(HttpClient);

  products = signal<any[]>([]);


  ngOnInit(): void {

    this.http.get('http://localhost:8080/api/v1/products')
      .subscribe((res) => {
        this.products.set(res as any[]);
      })
  }

   
  deleteProduct(id: string) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.http.delete(`http://localhost:8080/api/v1/products/` + id,{responseType: 'text'})
        .subscribe((res) => {
          alert(res);
          this.ngOnInit();
        })
    }
  }
}
