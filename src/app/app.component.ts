import { Component, OnInit } from '@angular/core';
import { StockMarketDataServiceService } from './services/stock-market-data-service.service';

export interface StockData {
  companyId: string;
  companyName: string;
  currentPrice: number;
  ytdHigh: number;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'stock-market52';

  ngOnInit(): void {
  }
}
