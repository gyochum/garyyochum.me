import { Headers } from '@angular/http';

export class BaseService{
	
    public headers:Headers;
    public baseApiUrl:string = 'http://localhost:3000/api';
    
    constructor(){
        this.headers = new Headers();
        this.headers.append("Content-Type", "application/json");
    }
    
	logError(error: any){
		console.log('ERROR: ' + error);
	}
    
    public isLoggedIn():boolean{
        return true;
        //return Storage.get("token") !== null;
    }
    
    public logout():void{
        //Storage.remove("token");
    }
	
}