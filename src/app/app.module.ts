import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TasksComponent } from './views/tasks/tasks.component';
import { ListCollectionComponent } from './component/list-collection/list-collection.component';
import { DetailCollectionComponent } from './component/detail-collection/detail-collection.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    ListCollectionComponent,
    DetailCollectionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
