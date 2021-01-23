import { ValidationPipe } from '@nestjs/common/pipes';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const options = new DocumentBuilder()
  .setTitle('Product-Fare-Api')
  .setDescription('Product-Fare API')
  .setVersion('1.0.0')
  .setBasePath('api')
  .addBearerAuth({ in: 'header', type: 'http' })
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('product-fare-api', app, document);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
  
}
bootstrap();
