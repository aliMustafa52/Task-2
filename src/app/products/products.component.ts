import { Component, Input } from '@angular/core';
import { IProduct } from '../Models/IProduct';

@Component({
  selector: 'app-products',
  standalone: false,
  
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  @Input() product!:IProduct;

}
