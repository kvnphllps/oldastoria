<?php include('inc/header.php'); ?>

    <script type="text/javascript">
        var defPos = new google.maps.LatLng(46.185, -123.8311);
        function initializeMap() {
            var mapOptions = {
                center: defPos,
                zoom: 15,
                mapTypeId: google.maps.MapTypeId.TERRAIN,
                disableDefaultUI: true,
                zoomControl: false,
                panControl: true
            };
            var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

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
//            var image = {
//                url: img/dot.png,
//                scaledSize : new google.maps.Size(5,5)
//        }

            var mydot = { url: 'img/dot.png', scaledSize: new google.maps.Size(8, 8) };

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
        }

        google.maps.event.addDomListener(window, 'load', initializeMap);
    </script>
    <div id="map-canvas"></div>

<?php include('inc/footer.php'); ?>
