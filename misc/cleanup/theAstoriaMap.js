/**
 * Created by kevinGphillips on 6/29/15.
 */

function initializeMap() {

    // Define default map centering

    // Defaults: if zoom = 14 then:
    //var defPos = new google.maps.LatLng(46.183, -123.82251);

    // Defaults: if zoom = 16 then:
    var defPos = new google.maps.LatLng(46.188285, -123.831776);

    // define SVG dots
        // Default dot style
    var mySmallDot = {
        path: google.maps.SymbolPath.CIRCLE,
        strokeWeight: 0,
        fillColor: "#c1595a",
        fillOpacity: 0.5,
        strokeColor:"#c1595a",
        strokeOpacity: 0.5,
        scale: 6

    };
        // Hover (mouseover) state dot style
    var myBigDot = {
        path: google.maps.SymbolPath.CIRCLE,
        strokeWeight: 3,
        fillColor:  "#c1595a",// "#ffe07b",
        fillOpacity: 1.0,
        strokeOpacity: 1.0,
        strokeColor: "#c1595a",//"#ffe07b",
        scale: 7
    };


    // Bounds on map zoom
    var mapMinZoom = 14;
    var mapMaxZoom = 17;
    var defaultZoom = 16;

    // Set Map properties: terrain map with a defaultZoom
    var mapOptions = {
        center: defPos,
        zoom: defaultZoom,
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


    // Hide points of interest (poi) & custom color water to match banner.
    var noPoi = [
        {
            featureType: "poi",
            stylers: [
                {visibility: "off"}
            ]
        },{
            featureType: "water",
            stylers: [
                { color: "#b1d2fe" }
            ]
        }
    ];
    astoriaMap.setOptions({styles: noPoi});

    // Initialize dots to be used on the map
    var markers = [];

    // loop through dotData.js and draw dots, info windows
    for (var i = 0; i < dotData.length; i++) {

        var dotMarker = new google.maps.Marker(
            {
                position : new google.maps.LatLng(dotData[i].position.lat, dotData[i].position.lng),
                map : astoriaMap,
                icon : mySmallDot,
                // Swap in "loc" for prod.
                //content : infoBoxHTML(dotData[i]['loc'], dotData[i].imgSrc),
                // Swap in "id" for dev.
                content : infoBoxHTML(dotData[i]['id'], dotData[i].imgSrc, dotData[i].desc  ), // uses grid expanding viewer!
                id: dotData[i]['id'],
            }

        );
        // add current dot to our collection of dots
        markers.push(dotMarker);


        // Mouse over listener for the dots: use opaque dot myBigDot.
        new google.maps.event.addListener(markers[i], 'mouseover', function () {

            this.setIcon(myBigDot);

        });

        // Mouseout listener for the dots: use less opaque dot mySmallDot.
        new google.maps.event.addListener(markers[i], 'mouseout', function () {

            this.setIcon(mySmallDot);

        });

        // Define Overlay components to be bound to dot click events.
        var $overlay = $("<div id = 'overlay'></div>");
        var $gePrev = $("<ul id='og-grid' class='og-grid'></ul>");
        var $closeButton = $('<button id = "closeButton">&times</button>');
        var $cchsIco = $('<img id = "cchsIcon" src = "/static/img/cchs_icon.png">');

        // Build Overlay
        $overlay.append($closeButton);
            // Add cchs icon to our overlay
        $overlay.append($cchsIco);
            // Add an overlay to the body
        $("body").append($overlay);

        // Click listener for dots: show overlay on a click
        // Todo: Grid expanding viewer!
        // Todo: What if I don't have any photos for a given location? Make the dot turn yellow?
        new google.maps.event.addListener(markers[i], 'click', function () {

            var $currImages = this.content; // this will need to be an li a img for each image source found
            // Get image information from the click
            $overlay.append($currImages);
            //console.log('id: ' + this.id + ' imgSrc: ' + this.imgSrc);
            $overlay.fadeIn();

            $closeButton.on('click', function (e) {

                $overlay.fadeOut();

                $(this).next().next().remove(); //ugly but works!

            });

         });

    }

}

// Initialize the map in the DOM upon window load.
google.maps.event.addDomListener(window, 'load', initializeMap);

