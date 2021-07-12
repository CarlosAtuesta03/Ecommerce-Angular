import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';



@Component({
  selector: 'app-seeker',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {

  products: any[] = [];
  termino: string;

  constructor(private productService: ProductService, private activateRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe( params => {
      this.activateRoute.params.subscribe( params => {
        this.termino = params['termino'];
        this.products = this.productService.searchProducts(params['termino']);
        console.log(this.products);
    });
  });
  }

} 
