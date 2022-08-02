import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreatePostDto } from '../dto/create-post.dto';
import { UpdatePostDto } from '../dto/update-post.dto';
import { PostEntity } from '../entities/post.entity';

@Injectable()
export class PostsRepositories {
    constructor(private readonly prismaService: PrismaService) {}

    async create(createPostDto: CreatePostDto): Promise<PostEntity> {
        const posts = await this.prismaService.post.create({
            data: {
                ...createPostDto,
            },
        });
        return posts;
    }

    async findAll(): Promise<PostEntity[]> {
        const posts = await this.prismaService.post.findMany();
        return posts;
    }

    async findOne(id: number): Promise<PostEntity> {
        const post = await this.prismaService.post.findUnique({
            where: {
                id,
            },
        });
        return post;
    }

    async update(
        id: number,
        UpdatePostDto: UpdatePostDto,
    ): Promise<PostEntity> {
        const postUpdate = await this.prismaService.post.update({
            where: {
                id,
            },
            data: {
                ...UpdatePostDto,
            },
        });
        return postUpdate;
    }

    async remove(id: number): Promise<void> {
        const RemovePost = await this.prismaService.post.delete({
            where: {
                id,
            },
        });
        return;
    }
}
