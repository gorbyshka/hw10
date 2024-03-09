import { Injectable } from '@nestjs/common';
import { UpdatePostDto } from './post.dto';

@Injectable()
export class PostService {

  private posts: any[] = [

    { id: '1', title: 'First Post', content: 'Content of first post' },
    { id: '2', title: 'Second Post', content: 'Content of second post' },

  ];

  updatePost(id: string, updatePostDto: UpdatePostDto) {

    const postIndex = this.posts.findIndex(post => post.id === id);

    if (postIndex !== -1) {

      this.posts[postIndex] = { ...this.posts[postIndex], ...updatePostDto };

      return this.posts[postIndex];

    }

    return null;

  }

  partiallyUpdatePost(id: string, updatePostDto: UpdatePostDto) {

    const postIndex = this.posts.findIndex(post => post.id === id);

    if (postIndex !== -1) {

      this.posts[postIndex] = { ...this.posts[postIndex], ...updatePostDto };

      return this.posts[postIndex];

    }

    return null;

  }

}
