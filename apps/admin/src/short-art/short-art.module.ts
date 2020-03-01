import { Module } from '@nestjs/common';
import { ShortArtController } from './short-art.controller';
import { DbModule } from '@libs/db';

@Module({
  imports: [
    DbModule
  ],
  controllers: [ShortArtController]
})
export class ShortArtModule {}
