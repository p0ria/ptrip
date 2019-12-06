import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import {TypeOrmModule} from "@nestjs/typeorm";
import {PassportModule} from "@nestjs/passport";
import {JwtModule} from "@nestjs/jwt";
import {jwtConstants} from "./auth/strategies/constants";
import {SERVICES} from "./services";
import {ENTITIES} from "./models/entities";
import {STRATEGIES} from "./auth/strategies";
import {CONTROLLERS} from "./controllers";
import {GUARDS} from "./guards";
import {SocketGateway} from "./socket/socket.gateway";

@Module({
  imports: [
      TypeOrmModule.forRoot(),
      TypeOrmModule.forFeature([...ENTITIES]),
      PassportModule,
      JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '10h' }
      })
  ],
  controllers: [AppController, ...CONTROLLERS],
  providers: [...SERVICES, ...STRATEGIES, ...GUARDS, SocketGateway]
})
export class AppModule {}
