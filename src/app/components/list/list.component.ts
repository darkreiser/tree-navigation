import { Component, Input } from '@angular/core';

@Component({
  selector: 'list-component',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input() connections: any[] = null;
  @Input() search = '';

  isOpened = {};

  constructor() { }

  toggleExpansion(id: string): void {
    if (!this.isOpened.hasOwnProperty(id)) {
      this.isOpened[id] = true;
    } else {
      this.isOpened[id] = !this.isOpened[id];
    }    
  }
}
