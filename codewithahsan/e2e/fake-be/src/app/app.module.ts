import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BucketModule } from './bucket/bucket.module';
import { VersionModule } from './version/version.module';

@Module({
  imports: [BucketModule, VersionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
