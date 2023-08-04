import { Component, Input, OnInit } from '@angular/core';
import { GridOptions } from 'ag-grid-community';
import { BehaviorSubject } from 'rxjs';
import { StockMarketDataServiceService } from 'src/app/services/stock-market-data-service.service';

@Component({
  selector: 'app-stock-detail-grid',
  templateUrl: './stock-detail-grid.component.html',
  styleUrls: ['./stock-detail-grid.component.scss'],
})
export class StockDetailGridComponent implements OnInit {
  @Input() gridOptions: GridOptions = {};
  @Input() trend: string = '';

  titleSubject = new BehaviorSubject<string>('');
  infoSubject = new BehaviorSubject<string>('');
  title$ = this.titleSubject.asObservable();
  info$ = this.infoSubject.asObservable();

  public rowData: any[] = [];

  constructor(
    private dataService: StockMarketDataServiceService,
  ) {}
  ngOnInit(): void {
    this.rowData = [];
    this.dataService.get52WeekData(this.trend).subscribe((data: any) => {
      console.log(data);
      this.titleSubject.next(data.pagesummary.stattype);
      this.infoSubject.next(data.pagesummary.tooltiptext);

      this.rowData = data.searchresult;
    });
  }
}
