module.exports = {   
    
    db: function () {
        if (process.env.ENVIRONMENT === 'dev')
            return '';        
    },
    
   oauth: {
       secret: '',
       providers: {
        github: {
            clientId: '0d9bf173fdcac2dddc27',
            clientSecret: '',
            authorizeUrl: 'https://github.com/login/oauth/authorize',
            authenticateUrl: 'https://github.com/login/oauth/access_token',
            scope: 'user',
            accessTokenUrl: 'http://localhost:3000/api/authenticate'
        }   
       }       
   } 
}