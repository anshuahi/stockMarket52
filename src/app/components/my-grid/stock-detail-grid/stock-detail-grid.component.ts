import { Component, Input, OnInit } from '@angular/core';
import { GridApi, GridOptions, GridReadyEvent } from 'ag-grid-community';
import { BehaviorSubject } from 'rxjs';
import { StockMarketDataServiceService } from 'src/app/services/stock-market-data-service.service';
import { ClipboardService } from 'ngx-clipboard';

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
  private gridApi!: GridApi<any>;

  constructor(
    private dataService: StockMarketDataServiceService,
    private clipboard: ClipboardService
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

  onBtCopyRows() {
    const selectedData = this.gridApi.getSelectedRows();
    console.log(selectedData);
    let str = '';
    this.gridOptions?.columnDefs?.forEach((a: any) => {
      if (a.headerName) {
        str = str + a.headerName + '\t';
      }
    });
    str = str + '\n';
    selectedData.forEach((element) => {
      this.gridOptions?.columnDefs?.forEach((a: any) => {
        if (a.headerName) {
          str = str + element[a?.field] + '\t';
        }
      });
      str = str + '\n';
    });
    this.clipboard.copy(str);
  }

  onGridReady(params: GridReadyEvent<any>) {
    this.gridApi = params.api;
  }
}
