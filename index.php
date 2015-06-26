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
        var cityCircle;
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

            // Construct the circle for each location in citymap.
//            var citymap = {};
//            citymap['marker1'] = {
//                center: new google.maps.LatLng(46.189, -123.8311),
//                population: 4
//            };
//
//            var populationOptions = {
//                strokeColor: '#c25a5c',
//                strokeOpacity: 1,
//                strokeWeight: 1,
//                fillColor: '#c25a5c',
//                fillOpacity: 1,
//                map: map,
//                center: citymap['marker1'].center,
//                radius: Math.sqrt(citymap['marker1'].population) * 10
//            };
//            // Add the circle for this city to the map.
//            cityCircle = new google.maps.Circle(populationOptions);


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
                <li><a href="#">About</a></li>
                <li><a href="#">Feedback</a></li>
            </ul>
        </nav>
    </header>
    <div id="map-canvas"></div>
</body>
</html>