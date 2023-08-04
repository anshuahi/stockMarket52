import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ColDef, GridApi, GridOptions, GridReadyEvent, IRowNode } from 'ag-grid-community';
import { BehaviorSubject } from 'rxjs';
import { StockData } from 'src/app/app.component';
import { StockMarketDataServiceService } from 'src/app/services/stock-market-data-service.service';

@Component({
  selector: 'app-low52',
  template: `
  <app-stock-detail-grid [gridOptions]="gridOptions" [trend]="trend"></app-stock-detail-grid>
  `,
})

export class Low52Component {
  gridOptions: GridOptions = {
    columnDefs: [
      {
        headerName: 'Company',
        field: 'companyShortName',
        width: 120,
      },
      {
        headerName: 'Current Price',
        field: 'current',
        width: 100,
      },
      {
        headerName: 'Buy Price',
        field: 'bestBuyPrice',
        width: 100,
      },
      {
        headerName: 'Best Quantity',
        field: 'bestBuyQty',
        width: 120,
      },
    ],
    defaultColDef:{
      resizable: true,
    },
    enableRangeSelection: true,
    suppressCopyRowsToClipboard: true,
    copyHeadersToClipboard: true,
  };
  trend = 'near52weekslow';
}
