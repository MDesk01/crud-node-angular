import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  product!: Product

  //formulario preenchido
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;  //lembrar de por ! aqui para funcionar a linha abaixo
    this.productService.readById(id).subscribe(product => {
      this.product = product
    })
  }

  //metodo de atualizar o produto
  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage('Produto atualizado!');
      this.router.navigate(['product-crud']);
    });
  }

  //botão cancelar
  cancel(): void {
    this.router.navigate(['product-crud'])
  }

}
