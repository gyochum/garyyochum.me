import {Storage} from '../../utilities/storage'

export class BaseService{
	
	logError(error: any){
		console.log('ERROR: ' + error);
	}
    
    public isLoggedIn():boolean{
        return Storage.get("token") !== null;
    }
    
    public logout():void{
        Storage.remove("token");
    }
	
}