import { Module } from '@nestjs/common';
import { AirfareModule } from './airfare/airfare.module';

// mongodb://127.0.0.1:27017/book
@Module({
  imports: [AirfareModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
