import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductDeleteComponent } from './product/product-delete/product-delete.component';
import { ProductUpdateComponent } from './product/product-update/product-update.component';
import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';

const routes: Routes = [{
  path: "product-crud",
  component: ProductCrudComponent
},{
  path:'',
  component: HomeComponent
},{
  path:"product-create",
  component: ProductCreateComponent
},{
  path:"product/product-update/:id",
  component: ProductUpdateComponent
},{
  path:"product/product-delete/:id",
  component: ProductDeleteComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
