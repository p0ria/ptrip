import {NgModule} from "@angular/core";
import {COMPONENTS} from "./components";
import {MasterRoutingModule} from "./master-routing.module";
import {CommonModule} from "@angular/common";

@NgModule({
  imports: [
    MasterRoutingModule,
    CommonModule
  ],
  declarations: [...COMPONENTS]
})
export class MasterModule {

}
