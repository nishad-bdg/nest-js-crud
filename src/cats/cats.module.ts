import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';
import { Cat, CatSchema } from './schemas/cats.schema'

@Module({
  imports: [MongooseModule.forFeature([ {name: 'cat', schema: CatSchema} ])],
  controllers: [CatsController],
  providers: [CatsService]
})
export class CatsModule {}
