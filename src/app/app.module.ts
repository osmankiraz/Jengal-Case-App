import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IconComponent } from './components/icon/icon.component';
import { ListComponent } from './components/list/list.component';
import { EntryComponent } from './components/entry/entry.component';
import { MainComponent } from './components/main/main.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IconComponent,
    ListComponent,
    EntryComponent,
    MainComponent,
    ListItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule,FormsModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [IconComponent, ListComponent, EntryComponent, ListItemComponent],
})
export class AppModule {}
