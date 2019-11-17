import {Component, OnInit} from '@angular/core';
import {flagDaysCalendar} from 'ngx-bootstrap/datepicker/engine/flag-days-calendar';

@Component({
  selector: 'app-data-binding',
  template: `
      <input class="form-control" #userInput  (keyup.enter)="onKeyUp(userInput.value)" />
    <h1> {{ name }}</h1>
  `
})
export class DataBindingComponent {

  name: string = 'Aisha Taimour';

  onKeyUp(value: string) {
    console.log(value);
    this.name = value;
  }
}
