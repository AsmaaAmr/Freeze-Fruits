import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {

  baseURL = "http://localhost:3300/products";
  constructor(private myClient: HttpClient) { }
  getAllProducts() {
    return this.myClient.get(this.baseURL, { observe: 'response' });
  }
  getProductByID(id: any) {
    return this.myClient.get(this.baseURL+'/'+id,{observe:"response"});
  }
  AddProduct(product:{id,name,image}){
    let endpoints = "/posts"
    return this.myClient.post(this.baseURL,product);
  }
  DeleteProduct(id){
    return this.myClient.delete(this.baseURL+"/"+id)
  }
}
