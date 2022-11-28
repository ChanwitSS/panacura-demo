import { ApiProperty } from '@nestjs/swagger';

export class ClinvarDto {
  @ApiProperty()
  id: string;
  @ApiProperty()
  pos: string;
  @ApiProperty()
  ref: string;
  @ApiProperty()
  alt: string;
  @ApiProperty()
  qual: string;
  @ApiProperty()
  filter: string;
  @ApiProperty()
  info: string;
}
