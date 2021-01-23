const passport = require('passport');
const local = require('./localStrategy');
//const kakao = require('./kakaoStrategy');
const tUser = require('../models/tUser');
const tAdmin = require('../models/tAdmin');
module.exports = ()=>{
    passport.serializeUser((user, done)=>{
        done(null, user.id);
    });

    passport.deserializeUser((id, done)=>{
        tAdmin.findOne({
            where : {a_id : id}
        })
        .then(user => done(null, user))
        .catch(err => done(err));
    });

  //  kakao();
    local();
}