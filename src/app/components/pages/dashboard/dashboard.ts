import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {


  private http = inject(HttpClient);


  ngOnInit() {

    this.http.get('http://localhost:8082/api/v1/dashboard/category-quantity')
      .subscribe((res: any) => {
      console.table(res);
    })

    this.http.get('http://localhost:8082/api/v1/dashboard/category-avg-price')
      .subscribe((res: any) => {
      console.table(res);
    })
      
  }
}