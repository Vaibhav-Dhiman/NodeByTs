import { Injectable } from '@nestjs/common';

@Injectable()
export class AirFareService {
    async findFlights() {
       return 'airfare service called'
    }
}