import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutosComponent } from './pages/produtos/produtos.component';
import { CardComponent } from './pages/card/card.component';
import { PruebaComponent } from './pages/prueba/prueba.component';
import { ButtonModule } from 'primeng/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsService } from './services/products.service';
import { HttpClientModule } from '@angular/common/http';
import { CardModule } from 'primeng/card';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { DataViewComponent } from './pages/data-view/data-view.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutosComponent,
    CardComponent,
    PruebaComponent,
    DataViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule,
    HttpClientModule,
    CardModule,
    DataViewModule,
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
