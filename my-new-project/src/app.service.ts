import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello! ENSE701 Nest learn app set up';
  }
}
