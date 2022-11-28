import { Entity, ObjectIdColumn } from 'typeorm';
import { Clinvar } from './clinvar.entity';

@Entity('clinvars')
export class ClinvarMongo extends Clinvar {
  @ObjectIdColumn()
  clinvarId: string;
}
