import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styles: [
  ]
})
export class ProductComponent implements OnInit {

  product: any = {};

  constructor(private activateRoute: ActivatedRoute, private productService: ProductService) { 
    this.activateRoute.params.subscribe( params => {
      this.product = this.productService.getProduct( params['id']);
    })
  }

  ngOnInit(): void {
  }
1


}
