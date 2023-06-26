import { AfterInsert,AfterRemove,AfterUpdate,Entity,Column,PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn } from "typeorm";
import { Exclude } from "class-transformer";
@Entity()
export class todo{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    email:string;

    @Column()
    @Exclude()
    password:string;
     
    @Column()
    title:string;

    @Column()
    description:string;

    @Column()
    status:boolean

    @CreateDateColumn()
    created_at: Date;
  
    @UpdateDateColumn()
    updated_at: Date;    

  

@AfterInsert()
LogInsert(){
    console.log('inserted with id ',this.id)
}

@AfterUpdate()
logUpdate(){
    console.log('updated with id ', this.id)
}

@AfterRemove()
logRemove(){

}
}