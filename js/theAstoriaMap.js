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
            style: google.maps.ZoomControlStyle.MEDIUM
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
    var myDot = {url: 'img/dot.png', scaledSize: new google.maps.Size(5, 5)};
    //var myDot = {url: 'img/dot.png', scaledSize: new google.maps.Size(10, 10)};
    var markers = [];

    // loop through dotdata and draw dots, info windows
    for (var i = 0; i < dotData.length; i++) {

        var dotMarker = new google.maps.Marker(
            {
                position : new google.maps.LatLng(dotData[i].position.lat, dotData[i].position.lng),
                map : astoriaMap,
                icon : myDot,
                content : infoBoxHTML(dotData[i]['id'], dotData[i].imgSrc),
                id: dotData[i]['id'],
                imgSrc : dotData[i].imgSrc
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

        // Mouse over listener for the dots: turn yellow on a mouseover.
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

        // Mouseout listener for the dots: make them red again.
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

        // Use jQuery for overlay
        var $overlay = $("<div id = 'overlay'></div>"); // jQuery object assigned to variable, begin var name with $ sign.
        var $closeButton = $('<button id = "closeButton">&times</button>');
        //var $image = $("<img/>");

        // Add the button to the overlay
        $overlay.append($closeButton);

        // Add an image to our overlay
        //$overlay.append($image);

        // Add an overlay to the body
        $("body").append($overlay);

        // Click listener for dots: show overlay on a click
        new google.maps.event.addListener(markers[i], 'click', function () {

            // Get image information from the click

                //getHref = this.imgSrc;
                //getAlt = this.loc;
                //console.log(this.content.);
                //$image.attr({
                //        src: getHref,
                //        alt: getAlt
                //    });

            $overlay.append(this.content);
            console.log('id: ' + this.id + ' imgSrc: ' + this.imgSrc);
            $overlay.show();

            $closeButton.click(function () {
                    $overlay.hide();
            });

         });

    }
}

// Initialize the map in the DOM upon window load.
google.maps.event.addDomListener(window, 'load', initializeMap);

