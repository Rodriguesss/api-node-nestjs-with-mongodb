import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import swaggerConfig from './config/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  swaggerConfig(app);

  await app.listen(3000);
}
bootstrap();
