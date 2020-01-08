import { NgModule } from '@angular/core';
import { NgPhonesComponent } from './ng-phones.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [NgPhonesComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [NgPhonesComponent]
})
export class NgPhonesModule { }
