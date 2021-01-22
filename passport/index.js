const passport = require('passport');
const local = require('./localStrategy');
const kakao = require('./kakaoStrategy');

module.export = ()=>{
    passport.serializeUser((user, done)=>{
        done(null, user.id);
    });

    passport.deserializeUser((id, done)=>{
        // User.findone
        
    });

    kakao();
    local();
}