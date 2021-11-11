import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './components/post/post.component';
import { PostBottomToolbarComponent } from './components/post/post-bottom-toolbar/post-bottom-toolbar.component';
import { PostDetailComponent } from './components/post/post-detail/post-detail.component';
import { HomeComponent } from './components/home/home.component';
import {Location} from '@angular/common';
import { PostCommentComponent } from './components/post/post-comment/post-comment.component';
@NgModule({
  declarations: [
    AppComponent, 
    PostComponent, 
    PostBottomToolbarComponent, 
    PostDetailComponent, 
    HomeComponent, PostCommentComponent],
  imports: [BrowserModule, 
    AppRoutingModule, 
    HttpClientModule, 
    FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent, Location],
})
export class AppModule {}
