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

    // Define our dot
    var myDot = { url: 'img/dot.png', scaledSize: new google.maps.Size(9, 9) };

    // Lat/Lng of circle
    var currPos = new google.maps.LatLng(46.18966929, -123.83172154);


    console.log(dotData[0].position.lat,dotData[0].position.lng);



    // Display custom dot on the map
    var dotMarker = new google.maps.Marker({
        // use: http://www.mapcoordinates.net/en
        // to get your list of for desired lat/lng
        // store as array? database?
        // associate each with a set of images.
        position: new google.maps.LatLng(dotData[0].position.lat, dotData[0].position.lng),
        map: astoriaMap,
        icon: myDot
    });

    // Add marker window (where pictures will live)
    //var contentString =
    //    //'<div style="width: 1000px; height:1000px; white-space: nowrap;">'+
    //    '<div>'+
    //    '<h1 style="float: left">Here is a picture!</h1>'+
    //    '<img  style="float: left" style="display: inline-block;" src="img/downtown_astoria.png">'+
    //    '<img  style="float: left" style="display: inline-block;" src="img/downtown_astoria.png">'+
    //    '</div>';

    var picWindow = new google.maps.InfoWindow({
        position: new google.maps.LatLng(dotData[0].position.lat, dotData[0].position.lng),
        //position: astoriaMap.getCenter(),
        content: dotData[0].content,
        pixelOffset: 0
    });



    //
    //var picLayer = new google.maps.TransitLayer();
    //transitLayer.setMap(astoriaMap);

    // Click listener
    new google.maps.event.addListener(dotMarker, 'click', function() {
        userPos = astoriaMap.getCenter();
        picWindow.open(astoriaMap);

    });

    new google.maps.event.addListener(picWindow, 'closeclick', function() {
        astoriaMap.setCenter(userPos);
    });



    //new google.maps.event.addListener(picWindow, 'close', function() {
    //    picWindow.close(astoriaMap);
    //    //astoriaMap.setCenter(latlng:userPos);
    //});

}

google.maps.event.addDomListener(window, 'load', initializeMap);