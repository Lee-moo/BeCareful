const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const tAdmin = require('../models/tAdmin');


module.exports = () =>{
    passport.use(new LocalStrategy({
        usernameField : 'aId',
        passwordField : 'aPwd',
    }, async(email, password, done)=>{
        try {
            const admin = await tAdmin.findOne({where :{a_id : aId}});
            if(admin){
                const pwdCompare = await bcrypt.compare(aPwd, admin.a_password);
                if(pwdCompare) {
                    done(null, admin);
                }else {
                    done(null,false,{message : '비밀번호가 일치하지 않습니다.'});
                }
            }else {
                done(null, false,{message : '존재하지 않는 아이디입니다.'});
            }
        }catch(error) {
            console.error(error);
            done(error);
        }
    }));
}