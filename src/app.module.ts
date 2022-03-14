import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CatsModule } from './cats/cats.module'
import { MongooseModule } from '@nestjs/mongoose'

const mongoUri = 'mongodb+srv://nishad:nishad@cluster0.wtjke.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

@Module({
  imports: [
    MongooseModule.forRoot(mongoUri),
    CatsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
