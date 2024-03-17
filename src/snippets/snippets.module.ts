import { Module } from '@nestjs/common';
import { SnippetsController } from './snippets.controller';
import { SnippetsService } from './snippet.service';

@Module({
  imports: [],
  controllers: [SnippetsController],
  providers: [SnippetsService]
})
export class SnippetsModule {}
