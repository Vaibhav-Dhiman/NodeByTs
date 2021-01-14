import { Module } from '@nestjs/common';

import { AirfareController } from './airfare.controller';
import { AirFareService } from './airfare.service';

@Module({
    imports: [],
    controllers: [AirfareController],
    providers: [AirFareService]
})

export class AirfareModule{}