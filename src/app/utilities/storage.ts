export class Storage{
    
    static get<T>(key: string):T{
       var result:T;

        result = localStorage.getItem(key) as T;
       
       return result;
    }
    
}