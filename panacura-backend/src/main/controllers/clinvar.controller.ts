import { Controller, Get, Param, Query } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { QueryClinvarDto } from '../dtos';
import { ClinvarService } from '../services';

@ApiBearerAuth()
@ApiTags('clinvar')
@Controller('clinvar')
export class ClinvarController {
  constructor(private clinvarService: ClinvarService) {}

  @Get('/postgres')
  findAllOnPostgres(@Query() query: QueryClinvarDto) {
    return this.clinvarService.findAllOnPostgres(query);
  }

  @Get('/postgres/:id')
  findOnPostgres(@Param('id') id: string) {
    return this.clinvarService.findOnPostgres(id);
  }

  @Get('/mongo')
  findAllOnMongo(@Query() query: QueryClinvarDto) {
    return this.clinvarService.findAllOnMongo(query);
  }

  @Get('/mongo/:id')
  findOnMongo(@Param('id') id: string) {
    return this.clinvarService.findOnMongo(id);
  }
}
