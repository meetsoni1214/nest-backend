import { Controller, Get } from '@nestjs/common';
import { HelloworldService } from './helloworld.service';

@Controller('helloworld')
export class HelloworldController {
  constructor(private helloworldService: HelloworldService) {}
  @Get()
  show() {
    return this.helloworldService.show();
  }
}
