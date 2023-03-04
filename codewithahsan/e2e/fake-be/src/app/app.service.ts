import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Welcome to fake-be!' };
  }

  badRequest() {
    throw new HttpException('Bad Request', HttpStatus.BAD_REQUEST);
  }
}
