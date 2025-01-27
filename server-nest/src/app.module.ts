import { Module } from '@nestjs/common';
import { HelloworldModule } from './helloworld/helloworld.module';

@Module({
  imports: [HelloworldModule]
})
export class AppModule {}
