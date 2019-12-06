import {SocketIoConfig, SocketIoModule} from "ngx-socket-io";
import {environment} from "../environments/environment";
import {NgModule} from "@angular/core";

const config: SocketIoConfig = {
  url: environment.socketUrl, options: {transports: ['websocket']}
};

@NgModule({
  imports: [
    SocketIoModule.forRoot(config)
  ],
  exports: [
    SocketIoModule
  ]
})
export class SocketModule {

}
