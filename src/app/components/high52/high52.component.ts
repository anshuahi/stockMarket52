import { Component } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-high52',
  template: `
    <app-stock-detail-grid
      [gridOptions]="gridOptions"
      [trend]="trend"
    ></app-stock-detail-grid>
  `,
})
export class High52Component {
  gridOptions: GridOptions = {
    columnDefs: [
      { checkboxSelection: true, maxWidth: 50 },
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
        headerName: 'Buy Price',
        field: 'bestBuyPrice',
        width: 100,
      },
      {
        headerName: 'Buy Quantity',
        field: 'bestBuyQty',
        width: 120,
      },
    ],
    defaultColDef: {
      resizable: true,
      minWidth: 70,
    },
    enableRangeSelection: true,
    suppressCopyRowsToClipboard: true,
    copyHeadersToClipboard: true,
  };

  trend = 'near52weekshigh';
}
