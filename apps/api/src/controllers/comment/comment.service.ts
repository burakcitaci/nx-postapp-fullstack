import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Comment } from '@nx-postapp-fullstack/api-interfaces';

@Injectable()
export class CommentService {
    public comments!: Comment[];

    constructor(private httpService: HttpService) {}

     async getCommentsByPostId(postId : number): Promise<Comment[]> {
        this.httpService.get<Comment[]>
        ('https://jsonplaceholder.typicode.com/comments?postId=' + postId)
            .subscribe(result => {
            this.comments = result.data;
        }); 
        return this.comments;
    }
}
