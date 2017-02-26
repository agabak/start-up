(function(){
    'use strict';
    var express = require('express'),
        path = require('path'),
        open = require('open'),
        port = process.env.PORT || 3000,
        app = express(),
        server = require('http').Server(app);
    
    app.use(express.static(path.join(__dirname)));
    
    server.listen(port,function(err){
        if(err){
            console.log(err);
        }else{
            open('http://localhost:' + port);
        }
    })
}());