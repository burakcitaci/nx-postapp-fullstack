import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message, Post } from '@nx-postapp-fullstack/api-interfaces';

@Component({
  selector: 'nx-postapp-fullstack-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hello$ = this.http.get<Message>('/api/hello');
  public posts! : Post[]; 
  
  constructor(private router : Router, private http: HttpClient) 
  {
    http.get<Post[]>('/api/post').subscribe(result => {
      this.posts = result;
      console.log(this.posts.length);
    }, error => console.error(error));
    
  }

  ngOnInit(): void {
    console.log("ngOninit - homeComponent");
  }

  cardClicked(post: Post) {
    this.router
    .navigateByUrl('/post-detail?postId=' + post.id, {state : post});
  }

 
}
