import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}
  async create(userId: number, createPostDto: CreatePostDto) {
    const user = await this.userRepository.findOne({ where: { id: userId } }); // Use 'findOne' and add 'await'

    if (!user) {
      // Handle the case when the user is not found
      return null;
    }

    const { title, content } = createPostDto; // Remove 'user' from here

    const profile = this.postRepository.create({
      title,
      content,
      user, // You can associate the 'user' entity directly
    });

    await this.postRepository.save(profile);
    return profile;
  }

  findAll() {
    return `This action returns all post`;
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${updatePostDto} ${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
