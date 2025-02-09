import {INestApplication} from "@nestjs/common";
import {AppModule} from "../src/app.module";
import {Test} from "@nestjs/testing";
import * as request from 'supertest';

describe('hello-world(Integration)', () => {
    let app: INestApplication;
    beforeAll(async () => {
        const module = await Test.createTestingModule({
            imports: [AppModule]
        }).compile();
        app = module.createNestApplication();
        await app.init();
    })
    afterAll(async () => {
        await app.close();

    })
    it('@Get should return Hello World!', async () => {
        const response = await request(app.getHttpServer()).get('/helloworld');
        expect(JSON.parse(response.text).h).toBe("hello world");
    });
});