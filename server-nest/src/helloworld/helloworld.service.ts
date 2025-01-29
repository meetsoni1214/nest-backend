import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloworldService {
  show() {
    return 'hello world';
  }
}
