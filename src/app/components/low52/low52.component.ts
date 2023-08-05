
import { Component } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

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
        field: 'companyName2',
        width: 150,
      },
      {
        headerName: 'Current Price',
        field: 'current',
        width: 100,
      },
      {
        headerName: 'Sell Price',
        field: 'bestSellPrice',
        width: 100,
      },
      {
        headerName: 'Sell Quantity',
        field: 'bestSellQty',
        width: 120,
      },
    ],
    defaultColDef:{
      resizable: true,
      minWidth: 80,
    },
    enableRangeSelection: true,
    suppressCopyRowsToClipboard: true,
    suppressCopySingleCellRanges: true,
    copyHeadersToClipboard: true,
  };
  trend = 'near52weekslow';
}
