import { Controller, Get, Query } from '@nestjs/common';
import { ValidateService } from './validate.service';

@Controller('validate')
export class ValidateController {
  constructor(private readonly validateService: ValidateService) {}


  @Get('/version')
  async addItem(@Query() {val}: {val: string}) {
    return {
      result: this.validateService.validateVersion(val)
    };
  }
}
