import {KeyResultsService} from "./key-results.service";
import {Test, TestingModule} from "@nestjs/testing";
import {PrismaService} from "../prisma/prisma.service";
import {mockDeep} from "jest-mock-extended";

describe('KeyResultService', () => {
    let service: KeyResultsService
    const prismaService = mockDeep<PrismaService>()
    beforeEach(async () => {

        const module: TestingModule = await Test.createTestingModule({
            providers: [KeyResultsService, {
                provide: PrismaService,
                useValue: prismaService
            }]
        }).compile();

        service = module.get<KeyResultsService>(KeyResultsService);
    })
    describe('fetchKeyResult()', () => {
        it('should return key result with the given id', async () => {
            // Arrange
            const keyResult = {
                id: 4,
                title: "dummy kr",
                initial_value: 100,
                current_value: 100,
                target_value: 101,
                metric: "dummy %",
                objective_id: 1
            }
            prismaService.keyResult.findUnique.mockResolvedValue(keyResult)
            // Act
            const response = await service.getOne(keyResult.id);
            // Assert
            expect(response).toEqual(keyResult)
        });
    });
});