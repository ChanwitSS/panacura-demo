import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clinvar, ClinvarMongo, ClinvarPostgres } from '../entities';

@Injectable()
export class ClinvarService {
  constructor(
    @InjectRepository(ClinvarPostgres, 'postgres-db')
    private clinvarPostgresRepository: Repository<ClinvarPostgres>,
    @InjectRepository(ClinvarMongo, 'mongo-db')
    private clinvarMongoRepository: Repository<ClinvarMongo>,
  ) {}

  async findAllOnPostgres() {
    const qb = this.clinvarPostgresRepository.createQueryBuilder();
    return qb.getMany();
  }

  async findAllOnMongo() {
    const qb = this.clinvarMongoRepository.createQueryBuilder();
    return qb.getMany();
  }

  async findOnPostgres(id: string) {
    const qb = this.clinvarPostgresRepository
      .createQueryBuilder()
      .where({ id });
    return qb.getOne();
  }

  async findOnMongo(id: string) {
    const qb = this.clinvarMongoRepository.createQueryBuilder().where({ id });
    return qb.getOne();
  }
}
