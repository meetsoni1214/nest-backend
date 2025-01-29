import { Test, TestingModule } from '@nestjs/testing';
import { HelloworldService } from './helloworld.service';

describe('HelloworldService', () => {
  let service: HelloworldService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HelloworldService],
    }).compile();

    service = module.get<HelloworldService>(HelloworldService);
  });

  describe('show()', () => {
    it('should return hello world', () => {
      const response = service.show();
      expect(response).toBe('hello world');
    });
  });
});
