import { Component } from '@angular/core';
import { Iproduct } from 'src/app/models/iproduct';
import { productList } from 'src/app/models/productList';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
products : Iproduct[] = productList;
}
