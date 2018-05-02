import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  private _getUrl = "http://110.227.252.143:1500/PROJECTS/rnplUniverse/clients/test/Deepak/phpapi/product/read.php";
  private _postUrl = "http://110.227.252.143:1500/PROJECTS/rnplUniverse/clients/test/Deepak/phpapi/product/create.php";
  private _getUrlByOne = "http://110.227.252.143:1500/PROJECTS/rnplUniverse/clients/test/Deepak/phpapi/product/read_one.php?id=";

  constructor(private _http:Http) { }

  getProduct(){
    return this._http.get(this._getUrl)
    .map((response:Response)=>response.json());
  }

  saveProducts(product){
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers});
    console.log(JSON.stringify(product));
    return this._http.post(this._postUrl, JSON.stringify(product), options) 
    .map((response:Response)=>response.json());
  }

  getProductById(id){
    console.log('0123', id);
    return this._http.get(this._getUrlByOne,id);
    .map((response:Response)=>response.json())
  }

}
