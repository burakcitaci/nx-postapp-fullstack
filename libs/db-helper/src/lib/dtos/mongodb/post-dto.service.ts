
import { PostDto } from './post-dto.model';
import { Post, IPostDto } from "./post-dto.schema";

export class PostDtoService {

   

    static async create(todo: PostDto): Promise<PostDto> {
        const newTodo: IPostDto = await Post.create(todo);
        if (newTodo) {
            return { id: newTodo?.id, 
                body : newTodo?.body, 
                title: newTodo?.title, 
                date: newTodo?.date, 
                category : newTodo?.category
            };
        }
        return newTodo;
    }

    static async findAll() : Promise<PostDto[]> {
        return await Post.find().exec();
    }
}