import {VehicleType} from "../enums/vehicle.enum";
import {durationType} from "../enums/duration.enum";
import {Session} from "../enums/session.enum";
import {Leader} from "./leader.interface";
import {Passenger} from "./passenger.interface";
import {TripImage} from "./trip-image.interface";
import {Comment} from "./comment.interface";

export interface Trip {
  id: number;
  name: string;
  from: string;
  to: string;
  description: string;
  vehicle: VehicleType;
  startDate: string;
  endDate: string;
  duration: durationType;
  leader: Leader;
  price: string;
  session: Session;
  passengers: Passenger[];
  images: TripImage[];
  backgroundImageUrl: string;
  comments: Comment[];
}
