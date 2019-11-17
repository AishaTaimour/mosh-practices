import {Component, Input, OnInit} from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'twitter-like',
  templateUrl: './twitter-like.component.html',
  styleUrls: ['./twitter-like.component.css']
})
export class TwitterLikeComponent implements OnInit {

  @Input()
  isLiked : boolean;
  @Input()
  likesCount: number;

  constructor() { }

  ngOnInit() {
  }

  like() {
    this.isLiked = !this.isLiked;
    this.likesCount += this.isLiked ? 1 : -1;
  }
}
