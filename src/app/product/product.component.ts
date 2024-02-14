import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ProductService } from '../Services/product/product.service';
export interface Product{
  
  id: number,
  title: string,
  description: string,
  price: number,
  category: string,
  image: string,
  rating:{
    rate: number,
    count:number
  }
  
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {


  products!: Product[];
  catergories = [];
  selectedValue = '';
  categoryValue = '';
  constructor(private service:ProductService) {
    this.service.getAllProductDetails().subscribe((res:any) => {
      this.products = res;
    })

    this.service.getAllCategories().subscribe({
      next: (res: any) => {
        this.catergories = res;
      }
    })
  }

  onCategoryChange(value: string) {
    if (value === '') {
      return 
    }
    else if (value === 'all') {
      this.service.getAllProductDetails().subscribe((res:any) => {
        this.products = res;
      })
    }
    this.service.getCategoryByName(value).subscribe({
      next: (res: any) => {
        this.products = res;
      }
    })
    
  }
}
