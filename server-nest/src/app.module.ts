import { Module } from '@nestjs/common';
import { HelloworldModule } from './helloworld/helloworld.module';
import { ObjectivesModule } from './objectives/objectives.module';
import { DatabaseModule } from './database/database.module';
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [HelloworldModule, ObjectivesModule, DatabaseModule],
  providers: []
})
export class AppModule {}
