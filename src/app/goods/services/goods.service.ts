import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Goods } from '../model/goods-model';

@Injectable()
export class GoodsService {
  public postListURL = 'mock-data/goods-list.json';

  constructor(public http:Http) { }

  public getGoodsList(searchText: string,page:number=1):Observable<Goods[]>{
    let url = this.postListURL;
    let params = new URLSearchParams();
    params.set('page',String(page));

    return this.http
      .get(url,{search:params})
      .map((res:Response) => {
        let result=res.json();
        console.log(result);
        return result;
      })
      .catch((error:any) => Observable.throw(error || 'Server error'));
  }

  public getGoodsNumber():number{
    return 0;
  }

  public addPost(user:any){

  }

  public search() {

  }
}
