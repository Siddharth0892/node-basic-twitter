import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TweetComponent } from './tweet/tweet.component';
import { TweetDetailComponent } from './tweet-detail/tweet-detail.component';
import { TweetCreateComponent } from './tweet-create/tweet-create.component';
import { TweetEditComponent } from './tweet-edit/tweet-edit.component';
import { TweetParentComponent } from './tweet-parent/tweet-parent.component';
const appRoutes: Routes = [
  {
    path: 'tweets',
    component: TweetComponent,
    data: { title: 'Tweet List' }
  },
 {
    path: 'tweet/:id',
    component: TweetComponent,
    data: { title: 'Tweet By ID' }
  },
  {
    path: 'tweet-details/:id',
    component: TweetDetailComponent,
    data: { title: 'Tweet Details' }
  },
  {
    path: 'tweet-create',
    component: TweetCreateComponent,
    data: { title: 'Create Tweet' }
  },
  {
    path: 'tweet-edit/:id',
    component: TweetEditComponent,
    data: { title: 'Edit Tweet' }
  },
  { path: '',
    redirectTo: '/tweets',
    pathMatch: 'full'
  }
];
@NgModule({
  declarations: [
    AppComponent,
    TweetComponent,
    TweetDetailComponent,
    TweetCreateComponent,
    TweetEditComponent,
	TweetParentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
