import { Component } from '@angular/core';
import { IProduct } from './Models/IProduct';
import { Products } from './Data/db-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Task-2';

  products:IProduct[] = Products;

  receiveProduct(product:IProduct){
    this.products.push(product);
    console.log('product recived');
  }

}
