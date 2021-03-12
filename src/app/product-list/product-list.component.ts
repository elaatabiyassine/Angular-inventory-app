import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product/product.model';

@Component({
  selector: 'products-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() productList: Array<Product>; //The product list that is passed to us, the input decorator specifies that we expect a list of products passed to us

  //What can be done is the following @Input(list) productList : Array<Product>

  //productlist will be seen by the controller, while list will be seen by the controller 

  @Output() onProductSelected: EventEmitter<Product>;

  //Outputs can be understood in the following way,  (output) = action, "output" is the event will be listening for, an example of that will be (click)=someFunction(), we are listening to the click output of a particuar button and thn perfor a certain action
  
  currentProduct: Product;
  /**
   * @property currentProduct - local state containing
   * the currently selected `Product`
   */

  constructor() {
    this.onProductSelected = new EventEmitter();
   }

   clicked(product: Product): void {
     this.currentProduct = product;
     this.onProductSelected.emit(product);
    }
    isSelected(product: Product): boolean {
      if (!product || !this.currentProduct) {
       return false;
      }
     return product.sku === this.currentProduct.sku;
      }
      


  ngOnInit(): void {
  }

}
