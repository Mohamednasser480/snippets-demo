import {Body, Controller, Delete, Get, Param, Patch, Post, Put} from '@nestjs/common';
import {CreateSnippetDto} from "./dtos/create-snippet-dto";
import {SnippetsService} from "./snippet.service";
import {UpdateSnippetDto} from "./dtos/update-snippet-dto";

@Controller('snippets')
export class SnippetsController {
    constructor(private snippetsService: SnippetsService) {}

    @Post()
    async createNewSnippet(@Body() newSnippet: CreateSnippetDto){
        return this.snippetsService.create(newSnippet);
    }

    @Get()
    async getAllSnippets(){
        return this.snippetsService.findAll();
    }

    @Delete('/:id')
    async deleteSnippet(@Param('id') id: string) {
        return this.snippetsService.remove(id);
    }

    @Put('/:id')
    async updateSnippet(@Param('id') id: string, @Body() body: UpdateSnippetDto) {
        return this.snippetsService.update(id, body);
    }
}
