import {User} from "./user.interface";
import {Trip} from "./trip.interface";

export interface Leader {
  user: User;
  firstName: string;
  lastName: string;
  trips: Trip[];
}
