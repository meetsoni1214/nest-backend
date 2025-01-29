import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';
import { CreateKeyResultDto } from '../DTOs/CreateKeyResult-dto';
import { UpdateKeyResultDto } from '../DTOs/UpdateKeyResult-dto';

@Injectable()
export class KeyResultsService {
  constructor(private prismaService: PrismaService) {}

  getAll(objective_id: Prisma.KeyResultWhereInput) {
    return this.prismaService.keyResult.findMany({ where: objective_id });
  }

  createMany(keyResultDtos: CreateKeyResultDto[]) {
    return this.prismaService.keyResult.createMany({ data: keyResultDtos });
  }

  deleteOne(id: Prisma.KeyResultWhereUniqueInput) {
    return this.prismaService.keyResult.delete({
      where: id,
    });
  }

  deleteMany(objective_id: Prisma.KeyResultWhereInput) {
    return this.prismaService.keyResult.deleteMany({ where: objective_id });
  }

  update(
    id: Prisma.KeyResultWhereUniqueInput,
    keyResultDto: UpdateKeyResultDto,
  ) {
    return this.prismaService.keyResult.update({
      where: id,
      data: keyResultDto,
    });
  }
}
