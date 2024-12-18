import { IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreateUserDto {
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsOptional()
    @IsBoolean()
    isActive?: boolean = true;

    @IsString()
    email: string;


    @IsOptional()
    @IsString()
    profileImage?: string;
}