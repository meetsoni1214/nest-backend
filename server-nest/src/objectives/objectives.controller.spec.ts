import { Test, TestingModule } from '@nestjs/testing';
import { ObjectivesController } from './objectives.controller';
import { ObjectivesService } from './objectives.service';
import { PrismaService } from '../prisma/prisma.service';

describe('ObjectivesController', () => {
  let controller: ObjectivesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ObjectivesController],
      providers: [ObjectivesService, PrismaService],
    }).compile();

    controller = module.get<ObjectivesController>(ObjectivesController);
  });

  describe('objective controller should be defined', () => {
    it('should be defined', () => {
      expect(controller).toBeDefined();
    });
  });
});
