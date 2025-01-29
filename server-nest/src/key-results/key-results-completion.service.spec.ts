import {Test, TestingModule} from '@nestjs/testing';
import {KeyResultsCompletionService} from './key-results-completion.service';

describe('KeyResultCompletion', () => {
    let service: KeyResultsCompletionService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [KeyResultsCompletionService],
        }).compile();

        service = module.get<KeyResultsCompletionService>(
            KeyResultsCompletionService,
        );
    });
    const dummyKeyResult = {
        title: 'Dummy',
        metric: 'string',
        initial_value: 0,
        objective_id: 1,
    };
    describe('isComplete', () => {
        it('should return true if key result is completed', () => {
            const response = service.isComplete({
                ...dummyKeyResult,
                current_value: 12,
                target_value: 12,
            });
            expect(response).toBeTruthy();
        });

        it('should return false if key result is not completed', () => {
            const response = service.isComplete({
                ...dummyKeyResult,
                current_value: 12,
                target_value: 50,
            });
            expect(response).toBeFalsy();
        });

        it("should return true if current value is greater than target value", () => {
            const response = service.isComplete({
                ...dummyKeyResult,
                current_value: 51,
                target_value: 50
            });

            expect(response).toBeTruthy();
        })

    });
});
