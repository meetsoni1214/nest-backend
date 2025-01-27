import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloworldService {

    show() {
        return "Hello World!"
    }
}
