import { ApiProperty } from '@nestjs/swagger';

export class QueryClinvarDto {
  @ApiProperty({ required: false })
  pos: string;
  @ApiProperty({ required: false })
  ref: string;
  @ApiProperty({ required: false })
  alt: string;
  @ApiProperty({ required: false })
  qual: string;
  @ApiProperty({ required: false })
  filter: string;
  @ApiProperty({ required: false })
  info: string;


  @ApiProperty({ required: false })
  page: number;
  @ApiProperty({ required: false })
  take: number;
  // @ApiProperty({ required: false })
  // sortField: string;
  // @ApiProperty({ enum: SortDirection, required: false })
  // sortDirection: SortDirection;
  @ApiProperty({ required: false })
  search: string;
}
