import { Injectable } from "@nestjs/common/decorators";
import { TodosService } from "./todos.service";
import { BadRequestException, NotFoundException } from "@nestjs/common";
import { randomBytes,scrypt as _scrypt } from "crypto";
import { promisify } from "util";


const  scrypt=promisify(_scrypt)

@Injectable()
export class AuthService{
    constructor(private todosService:TodosService){ }
 
  async   signup(email:string,password:string,title:string, description:string,status:boolean){
        // see if email is in use 
        // hash the users password
        // create a new user
        // return user
        const user= await this.todosService.find(email)
        if(user.length){
            throw new BadRequestException('email in use')
        }

        const salt=randomBytes(8).toString('hex')
        const hash=await scrypt(password,salt,32) as Buffer;


        const result=salt+ '.'+ hash.toString('hex')
        //  const users= await this.todosService.create(email,title,description,status,result)
        //  return users;

    }
     async signin(email:string,password:string){
        const [user]= await this.todosService.find(email);
        if(!user){
            throw new NotFoundException('user not found')
        }
        

    }
}