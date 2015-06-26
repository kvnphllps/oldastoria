<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="css/main.css"/>
    <link rel="stylesheet" href="css/normalize.css"/>
    <link href='http://fonts.googleapis.com/css?family=Ultra|Fjalla+One|Francois+One' rel='stylesheet' type='text/css'>
    <script type="text/javascript"
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCvwzyVrSGH229FQOFZC1NgSX3JRs1Wkng">
    </script>
    <script type="text/javascript">

        var defaultPosition = new google.maps.LatLng(46.189, -123.8311);
        var nodeCircle;
        function initializeMap() {
            var mapOptions = {
                center: defaultPosition,
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.TERRAIN,
                disableDefaultUI: true,
                zoomControl: true,
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
            var offset = 10;
            var size = 2;
            var scaleFactor = size/16;
            var dotMarker = new google.maps.Marker({
                position: defaultPosition,
//                map: map,
                icon: new google.maps.MarkerImage(
                    'img/dot.png',
                    new google.maps.Size(16*scaleFactor, 16*scaleFactor), // desired size
                    new google.maps.Point(0, offset*scaleFactor), // offset within the scaled sprite
                    new google.maps.Point(size/2, size/2), // anchor point is half of the desired size
                    new google.maps.Size(16*scaleFactor, 48*scaleFactor) // scaled size of the entire sprite
                )
            });
        }

        google.maps.event.addDomListener(window, 'load', initializeMap);

    </script>
    <title>Old Astoria</title>
</head>
<body>
    <header>
        <a href="index.php">
            <h1>OLD ASTORIA</h1>
        </a>
        <div id="littlebits">
            a mapping of historical photos from the <br>
            <a href="http://www.cumtux.org/" target="_blank">Clatsop County Historical Society</a>
        </div>
        <nav>
            <ul>
                <li><a href="#">Before 1922</a></li>
                <li><a href="#">After 1922</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Feedback</a></li>
            </ul>
        </nav>
    </header>
    <div id="map-canvas"></div>
</body>
</html>