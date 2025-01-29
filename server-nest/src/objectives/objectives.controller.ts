import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { ObjectivesService } from './objectives.service';
import { ObjectiveDto } from '../DTOs/Objective-dto';

@Controller('objectives')
export class ObjectivesController {
  constructor(private objectivesService: ObjectivesService) {}

  @Get('/')
  getAll() {
    return this.objectivesService.getAll();
  }

  @Post('/')
  insertOne(@Body() dto: ObjectiveDto) {
    return this.objectivesService.insertOne(dto);
  }

  @Delete('/:id')
  deleteOne(@Param('id') id: string) {
    return this.objectivesService.deleteOne({ id: Number(id) });
  }

  @Put('/:id')
  updateTitle(@Param('id') id: string, @Body() dto: ObjectiveDto) {
    return this.objectivesService.updateTitle({ id: Number(id) }, dto);
  }

  @Get('test/')
  tempApiForTestingQueryParams(@Query('meet') meet: string) {
    return `hello ${meet}! `;
  }
}
