<!DOCTYPE html>
<html>
<head>
    <style type="text/css">
        html, body, #map-canvas { height: 100%; margin: 0; padding: 0;}
        nav {
            /*font-family: "Georgia", Times, serif;*/
            font-family: futura;
            font-size: 2em;
            background-color: #006377;
            color: lightgray;
        }
        nav ul{
            list-style: none;
            margin: 0px 20px; /*Top/Bottom Left/Right*/
            padding: 5px ;
        }

        nav li{
            display: inline-block;
        }


    </style>
    <script type="text/javascript"
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCvwzyVrSGH229FQOFZC1NgSX3JRs1Wkng">
    </script>
    <script type="text/javascript">
        function initialize() {
            var mapOptions = {
                center: { lat: 46.185, lng: -123.8311},
                zoom: 15
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
        <nav>
            <ul>
                <li>
                    Old Astoria
                </li>
                <li>
                    <div style="font-size: small" style="font-family: Arial">a mapping of historical <br> photos from the CCHS</div>
                </li>


                <li>About</li>
            </ul>
        </nav>
    </header>
<div id="map-canvas"></div>
</body>
</html>