import { Module } from '@nestjs/common';
import { HelloworldModule } from './helloworld/helloworld.module';
import { ObjectivesModule } from './objectives/objectives.module';
import { DatabaseModule } from './database/database.module';
import { PrismaService } from './prisma/prisma.service';
import { KeyResultsModule } from './key-results/key-results.module';

@Module({
  imports: [HelloworldModule, ObjectivesModule, DatabaseModule, KeyResultsModule],
  providers: []
})
export class AppModule {}
