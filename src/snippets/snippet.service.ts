import {Injectable, NotFoundException} from '@nestjs/common';
import {Snippet} from "./snippet.schema";
import {CreateSnippetDto} from "./dtos/create-snippet-dto";
import * as path from "path";
import * as fs from "fs";

@Injectable()
export class SnippetsService {
    private readonly dataFilePath = path.resolve(__dirname, '../../src/data/snippets.json');
    constructor() {}
    async create(createSnippetDto: CreateSnippetDto): Promise<{ id: string, title: string, code: string}> {
        const snapped = JSON.parse(fs.readFileSync(this.dataFilePath, 'utf-8'));
        const id = Math.floor(Math.random() * 999);
        snapped.push({id, ...createSnippetDto});
        fs.writeFileSync(this.dataFilePath, JSON.stringify(snapped, null, 2), 'utf-8');
        return {
            id: JSON.stringify(id),
            ...createSnippetDto
        };
    }

    async findAll(): Promise<Snippet[]> {
        const snippets = fs.readFileSync(this.dataFilePath, 'utf-8');
        return JSON.parse(snippets);
    }

    async update(id: string, attrs: Partial<Snippet>){
        const snippets = fs.readFileSync(this.dataFilePath, 'utf-8');
        const jsonSnippets = JSON.parse(snippets);
        const index = jsonSnippets.findIndex( (snippet:any) => snippet.id == id);
        if(index === -1 ){
            throw new NotFoundException('snippet not found');
        }
        jsonSnippets[index] = {...jsonSnippets[index], ...attrs};
        fs.writeFileSync(this.dataFilePath, JSON.stringify(jsonSnippets, null, 2), 'utf-8');
        return jsonSnippets;
    }

    async remove(id: string){
        const snippets = fs.readFileSync(this.dataFilePath, 'utf-8');
        const jsonSnippets = JSON.parse(snippets);
        const index = jsonSnippets.findIndex( (snippet:any) => snippet.id == id);
        if(index === -1 ){
            throw new NotFoundException('snippet not found');
        }
        jsonSnippets.splice(index, 1);
        fs.writeFileSync(this.dataFilePath, JSON.stringify(jsonSnippets, null, 2), 'utf-8');
        return jsonSnippets;
    }
}
