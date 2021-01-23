const express = require('express');
const session = require('express-session');
const cookirParser = require('cookie-parser');
const morgan = require('morgan');
const path = require('path');
const dotenv = require('dotenv');
const nunjucks = require('nunjucks');
const sanitizeHtml = require('sanitize-html');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');
const {sequelize} = require('./models');


dotenv.config();

const admin = require('./routes/admin');
const passportConfig = require('./passport');
const passport = require('passport');



const app = express();
passportConfig();
app.set('port', process.env_PORT || 3000);
app.set('view engine', 'html');
nunjucks.configure('views', {
    express : app,
    watch : true,
});

sequelize
    .sync({force :false})
    .then(()=>{
        console.log('db connect');
    })
    .catch((err)=>{
        console.error(err);
    });


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname, 'resource','CSS')));
app.use(cookieParser(process.env.COOKIESECRET));

app.use(session({
    resave : false,
    saveUninitialized : false,
    secret : process.env.COOKIESECRET,
    cookie : {
        httpOnly : true,
        secure : false,
    },
}));

app.use(passport.initialize());
app.use(passport.session());


app.use('/fnci',admin);


app.use((req,res,next)=>{ 
    const error = new Error();
    next(error);
});

app.use((err,req,res,next)=>{
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

app.listen(app.get('port'), ()=>{
    console.log('server on');
});