const express = require('express');

const router = express.Router();


router.get('/login',(req,res)=>{
    res.render('aLogin');
});

router.post('/login', (req,res)=>{
    console.dir(req.body);
    res.status(200).redirect('error');
});

module.exports = router;    