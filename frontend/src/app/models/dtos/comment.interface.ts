import {Trip} from "./trip.interface";

export interface Comment {
  id: number;
  text: string;
  author: string;
  trip: Trip;
}
