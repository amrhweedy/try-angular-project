import { Iproduct } from './../../models/iproduct';
import { Component ,Input} from '@angular/core';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.component.html',
  styleUrls: ['./productitem.component.css']
})
export class ProductitemComponent {
@Input() myProduct :any={}
quantity() {
  if (this.myProduct.quantity == 0) return 'NO item availabe';
  else if (this.myProduct.quantity == 1) return 'one item Available';
  else {
    return this.myProduct.quantity;
  }
}

}
