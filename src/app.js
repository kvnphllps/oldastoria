// Problem: We need a simple way to look at a users badge count and JavaScript points in the browser
    //  we've done this in the console previously.

// Solution: Use Node.js to perform the profile look ups and serve out template via HTTP

// Requirements
var http = require('http'),
  router = require('./public/js/router.js');

// Create a webserver
http.createServer(function (request, response) {
// Routing via router.js
  router.home(request,response);
}).listen(1337, '127.0.0.1');

// Log out successful server spin up
console.log('Server running at http://127.0.0.1:1337/');
