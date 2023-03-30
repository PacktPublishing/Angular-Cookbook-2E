import { Injectable } from '@nestjs/common';

@Injectable()
export class ValidateService {
  validateVersion(version: string) {
    return /([0-9]+).([0-9]+).([0-9]+)/.test(version);
  }
}
