import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Passenger} from "../models/entities/passenger.entity";

@Injectable()
export class PassengerService {
    constructor(
        @InjectRepository(Passenger)
        private readonly passengerRepository: Repository<Passenger>){}
        
    getPassengerById(id: number, options: {loadUser? : boolean, loadTrips? : boolean} = {loadUser: true, loadTrips: false}): Promise<Passenger | undefined> {
        let relations = [];
        if(options.loadUser) relations.push('user');
        if(options.loadTrips) relations.push('trips');
        return this.passengerRepository.findOne(id, {relations: relations, cache: true});
    }    
}