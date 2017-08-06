import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent }   from './home.component';
import { FooterComponent } from './footer/footer.component';


import {homeRoutes} from './home.routes';

@NgModule({
    imports: [
        RouterModule.forChild(homeRoutes)
    ],
    exports: [],
    declarations: [
        HomeComponent,
        FooterComponent
    ],
    providers: [],
})
export class HomeModule { }
