import { ApplyTitleCaseComponent } from './components/apply-title-case/apply-title-case.component';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { ApplyCustomPipeComponent } from './components/apply-custom-pipe/apply-custom-pipe.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { ZippyComponent } from './components/zippy/zippy.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SummaryPipe } from './components/apply-custom-pipe/summary.pipe';
import { ZippyTwoComponent } from './components/zippy-two/zippy-two.component';
import {TwitterLikeComponent} from './components/twitter-like/twitter-like.component';

@NgModule({
  declarations: [
    AppComponent,
    ZippyComponent,
    DataBindingComponent,
    ApplyCustomPipeComponent,
    SummaryPipe,
    FavouriteComponent,
    ApplyTitleCaseComponent,
    ZippyTwoComponent,
    TwitterLikeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
