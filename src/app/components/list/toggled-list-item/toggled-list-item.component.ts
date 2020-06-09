import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { ConnectionItem, DbItem } from 'src/app/data/types';

@Component({
  selector: 'toggled-list-item',
  templateUrl: './toggled-list-item.component.html',
  styleUrls: ['./toggled-list-item.component.scss']
})
export class ToggledListItemComponent implements OnInit {

  @Input() item: ConnectionItem | DbItem = null;
  @Input() itemIcon = null;
  @Input() isExpanded = false;
  @Input() hasNested = true;

  hasPermission = true

  @Output() onExpandToggle: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
      this.hasPermission = this.item.hasOwnProperty('hasPermission') ? 
        this.item.hasPermission : true;
  }

  toggleExpansion (): void {
      this.onExpandToggle.emit(this.item.id);
  }
}
