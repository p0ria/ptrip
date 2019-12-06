import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import {RoleType} from "../enums/role.enum";
import {Dto} from "../dto.interface";

@Entity({name: "Users"})
export class User implements Dto {
    
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    firstname: string;
    
    @Column()
    lastname: string;
    
    @Column({unique: true})
    username: string;
    
    @Column()
    password: string;
    
    @Column()
    role: RoleType;

    toDto(): any {
        let {password, ...rest} = this;
        return {
            ...rest,
            fullname: `${this.firstname} ${this.lastname}`
        };
    }
}