import { AboutComponent } from './../about/about.component';
import { ProductsServiceService } from './../../Services/products-service.service';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  constructor(private myService: ProductsServiceService) { }
  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }
  product;
  products;
  idAdd;
  nameAdd;
  imageAdd;
  idDelete;
  subscriber;
  filename;
  imagee;
  image(e:any){
    this.filename = e.target.value
    this.imagee = this.filename.replace(/C:\\fakepath\\/g,'/assets/images/');
    console.log(this.imagee);
  }
  Add(){
    this.product = {
      id:this.idAdd,
      name:this.nameAdd,
      image:this.imagee
    };
    this.myService.AddProduct(this.product).subscribe();
    this.ngOnInit();
    this.idAdd=""
    this.nameAdd=""
    this.imageAdd=""
  }
  Delete(){
    this.myService.DeleteProduct(this.idDelete).subscribe(
      (res)=>{
        this.ngOnInit();
      }
    );
    this.idDelete=""

  }
  ngOnInit(): void {
    this.subscriber = this.myService.getAllProducts().subscribe(
      (res) => {
        this.products = res.body
      },
      (err) => {
        console.log(err)
      }
    )
  }

}
