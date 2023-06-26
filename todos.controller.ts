import { Controller,Body,Post,Get,Patch,Delete,Param,Query,NotFoundException,UseInterceptors,ClassSerializerInterceptor } from '@nestjs/common';
import { CreateToDo } from './create-todo.dto';
import { updateTodoDto } from './update-todo.dto';
import { TodosService } from './todos.service';
import { SerializerInterceptor } from 'src/interceptors/serialize.interceptor';
@Controller('todos')
@UseInterceptors(SerializerInterceptor)
export class TodosController {
    constructor(private todoService:TodosService){}

@Post('/signup')
createtodo(@Body() body:CreateToDo){
    this.todoService.create(body.password,body.email,body.description,body.title,body.status)
}


@Get()
findAllTODO(){
   return this.todoService.findAll() 
}


@Get('/:id')
 async findTODO(@Param('id') id:string)
{
    console.log("handler is runnig")
const todo=  await this.todoService.findeOne(parseInt(id))
if(!todo){
    throw new NotFoundException('user not found ')
}
return todo
}

 @Delete('/:id')
removeTODO(@Param ('id') id:string){
    return this.todoService.remove(parseInt(id))
}

 @Patch('/:id')
updateTODO(@Param('id') id:string,@Body()body:updateTodoDto){
    return this.todoService.update(parseInt(id),body)
}
}
