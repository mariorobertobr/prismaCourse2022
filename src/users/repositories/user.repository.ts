import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Injectable()
export class UsersRepository {
    constructor(private readonly prismaService: PrismaService) {}

    async create(createUserDto: CreateUserDto) {
        const user = await this.prismaService.user.create({
            data: {
                ...createUserDto,
            },
        });
        return user;
    }

    async findAll() {
        const users = await this.prismaService.user.findMany();
        return users;
    }

    async findOne(id: string) {
        const user = await this.prismaService.user.findUnique({
            where: {
                id,
            },
        });
        return user;
    }

    async update(id: string, updateUserDto: UpdateUserDto) {
        const user = await this.prismaService.user.update({
            where: {
                id,
            },
            data: {
                ...updateUserDto,
            },
        });
        return user;
    }

    async remove(id: string) {
        const user = await this.prismaService.user.delete({
            where: {
                id,
            },
        });
        return user;
    }
}
