import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  getCountryCode(code: string): void {
    console.log(code);
  }
  setNumber(value: string): void {
    console.log(value);
  }

}
