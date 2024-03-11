import {Injectable, NotFoundException} from '@nestjs/common';
import {InjectModel} from "@nestjs/mongoose";
import {Model} from "mongoose";
import {Snippet} from "./snippet.schema";
import {CreateSnippetDto} from "./dtos/create-snippet-dto";

@Injectable()
export class SnippetsService {

    constructor(@InjectModel("Snippet") private snippetModel: Model<Snippet>) {}
    async create(createSnippetDto: CreateSnippetDto): Promise<Snippet> {
        const createdSnippet = new this.snippetModel(createSnippetDto);
        return createdSnippet.save();
    }

    async findAll(): Promise<Snippet[]> {
        return this.snippetModel.find();
    }

    async find(id: string){
        return this.snippetModel.findById(id);
    }

    async update(id: string, attrs: Partial<Snippet>){
        const snippet = await this.snippetModel.findById(id);
        if(!snippet){
            throw new Error('snippet not found');
        }
        Object.assign(snippet, attrs);
        return snippet.save();
    }

    async remove(id: string){
        const snippet = await this.snippetModel.findOne({_id: id});
        if(!snippet)
            throw new NotFoundException('Snippet not found');
        return this.snippetModel.findByIdAndDelete(id);
    }
}
