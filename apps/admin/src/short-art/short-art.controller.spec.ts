import { Test, TestingModule } from '@nestjs/testing';
import { ShortArtController } from './short-art.controller';

describe('ShortArt Controller', () => {
  let controller: ShortArtController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShortArtController],
    }).compile();

    controller = module.get<ShortArtController>(ShortArtController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
