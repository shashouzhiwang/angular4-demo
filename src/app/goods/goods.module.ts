import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GoodsService } from './services/goods.service';

import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';


import {goodsRoutes} from './goods.routes';

@NgModule({
    imports: [
        RouterModule,
        RouterModule.forChild(goodsRoutes)
    ],
    exports: [],
    declarations: [
      DetailComponent,
      ListComponent
    ],
    providers: [
      GoodsService
    ]
})
export class GoodsModule { }
