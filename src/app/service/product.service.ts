import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  private _getRetriveUrl = "http://110.227.252.143:1500/PROJECTS/rnplUniverse/clients/test/Deepak/phpapi/product/read.php";
  private _postSaveUrl = "http://110.227.252.143:1500/PROJECTS/rnplUniverse/clients/test/Deepak/phpapi/product/create.php";
  private _getUrlByOne = "http://110.227.252.143:1500/PROJECTS/rnplUniverse/clients/test/Deepak/phpapi/product/read_one.php?id=";
  private _postUpdateUrl = "http://110.227.252.143:1500/PROJECTS/rnplUniverse/clients/test/Deepak/restapi/update.php?id=";
  private _postDeleteUrl = "http://110.227.252.143:1500/PROJECTS/rnplUniverse/clients/test/Deepak/phpapi/product/delete.php?id=";

  constructor(private _http:Http) { }

  getProduct(){
    return this._http.get(this._getRetriveUrl)
    .map((response:Response)=>response.json());
  }

  saveProducts(product){
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers});
    return this._http.post(this._postSaveUrl, JSON.stringify(product), options) 
    .map((response:Response)=>response.json());
  }

  getProductById(id){
    console.log('0123', id);
    return this._http.get(this._getUrlByOne+''+id)
    .map((response:Response)=>response.json());
  }

  updateProduct(id, input){
    console.log('updatedata010',id, input);
    let headers = new Headers({'Content-Type':'application/json'});
    let options = new RequestOptions({headers:headers});
    return this._http.post(this._postUpdateUrl+''+id , JSON.stringify(input),options)
    .map((response:Response)=>response.json());
  }

  deleteProductService(id){
    console.log('0012', id);
    // let headers = new Headers({'Content-Type':'application/json'});
    // let options = new RequestOptions({headers:headers});
    return this._http.get(this._postDeleteUrl+''+id)
    .map((response:Response)=>response.text());

  }

}
