// const fs = require('fs').promises;

// fs.readFile('./seoulInfo.json', 'utf8')
// .then((data)=>{
//     //시퀄라이즈 연동 후 
//     const seoul = JSON.parse(data);
//     console.log(seoul.DESCRIPTION);

// })
// .catch((err)=>{
//     console.error(err);
// });


const sanitizeHtml = require('sanitize-html');

let data = "<script></script>";
sanitizeHtml(data);
console.log(data);
