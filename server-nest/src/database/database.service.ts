import {Injectable} from '@nestjs/common';
import { Pool } from 'pg';

@Injectable()
export class DatabaseService {
    private pool: Pool;

    constructor() {
        this.pool = new Pool({
            user: 'postgres',
            host: 'localhost',
            database: 'okr',
            password: 'password=1214',
            port: 5432
        });
    }

    async query(query: string, params: any) {
        return await this.pool.query(query, params);
    }
}
