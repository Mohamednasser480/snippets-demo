import { Module } from '@nestjs/common';
import { SnippetsController } from './snippets.controller';
import { SnippetsService } from './snippet.service';
import { SnippetSchema, Snippet} from './snippet.schema';
import {MongooseModule} from "@nestjs/mongoose";

@Module({
  imports: [MongooseModule.forFeature([{ name: Snippet.name, schema: SnippetSchema }])],
  controllers: [SnippetsController],
  providers: [SnippetsService]
})
export class SnippetsModule {}
