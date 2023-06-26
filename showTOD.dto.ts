import{Expose} from 'class-transformer'
export class showTOD{
    @Expose()
    id:number;

    @Expose()
    email:string;

    @Expose()
    title:string;

    @Expose()
    description:string;

    @Expose()
    status:boolean

    @Expose()
    created_at: Date;

    @Expose()
    updated_at: Date;

}