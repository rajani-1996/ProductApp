import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductService } from './product.service';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NewProductComponent } from './new-product/new-product.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


import { EditProductComponent } from './edit-product/edit-product.component'



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    NewProductComponent,
    LoginComponent,
    RegisterComponent,
    EditProductComponent   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService,AuthGuard,ProductService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
