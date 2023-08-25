import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import { ProfileModule } from './profile/profile.module';
import { PostModule } from './post/post.module';
import { GroupModule } from './group/group.module';
import { CommentModule } from './comment/comment.module';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'jawad',
  password: '12345',
  database: 'postgres',
  entities: [__dirname + '/**/*.entity{.ts,.js}'], // Changed path to entities
  synchronize: true,
};

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    UserModule,
    ProfileModule,
    PostModule,
    GroupModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
