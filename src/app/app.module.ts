import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { ToggledListItemComponent } from './components/list/toggled-list-item/toggled-list-item.component';
import { SearchComponent } from './components/search/search.component'

import { AppService } from './misc/app.service';
import { FilterPipe } from './misc/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ToggledListItemComponent,
    SearchComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
