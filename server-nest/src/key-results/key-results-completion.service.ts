import {Injectable} from '@nestjs/common';
import {CreateKeyResultDto} from '../DTOs/CreateKeyResult-dto';

@Injectable()
export class KeyResultsCompletionService {
    isComplete(keyResultDto: CreateKeyResultDto) {
        return keyResultDto.current_value >= keyResultDto.target_value;
    }
}
