import { Module, MiddlewareConsumer } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as morgan from 'morgan';
import { EasyconfigModule } from 'nestjs-easyconfig';
import { User } from './user/user.entity';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    EasyconfigModule.register({}),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_DATABASE_NAME,
      useUnifiedTopology: true,
      entities: [User],
    }),

    UserModule,
  ],
})

export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(morgan('combined'))
      .forRoutes('*');
  }
}
