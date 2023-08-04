import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  searchText = new FormControl('');

  ngOnInit(): void {

  }

  search(){
    // $event.preventDefault();
    console.log(this.searchText);
  }
}
