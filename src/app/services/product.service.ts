import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class ProductService {

    private products: Product [] = [
        {
            name: 'PC Gamer (Escritorio)',
            description: '128gb SSD, 1 TB HDD, 16 Ram, Raizen 5',
            img: './assets/z/pcgamer.jpg',
            price: '3775000'
        },
        {
            name: 'Lenovo',
            description: '128gb SSD , 12 RAM, i5',
            img: './assets/img/pc1.png',
            price: '2795000'
        },
        {
            name: 'Acer Nitro 5',
            description: '256 SSD and 1 TB HDD, 8 RAM i5 10 gen, gtx 1650',
            img: './assets/img/acer.jpg',
            price: '3990000'
        },
        {
            name: 'Asus Tuf Gaming',
            description: '500 SSD, i5',
            img: './assets/img/pc3.jpg',
            price: '3640000'
        },
        {
            name: 'Huawei matebook',
            description: '1TB HDD, 8 ram, i3',
            img: './assets/img/pc4.png',
            price: '2690000'
        },
    ];

    constructor(){
        console.log('service running');
    }

    getProducts(){
        return this.products;
    }

    getProduct( idx ){
        return this.products[idx];
    }

    searchProducts( termino: string ){
        let productsArr: Product[] = [];
        termino = termino.toLowerCase();
        for (let product of this.products){
          let name = product.name.toLowerCase();
          if ( name.indexOf( termino ) >=0 ){
            productsArr.push( product );
          }
        }
    
        return productsArr;
    
    
      }
}

export interface Product{
    name: string;
    description: string;
    img: string;
    price: string;
  }
