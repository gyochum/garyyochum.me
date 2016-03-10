export class Provider{
    
    constructor(){}
    
    authorizationUrl: string;
    redirectUrl: string;
    clientId: string;
    scope: string;
    
    fullAuthorizationUrl(): string{
        return this.authorizationUrl + '?client_id=' + this.clientId + '&redirect_uri=' + this.redirectUrl + '&scope=' + this.scope;
    }
    
}