///////////////////
//  Requirements //
///////////////////
var renderer = require("./renderer.js");

///////////////////////////////////////////////////////
//                  ROUTE HANDLERS                   //
///////////////////////////////////////////////////////

// Html Header
var htmlHeader = {'Content-Type':'text/html'};

// CSS header
var cssHeader = {'Content-Type':'text/css'};

// JS header
var jsHeader = {'Content-Type':'application/javascript'};

// PNG header
var pngHeader = {'Content-Type':'img/png'};



////////////////
// Home route //
////////////////
function home (request, response) {
  // GET request for home //
  if (request.url === "/") {
    if (request.method.toLowerCase() === "get"){
      ////////////////////
      // home view html //
      ////////////////////
      response.writeHead(200, htmlHeader);
      renderer.view("header", {}, response);
      renderer.view("maps_api_key", {}, response);
      renderer.view("map", {}, response);
      renderer.view("footer", {}, response);
    } else {
      response.writeHead({'Content-Type':'text/plaintext'});
      response.write('Not found');
      }
      ////////////////////
      // home view css  //
      ////////////////////
  } else if (request.url === '/css/main.css'){
      response.writeHead(200, cssHeader);
      renderer.style("main", response);
  } else if (request.url === '/css/normalize.css'){
      response.writeHead(200, cssHeader);
      renderer.style("normalize", response);
  }
    ////////////////////
    // home view js  //
    ////////////////////
  else if (request.url === '/js/map_api_config.js'){
      response.writeHead(200, jsHeader);
      renderer.javaScript("map_api_config", response);

  }
  else if (request.url === '/js/dotData.js'){
      response.writeHead(200, jsHeader);
      renderer.javaScript("dotData", response);

  }
  // Wire up test data for geViewer
  else if (request.url === '/js/dotDataDev.js'){
      response.writeHead(200, jsHeader);
      renderer.javaScript("dotDataDev", response);

  }
  else if (request.url === '/js/theAstoriaMap.js'){
      response.writeHead(200, jsHeader);
      renderer.javaScript("theAstoriaMap", response);
  }

  else if (request.url === '/js/navOverlays.js'){
      response.writeHead(200, jsHeader);
      renderer.javaScript("navOverlays", response);
  }

  else if (request.url === '/img/cchs_icon.png') {

      response.writeHead(200, pngHeader);
      renderer.imgPNG("cchs_icon", response);

  }

  // This needs to generalized for any .png requested.
  else if (request.url === '/img/image_id_001.png') {

      response.writeHead(200, pngHeader);
      renderer.imgPNG("image_id_001", response);

  }

    ////////////////////////////
    // Grid expanding viewer  //
    ////////////////////////////




    response.end();

}

/////////////////
// About route //
/////////////////

////////////////////
// Feedback route //
////////////////////


module.exports.home = home;
