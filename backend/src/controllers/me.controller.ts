import {Controller, Get, UseGuards, Request} from "@nestjs/common";
import {AuthGuard} from "@nestjs/passport";
import * as Role from "../models/enums/role.enum";
import {PassengerService} from "../services/passenger.service";

@Controller('api/me')
export class MeController {
    
    constructor(
        private readonly passengerService: PassengerService){}
    
    @Get()
    @UseGuards(AuthGuard('jwt'))
    async getProfile(@Request() req): Promise<any> {
        switch (req.user.role) {
            case Role.Administrator:
                //TODO:
                return null;
                
            case Role.Passenger:
                return this.passengerService.getPassengerById(req.user.id, {loadUser: true, loadTrips: true});
                
            case Role.Leader:
                //TODO:
                return null;
        }
        return null;
    }
}