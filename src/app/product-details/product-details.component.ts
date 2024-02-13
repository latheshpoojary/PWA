import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../Services/product/product.service';
export interface ProductDetails{
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: {
    rate: number,
    count:number
  }
}
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  category!:string | null;
  productId!: string | null;
  productDetails!: ProductDetails;
  categoryList:any;
  constructor(private activateRoute: ActivatedRoute,private service:ProductService) {
    
    this.activateRoute.paramMap.subscribe(res => {
      this.productId = res.get("productId");
      this.category = res.get("category");
    });
    this.getCategoryByID();
    this.getCategoryByName();
  }

  
  

  getCategoryByID() {
    this.service.getCategoryById(this.productId).subscribe({
      next: (res: any) => {
        this.productDetails = res;
      }
    })
  }


  getCategoryByName() {
    this.service.getCategoryByName(this.category).subscribe((res: any) => {
      this.categoryList = res.filter((item: any) => item.id != this.productId);
    });
  }
      
  

  onSuggetion(id: string | null) {
    this.productId = id;
    this.getCategoryByID();
    this.getCategoryByName();
  }
}
