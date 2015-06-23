<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="css/main.css"/>
    <link rel="stylesheet" href="css/responsive.css"/>
    <link rel="stylesheet" href="css/normalize.css"/>
    <script type="text/javascript"
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCvwzyVrSGH229FQOFZC1NgSX3JRs1Wkng">
    </script>
    <script type="text/javascript">
        function initialize() {
            var mapOptions = {
                center: { lat: 46.189, lng: -123.8311},
                zoom: 16
            };
            var map = new google.maps.Map(document.getElementById('map-canvas'),
                mapOptions);
        }
        google.maps.event.addDomListener(window, 'load', initialize);
    </script>
    <title>Old Astoria</title>
</head>

<body>
    <header>
        <a href="index.php">
            <h1 > Old Astoria</h1>
        </a>
        <div id="littlebits">a mapping of
            historical photos from the <br>
            <a href="http://www.cumtux.org/" target="_blank">Clatsop County Historical Society</a></div>
        <nav>
            <ul>
                <li id="about">About</li>
            </ul>
        </nav>
    </header>
    <div id="wrapper">
<!--        <div id="map-canvas"></div>-->
    </div>
</body>
</html>