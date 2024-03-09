import { Controller, Put, Patch, Body, Param } from '@nestjs/common';
import { UpdatePostDto } from './post.dto';
import { PostService } from './post.service';

@Controller('posts')
export class PostController {
  
  constructor(private readonly postsService: PostService) { }

  @Put(':id')
  updatePost(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {

    return this.postsService.updatePost(id, updatePostDto);

  }

  @Patch(':id')
  partiallyUpdatePost(@Param('id') id: string, @Body() updatePostDto: UpdatePostDto) {

    return this.postsService.partiallyUpdatePost(id, updatePostDto);

  }

}
