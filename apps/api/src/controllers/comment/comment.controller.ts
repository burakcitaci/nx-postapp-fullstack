import { Controller, Get, Param } from '@nestjs/common';
import { CommentService } from './comment.service';
import { Comment } from '@nx-postapp-fullstack/api-interfaces';

@Controller('comment')
export class CommentController {
    
  constructor(private commentService : CommentService){}

    @Get(':id')
    async getComments(@Param() params): Promise<Comment[]> {
       return await this.commentService.getCommentsByPostId(params.id);  
  }
}
