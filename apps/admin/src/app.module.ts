import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from '@libs/db';
import { ShortArtModule } from './short-art/short-art.module';
import { ArticlesModule } from './articles/articles.module';
import { LabelsModule } from './labels/labels.module';
import { TypesModule } from './types/types.module';

@Module({
  imports: [
    DbModule,
    ShortArtModule,
    ArticlesModule,
    LabelsModule,
    TypesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
