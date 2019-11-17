import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  template: `
  <div>
    <h2> Favourite </h2>
    <span (click)="toggle()"
     class="glyphicon" 
     [class.glyphicon-star]="isFavourite"
     [class.glyphicon-star-empty]="!isFavourite"></span>
  </div>
  `,
  styles: [`
  .glyphicon {
    font-size: 50px;
  }
  
  div {
    padding: 20px;
  }
  `]
})
export class FavouriteComponent  {

  isFavourite : boolean = false;

  toggle(){
    this.isFavourite = !this.isFavourite;
  }

}
