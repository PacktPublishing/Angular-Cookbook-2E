import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BucketModule } from './bucket/bucket.module';
import { ValidateModule } from './validate/validate.module';

@Module({
  imports: [BucketModule, ValidateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
