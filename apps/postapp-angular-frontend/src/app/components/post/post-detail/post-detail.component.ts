/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Post, Comment } from '@nx-postapp-fullstack/api-interfaces';
import { Location } from '@angular/common';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'nx-postapp-fullstack-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {

  faArrowLeft = faArrowLeft;
  public currentPost! : Post;
  public comments! : Comment[]
  constructor(private location : Location, private router : Router, http: HttpClient)
  {
    
    this.currentPost = router.getCurrentNavigation()?.extras.state as Post;
    console.log("reloaded");
    //console.log(this.currentPost);
    http.get<Comment[]>('http://localhost:3333/api/comment/' + this.currentPost.id).subscribe(result => {
      this.comments = result;
    }, error => console.error(error));
  }
  
  ngOnInit(): void {
    //this.redirectTo('post-detail');
    }
    
 backClicked(){
  this.location.back();
}

}
