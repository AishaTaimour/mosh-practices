import { Component } from '@angular/core';

@Component({
  selector: 'app-apply-title-case',
  template: `
  <div>

    <h2> TitleCase </h2>
    <input [(ngModel)]="title" />
    <h3>{{ title | titlecase}}</h3>

  </div>
  `,
  styles: [`
  div {
    padding: 20px;
  }
  `]
})
export class ApplyTitleCaseComponent {
  title: string;
}
