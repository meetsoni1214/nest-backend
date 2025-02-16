import { KeyResultsService } from './key-results.service';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaService } from '../prisma/prisma.service';
import { mockDeep } from 'jest-mock-extended';

describe('KeyResultService', () => {
  let service: KeyResultsService;
  const prismaService = mockDeep<PrismaService>();
  const keyResults = [
    {
      id: 5,
      title: 'dummy kr',
      initial_value: 100,
      current_value: 100,
      target_value: 101,
      metric: 'dummy %',
      objective_id: 1,
    },
  ];
  const keyResultsDto = [
    {
      title: 'dummy kr',
      initial_value: 100,
      current_value: 100,
      target_value: 101,
      metric: 'dummy %',
      objective_id: 1,
    },
  ];
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        KeyResultsService,
        {
          provide: PrismaService,
          useValue: prismaService,
        },
      ],
    }).compile();

    service = module.get<KeyResultsService>(KeyResultsService);
  });
  describe('fetchKeyResult()', () => {
    it('should call findUnique() method of PrismaService', async () => {
      await service.getOne(1);
      expect(prismaService.keyResult.findUnique).toHaveBeenCalledWith({
        where: { id: 1 },
      });
    });
    it('should return key result with the given id', async () => {
      // Arrange
      const keyResult = keyResults[0];
      prismaService.keyResult.findUnique.mockResolvedValue(keyResult);
      // Act
      const response = await service.getOne(keyResult.id);
      // Assert
      expect(response).toEqual(keyResult);
    });
  });
  describe('fetchKeyResults()', () => {
    it('should call findMany() method of PrismaService', async () => {
      await service.getAll(1);
      expect(prismaService.keyResult.findMany).toHaveBeenCalledWith({
        where: { objective_id: 1 },
      });
    });
    it('should return key results with the given objective_id', async () => {
      // Arrange
      prismaService.keyResult.findMany.mockResolvedValue(keyResults);
      // Act
      const response = await service.getAll(keyResults[0].objective_id);
      // Assert
      expect(response).toEqual(keyResults);
    });
  });
  describe('createMany()', () => {
    it('should call createMany() method of PrismaService', async () => {
      await service.createMany(keyResultsDto);
      expect(prismaService.keyResult.createMany).toHaveBeenCalledWith({
        data: keyResultsDto,
      });
    });
    it('should return added key results count', async () => {
      // Arrange
      const keyResult = keyResults[0];
      prismaService.keyResult.delete.mockResolvedValue(keyResult);
      // Act
      const response = await service.deleteOne(keyResult.id);
      // Assert
      expect(response).toEqual(keyResult);
    });
  });
  describe('deleteOne()', () => {
    it('should call delete() method of PrismaService', async () => {
      await service.deleteOne(2);
      expect(prismaService.keyResult.delete).toHaveBeenCalledWith({
        where: { id: 2 },
      });
    });
    it('should return deleted key result', async () => {
      // Arrange
      prismaService.keyResult.createMany.mockResolvedValue({
        count: keyResults.length,
      });
      // Act
      const response = await service.createMany(keyResults);
      // Assert
      expect(response).toEqual({ count: keyResults.length });
    });
  });
  describe('deleteMany()', () => {
    it('should call deleteMany() method of PrismaService', async () => {
      await service.deleteMany(1);
      expect(prismaService.keyResult.deleteMany).toHaveBeenCalledWith({
        where: { objective_id: 1 },
      });
    });
    it('should return deleted key results count', async () => {
      // Arrange
      prismaService.keyResult.deleteMany.mockResolvedValue({
        count: keyResults.length,
      });
      // Act
      const response = await service.deleteMany(keyResults[0].objective_id);
      // Assert
      expect(response).toEqual({ count: keyResults.length });
    });
  });
  describe('update()', () => {
    it('should call update() method of PrismaService', async () => {
      await service.update(1, keyResultsDto[0]);
      expect(prismaService.keyResult.update).toHaveBeenCalledWith({
        where: { id: 1 },
        data: keyResultsDto[0],
      });
    });
    it('should return updated key result', async () => {
      // Arrange
      const keyResultDto = {
        title: 'dummy kr1',
        initial_value: 100,
        current_value: 100,
        target_value: 101,
        metric: 'dummy %',
        objective_id: 1,
      };
      prismaService.keyResult.update.mockResolvedValue({
        ...keyResultDto,
        id: 4,
      });
      // Act
      const response = await service.update(4, keyResultDto);
      // Assert
      expect(response).toEqual({ ...keyResultDto, id: 4 });
    });
  });
});
