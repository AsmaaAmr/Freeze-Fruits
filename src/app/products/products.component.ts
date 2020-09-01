import { Component, OnInit } from '@angular/core';
import products from '../_files/products.json';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productslist:{name:string}[] = products;
  constructor() { }

  ngOnInit(): void {
  }

}
