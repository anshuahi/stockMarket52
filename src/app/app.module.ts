import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { High52Component } from './components/high52/high52.component';
import { Low52Component } from './components/low52/low52.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchDetailComponent } from './components/search-detail/search-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { StockDetailGridComponent } from './components/my-grid/stock-detail-grid/stock-detail-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    High52Component,
    Low52Component,
    HomeComponent,
    SearchComponent,
    SearchDetailComponent,
    StockDetailGridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
