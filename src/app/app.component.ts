import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mosh-practices';
  tweet = {
    isLiked: true,
    likesCount: 10
  };

  WhenExpanded() {
    console.log('heeey I am expanded now !');
  }
}
