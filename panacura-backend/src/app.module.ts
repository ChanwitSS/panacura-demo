import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import postgresDbConfig from './config/postgres-db.config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import mongoDbConfig from './config/mongo-db.config';
import { MainModule } from './main/main.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [postgresDbConfig, mongoDbConfig],
      isGlobal: true,
      envFilePath: ['.env.local', '.env'],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      name: 'postgres-db',
      useFactory: (configService: ConfigService) =>
        configService.get<TypeOrmModuleOptions>('postgres-db'),
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      name: 'mongo-db',
      useFactory: (configService: ConfigService) =>
        configService.get<TypeOrmModuleOptions>('mongo-db'),
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        uri: configService.get<string>('DB_MONGO_URL'),
        useNewUrlParser: true,
      }),
      inject: [ConfigService],
    }),
    MainModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
