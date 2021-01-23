const express = require('express');
const passport = require('passport');
const tAdmin = require('../models/tAdmin');
const {isNotLoggedIn} = require('./middle');
const router = express.Router();


router.get('/login',(req,res)=>{
    res.render('aLogin');
});

router.post('/login', isNotLoggedIn, (req,res,next)=>{
    console.dir(req);
    passport.authenticate('local', (error, user, info)=>{
        if(error) {
            console.error(error);
            return next(error);
        }
        if(!user) {
            return res.send(info.message);
        }
        return res.login(user, (loginError)=>{
            if(loginError) {
                console.error(loginError);
                return next(loginError);
            }
            return res.status(200).json({
                login : 'success', 
            });
        });
    })(req,res,next);
});

module.exports = router;    