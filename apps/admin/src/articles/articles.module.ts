import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { DbModule } from '@libs/db';

@Module({
  imports: [
    DbModule
  ],
  controllers: [ArticlesController]
})
export class ArticlesModule {}
