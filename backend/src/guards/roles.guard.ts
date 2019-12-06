import { CanActivate, ExecutionContext, Injectable, Type } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private readonly reflector: Reflector){}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>{
    return this.checkRoles(context);
  }

  private checkRoles(context: ExecutionContext){
    const classRoles = this.reflector.get<string[]>('roles', context.getClass());
    const methodRoles = this.reflector.get<string[]>('roles', context.getHandler());
    const roles = classRoles ? classRoles.concat(methodRoles) : methodRoles;
    if(!roles || roles.length == 0){
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const hasRole = () => roles.some(r => r === user.role);
    return user && user.role && hasRole();
  }

}