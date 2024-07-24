import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('bye')
  getBye(): string {
    return this.appService.getBye();
  }
  @Get('greet/:name')
  greet(@Param('name') name: string): string {
    return this.appService.greet(name);
  }
  @Post('greet')
  greetPost(@Body() data: { name: string }): string {
    return this.appService.greet(data.name);
  }
}