import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { IFruit } from '../interfaces';
import { BucketService } from './bucket.service';

@Controller('bucket')
export class BucketController {
  constructor(private readonly bucketService: BucketService) {}

  @Get('/')
  getBucket() {
    return this.bucketService.getBucket();
  }

  @Post('/')
  async addItem(@Body() fruit: IFruit) {
    return this.bucketService.addItem(fruit);
  }

  @Delete('/:id')
  removeItem(@Param() params) {
    return this.bucketService.removeItem(Number(params.id));
  }
}
