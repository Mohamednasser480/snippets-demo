import {IsNotEmpty, IsString} from "class-validator";
export class CreateSnippetDto {
    @IsString()
    @IsNotEmpty()
    readonly code: string;
    @IsString()
    @IsNotEmpty()
    readonly title: string;
}