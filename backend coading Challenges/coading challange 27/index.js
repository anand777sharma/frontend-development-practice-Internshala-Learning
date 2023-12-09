var http = require("http");
var fs=require('fs');
var url=require('url');

   let add=`'http://localhost:5000/test.html?id=101&name=John`;
   let result=url.parse(add,true);
   let student = result.query;
   console.log(`Student ID: ${student.id}`);
   console.log(`Student name: ${student.name}`);