/**
 * Created by kevinGphillips on 6/29/15.
 */

// Modularize our storage of images: can be local or production
function thumbUrl(id) {
    // eventually use a webservice to host our image assets
    //return 'https://s3.amazonaws.com/oldastoria/thumb/' + id + '.jpg';
    return '/static/img/thumbs/' + id + '.jpg';
}

function imageUrl(id) {
    // eventually use a webservice to host our image assets
    //return 'https://s3.amazonaws.com/oldastoria/500px/' + id + '.jpg';
    return '/static/img/500px/' + id + '.jpg';
}

// Default dot style
var mySmallDot = {
    path: google.maps.SymbolPath.CIRCLE,
    strokeWeight: 0,
    fillColor: "#c1595a",
    fillOpacity: 0.5,
    strokeColor:"#c1595a",
    strokeOpacity: 0.5,
    scale: 5

};

// Hover (mouse-over) state dot style
var myBigDot = {
    path: google.maps.SymbolPath.CIRCLE,
    strokeWeight: 3,
    fillColor:  "#c1595a",// "#ffe07b",
    fillOpacity: 1.0,
    strokeOpacity: 1.0,
    strokeColor: "#c1595a",//"#ffe07b",
    scale: 7
};


// Define default map centering for a given zoom

// Defaults: if zoom = 14 then:
//var defaultZoom = 14;
//var defPos = new google.maps.LatLng(46.186, -123.81251);

// Defaults: if zoom = 16 then:
var defaultZoom = 16;
var defPos = new google.maps.LatLng(46.188547, -123.827159); // position of 15th and Duane near org. Astor Fort.

// Bounds on map zoom
var mapMinZoom = 14;
var mapMaxZoom = 17;

var infos;
// Grid expanding previewer
function gePrev(infos, currId) {

// over in ASP.NET world we will pass the current marker and the current geo data
// to get our data organization correct - not a big deal.

            // Pass the infos data object to our HTML scaffolder. (homebrewed by kp) 
            var numRecords = infos.length;
            var htmlScaffold = '<ul id="og-grid" class="og-grid">' ;

            for (var i = 0; i < numRecords; i++) {
                htmlScaffold += '<li>' +
                                    '<a href= "#" data-largesrc= "' +  infos[i].largesrc  +  '" data-title =" '+ infos[i].date  +'" data-description = "'+ infos[i].dscrptn + '" >' +
                                        '<img src= "' + infos[i].src + '"/>' +
                                    '</a>' +
                                '</li>';
            }

            htmlScaffold += '</ul>' ;
            // Critical to the function of the grid expander functionality
            htmlScaffold += '<script src="static/js/grid.js"></script>';
            htmlScaffold += '<script> $(function() {Grid.init();});</script>';

            return htmlScaffold;

}

var markers = [];

function initializeMap() {


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
            style: google.maps.ZoomControlStyle.LARGE,
            position: google.maps.ControlPosition.LEFT_BOTTOM
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
                //{ color: "#b1d2fe" }
                // { color: "#cae9eb" } // From Alma Chocolate
                 {color: "#ade3e6"}
            ]
        }
    ];
    astoriaMap.setOptions({styles: noPoi});

    // loop through dotData.js and draw dots, info windows
    for (var i = 0; i < Object.keys(dotData).length; i++) {

        var dotMarker = new google.maps.Marker(
            {
                position : new google.maps.LatLng(dotData[i].position.lat, dotData[i].position.lng),
                map : astoriaMap,
                icon : mySmallDot,
                id: dotData[i].id
            }
        );

        markers.push(dotMarker);

        // Mouse over listener for the dots: use opaque dot myBigDot.
        new google.maps.event.addListener(markers[i], 'mouseover', function () {

            this.setIcon(myBigDot);

        });

        // Mouseout listener for the dots: use less opaque dot mySmallDot.
        new google.maps.event.addListener(markers[i], 'mouseout', function () {

            this.setIcon(mySmallDot);

        });
        
        

        new google.maps.event.addListener(markers[i], 'click', function () {
            
            // Current dot location text
            var currLoc = dotData[this.id].loc;

            // Records associated with current dot
            var recs = dotData[this.id].records;

            // Extend json schema to modular photo source
            infos = $.map(recs, function(info, id) {
                return $.extend({
                    id: id,
                    largesrc: imageUrl(id),
                    src: thumbUrl(id)
                }, info);
            });

            var thumbGridHTML = gePrev(infos, this.id);

            $('.main').append(thumbGridHTML).show();
                 
            $('.main').find('.location').text(currLoc); 

        
            $('#mainCloseButton').on('click', function() {
                $('.main').hide();
                $('.main').find('.og-grid').remove(); // clean the slate!
            });



            // $('.main').on('og-fill', 'li', function(e, div) {
            //     var id = $(this).data('image-id'); // BLLLACCCK MAGIC$$$
            var fbLinker = "(data-href='http://developers.facebook.com/docs/plugins/comments/', data-width='328', data-numposts='5')";
            //     $(div).empty().append(
            //         $('#og-details').clone().removeAttr('id').show());
            //     $(div).find('.title').text(recs[id].date);
            //     $(div).find('.dscrptn').text(recs[id].dscrptn);
            //     $(div).find('.picSource').text(recs[id].imageSrc);
            //     // This is the janky-ist $hit! jeez, fb!
                $('.fb-comments-container').find('.fb-comments span').css({"width":"100%"});
                $('.fb-comments-container').find('.fb-comments span iframe').css({"width":"100%"});
            // });


        });
    }
}

// Initialize the map in the DOM upon window load.
google.maps.event.addDomListener(window, 'load', initializeMap);

