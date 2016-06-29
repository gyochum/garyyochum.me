export class ServiceResponse<T>{
    
    success: boolean;
    message: string;
    data: T;
    
    constructor(){}
    
}