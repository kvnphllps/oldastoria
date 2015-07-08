/**
 * Created by kevinGphillips on 6/29/15.
 */


var userPos;

function initializeMap() {

    // Define default position
    var defPos = new google.maps.LatLng(46.183, -123.82251);


    // Bounds on zoom
    var mapMinZoom = 14;
    var mapMaxZoom = 16;


    // Set Map properties: terrain map with a default zoom of 14
    var mapOptions = {
        center: defPos,
        zoom: mapMaxZoom,
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


    // Define our default dot for each location on map where we have a photo
    //var myDot = {url: 'img/dot.png', scaledSize: new google.maps.Size(5, 5)};
    var myDot = {url: 'img/dot.png', scaledSize: new google.maps.Size(10, 10)};
    var markers = [];

    // loop through dotdata and draw dots, info windows
    for (var i = 0; i < dotData.length; i++) {

        var dotMarker = new google.maps.Marker(
            {
                position : new google.maps.LatLng(dotData[i].position.lat, dotData[i].position.lng),
                map : astoriaMap,
                icon : myDot,
                content : infoBoxHTML(dotData[i]['id'], dotData[i].imgSrc)
            }

        );

        markers.push(dotMarker);

        // Zoom listener: optimize dot size for a given zoom.
        new google.maps.event.addListener(astoriaMap, 'zoom_changed', function() {

            var zoomLevel = astoriaMap.getZoom();
            // Zoom listener to determine dot size based on zoom
            if (zoomLevel === mapMinZoom) {
                var myDot = {url: 'img/dot.png', scaledSize: new google.maps.Size(5, 5)};
            } else if (zoomLevel === mapMaxZoom) {
                var myDot = {url: 'img/dot.png', scaledSize: new google.maps.Size(10, 10)};
            } else {
                var myDot = {url: 'img/dot.png', scaledSize: new google.maps.Size(7, 7)};
            }

            for (var i = 0; i < markers.length; i++) {
                markers[i].setIcon(myDot);
            }

        });

        // Mouse over listener for the dots.
        new google.maps.event.addListener(markers[i], 'mouseover', function () {

            var zoomLevel = astoriaMap.getZoom();
            myDot.url = 'img/dot_yellow.png';
            // Zoom listener to determine dot size based on zoom
            if (zoomLevel === mapMinZoom) {
                myDot.scaledSize = new google.maps.Size(5,5);
            } else if (zoomLevel === mapMaxZoom) {
                myDot.scaledSize = new google.maps.Size(10,10);
            } else {
                myDot.scaledSize = new google.maps.Size(7,7);
            }

            this.setIcon(myDot);


        });

        // Mouse out listener for the dots: make them red again...
        new google.maps.event.addListener(markers[i], 'mouseout', function () {


            var zoomLevel = astoriaMap.getZoom();
            myDot.url = 'img/dot.png';
            // Zoom listener to determine dot size based on zoom
            if (zoomLevel === mapMinZoom) {
                myDot.scaledSize = new google.maps.Size(5,5);
            } else if (zoomLevel === mapMaxZoom) {
                myDot.scaledSize = new google.maps.Size(10,10);
            } else {
                myDot.scaledSize = new google.maps.Size(7,7);
            }

            this.setIcon(myDot);


        });


        // Click listener for info windows
        new google.maps.event.addListener(markers[i], 'click', function () {

            // Get current position to pan map back to start loc.
            userPos = astoriaMap.getCenter();


            // Define an info window for each dot
            var picWindow = new google.maps.InfoWindow(
                {
                position: this.position,
                content: this.content
                }
            );

            // Open the picture window once clicked
            picWindow.open(astoriaMap);

            // Shift map back to user's previous location following close click of info window.
            new google.maps.event.addListener(picWindow, 'closeclick', function () {

                astoriaMap.setCenter(userPos);



            });


        });




    }


}

// Initialize the map in the DOM upon window load.
google.maps.event.addDomListener(window, 'load', initializeMap);

