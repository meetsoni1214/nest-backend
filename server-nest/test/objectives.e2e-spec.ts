import {Test} from "@nestjs/testing";
import {AppModule} from "../src/app.module";
import {INestApplication} from "@nestjs/common";
import * as request from 'supertest';
import {PrismaService} from "../src/prisma/prisma.service";
import {anyNumber} from "jest-mock-extended";

describe('Objectives(Integration Testing)', () => {
    let app: INestApplication;
    let prismaService: PrismaService;
    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [AppModule]
        }).compile();
        app = module.createNestApplication();
        prismaService = module.get<PrismaService>(PrismaService);
        await app.init()
    })
    afterAll(async () => {
        await app.close();
    })
    describe('GET /objectives', () => {
        beforeEach(async () => {
            await prismaService.keyResult.deleteMany();
            await prismaService.objective.deleteMany();
        })
        it('should return 200 status code', async () => {
            await request(app.getHttpServer()).get("/objectives/").expect(200);
        });
        it('should return all objectives', async () => {
            const objective =
                {
                    title: "objective title"
                };
            await prismaService.objective.create({
                data: objective
            });
            const response = await request(app.getHttpServer()).get("/objectives/");
            expect(response.body).toEqual([{...objective, id: anyNumber(), key_results: []}]);
        });
    });
});