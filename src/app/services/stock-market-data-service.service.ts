import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockMarketDataServiceService {


  url: string = 'https://etmarketsapis.indiatimes.com/ET_Stats/';
  params = '?pageno=1&pagesize=25&sortby=percentchange&sortorder=desc&exchange=nse&marketcap=largecap%2Cmidcap';

  constructor(
    private http: HttpClient,
  ) {
  }

  get52WeekData(trend: string){
      return this.http.get(this.url + trend+this.params);
  }

}

