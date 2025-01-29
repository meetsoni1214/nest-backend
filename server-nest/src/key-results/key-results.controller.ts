import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {KeyResultsService} from "./key-results.service";
import {CreateKeyResultDto} from "../DTOs/CreateKeyResult-dto";

@Controller('key-results')
export class KeyResultsController {
    constructor(private keyResultService: KeyResultsService) {
    }

    @Get("/:id")
    getAll(@Param('id') id: string) {
        return this.keyResultService.getAll({objective_id: Number(id)});
    }

    @Post("/")
    createMany(@Body() keyResultDtos: CreateKeyResultDto[]) {
        return this.keyResultService.createMany(keyResultDtos);
    }
}
