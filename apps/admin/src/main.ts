import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const options = new DocumentBuilder()
    .setTitle('生平区间api')
    .setDescription('www.shengpingqj.com')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
  
  await app.listen(3000);
  console.log('http://localhost:3000/api-docs');
}
bootstrap();
