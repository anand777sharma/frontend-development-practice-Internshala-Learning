var http = require("http");
var fs=require('fs');

http.createServer(function(req,res){
    fs,fs.readFile("demo.html",function(error,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
        
    })
   
}).listen(5000);
