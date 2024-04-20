import { Test, TestingModule } from '@nestjs/testing';
import { TodoMapperService } from './todo-mapper.service';

describe('TodoMapperServiceService', () => {
  let service: TodoMapperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodoMapperService],
    }).compile();

    service = module.get<TodoMapperService>(TodoMapperService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
