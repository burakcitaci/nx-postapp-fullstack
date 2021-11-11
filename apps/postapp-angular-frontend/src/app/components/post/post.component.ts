/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '@nx-postapp-fullstack/api-interfaces';

@Component({
  selector: 'nx-postapp-fullstack-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input()
  currentPost!: Post;

  @Input()
  index!: number;

  @Output() 
  cardClickedEvent = new EventEmitter<Post>();
  
  minutes = this.generateNumbers();

  constructor() {  }

  ngOnInit(): void {
  }

  generateNumbers()  {
    return Math.floor(Math.random() * 6) + 1
   }
  
   onCardClicked() {
    this.cardClickedEvent.emit(this.currentPost);
  }
}
