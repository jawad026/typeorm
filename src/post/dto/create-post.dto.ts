import { CreateUserDto } from 'src/user/dto/create-user.dto';

export class CreatePostDto {
  id: number;
  title: string;
  content: string;
  user: CreateUserDto;
}
