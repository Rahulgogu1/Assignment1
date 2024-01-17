var express = require("express");

var app =  express();  

app.get("/", function(req, res){

    let empid = "2586470";
	let ename = "Rahul Gogu";
	let eemail = "gogu.rahul@mphasis.com";
    let ejob = "trainee";

    let str = "<h3 align='center'>Welcome to Express JS Applications</h3>";   
    str +=   "<hr/>";

    str +=   `<div  style="border:1px solid gray; border-top-width: 20px; padding:5px; width:300px; border-radius:10px;">
                User Employee ID  :  ${empid}  <br/>
                User Employee name:  ${ename}  <br/>
                User Email        :  ${eemail}  <br/>
                User Employee job :  ${ejob}  <br/>
             </div>`  ;

    res.send(str);
});

var server = app.listen(3005, function(){});
console.log("Express Server Application is started. Browser at the URL: http://localhost:3005/");