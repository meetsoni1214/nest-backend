import {Injectable} from '@nestjs/common';
import {DatabaseService} from "../database/database.service";
import {CreateObjectiveDto} from "../DTOs/CreateObjective-dto";

@Injectable()
export class ObjectivesService {
    constructor(private readonly databaseService: DatabaseService) {
    }

     async getAll() {
         const response = await this.databaseService.query("SELECT * FROM objectives", []);
         return response.rows;
    }

    async insertOne(dto:CreateObjectiveDto){
        const response = await this.databaseService.query("INSERT INTO objectives (title) values ($1) returning *", [dto.title]);
        return response.rows[0];
    }

}
