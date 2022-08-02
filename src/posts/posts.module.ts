import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostsRepositories } from './repositories/post.repository';

@Module({
    controllers: [PostsController],
    providers: [PostsService, PrismaService, PostsRepositories],
})
export class PostsModule {}
