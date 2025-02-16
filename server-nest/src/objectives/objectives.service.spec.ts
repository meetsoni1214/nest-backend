import { Test, TestingModule } from '@nestjs/testing';
import { ObjectivesService } from './objectives.service';
import { PrismaService } from '../prisma/prisma.service';

describe('ObjectivesService', () => {
  let service: ObjectivesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ObjectivesService, PrismaService],
    }).compile();

    service = module.get<ObjectivesService>(ObjectivesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
