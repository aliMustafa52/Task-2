import { Component, EventEmitter, Output, output } from '@angular/core';
import { IProduct } from '../Models/IProduct';

@Component({
  selector: 'app-add-product',
  standalone: false,
  
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
  product:IProduct = {
    name : '',
    description:'',
    imageUrl:'',
    price:0
  };
  @Output() sentProduct = new EventEmitter<IProduct>();

  sendProduct(){
    this.product.imageUrl = "../../assets/images/iphone2.jpg";
    this.sentProduct.emit(this.product);
    console.log('product sent');
  }
}
