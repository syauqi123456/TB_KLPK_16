const express = require('express');
const server = express();
server.set('view engine', 'ejs');


server.get('/',function (request,respond){
    respond.render('home')
});
server.get('/login',function (request,respond){
    respond.render('login')
});




server.listen(3000, function(){
console.log('yeayy server sudah jalan di port 3000');
});