const express = require('express');
const session = require('express-session');
const cookirParser = require('cookie-parser');
const morgan = require('morgan');
const dotenv = require('dotenv');
const nunjucks = require('nunjucks');

dotenv.config();


const app = express();
app.set('port', process.env_PORT || 3000);

app.use((req,res,next)=>{ 
    const error = new Error();
    next(error);
});

app.use((err,req,res)=>{
    //
    //
    //
    //
    
})