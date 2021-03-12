import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Product } from '../product/product.model';

@Component({
  selector: 'product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent implements OnInit {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass ='item'; //HostBinding allows us to style the component from within

  constructor() { }

  ngOnInit(): void {
  }

}
