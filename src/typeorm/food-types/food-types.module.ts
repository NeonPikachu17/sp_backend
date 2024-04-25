import { Module } from '@nestjs/common';
import { FoodTypeService } from './services/food-type/food-type.service';
import { FoodTypeController } from './controllers/food-type/food-type.controller';

@Module({
  providers: [FoodTypeService],
  controllers: [FoodTypeController]
})
export class FoodTypesModule {}
