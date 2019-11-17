import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent {

  @Input('header')
  title: string;
  isExpanded: boolean = false;

  @Output()
  expanded: EventEmitter<any> = new EventEmitter<any>();

  toggle() {
    this.isExpanded = !this.isExpanded;
    if (this.isExpanded) {
      this.expanded.emit();
    }
  }
}
