import { Controller, Get, Param } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ClinvarService } from '../services';

@ApiBearerAuth()
@ApiTags('clinvar')
@Controller('clinvar')
export class ClinvarController {
  constructor(private clinvarService: ClinvarService) {}

  @Get('/postgres')
  findAllOnPostgres() {
    return this.clinvarService.findAllOnPostgres();
  }

  @Get('/postgres/:id')
  findOnPostgres(@Param('id') id: string) {
    return this.clinvarService.findOnPostgres(id);
  }

  @Get('/mongo')
  findAllOnMongo() {
    return this.clinvarService.findAllOnMongo();
  }

  @Get('/mongo/:id')
  findOnMongo(@Param('id') id: string) {
    return this.clinvarService.findOnMongo(id);
  }
}
