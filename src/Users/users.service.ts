import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "src/Entities/User/user.entity";
import { CreateUserDto } from "src/Dto/user.dto";


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>
    ) { }

    async createUser(userData: CreateUserDto): Promise<User> {
        const existingUser = await this.usersRepository.findOneBy({ email: userData.email });
        if (existingUser) {
            throw new Error('Email already exists');
        }
        const user = this.usersRepository.create(userData);
        return this.usersRepository.save(user);
    }


    findAll(): Promise<User[]> {
        console.log("Todos los usuarios: ", this.usersRepository.find())
        return this.usersRepository.find()
    }

    findOne(id: number): Promise<User | null> {
        return this.usersRepository.findOneBy({ id })
    }


    async findAndRemove(id: number): Promise<void> {
        await this.usersRepository.delete({ id })
    }

}