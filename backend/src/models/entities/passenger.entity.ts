import {Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn} from "typeorm";
import {Trip} from "./trip.entity";
import {User} from "./user.entity";
import {Dto} from "../dto.interface";

@Entity({name: "Passengers"})
export class Passenger implements Dto{

    @OneToOne(type => User, {primary: true})
    @JoinColumn({referencedColumnName: 'id'})
    user: User;
    
    @Column({nullable: true})
    email: string;
    
    @Column({nullable: true})
    phone: string;
    
    @ManyToMany(type => Trip, trip => trip.passengers)
    @JoinTable({name: "Passengers_Trips"})
    trips: Trip[];
    
    toDto(){
        return  {
            ...this,
            user: this.user ? this.user.toDto() : null,
            trips: this.trips ? this.trips.map(t => t.toDto()) : []
        };
    }
}