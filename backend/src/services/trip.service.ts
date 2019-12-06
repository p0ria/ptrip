import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Trip} from "../models/entities/trip.entity";
import {Repository} from "typeorm";
import {Comment} from "../models/entities/comment.entity";
import {User} from "../models/entities/user.entity";
import {UserService} from "./user.service";

@Injectable()
export class TripService {
    
    constructor(
        @InjectRepository(Trip)
        private readonly tripRepository: Repository<Trip>,
        @InjectRepository(Comment)
        private readonly commentRepository: Repository<Comment>,
        private readonly userService: UserService){}
    
    getAllTrips(options: {loadImages?: boolean} = {loadImages: false}): Promise<Trip[]> {
        let relations = [];
        if(options.loadImages) relations.push('images');
        return this.tripRepository.find({relations: relations});
    }
    
    getTrip(id: number): Promise<Trip> {
        return this.tripRepository.findOne(id, {relations: ['images', 'comments']});
    }

    create(trip: Trip): Promise<Trip> {
        return this.tripRepository.save<Trip>(trip);
    }

    async addComment(userId: number, tripId: number, text: string): Promise<Comment> {
        let user = await this.userService.findById(userId);

        return this.commentRepository.save<Comment>({
            text: text,
            author: user.firstname + " " + user.lastname,
            trip: {
                id: tripId
            }
        } as Comment);
    }
}