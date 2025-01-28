import { Module } from '@nestjs/common';
import { HelloworldModule } from './helloworld/helloworld.module';
import { ObjectivesModule } from './objectives/objectives.module';

@Module({
  imports: [HelloworldModule, ObjectivesModule]
})
export class AppModule {}
