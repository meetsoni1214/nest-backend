import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { PrismaService } from '../src/prisma/prisma.service';

describe('KeyResults (Integration Testing)', () => {
  let app: INestApplication;
  let prismaService: PrismaService;
  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = module.createNestApplication();
    prismaService = module.get<PrismaService>(PrismaService);
    await app.init();
  });
  afterAll(async () => {
    await app.close();
  });
  // beforeEach(async () => {
  //     await prismaService.keyResult.deleteMany();
  //     await prismaService.objective.deleteMany();
  // })
  describe('GET /:keyresultId/progress', () => {
    it('should return 200 status code', async () => {
      //given
      const createdObjective = await prismaService.objective.create({
        data: {
          title: 'New Objective',
        },
      });
      const createdKeyresult = await prismaService.keyResult.create({
        data: {
          title: 'New Keyresult',
          initial_value: 0,
          current_value: 1,
          target_value: 3,
          metric: 'No of Keyresults',
          objective_id: createdObjective.id,
        },
      });
      const keyResultId = createdKeyresult.id;
      //when
      //then
      await request(app.getHttpServer())
        .get(`/key-results/${keyResultId}/progress/`)
        .expect(200);
    });

    it('should return percentage of progress done', async () => {
      // given
      const createdObjective = await prismaService.objective.create({
        data: {
          title: 'New Objective',
        },
      });
      const createdKeyresult = await prismaService.keyResult.create({
        data: {
          title: 'New Keyresult',
          initial_value: 0,
          current_value: 1,
          target_value: 3,
          metric: 'No of Keyresults',
          objective_id: createdObjective.id,
        },
      });
      const keyResultId = createdKeyresult.id;
      // when
      const result = await request(app.getHttpServer())
        .get(`/key-results/${keyResultId}/progress/`)
        .expect(200);
      // then
      expect(result.body).toEqual({ percentage: 33.33 });
    });
  });
});
