import {Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Trip} from "./trip.entity";
import {User} from "./user.entity";
import {Dto} from "../dto.interface";
import {Mapper} from "../../common/mapper";

@Entity({name: "Leaders"})
export class Leader implements Dto {
  
  @OneToOne(type => User, {primary: true})
  @JoinColumn({referencedColumnName: 'id'})
  user: User;
  
  @Column()
  firstName: string;
  
  @Column()
  lastName: string;

  @OneToMany(type => Trip, trip => trip.leader)
  trips: Trip[];

  toDto(): any {
    return  {
      ...this,
      user: this.user ? this.user.toDto() : null,
      trips: this.trips ? this.trips.map(t => Mapper.tripToDto(t)) : []
    };
  }
}