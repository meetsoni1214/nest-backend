import {Injectable} from '@nestjs/common';

@Injectable()
export class HelloworldService {
    show() {
        return JSON.stringify({'h': 'hello world this is meet'});
    }
}
