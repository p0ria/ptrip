import {User} from "./user.interface";
import {Trip} from "./trip.interface";

export interface Passenger {
  user: User;
  email: string;
  phone: string;
  trips: Trip[];
}
