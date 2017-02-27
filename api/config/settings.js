module.exports = {   
    
    db: function () {
            return 'mongodb://gy_dev:bergkamp10@ds044989.mlab.com:44989/garyyochum';        
    },
    
   oauth: {
       secret: '',
       providers: {
        github: function(){
            //todo: return based on environment
            return {
                clientId: '0d9bf173fdcac2dddc27',
                clientSecret: 'aa2258bba316e07f57b5e2bd8d6b2dcef2cfc3ea',
                scope: 'email',
                callbackUrl: 'http://localhost:3000/api/login/github/callback'
            };            
        },
        google: function(){
            //todo: return based on environment
            return {
                clientId: '328011332238-3bon3pp8j5mj1126p9pj63fe20nl8dqc.apps.googleusercontent.com',
                clientSecret: 'ORToiEdgjZLoBGhiHbGYhqT7',
                scope: 'email',
                callbackUrl: 'http://localhost:3000/api/login/google/callback'
            };            
        }   
       }       
   } 
}