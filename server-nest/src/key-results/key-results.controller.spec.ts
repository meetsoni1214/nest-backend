import {Test, TestingModule} from '@nestjs/testing';
import {KeyResultsController} from './key-results.controller';
import {KeyResultsService} from "./key-results.service";
import {mockDeep} from "jest-mock-extended";
import {KeyResultsCompletionService} from "./key-results-completion.service";

describe('KeyResultsController', () => {
    let controller: KeyResultsController;
    const service = mockDeep<KeyResultsService>();
    const completionService = mockDeep<KeyResultsCompletionService>();
    const keyResults = [
        {
            id: 5,
            title: 'dummy kr',
            initial_value: 100,
            current_value: 100,
            target_value: 101,
            metric: 'dummy %',
            objective_id: 1,
        },
    ];
    const keyResultsDto = [{
        title: 'dummy kr',
        initial_value: 100,
        current_value: 100,
        target_value: 101,
        metric: 'dummy %',
        objective_id: 1,
    }];
    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [KeyResultsController],
            providers: [{
                provide: KeyResultsCompletionService,
                useValue: completionService
            }, {
                provide: KeyResultsService,
                useValue: service
            }]
        }).compile();

        controller = module.get<KeyResultsController>(KeyResultsController);
    });

    describe('getAll()', () => {

        it('should call getAll() method of keyResultService', async () => {
            await controller.getAll("1");
            expect(service.getAll).toHaveBeenCalledWith(1);
        });
        it('should return all keyResults with given objective_id', async () => {
            service.getAll.mockResolvedValue(keyResults);
            const response = await controller.getAll("1");
            expect(response).toEqual(keyResults);
        });
    });
    describe('getOne()', () => {
        const keyResult = keyResults[0];
        it('should call getOne() method of keyResultService', async () => {
            await controller.getOne("1");
            expect(service.getOne).toHaveBeenCalledWith(1);
        });
        it('should return keyResult with given id', async () => {
            service.getOne.mockResolvedValue(keyResult);
            const response = await controller.getOne("1");
            expect(response).toEqual(keyResult);
        });
    });
    describe('createMany()', () => {
        it('should call createMany() method of keyResultService', async () => {
            await controller.createMany(keyResultsDto);
            expect(service.createMany).toHaveBeenCalledWith(keyResultsDto);
        });
        it('should return added keyResults count', async () => {
            service.createMany.mockResolvedValue({count: keyResultsDto.length});
            const response = await controller.createMany(keyResultsDto);
            expect(response).toEqual({count: keyResultsDto.length});
        });
    });
    describe('deleteOne()', () => {
        const keyResult = keyResults[0];
        it('should call deleteOne() method of keyResultService', async () => {
            await controller.deleteOne("5");
            expect(service.deleteOne).toHaveBeenCalledWith(5);
        });
        it('should return deleted keyResult', async () => {
            service.deleteOne.mockResolvedValue(keyResult);
            const response = await controller.deleteOne("5");
            expect(response).toEqual(keyResult);
        });
    });
    describe('deleteAll()', () => {
        it('should call deleteMany() method of keyResultService', async () => {
            await controller.deleteMany("1");
            expect(service.deleteMany).toHaveBeenCalledWith(1);
        });
        it('should return deleted keyResults count', async () => {
            service.deleteMany.mockResolvedValue({count: keyResults.length});
            const response = await controller.deleteMany("1");
            expect(response).toEqual({count: keyResults.length});
        });
    });
    describe('update()', () => {
        const keyResultDto = keyResultsDto[0];
        it('should call update() method of keyResultService', async () => {
            await controller.update("1", keyResultDto);
            expect(service.update).toHaveBeenCalledWith(1, keyResultDto);
        });
        it('should return updated keyResult', async () => {
            service.update.mockResolvedValue({...keyResultDto, id: 1});
            const response = await controller.update("1", keyResultDto);
            expect(response).toEqual({...keyResultDto, id: 1});
        });
    });
    describe('isComplete()', () => {
        const keyResultDto = keyResultsDto[0];
        it('should call isComplete() method of keyResultService', () => {
            controller.isComplete(keyResultDto);
            expect(completionService.isComplete).toHaveBeenCalledWith(keyResultDto);
        });
        it('should return true when keyResult is completed', () => {
            completionService.isComplete.mockReturnValue(true);
            const response = controller.isComplete(keyResultDto);
            expect(response).toBeTruthy();
        });
        it('should return false when keyResult is not completed', () => {
            completionService.isComplete.mockReturnValue(false);
            const response = controller.isComplete(keyResultDto);
            expect(response).toBeFalsy();
        });
    });
});
