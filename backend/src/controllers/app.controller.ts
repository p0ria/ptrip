import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {AuthService} from "../services/auth.service";

@Controller()
export class AppController {

  constructor(private readonly authService: AuthService){}
  
  @Post('token')
  @UseGuards(AuthGuard('local'))
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}