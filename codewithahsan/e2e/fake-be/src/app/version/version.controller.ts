import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { VersionService } from './version.service';

@Controller('version')
export class VersionController {
  constructor(private readonly versionService: VersionService) {}
  
  @Get('/validate')
  async validate(@Query() {val}: {val: string}) {
    return this.versionService.validateVersion(val);
  }

  @Post('/')
  async addVersion(@Body() {version}: {version: string}) {
    this.versionService.updateVersion(version);
    return {
      success: true 
    };
  }
  
  @Get('/reset')
  async resetVersion() {
    this.versionService.resetVersion();
    return {
      success: true 
    };
  }
}
