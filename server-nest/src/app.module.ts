import { Module } from '@nestjs/common';
import { HelloworldModule } from './helloworld/helloworld.module';
import { ObjectivesModule } from './objectives/objectives.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [HelloworldModule, ObjectivesModule, DatabaseModule]
})
export class AppModule {}
