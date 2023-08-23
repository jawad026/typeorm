import { Injectable } from '@nestjs/common';
import { CreateProfileDto } from './dto/create-profile.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { Profile } from './entities/profile.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class ProfileService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Profile)
    private profileRepository: Repository<Profile>,
  ) {}

  async create(userId: number, createProfileDto: CreateProfileDto) {
    const user = await this.userRepository.findOne({ where: { id: userId } }); // Use 'findOne' and add 'await'

    if (!user) {
      // Handle the case when the user is not found
      return null;
    }

    const { country, city } = createProfileDto; // Remove 'user' from here

    const profile = this.profileRepository.create({
      country,
      city,
      user, // You can associate the 'user' entity directly
    });

    await this.profileRepository.save(profile);
    return profile;
  }

  findAll() {
    return `This action returns all profile`;
  }

  findOne(id: number) {
    return `This action returns a #${id} profile`;
  }

  update(id: number, updateProfileDto: UpdateProfileDto) {
    return `This action updates a #${id} ${updateProfileDto} profile`;
  }

  remove(id: number) {
    return `This action removes a #${id} profile`;
  }
}
