import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { } //declarando que ira usar o service e o roteamento do angular

  //atributos do produto
  product: Product = {
    name: '',
    preco: 0,
    id: 0
  }

  ngOnInit(): void {
  }

  //método para criar o produto
  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto Criado com sucesso!') //mensagem de sucesso
      this.router.navigate(['product-crud']) //retorna para a página product-crud
    })
  } //fim do método de criar produto

  //botao de cancelar
  cancel(): void {
    this.router.navigate(['product-crud']) //retorna para a página product-crud após cancelar
  }

}
