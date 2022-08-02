import { Injectable, NotFoundException } from '@nestjs/common';
import { NotFoundError } from 'rxjs';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepository } from './repositories/user.repository';

@Injectable()
export class UsersService {
    constructor(private readonly repository: UsersRepository) {}

    create(createUserDto: CreateUserDto) {
        return this.repository.create(createUserDto);
    }

    findAll() {
        return this.repository.findAll();
    }

    async findOne(id: string) {
        const user = await this.repository.findOne(id);

        if (!user) {
            //throw error  conflic
            throw new NotFoundException();
        }

        return user;
    }

    update(id: string, updateUserDto: UpdateUserDto) {
        return this.repository.update(id, updateUserDto);
    }

    remove(id: string) {
        return this.repository.remove(id);
    }
}
