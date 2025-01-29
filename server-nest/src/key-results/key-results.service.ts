import {Injectable} from '@nestjs/common';
import {Prisma} from '@prisma/client';
import {PrismaService} from "../prisma/prisma.service";
import {CreateKeyResultDto} from "../DTOs/CreateKeyResult-dto";

@Injectable()
export class KeyResultsService {
    constructor(private prismaService: PrismaService) {
    }

    getAll(where: Prisma.KeyResultWhereInput) {
        return this.prismaService.keyResult.findMany({where});
    }

    createMany(keyResultDtos: CreateKeyResultDto[]) {
        return this.prismaService.keyResult.createMany({data: keyResultDtos})
    }
}
