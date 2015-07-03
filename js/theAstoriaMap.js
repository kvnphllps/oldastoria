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

    // Define our dot for each location on map where we have a photo
    var myDot = { url: 'img/dot.png', scaledSize: new google.maps.Size(9, 9) };


    var markers = [];

    for (var i = 0; i < dotData.length, i++) {

        // Display custom dot on the map
        var dotMarker = new google.maps.Marker({
            position: new google.maps.LatLng(dotData[i].position.lat, dotData[i].position.lng),
            map: astoriaMap,
            icon: myDot
        });

        markers.push(dotMarker);

        // Define an info window for each dot
        var picWindow = new google.maps.InfoWindow({
            position: new google.maps.LatLng(dotData[i].position.lat, dotData[i].position.lng),
            content: infoBoxHTML(dotData[i].loc, dotData[i].imgSrc)
        });


        // In the process of making an array of markers and displaying dots for those.

        // Click listener to open info window
        new google.maps.event.addListener(markers[i], 'click', function () {
            userPos = astoriaMap.getCenter();
            picWindow.open(astoriaMap);

        });

        // Do we need an array for the info windows?

        // Click listener to reposition map following info window closure
        new google.maps.event.addListener(picWindow, 'closeclick', function () {
            astoriaMap.setCenter(userPos);
        });
    }

}

// Initialize the map in the DOM upon window load.
google.maps.event.addDomListener(window, 'load', initializeMap);