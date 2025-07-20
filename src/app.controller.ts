import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';

@ApiTags('mennonite')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

}
