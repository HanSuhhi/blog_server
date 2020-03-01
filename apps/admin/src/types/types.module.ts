import { Module } from '@nestjs/common';
import { TypesController } from './types.controller';
import { DbModule } from '@libs/db';

@Module({
  imports: [
    DbModule
  ],
  controllers: [TypesController]
})
export class TypesModule {}
