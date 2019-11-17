import {Component} from '@angular/core';

@Component({
  selector: 'zippy-two',
  templateUrl: './zippy-two.component.html',
  styleUrls: ['./zippy-two.component.css']
})
export class ZippyTwoComponent {

  isExpanded: boolean = false;


  toggle() {
    this.isExpanded = !this.isExpanded;
  }

}
