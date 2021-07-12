import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { ProductComponent } from './components/product/product.component';
import { SearcherComponent } from './components/searcher/searcher.component';



const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'product/:id', component: ProductComponent },
    { path: 'search/:termino', component: SearcherComponent },
    { path: '**', component: HomeComponent },
];

export const APP_ROUTING  = RouterModule.forRoot(ROUTES);
