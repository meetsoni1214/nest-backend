import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateKeyResultDto } from '../DTOs/CreateKeyResult-dto';
import { UpdateKeyResultDto } from '../DTOs/UpdateKeyResult-dto';

@Injectable()
export class KeyResultsService {
  constructor(private prismaService: PrismaService) {}

  getAll(objective_id: number) {
    return this.prismaService.keyResult.findMany({ where: { objective_id } });
  }

  createMany(keyResultDtos: CreateKeyResultDto[]) {
    return this.prismaService.keyResult.createMany({ data: keyResultDtos });
  }

  deleteOne(id: number) {
    return this.prismaService.keyResult.delete({
      where: {
        id,
      },
    });
  }

  deleteMany(objective_id: number) {
    return this.prismaService.keyResult.deleteMany({ where: { objective_id } });
  }

  update(id: number, keyResultDto: UpdateKeyResultDto) {
    return this.prismaService.keyResult.update({
      where: { id },
      data: keyResultDto,
    });
  }

  getOne(id: number) {
    return this.prismaService.keyResult.findUnique({
      where: { id: id },
    });
  }

  async progress(id: number) {
    const keyResult = await this.getOne(id);
    if (keyResult == null) {
      throw new Error('KeyResult Not Found');
    }
    const percentage = (keyResult.current_value * 100) / keyResult.target_value;
    const roundedPercentage = +percentage.toFixed(2);
    return { percentage: roundedPercentage };
  }
}
