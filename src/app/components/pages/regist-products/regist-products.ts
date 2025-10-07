import { Component, signal } from '@angular/core';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-regist-products',
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './regist-products.html',
  styleUrl: './regist-products.css'
})
export class RegistProducts {

  categories = signal<any[]>([])

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl('', Validators.required),
    quantity: new FormControl('', Validators.required),
    categoryId: new FormControl('', Validators.required)
  })

  private http: HttpClient = inject(HttpClient);
  
  ngOnInit(): void {
    
    this.http.get('http://localhost:8082/api/v1/categories')
    .subscribe(
    (res) => {
      this.categories.set(res as any[]);
    });
  }

  insertProduct(){

    this.http.post('http://localhost:8082/api/v1/products', this.form.value, { responseType: 'text'})
      .subscribe(
        (res) => {
          alert(`Product ${this.form.value.name} inserted successfully!`);
          this.form.reset();
        }

      )
    }

  }


