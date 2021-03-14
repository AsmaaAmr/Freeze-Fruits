import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsServiceService } from 'src/app/Services/products-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private myAcRouter:ActivatedRoute, private myService:ProductsServiceService) {
    this.id = myAcRouter.snapshot.params.id
   }
  ngOnDestroy(): void {
    this.subscriber.unsubscribe();
  }

   id:number=1;
   subscriber;
   product;

  ngOnInit(): void {
    //if(this.id)
    this.subscriber = this.myService.getProductByID(this.id)
    .subscribe(
      (res)=>{
        this.product = res.body;
      },
      (err)=>{
        console.log(err);
      }
    );
  }
}
