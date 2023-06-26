import { UseInterceptors,
    NestInterceptor,ExecutionContext,CallHandler
 } from '@nestjs/common';
 import { Observable } from 'rxjs';
import{map} from 'rxjs/operators'
import{plainToClass} from 'class-transformer'
import { showTOD } from 'src/todos/showTOD.dto';


interface ClassConstructor{
    new(...args:any[]):{}
}


export class SerializerInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any>  {
        // run  something before a request is handled 
        // by the request handler
        console.log('i am running before the handler ',context)

        return next.handle().pipe(
            map((data:ClassConstructor)=>{
                return plainToClass(showTOD,data,{
                    excludeExtraneousValues:true,
                })

                console.log('i am running before response is sent out',data)
            })
        )
    }
}