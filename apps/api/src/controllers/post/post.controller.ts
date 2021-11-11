import { Controller, Get } from '@nestjs/common';
import { Post } from '@nx-postapp-fullstack/api-interfaces';
import { PostService } from './post.service';
import { PostDto, PostDtoService } from '@nx-postapp-fullstack/db-helper'

@Controller('post')
export class PostController {
        
    constructor(private postService : PostService){}

    @Get()
    async getPosts() : Promise<Post[]> {    
        const allPostDtos : PostDto [] = await PostDtoService.findAll();
        const allPosts : Post[] = [];
        allPostDtos.forEach(element => {
            const postDto : Post = {
                title : element.title,
                body : element.body,
                category : element.category,
                date : element.date
            }
             allPosts.push(postDto);
        });
        return await allPosts;
    }
  
    /*async getComments(@Param() params): Promise<CommentModel[]> {
       return await this.commentService.getCommentsByPostId(params.id);  
  }*/
}
