import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AirfareSchema } from './airfare.model';

import { AirfareController } from './airfare.controllers';
import { AirFareService } from './airfare.service';

@Module({
    imports: [MongooseModule.forFeature([{name: 'Product', schema: AirfareSchema}])],
    controllers: [AirfareController],
    providers: [AirFareService]
})

export class ProductsModule{}