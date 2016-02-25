export class Storage{
    
    static get<T>(key: string):T{
       var result:T;

        result = localStorage.getItem(key) as T;
       
       return result;
    }
    
    static set<T>(key: string, model:T){
        var data = JSON.stringify(model);
        
        localStorage.setItem(key, data);
    }
    
    static remove(key: string){
        if(localStorage.getItem(key) !== null)
            localStorage.removeItem(key);
    }
    
}