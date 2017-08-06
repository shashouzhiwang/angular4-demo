import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { GoodsService } from '../services/goods.service';

import { Goods } from '../model/goods-model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public itemsPerPage:number=5;
  public totalRecords:number=11;
  public currentPage:number=1;
  public offset:number=0;
  public end:number=0;

  public searchText:string;
  public searchTextStream:Subject<string> = new Subject<string>();

  public goodsList:Array<Goods>;

  constructor(
    public router: Router,
    public activeRoute: ActivatedRoute,
    public goodsService:GoodsService
  ) {

  }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      console.log(params);
      this.currentPage=params.page;
      this.loadData(this.searchText);
    });

  }

  public loadData(searchText:string){
    this.offset = (this.currentPage-1)*this.itemsPerPage;
    this.end = (this.currentPage)*this.itemsPerPage;
    return this.goodsService.getGoodsList(searchText,this.currentPage).subscribe(
      res=>{
        this.goodsList = res["items"].slice(this.offset,this.end>this.totalRecords?this.totalRecords:this.end);
      },
      error => {console.log(error)},
      () => {}
    );
  }

}
