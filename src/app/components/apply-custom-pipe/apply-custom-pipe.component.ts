import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply-custom-pipe',
  template: `
  <div [style.fontSize]="'large'" [style.padding]="'20px'">
     {{text | summary:10}}
  </div>
  `,
  styles: [`
  `]
})
export class ApplyCustomPipeComponent {

  text: string = "A year ago, I spent months undercover on the popular video-making app, Musical.ly. (It’s since been renamed. Nice try, but we see you hiding your lame-app self behind TikTok.) My commitment to using the app as an engrossed child, and not a mildly interested adult, led me on a distressing journey into a social network where kids as young as eight sexually objectify themselves. I found hundreds of self-harm videos that showed suicide options — bathtubs filling, images of blades, a child’s voice saying she didn’t want to live anymore. It only got worse from there."

}
