import {Body, Controller, Get, Post} from '@nestjs/common';
import {ObjectivesService} from "./objectives.service";
import {response} from "express";
import {CreateObjectiveDto} from "../DTOs/CreateObjective-dto";

@Controller('objectives')
export class ObjectivesController {
    constructor(private objectivesService: ObjectivesService) {
    }
    @Get("/")
    getAll()  {
        return this.objectivesService.getAll();
    }

    @Post('/')
    insertOne(@Body() dto:CreateObjectiveDto){
        return this.objectivesService.insertOne(dto);
    }
}
