import { Component } from '@angular/core';
import { Products } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
})
export class ProdutosComponent {
  products: Products[] = [];

  productosSeleccionados: Products[] = [];
  constructor(private productService: ProductsService) {}

  ngOnInit(): void {
    this.getProductsData();
    this.getCliente();
  }

  getProductsData() {
    this.productService.getProductsSmall().then((response) => {
      console.log(response);
      this.products = response;
    });
  }

  getCliente() {
    this.productService.getCliente().subscribe((response) => {
      console.log(response);
    });
  }

  selectItem(item: Products) {
    console.log(item);
    this.productosSeleccionados.push(item);
    console.log(this.productosSeleccionados);
  }
}
