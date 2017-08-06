import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ChartComponent } from './chart/chart.component';

export const appRoutes=[
  {
    path:'',
    redirectTo:'pages',
    pathMatch:'full'
  },
  {
    path:'user',
    component:UserComponent
  },
  {
    path:"echart",
    component:ChartComponent
  },
  {
    path:'pages',
    loadChildren:'./home/home.module#HomeModule'
  },
];
