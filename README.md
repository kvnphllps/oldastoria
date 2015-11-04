# oldastoria.org

Inspired by both [```oldnyc.org```](https://www.oldnyc.org) and [```oldsf.org```](http://www.oldsf.org), this project
 utilizes the Google Maps API to map historical photos of Astoria, OR. 
 	
## Installation

Begin by downloading the repository via git in the console:

```git clone https://github.com/kvnphllps/oldastoria.git```

or if you don't have git installed simply click the "Download Zip" link to the right.

 Install package dependencies via the node package manager (npm) in the console:
 ``` npm install ```

If you don't have npm click [here](http://blog.npmjs.org/post/104272486560/getting-started-with-npm) to get started with node.js and npm.

## Configuration

The map will require your own google maps API key, click [here](https://developers.google.com/maps/signup?hl=en) for details. Search in the ```index.jade``` file of this repo for further instructions.

## Running the map in the browser

Launch the interactive map in the browser by typing the following in your console:
 ```node src/app.js```  
from inside the top directory of this repository.

