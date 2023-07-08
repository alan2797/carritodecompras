import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Products } from 'src/app/models/products';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  disabled: boolean = false;
  label: string = 'Agregar';

  @Input() item: any;
  @Output() itemSeleccionado = new EventEmitter<Products>();

  constructor() {}

  ngOnInit(): void {
    console.log(this.item);
  }

  add() {
    this.item.disabled = true;
    this.label = 'ya fue agregado';
    this.itemSeleccionado.emit(this.item);
  }

  
}
