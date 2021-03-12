import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product/product.model';

@Component({
  selector: 'product-departement',
  templateUrl: './product-departement.component.html',
  styleUrls: ['./product-departement.component.css']
})
export class ProductDepartementComponent implements OnInit {
  
  @Input() product: Product;
  
  constructor() { }

  ngOnInit(): void {
  }

}
