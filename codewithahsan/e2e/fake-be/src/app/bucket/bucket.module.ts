import { Module } from '@nestjs/common';
import { BucketController } from './bucket.controller';
import { BucketService } from './bucket.service';

@Module({
  controllers: [BucketController],
  providers: [BucketService],
})
export class BucketModule {}
