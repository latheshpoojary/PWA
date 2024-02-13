import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }


  getAllProductDetails() {
    return this.http.get('https://fakestoreapi.com/products');
  }

  getAllCategories() {
    return this.http.get('https://fakestoreapi.com/products/categories');
  }

  getCategoryByName(categoryName: string | null) {
   return this.http.get(`https://fakestoreapi.com/products/category/${categoryName}`);
  }

  getCategoryById(id: string | null) {
    return this.http.get(`https://fakestoreapi.com/products/${id}`);
  }
}
