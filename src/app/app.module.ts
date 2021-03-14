import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { AboutComponent } from './Components/about/about.component';
import { ProductItemComponent } from './Components/product-item/product-item.component';
import { ErrorComponent } from './Components/error/error.component';
import { ProductsServiceService } from './Services/products-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailsComponent,
    AboutComponent,
    ProductItemComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductsServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
