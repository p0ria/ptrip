import {UserService} from "./user.service";
import {AuthService} from "./auth.service";
import {PassengerService} from "./passenger.service";
import {TripService} from "./trip.service";
import {SocketService} from "./socketService";

export const SERVICES = [
    UserService,
    AuthService,
    PassengerService,
    TripService,
    SocketService
];