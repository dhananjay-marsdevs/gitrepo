import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { todo } from './todo.entity';
@Injectable()
export class TodosService {
constructor(@InjectRepository(todo) private repo:Repository<todo>){}

create(email:string, password:string,title:string, description:string,status:boolean){
    const todo=this.repo.create({email,password,title,description,status})
    return this.repo.save(todo)
}
 findeOne(id:number){
    return this.repo.findOne(id)
 }
    
find(email:string){
    return this.repo.find({email});
}

findAll(){
    return this.repo.find()
}

async update(id: number, attrs: Partial<todo>) {
    const user = await this.findeOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    Object.assign(user, attrs);
    return this.repo.save(user);
  }

   async remove(id:number){
    const user=await this.findeOne(id)
    if(!user){
        throw new NotFoundException('user not found ')
    }
    return this.repo.remove(user)
   }
}
