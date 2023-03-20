import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IconComponent } from './components/icon/icon.component';
import { ListComponent } from './components/list/list.component';
import { EntryComponent } from './components/entry/entry.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [AppComponent, IconComponent, ListComponent, EntryComponent, MainComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
  exports:[IconComponent]
})
export class AppModule {}
