<?php include('inc/header.php'); ?>

    <script type="text/javascript">
        var defPos = new google.maps.LatLng(46.183, -123.82251);
        function initializeMap() {

            // Set up terrain map with a zoom of 15
            var mapOptions = {
                center: defPos,
                zoom: 14,
                mapTypeId: google.maps.MapTypeId.TERRAIN,
                disableDefaultUI: true,
                zoomControl: true,
                panControl: true
            };
            var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

            // turn off points of interest
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
            map.setOptions({styles: noPoi});

            // Display our custom circle on the map
            var mydot = { url: 'img/dot.png', scaledSize: new google.maps.Size(8, 8) };
            // Lat/Lng of circle
            var currPos = new google.maps.LatLng(46.18955929, -123.83172154);

            var dotMarker = new google.maps.Marker({
                // use: http://www.mapcoordinates.net/en
                // to get your list of for desired lat/lng
                // store as array? database?
                // associate each with a set of images.
                position: currPos,
                map: map,
                icon: mydot
            });

            // Add marker window (where pictures will live)
            var contentString =
                '<div>'+
                '<h1 style="float: right">Here is a picture!</h1>'+
                '<img  style="float: right" src="img/downtown_astoria.png">'+
                '</div>';

            var infowindow = new google.maps.InfoWindow({
                content: contentString,
                maxWidth: 1000
//                maxHeight: 1000
            });


            google.maps.event.addListener(dotMarker, 'click', function() {
//                infowindow.open(map,dotMarker);
                infowindow.open(map);
            });


        }

        google.maps.event.addDomListener(window, 'load', initializeMap);
    </script>
    <div id="map-canvas"></div>

<?php include('inc/footer.php'); ?>
