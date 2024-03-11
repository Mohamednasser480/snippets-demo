import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SnippetsModule } from './snippets/snippets.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/'),
    SnippetsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
