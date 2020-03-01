import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { ShortArt } from './models/shortArt.model';
import { article } from './models/article.model';
import { Labels } from './models/label.model';
import { Types } from './models/type.model';

const models = TypegooseModule.forFeature([
  ShortArt,
  article,
  Labels,
  Types,
])

@Global()
@Module({
  imports: [
      // TypegooseModule.forRoot('mongodb://39.106.35.34:27017/blog?authSource=admin', {
        TypegooseModule.forRoot('mongodb://localhost/blog', {
        // user: 'admin',
        // pass: 'admin',
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
      }),
    models,
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
