import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Trip} from "./trip.entity";

@Entity({name: 'Comments'})
export class Comment {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    text: string;
    
    @Column()
    author: string;
    
    @ManyToOne(type => Trip, trip => trip.comments)
    trip: Trip;
}