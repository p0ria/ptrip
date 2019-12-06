import {
    OnGatewayConnection,
    OnGatewayDisconnect,
    OnGatewayInit, SubscribeMessage,
    WebSocketGateway,
    WebSocketServer
} from "@nestjs/websockets";
import {Server, Socket} from "socket.io";
import {Logger} from "@nestjs/common";
import {Trip} from "../models/entities/trip.entity";

@WebSocketGateway({transports: ['websocket']})
export class SocketGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
   
    private logger: Logger = new Logger('SocketGateway');
    @WebSocketServer() server : Server;
    
    
    afterInit(server: Server): any {
        this.logger.log('Init');
    }
    
    handleConnection(client: Socket, ...args: any[]): any {
        this.logger.log(`Client connected: ${client.id}`);
    }

    handleDisconnect(client: Socket): any {
        this.logger.log(`Client disconnected: ${client.id}`);
    }
    
}