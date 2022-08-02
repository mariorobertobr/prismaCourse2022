import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class CreatePostDto {
    @ApiProperty({
        description: 'The title of the post',
    })
    @IsString()
    title: string;

    @ApiProperty({
        description: 'The content of the post',
    })
    @IsString()
    @IsOptional()
    content?: string;

    @ApiProperty({
        description: 'The author of the post',
    })
    @IsString()
    authorId: string;
}
