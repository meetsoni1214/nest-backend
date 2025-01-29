import {Injectable} from '@nestjs/common';
import {CreateObjectiveDto} from "../DTOs/CreateObjective-dto";
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class ObjectivesService {
    constructor(private readonly prismaService: PrismaService) {
    }

     async getAll() {
         return this.prismaService.objective.findMany();
    }

    async insertOne(dto:CreateObjectiveDto){
        return await this.prismaService.objective.create({data: dto});
    }



}
