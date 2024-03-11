import {IsOptional, IsString} from "class-validator";
export class UpdateSnippetDto {
    @IsString()
    @IsOptional()
    readonly code: string;
    @IsString()
    @IsOptional()
    readonly title: string;
}