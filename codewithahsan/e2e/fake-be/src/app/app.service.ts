import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import BUCKET from './bucket/data/bucket';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to fake-be!' };
  }

  badRequest() {
    throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
  }

  getBucket() {
    return {
      bucket: BUCKET,
    };
  }
}
