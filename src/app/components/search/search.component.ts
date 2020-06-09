import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  keyEntered(key: string): void {
    this.onSearch.emit(key);
  }
}