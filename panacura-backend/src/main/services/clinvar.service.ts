import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from 'mongoose';
import { Repository } from 'typeorm';
import { Clinvar, ClinvarMongo, ClinvarPostgres } from '../entities';

@Injectable()
export class ClinvarService {
  constructor(
    @InjectRepository(ClinvarPostgres, 'postgres-db')
    private clinvarPostgresRepository: Repository<ClinvarPostgres>,
    @InjectModel(ClinvarMongo.name)
    private clinvarModel: Model<ClinvarMongo>,
  ) {}

  async findAllOnPostgres() {
    const qb = this.clinvarPostgresRepository.createQueryBuilder();
    return qb.getMany();
  }

  async findOnPostgres(id: string) {
    const qb = this.clinvarPostgresRepository
      .createQueryBuilder()
      .where({ id });
    return qb.getOne();
  }

  async findAllOnMongo() {
    return await this.clinvarModel.find();
  }

  async findOnMongo(id: string) {
    return this.clinvarModel.findOne();
  }
}
