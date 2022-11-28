import {
  Column,
} from 'typeorm';

export class Clinvar {
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
