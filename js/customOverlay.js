/**
 * Created by kevinGphillips on 6/29/15.
 */

/** ****************** **/
/** Overlay properties **/
/** ****************** **/

var overlay;
infoBoxOverlay.prototype = new google.maps.OverlayView();


/** ***************** **/
/** Map properties    **/
/** ***************** **/

function initializeMap() {

    // Define default position
    var defPos = new google.maps.LatLng(46.183, -123.82251);

    // Bounds on zoom
    var mapMinZoom = 14;
    var mapMaxZoom = 16;

    // Set Map properties: terrain map with a default zoom of 14
    var mapOptions = {
        center: defPos,
        zoom: mapMinZoom,
        minZoom: mapMinZoom,
        maxZoom: mapMaxZoom,
        mapTypeId: google.maps.MapTypeId.TERRAIN,
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL
        },
        panControl: true
    };

    // Create map object
    var astoriaMap = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    // Hide points of interest & custom color water to match banner.
    var noPoi = [
        {
            featureType: "poi",
            stylers: [
                {visibility: "off"},
            ]
        },{
            featureType: "water",
            stylers: [
                { color: "#b1d2fe" },
            ]
        }
    ];
    astoriaMap.setOptions({styles: noPoi});


    // Define our dot
    var myDot = { url: 'img/dot.png', scaledSize: new google.maps.Size(9, 9) };

    // Lat/Lng of dot
    var currPos = new google.maps.LatLng(46.18966929, -123.83172154);

    // Display custom dot on the map
    var dotMarker1 = new google.maps.Marker({
        // use: http://www.mapcoordinates.net/en
        // to get your list of for desired lat/lng
        // store as array? database?
        // associate each with a set of images.
        position: currPos,
        map: astoriaMap,
        icon: myDot
    });

    var dotMarker2 = new google.maps.Marker({
        // use: http://www.mapcoordinates.net/en
        // to get your list of for desired lat/lng
        // store as array? database?
        // associate each with a set of images.
        position: defPos,
        map: astoriaMap,
        icon: myDot
    });

    // Overlay options
    var swBound = currPos;
    var neBound = defPos;
    var bounds = new google.maps.LatLngBounds(swBound, neBound);

    // The photograph is courtesy of the U.S. Geological Survey.
    //var srcImage = 'img/downtown_astoria.png';
    var srcImage = 'https://developers.google.com/maps/documentation/javascript/';
    srcImage += 'examples/full/images/talkeetna.png';

    // The custom USGSOverlay object contains the USGS image,
    // the bounds of the image, and a reference to the map.
    overlay = new infoBoxOverlay(bounds, srcImage, astoriaMap);

    // Click listener for our dot
    //google.maps.event.addListener(dotMarker, 'click', function() {
    //    overlay.prototype.toggleDOM();
    //    overlay.prototype.show();
    //});


}

/** ****************** **/
/** Overlay properties **/
/** @constructor       **/
/** ****************** **/

function infoBoxOverlay(bounds, image, map) {

    // Initialize all properties.
    this.bounds_ = bounds;
    this.image_ = image;
    this.map_ = map;

    // Define a property to hold the image's div. We'll
    // actually create this div upon receipt of the onAdd()
    // method so we'll leave it null for now.
    this.div_ = null;

    // Explicitly call setMap on this overlay.
    this.setMap(map);
}

/**
 * onAdd is called when the map's panes are ready and the overlay has been
 * added to the map.
 */
infoBoxOverlay.prototype.onAdd = function() {

    var div = document.createElement('div');
    div.style.borderStyle = 'none';
    div.style.borderWidth = '0px';
    div.style.position = 'absolute';

    // Create the img element and attach it to the div.
    var img = document.createElement('img');
    img.src = this.image_;
    img.style.width = '100%';
    img.style.height = '100%';
    img.style.position = 'absolute';
    div.appendChild(img);

    this.div_ = div;

    // Add the element to the "floatPane" pane. On top of everything else.
    var panes = this.getPanes();
    panes.overlayMouseTarget.appendChild(div);
};

/** Draw the overlay **/

infoBoxOverlay.prototype.draw = function() {

    // We use the south-west and north-east
    // coordinates of the overlay to peg it to the correct position and size.
    // To do this, we need to retrieve the projection from the overlay.
    var overlayProjection = this.getProjection();

    // Retrieve the south-west and north-east coordinates of this overlay
    // in LatLngs and convert them to pixel coordinates.
    // We'll use these coordinates to resize the div.
    var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
    var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

    // Resize the image's div to fit the indicated dimensions.
    var div = this.div_;
    div.style.left = sw.x + 'px';
    div.style.top = ne.y + 'px';
    div.style.width = (ne.x - sw.x) + 'px';
    div.style.height = (sw.y - ne.y) + 'px';
};


/** Remove the overlay **/
// The onRemove() method will be called automatically from the API if
// we ever set the overlay's map property to 'null'.
infoBoxOverlay.prototype.onRemove = function() {
        this.div_.parentNode.removeChild(this.div_);
        this.div_ = null;
    };


/** Hide & Show the info box**/
// Set the visibility to 'hidden' or 'visible'.
infoBoxOverlay.prototype.hide = function() {
    if (this.div_) {
        // The visibility property must be a string enclosed in quotes.
        this.div_.style.visibility = 'hidden';
    }
};

infoBoxOverlay.prototype.show = function() {
    if (this.div_) {
        this.div_.style.visibility = 'visible';
    }
};

infoBoxOverlay.prototype.toggle = function() {
    if (this.div_) {
        if (this.div_.style.visibility == 'hidden') {
            this.show();
        } else {
            this.hide();
        }
    }
};

// Detach the map from the DOM via toggleDOM().
// Note that if we later reattach the map, it will be visible again,
// because the containing <div> is recreated in the overlay's onAdd() method.
infoBoxOverlay.prototype.toggleDOM = function() {
    if (this.getMap()) {
        // Note: setMap(null) calls OverlayView.onRemove()
        this.setMap(null);
    } else {
        this.setMap(this.map_);
    }
};


google.maps.event.addDomListener(window, 'load', initializeMap);