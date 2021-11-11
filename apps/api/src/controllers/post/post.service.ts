import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Post } from '@nx-postapp-fullstack/api-interfaces';

@Injectable()
export class PostService {

    public posts!: Post[];
    
    constructor(private httpService: HttpService) {}

    getAllPostsStr() : string {
        return "hello"
    }

    async getAllPosts(): Promise<Post[]> {
        this.httpService.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
            .subscribe(result => {
            this.posts = result.data;
        }); 
        return this.posts;
    }

    public postsByUser!: Post[];
    async getPostsByUSerID(userID : number): Promise<Post[]> {
        this.httpService.get<Post[]>('https://jsonplaceholder.typicode.com/posts?userId=' + userID)
            .subscribe(result => {
            this.postsByUser = result.data;
        }); 
        return this.postsByUser;
    }
    
}
