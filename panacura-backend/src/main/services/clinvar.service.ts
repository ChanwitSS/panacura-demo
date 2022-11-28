import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { InjectRepository } from '@nestjs/typeorm';
import { Model } from 'mongoose';
import { Repository } from 'typeorm';
import { QueryClinvarDto } from '../dtos';
import { Clinvar, ClinvarMongo, ClinvarPostgres } from '../entities';

@Injectable()
export class ClinvarService {
  constructor(
    @InjectRepository(ClinvarPostgres, 'postgres-db')
    private clinvarPostgresRepository: Repository<ClinvarPostgres>,
    @InjectModel(ClinvarMongo.name)
    private clinvarModel: Model<ClinvarMongo>,
  ) {}

  async findAllOnPostgres(query: QueryClinvarDto) {
    const { pos, alt, filter, info, qual, ref } = query;
    const { page = 1, take = 10, search } = query;
    const skip = (page - 1) * take;
    const qb = this.clinvarPostgresRepository.createQueryBuilder('clinvar');
    pos && qb.andWhere('clinvar.pos like :pos', { pos: `%${pos}%` });
    alt && qb.andWhere('clinvar.alt like :alt', { alt: `%${alt}%` });
    filter &&
      qb.andWhere('clinvar.filter like :filter', { filter: `%${filter}%` });
    qual && qb.andWhere('clinvar.qual like :qual', { qual: `%${qual}%` });
    ref && qb.andWhere('clinvar.ref like :ref', { ref: `%${ref}%` });
    // info && qb.where({ info });
    return qb.skip(skip).take(take).getMany();
  }

  async findOnPostgres(id: string) {
    const qb = this.clinvarPostgresRepository
      .createQueryBuilder()
      .where({ id });
    return qb.getOne();
  }

  async findAllOnMongo(query: QueryClinvarDto) {
    const { pos, alt, filter, info, qual, ref } = query;
    const { page = 1, take = 10, search } = query;
    const skip = (page - 1) * take;
    const result = await this.clinvarModel
      .find({
        ...(pos ? { pos } : {}),
        ...(alt ? { alt } : {}),
        ...(filter ? { filter } : {}),
        ...(qual ? { qual } : {}),
        ...(ref ? { ref } : {}),
        ...(info ? { info } : {}),
      })
      .skip(skip)
      .limit(take)
      .exec();
    console.log(result)
    return result;
  }

  async findOnMongo(id: string) {
    return this.clinvarModel.findOne({ _id: id }).exec();
  }
}
