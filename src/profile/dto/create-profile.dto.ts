import { CreateUserDto } from 'src/user/dto/create-user.dto';

export class CreateProfileDto {
  country: string;
  city: string;
  user: CreateUserDto;
}
