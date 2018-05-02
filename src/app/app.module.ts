import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { componentFactoryName } from '@angular/compiler';
import { HeaderComponent } from './header/header.component';
import { UpdateComponent } from './update/update.component';
import { CreateComponent } from './create/create.component';

const appRoutes:Routes = [
  { path: '', redirectTo: '/product', pathMatch: 'full'},
  { path: 'product',  component:ProductComponent},
  { path: 'create', component:CreateComponent },
  { path: 'update/:id', component:UpdateComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeaderComponent,
    UpdateComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
  RouterModule.forRoot(
    appRoutes,
  )  
],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
