import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('clinvars')
export class ClinvarPostgres {
  @PrimaryColumn()
  id: string;
  @Column({ name: 'pos' })
  pos: string;
  @Column({ name: 'ref' })
  ref: string;
  @Column({ name: 'alt' })
  alt: string;
  @Column({ name: 'qual' })
  qual: string;
  @Column({ name: 'filter' })
  filter: string;
  @Column({ name: 'info' })
  info: string;
}
