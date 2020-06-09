import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';
import { ConnectionItem } from './data/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tree-navigator';
  connections: ConnectionItem[] = null;
  enrichedConnections: any = null;
  search = '';

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    this.connections = this.appService.getConnections();
    this.appService.enrichData();
  }

  onSearchChange(search: string) {
    this.search = search;
  }
}