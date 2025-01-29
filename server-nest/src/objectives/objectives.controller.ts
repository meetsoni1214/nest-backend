import {Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import {ObjectivesService} from "./objectives.service";
import {CreateObjectiveDto} from "../DTOs/CreateObjective-dto";

@Controller('objectives')
export class ObjectivesController {
    constructor(private objectivesService: ObjectivesService) {
    }

    @Get("/")
    getAll() {
        return this.objectivesService.getAll();
    }

    @Post('/')
    insertOne(@Body() dto: CreateObjectiveDto) {
        return this.objectivesService.insertOne(dto);
    }

    @Delete("/:id")
    deleteOne(@Param('id') id: string) {
        return this.objectivesService.deleteOne({id: Number(id)});
    }

    @Put('/:id')
    updateTitle(@Param("id") id: string, @Body() dto: CreateObjectiveDto) {
        return this.objectivesService.updateTitle({id: Number(id)}, dto);
    }

}
