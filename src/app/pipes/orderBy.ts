import {Pipe, PipeTransform} from 'angular2/angular2';

@Pipe({
    name: 'orderby'
})

export class OrderByPipe implements PipeTransform{
    transform(value:Array<any>, args: any[]){
        if(value){
            console.log(value);
            console.log(args);
            
            return value;    
        }
        
        return;
    }
}