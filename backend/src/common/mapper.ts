import {Trip} from "../models/entities/trip.entity";

export class Mapper {
    static tripToDto(trip: Trip): Trip & {backgroundImageUrl}{
        return {
            ...trip,
            leader: trip.leader ? trip.leader.toDto() : null,
            passengers: trip.passengers ? trip.passengers.map(p => p.toDto()) : [],
            backgroundImageUrl: trip.backgroundImageUrlRelative ? process.env.BASE_ADDRESS + trip.backgroundImageUrlRelative : null,
            images: trip.images ? trip.images.map(i => i.toDto()): []
        };
    }
}