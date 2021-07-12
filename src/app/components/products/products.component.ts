import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
    console.log(this.products);
  }

  viewProduct( idx: number ){
    this.router.navigate(['/product', idx]);
  }

  searchProducts( termino : string)
  {
    let productsArr: Product[]=[];
    termino=termino.toLowerCase();
    for (const product of this.products){
      const name=product.name.toLowerCase();
      if (name.indexOf(termino)>=0){
        productsArr.push (product);
      }
    }
    return productsArr;
  }

  

}

