import {Column, Entity, ManyToOne, PrimaryGeneratedColumn} from "typeorm";
import {Dto} from "../dto.interface";
import {Trip} from "./trip.entity";

@Entity({name: "Trip_Images"})
export class TripImage implements Dto{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    urlRelative: string;
    
    @ManyToOne(type => Trip, trip => trip.images)
    trip: Trip;

    toDto(): any {
        return {
            ...this,
            url: process.env.BASE_ADDRESS + this.urlRelative,
            trip: this.trip ? this.trip.toDto() : null
        };
    }
}