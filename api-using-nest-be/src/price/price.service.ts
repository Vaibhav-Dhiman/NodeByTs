import { Injectable } from '@nestjs/common';

@Injectable()
export class PriceService {
    async findFlights() {
       return 'prince service called'
    }
}