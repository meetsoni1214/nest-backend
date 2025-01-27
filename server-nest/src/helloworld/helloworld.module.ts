import { Module } from '@nestjs/common';
import { HelloworldController } from './helloworld.controller';
import { HelloworldService } from './helloworld.service';

@Module({
  controllers: [HelloworldController],
  providers: [HelloworldService]
})
export class HelloworldModule {}
