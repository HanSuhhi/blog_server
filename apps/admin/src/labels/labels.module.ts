import { Module } from '@nestjs/common';
import { LabelsController } from './labels.controller';
import { DbModule } from '@libs/db';

@Module({
  imports: [
    DbModule
  ],
  controllers: [LabelsController]
})
export class LabelsModule {}
