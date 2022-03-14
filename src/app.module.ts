import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CatsModule } from './cats/cats.module'
import { MongooseModule } from '@nestjs/mongoose'
import { CatSchema } from './cats/schemas/cats.schema'

const mongoUri = 'mongodb+srv://nishad:mypassword@cluster0.wtjke.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

@Module({
  imports: [
    MongooseModule.forRoot(mongoUri),
    CatsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
