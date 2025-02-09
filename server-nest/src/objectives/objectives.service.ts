import {Injectable} from '@nestjs/common';
import {ObjectiveDto} from '../DTOs/Objective-dto';
import {PrismaService} from '../prisma/prisma.service';

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
        return this.prismaService.objective.create({
            data: dto,
            include: {
                key_results: true,
            }
        });
    }

    deleteOne(id: number) {
        return this.prismaService.objective.delete({
            where: {id},
        });
    }

    updateTitle(id: number, dto: ObjectiveDto) {
        return this.prismaService.objective.update({
            data: dto,
            where: {id},
        });
    }
}
