import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClinvarController } from './controllers';
import { Clinvar, ClinvarMongo, ClinvarPostgres } from './entities';
import { ClinvarService } from './services';

@Module({
  imports: [
    TypeOrmModule.forFeature([ClinvarPostgres], 'postgres-db'),
    TypeOrmModule.forFeature([ClinvarMongo], 'mongo-db'),
  ],
  controllers: [ClinvarController],
  providers: [ClinvarService],
})
export class MainModule {}
