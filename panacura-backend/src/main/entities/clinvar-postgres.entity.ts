import { Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Clinvar } from './clinvar.entity';

@Entity('clinvars')
export class ClinvarPostgres extends Clinvar {
  @PrimaryColumn()
  id: string;
}
