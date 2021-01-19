import { Module } from '@nestjs/common';

import { AirfareController } from './price.controller';
import { AirFareService } from './price.service';

@Module({
    imports: [],
    controllers: [AirfareController],
    providers: [AirFareService]
})

export class AirfareModule{}