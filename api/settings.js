module.exports = {   
    
    db: function () {
        if (process.env.ENVIRONMENT === 'dev')
            return 'mongodb://gy_dev:bergkamp10@ds044989.mlab.com:44989/garyyochum';        
    },
    
   oauth: {
       secret: 'garyssuperdupersecret',
       providers: {
        github: {
            clientId: '0d9bf173fdcac2dddc27',
            clientSecret: 'aa2258bba316e07f57b5e2bd8d6b2dcef2cfc3ea',
            authorizeUrl: 'https://github.com/login/oauth/authorize',
            authenticateUrl: 'https://github.com/login/oauth/access_token',
            scope: 'user',
            accessTokenUrl: 'http://localhost:3000/api/authenticate'
        }   
       }       
   } 
}