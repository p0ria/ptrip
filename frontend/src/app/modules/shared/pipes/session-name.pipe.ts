import { Pipe, PipeTransform } from '@angular/core';
import {Session} from "../../../models/enums/session.enum";

@Pipe({
  name: 'sessionName'
})
export class SessionNamePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let session = value as Session;
    switch (session) {
      case Session.Spring: return "بهار";
      case Session.Summer: return "تابستان";
      case Session.Autumn: return "پاییز";
      case Session.Winter: return "زمستان";
    }
  }

}
