export class ServiceResponse<T>{
    
    success: boolean;
    message: string;
    data: T;
    
    constructor(_success:boolean = true, _message: string = '', _data: T = null){
        this.success = _success;
        this.message = _message;
        this.data = _data;
    }
    
     create<T>():ServiceResponse<T>{
        return new ServiceResponse<T>(true, '', null);
    }
    
}