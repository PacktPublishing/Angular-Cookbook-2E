import { Module } from '@nestjs/common';
import { VersionService } from './version.service';
import { VersionController } from './version.controller';

@Module({
  controllers: [VersionController],
  providers: [VersionService],
})
export class VersionModule {}
