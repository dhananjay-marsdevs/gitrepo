import { IsEmail,IsOptional,IsString } from "class-validator";


export class updateTodoDto{

    @IsEmail()
    @IsOptional()
    email:string;

    @IsString()
    @IsOptional()
    password:string

}


