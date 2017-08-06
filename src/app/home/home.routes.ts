import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

export const homeRoutes=[
	{
        path:'',
        component:HomeComponent,
        children:[{
            path:'',
            loadChildren:'../goods/goods.module#GoodsModule'
        }]
    }
];
