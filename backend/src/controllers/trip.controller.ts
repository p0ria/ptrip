import {Body, Controller, Get, Param, Post, Query, Request, UseGuards} from "@nestjs/common";
import {Trip} from "../models/entities/trip.entity";
import {TripService} from "../services/trip.service";
import {Mapper} from "../common/mapper";
import {SocketGateway} from "../socket/socket.gateway";
import {SocketService} from "../services/socketService";
import {AuthGuard} from "@nestjs/passport";
import {Comment} from "../models/entities/comment.entity";

@Controller('api/trips')
export class TripController {
    constructor(
        private tripService: TripService,
        private socketService: SocketService){}
    
    @Get()
    async getAllTrips(@Query('loadImages')loadImages: boolean = false): Promise<(Trip & {backgroundImageUrl})[]> {
        let trips = await this.tripService.getAllTrips({loadImages: loadImages});
        return trips.map(t => Mapper.tripToDto(t));
    }
    
    @Post()
    async create(@Body() trip: Trip): Promise<Trip & {backgroundImageUrl: string}>{
        let t = await this.tripService.create(trip);
        let dto = Mapper.tripToDto(t);
        this.socketService.emitTripAdded(dto);
        return dto;
    }
    
    @Get(':id')
    async getTrip(@Param('id') tripId): Promise<any> {
        let trip = await this.tripService.getTrip(tripId);
        return Mapper.tripToDto(trip);
    }
    
    @Post(':id/comments')
    @UseGuards(AuthGuard('jwt'))
    async addComment(
        @Request() req, @Param('id') tripId, @Body() comment: {text: string}): Promise<Comment>{
        let c =  await this.tripService.addComment(req.user.id, tripId, comment.text);
        this.socketService.emitCommentAdded(c);
        return c;
    }
}