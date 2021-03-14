import { ProductsComponent } from './Components/products/products.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { ErrorComponent } from './Components/error/error.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent,pathMatch:"full"},
  { path: 'Products', component: ProductsComponent },
  { path:'About', component: AboutComponent},
  {path:'Products/:id',component:ProductDetailsComponent},
  {path:'**',component:ErrorComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
