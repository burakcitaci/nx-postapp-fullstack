import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '@nx-postapp-fullstack/api-interfaces';
@Component({
  selector: 'nx-postapp-fullstack-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {

  @Input()
  comment!: Comment;
  constructor() {
    //
   }

  ngOnInit(): void {
    console.log("ngOnInit");
  }
}
