import { NgModule } from '@angular/core';
import { NgPhonesComponent } from './ng-phones.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [NgPhonesComponent],
  imports: [
    CommonModule
  ],
  exports: [NgPhonesComponent]
})
export class NgPhonesModule { }
