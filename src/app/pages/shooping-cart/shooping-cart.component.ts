import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Products } from 'src/app/models/products';

@Component({
  selector: 'app-shooping-cart',
  templateUrl: './shooping-cart.component.html',
  styleUrls: ['./shooping-cart.component.scss']
})
export class ShoopingCartComponent {
  @Input() productSelect: any;
  @Output() itemSeleccionado = new EventEmitter<Products>();

  constructor() {}

  remove_shopping_cart_item() {
    this.itemSeleccionado.emit(this.productSelect);
  }
}
