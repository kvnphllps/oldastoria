///////////////////
//  Requirements //
///////////////////
var fs = require("fs");

// html renderer
function view (templateName, values, response) {
  // read HTML from the views directory
  var fileContents = fs.readFileSync('views/' + templateName + '.html', {encoding: "utf8"});

  // write out the contents to the response
  response.write(fileContents);
}

// css renderer
function style (templateName, response) {
    // read HTML from the views directory
    var fileContents = fs.readFileSync('css/' + templateName + '.css');

    // write out the contents to the response
    response.write(fileContents);
}

// javaScript renderer
function javaScript (templateName, response) {
    // read HTML from the views directory
    var fileContents = fs.readFileSync('js/' + templateName + '.js');

    // write out the contents to the response
    response.write(fileContents);
}

// img renderer
function imgPNG (templateName, response) {
    // read HTML from the views directory
    var fileContents = fs.readFileSync('img/' + templateName + '.png');

    // write out the contents to the response
    response.write(fileContents);
}

// jpg renderer
function imgJPG (templateName, response) {
    // read HTML from the views directory
    var fileContents = fs.readFileSync('img/' + templateName + '.png');

    // write out the contents to the response
    response.write(fileContents);
}


module.exports.view = view;
module.exports.style = style;
module.exports.javaScript = javaScript;
module.exports.imgPNG = imgPNG;
