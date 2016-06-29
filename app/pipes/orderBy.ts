import {Pipe, PipeTransform} from 'angular2/angular2';

@Pipe({
    name: 'orderby'
})

export class OrderByPipe implements PipeTransform{
    transform(value:Array<any>, args: any[]){
        if(value){
            var propertyName = args[0];
            var order = args[1];
            
            value.sort((a: any, b: any) => {
                if(order === 'asc')
                    return a[propertyName] > b[propertyName] ? 1 : 0;
                else if(order === 'desc')
                    return b[propertyName] > a[propertyName] ? 1 : 0;
                
                return 1;
            });
                        
            return value;    
        }
        
        return;
    }
}