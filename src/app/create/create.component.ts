import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Product } from '../classes/product';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers:[ProductService]
})
export class CreateComponent implements OnInit {
  products:Product;

  constructor(private _productservice:ProductService) { }

  ngOnInit() {
    
  }

  addProduct(data){
    console.log('012', data.value);
    if(data){
      var result;
      var productData = data.value;
      // console.log('obj02', productData);
      result = this._productservice.saveProducts(productData);
      result.subscribe(x => {
        console.log(x);
        
      })
    }
  }
}
