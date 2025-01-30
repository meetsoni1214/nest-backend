import {KeyResultsService} from "./key-results.service";
import {Test, TestingModule} from "@nestjs/testing";
import {PrismaService} from "../prisma/prisma.service";

describe('KeyResultService', () => {
    describe('fetchKeyResult()', () => {
        it('should return key result with the given id', async () => {
            let service: KeyResultsService
            let prismaService: PrismaService

            const module: TestingModule = await Test.createTestingModule({
                providers: [KeyResultsService, PrismaService]
            }).compile();


            service = module.get<KeyResultsService>(KeyResultsService);
            prismaService = module.get<PrismaService>(PrismaService);
            await prismaService.keyResult.deleteMany()
            await prismaService.objective.deleteMany()
            const objectiveResponse = await prismaService.objective.create({
                data: {
                    title: "dummy obj 1",
                }
            })
            const keyResultResponse = await prismaService.keyResult.create({
                data: {
                    title: "dummy kr",
                    initial_value: 100,
                    current_value: 100,
                    target_value: 101,
                    metric: "dummy %",
                    objective_id: objectiveResponse.id
                }
            })
            const response = await service.getOne(keyResultResponse.id);
            expect(response).toEqual({...keyResultResponse, id: expect.any(Number)})

        });

    });
});