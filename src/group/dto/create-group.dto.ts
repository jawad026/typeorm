import { CreateProfileDto } from 'src/profile/dto/create-profile.dto';

export class CreateGroupDto {
  id: number;
  name: string;
  description: string;
  profile: CreateProfileDto[];
}
