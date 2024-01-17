var express = require("express");
var app =express();

app.get("/", function(req,res)
{  
        let id="10256";
        let Name = "LG Printer";
        let Price =  2500;
        let Quantity = 3;
         let  Amount = 7500;

         str = `<table  border>
                       <tr>
                       <td>product id</td>
                       <td>${id}</td>
                       </tr>
                       <tr>
                       <td>product Name</td>
                       <td>${Name}</td>
                       </tr>
                       <tr>
                       <td>product price</td>  
                       <td>${Price}</td>
                       </tr>
                       <tr>
                       <td>product Quantity</td>
                       <td>${Quantity}</td>
                       </tr>
                       <tr>
                       <td>product Amount</td>
                       <td>${Amount}</td>
                       </tr>

                 </table>`
        
    res.send(str); 
});

var server = app.listen(3005,function(){});

console.log("express server application start with the url: http://localhost:3005/");