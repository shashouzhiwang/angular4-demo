import { RouterModule } from '@angular/router';

import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';

export const goodsRoutes=[
  {
		path:'',
		redirectTo:'list/1',
		pathMatch:'full'
	},
	{
		path:'list/:page',
		component:ListComponent
	},
	{
		path: 'detail/:postId',
		component: DetailComponent
	}
];
