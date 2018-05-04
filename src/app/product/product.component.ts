import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service'
import { Product } from '../classes/product';
import { Subscription } from "rxjs/Rx";
import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
// import { Http } from '@angular/http';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers:[ProductService]
})
export class ProductComponent implements OnInit {
  products:Product[];
  // products: any;
  constructor(private _productservice:ProductService,private router:Router) { }

  ngOnInit() {
      this._productservice.getProduct()
      .subscribe(resProduct => this.products = resProduct)
    }
    // this.http.get('http://110.227.252.143:1500/PROJECTS/rnplUniverse/clients/test/Deepak/phpapi/product/read.php')
    //   .subscribe(data=>{
     
    //   this.products = data.text();

    //   console.log('data01',this.products);
    // }, (error) => { 
    //   console.log('error', error);
    // });
    deleteProduct(id){
      
      this._productservice.deleteProductService(id)
      .subscribe(deleteResponse => {
        console.log('delete012', deleteResponse[185]);
        if(deleteResponse){
          alert('Record deleted');
        }
        this.router.navigateByUrl('/create').then(nav=>this.router.navigate(['/product']));
      }, (error) => {
        console.log(error);
      }); 
    }

  }


