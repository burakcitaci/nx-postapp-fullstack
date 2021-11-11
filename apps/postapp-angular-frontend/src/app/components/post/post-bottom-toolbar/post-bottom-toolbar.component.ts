/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'nx-postapp-fullstack-post-bottom-toolbar',
  templateUrl: './post-bottom-toolbar.component.html',
  styleUrls: ['./post-bottom-toolbar.component.css']
})
export class PostBottomToolbarComponent implements OnInit {

  faThumbsUp = faThumbsUp;
  faComment = faComment;
  faShare = faShare;
  
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit(): void {}

}
