var express = require("express");

var app =  express();   // Creates an express application

app.get("/", function(req, res){
   // console.log(__dirname);
    res.sendFile(__dirname + "/views/home.html");    
    // res.sendFile("home.html");   // error, requires absolute path
});
    
app.get("/contact", function(req, res){  
     res.sendFile(__dirname + "/views/contact.html");    
 });

 app.get("/about", function(req, res){  
    res.sendFile(__dirname + "/views/about.html");    
});

var server = app.listen(3005, function(){});
console.log("Express Server Application is started. Browser at the URL: http://localhost:3005/");