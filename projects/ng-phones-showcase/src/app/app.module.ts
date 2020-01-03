import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgPhonesModule } from 'ng-phones';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgPhonesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
