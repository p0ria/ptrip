import {NgModule} from "@angular/core";
import {COMPONENTS} from "./components";
import {PIPES} from "./pipes";
import {DIRECTIVES} from "./directives";
import {CommonModule} from "@angular/common";
import {SessionNamePipe} from "./pipes/session-name.pipe";
import {SessionDirective} from "./directives/session.directive";
import {BgiDirective} from "./directives/bgi.directive";
import {CarouselComponent} from "./components/carousel/carousel.component";
import {CommentsComponent} from "./components/comments/comments.component";
import { LoginComponent } from './components/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PIPES,
    ...DIRECTIVES
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    SessionNamePipe,
    SessionDirective,
    BgiDirective,
    CarouselComponent,
    CommentsComponent
  ],
  entryComponents: [LoginComponent]
})
export class SharedModule {}
