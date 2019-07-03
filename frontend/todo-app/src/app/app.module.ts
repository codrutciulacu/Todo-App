import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
 
import { AppComponent } from './app.component';
import { MainBoxComponent } from './main-box/main-box.component';
import { ContentItemComponent } from './content-item/content-item.component';

import { MaterialImports } from './material-imports';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MainBoxComponent,
    ContentItemComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialImports,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialImports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
