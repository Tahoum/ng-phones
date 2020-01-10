# NgPhones

NgPhones is a simple angular module for selecting d 

## Installation

```bash
npm i --save ng-phones
```

## Usage
### import NgPhonesModule
```javascript
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
```
### put the component in your components template
```javascript
<lib-ng-phones [defaulfCountry]="ma" (phoneNumber)="setNumber($event)" (countryCode)="getCountryCode($event)"></lib-ng-phones>
```
### get country code and phone number from your component Class
```javascript
getCountryCode(countryCode: string): void {
    console.log(countryCode);
}
setNumber(phoneNumber: string): void {
    console.log(phoneNumber);
}
```
## License
[MIT](https://choosealicense.com/licenses/mit/)
