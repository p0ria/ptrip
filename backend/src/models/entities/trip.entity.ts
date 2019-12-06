import {Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn} from "typeorm";
import {VehicleType} from "../enums/vehicle.enum";
import {durationType} from "../enums/duration.enum";
import {Leader} from "./leader.entity";
import {Passenger} from "./passenger.entity";
import {TripImage} from "./trip.image.entity";
import {Session} from "../enums/session.enum";
import {Comment} from "./comment.entity";

@Entity({name: "Trips"})
export class Trip{
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column()
    name: string;
    
    @Column()
    from: string;
    
    @Column()
    to: string;
    
    @Column({nullable: true})
    description: string;
    
    @Column({default: 'bus'})
    vehicle: VehicleType;
    
    @Column()
    startDate: string;
    
    @Column()
    endDate: string;
    
    @Column()
    duration: durationType;
    
    @ManyToOne(type => Leader, leader => leader.trips)
    leader: Leader;
    
    @Column()
    price: string;
    
    @Column({default: Session.Spring})
    session: Session;
    
    @ManyToMany(type => Passenger, passengers => passengers.trips)
    passengers: Passenger[];
    
    @OneToMany(type => TripImage, image => image.trip)
    images: TripImage[];
    
    @Column({nullable: true})
    backgroundImageUrlRelative: string;
    
    @OneToMany(type => Comment, comment => comment.trip)
    comments: Comment[];
}