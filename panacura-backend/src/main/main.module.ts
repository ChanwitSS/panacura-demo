import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClinvarController } from './controllers';
import { ClinvarMongo, ClinvarMongoSchema, ClinvarPostgres } from './entities';
import { ClinvarService } from './services';

@Module({
  imports: [
    TypeOrmModule.forFeature([ClinvarPostgres], 'postgres-db'),
    MongooseModule.forFeature([
      { name: ClinvarMongo.name, schema: ClinvarMongoSchema },
    ]),
  ],
  controllers: [ClinvarController],
  providers: [ClinvarService],
})
export class MainModule {}
