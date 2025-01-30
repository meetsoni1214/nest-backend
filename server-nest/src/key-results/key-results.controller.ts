import {Body, Controller, Delete, Get, Param, Patch, Post,} from '@nestjs/common';
import {KeyResultsService} from './key-results.service';
import {CreateKeyResultDto} from '../DTOs/CreateKeyResult-dto';
import {UpdateKeyResultDto} from '../DTOs/UpdateKeyResult-dto';
import {KeyResultsCompletionService} from './key-results-completion.service';

@Controller('key-results')
export class KeyResultsController {
    constructor(
        private keyResultService: KeyResultsService,
        private keyResultCompletionService: KeyResultsCompletionService,
    ) {
    }

    @Get('/:objective_id')
    getAll(@Param('objective_id') objective_id: string) {
        return this.keyResultService.getAll(Number(objective_id));
    }

    @Get('/getone/:id')
    getOne(@Param('id') id: string) {
        return this.keyResultService.getOne(Number(id));
    }

    @Post('/')
    createMany(@Body() keyResultDtos: CreateKeyResultDto[]) {
        return this.keyResultService.createMany(keyResultDtos);
    }

    @Delete('/:id')
    deleteOne(@Param('id') id: string) {
        return this.keyResultService.deleteOne({id: Number(id)});
    }

    @Delete('delete-all/:objective_id')
    deleteMany(@Param('objective_id') objective_id: string) {
        return this.keyResultService.deleteMany({
            objective_id: Number(objective_id),
        });
    }

    @Patch('/:id')
    update(@Param('id') id: string, @Body() keyResultDto: UpdateKeyResultDto) {
        return this.keyResultService.update({id: Number(id)}, keyResultDto);
    }

    @Get('/is-key-result-completed')
    isComplete(@Body() keyResultDto: CreateKeyResultDto) {
        return this.keyResultCompletionService.isComplete(keyResultDto);
    }
}
