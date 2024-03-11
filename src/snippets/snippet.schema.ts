import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SnippetDocument = HydratedDocument<Snippet>;

@Schema()
export class Snippet {
    @Prop()
    id: string;

    @Prop()
    code: string;

    @Prop()
    title: string;
}

export const SnippetSchema = SchemaFactory.createForClass(Snippet);
