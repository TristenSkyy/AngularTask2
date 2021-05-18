import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PostingComponent } from './posting/posting.component';
import { OutPutPostComponent } from './out-put-post/out-put-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PostingComponent,
    OutPutPostComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
