import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../product-list/product.model';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productItem = new ProductModel(null,null,null,null,null,null,null,null);

  constructor(private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.productItem = this.productService.hi();
  }

  editProduct(){
    this.productService.editProduct(this.productItem)
    console.log("hi for, editproduct and the corresponding product name is " + this.productItem.productName);
    alert("edited")
    this.router.navigate(['/'])
  }

}
