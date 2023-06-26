import { IsEmail,IsString } from "class-validator";
import { CreateDateColumn, UpdateDateColumn } from "typeorm";
import { isBoolean } from "util";
export class CreateToDo{
@IsEmail()
email:string;

@IsString()
password:string;
 
@IsString()
    title:string;

    @IsString()
    description:string;

    @IsString()
    status:boolean


 @CreateDateColumn()
    created_at: Date;
  
  @UpdateDateColumn()
    updated_at: Date;

}