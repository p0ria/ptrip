import {Injectable, Logger} from "@nestjs/common";
import {SocketGateway} from "../socket/socket.gateway";
import {Trip} from "../models/entities/trip.entity";
import {Comment} from "../models/entities/comment.entity";

@Injectable()
export class SocketService {

    private logger: Logger = new Logger('SocketService');
    
    constructor(private gw: SocketGateway){}
    
    emitTripAdded(trip: (Trip & {backgroundImageUrl})): void {
        this.logger.log(`New trip emitted with id: ${trip.id}`);
        this.gw.server.emit('onTripAdded', trip);
    }
    
    emitCommentAdded(comment: Comment): void {
        this.logger.log(`New comment emitted with id: ${comment.id}`);
        this.gw.server.emit('onCommentAdded', comment);
    }
}