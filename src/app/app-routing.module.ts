import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { High52Component } from './components/high52/high52.component';
import { Low52Component } from './components/low52/low52.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path: 'high52', component: High52Component},
  {path: 'low52', component: Low52Component},
  {path: 'search/:id', component: SearchComponent},
  {path: '**', component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
