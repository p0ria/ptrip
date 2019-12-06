import {Injectable} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "../models/entities/user.entity";
import {Repository} from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>){}
        
    async findByUsername(username: string): Promise<User | undefined> {
        return this.userRepository.findOne(
            {where: {username: username}}
        );
    }
    
    async findById(id: number): Promise<User | undefined> {
        return this.userRepository.findOne(id);
    }
    
    
}
