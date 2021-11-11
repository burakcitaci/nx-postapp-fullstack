import { HttpModule, Module } from '@nestjs/common';
import { CommentController } from '../controllers/comment/comment.controller';
import { CommentService } from '../controllers/comment/comment.service';
import { PostController} from '../controllers/post/post.controller'
import { PostService } from '../controllers/post/post.service';
import { UserController } from '../controllers/user/user.controller';
import { UserService } from '../controllers/user/user.service';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [HttpModule],
  controllers: [AppController, PostController, CommentController, UserController],
  providers: [AppService, PostService, CommentService, UserService],
})
export class AppModule {}
