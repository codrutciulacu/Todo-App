import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainBoxComponent } from './main-box/main-box.component';
import { AddTextboxComponent } from './add-textbox/add-textbox.component';
import { ContentItemComponent } from './content-item/content-item.component';
import { CompletedButtonComponent } from './completed-button/completed-button.component';

import { MaterialImports } from './material-imports';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainBoxComponent,
    AddTextboxComponent,
    ContentItemComponent,
    CompletedButtonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialImports
  ],
  exports: [
    MaterialImports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
