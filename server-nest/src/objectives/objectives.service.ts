import {Injectable} from '@nestjs/common';
import {ObjectiveDto} from '../DTOs/Objective-dto';
import {PrismaService} from '../prisma/prisma.service';
import {Prisma} from '@prisma/client';

@Injectable()
export class ObjectivesService {
    constructor(private readonly prismaService: PrismaService) {
    }

    getAll() {
        return this.prismaService.objective.findMany({
            include: {
                key_results: true,
            },
        });
    }

    insertOne(dto: ObjectiveDto) {
        return this.prismaService.objective.create({data: dto});
    }

    deleteOne(id: Prisma.ObjectiveWhereUniqueInput) {
        return this.prismaService.objective.delete({
            where: id,
        });
    }

    updateTitle(id: Prisma.ObjectiveWhereUniqueInput, dto: ObjectiveDto) {
        return this.prismaService.objective.update({
            data: dto,
            where: id,
        });
    }
}
