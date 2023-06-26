import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { todo } from './todo.entity';
import { TodosService } from './todos.service';
import { AuthService } from './auth.service';
import { TodosController } from './todos.controller';

@Module({
  imports:[TypeOrmModule.forFeature([todo])],
  providers: [TodosService,AuthService],
  controllers: [TodosController]
})
export class TodosModule {}
