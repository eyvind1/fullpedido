import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  @Input() producto:any={};
  @Output() productAdded = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    //console.log(this.producto);
  }
  addProductToCart(product) {
    this.productAdded.emit(product);
  }
}
