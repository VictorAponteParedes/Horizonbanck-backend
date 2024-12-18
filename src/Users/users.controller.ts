import { Controller, Post, Get, Body, Param, Delete } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "src/Dto/user.dto";

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) { }

    @Post('create')
    async createUser(@Body() createUserDto: CreateUserDto) {
        return await this.userService.createUser(createUserDto);
    }

    @Get()
    async getAllUsers() {
        return await this.userService.findAll();
    }

    @Get(':id')
    async getUserById(@Param('id') id: number) {
        return await this.userService.findOne(id);
    }

    @Delete(':id')
    async deleteUser(@Param('id') id: number) {
        return await this.userService.findAndRemove(id);
    }
}