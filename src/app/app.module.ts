import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {ProductListComponent} from './Product/product.list.Component';

import{ProductPriceComponent}  from './Product/Product.Price.Component';

import{MenuTopBarComponent}  from './MenuManagement/menu.topbar.Component';
import{HomeComponent}  from './Home/Home.Component';
import{QuestionComponent}  from './Question/Question.Component';

import{QuestionListComponent}  from './Question/Question.List.Component';

import{QuestionService} from './Question/Question.Service';

import{RouterModule} from "@angular/router"
import {appRoutes} from '../routes'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ProductPriceComponent,
    MenuTopBarComponent,
    QuestionComponent,
    QuestionListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    QuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
