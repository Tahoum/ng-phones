import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgPhonesService } from './ng-phones.service';
@Component({
  selector: 'lib-ng-phones',
  templateUrl: 'ng-phones.component.html',
  styleUrls: ['ng-phones.component.css', 'ng-flags.style.css', 'ng-custom-overflow.css']
})
export class NgPhonesComponent implements OnInit {

  countriesCodes: Array<any>;
  isDropdownShown = false;
  @Input() defaulfCountry: string;
  @Input() inputWidth: string;
  @Output() countryCode = new EventEmitter<string>();
  constructor(private phonesService: NgPhonesService) { }

  ngOnInit() {
    this.countriesCodes = this.phonesService.getCountriesCodes();
    if (!this.defaulfCountry) {
      this.defaulfCountry = 'ma';
    }
    if (this.inputWidth) {
      this.inputWidth += 'px';
    } else {
      this.inputWidth = '100%';
    }
  }

  toggleDropdown(): void {
    this.isDropdownShown = !this.isDropdownShown;
  }

  emitCountryCode(countryCode: string, country: string): void {
    this.countryCode.emit(countryCode);
    this.defaulfCountry = country;
    this.toggleDropdown();
  }

}
