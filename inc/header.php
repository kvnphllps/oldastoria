<? require_once("inc/map_api_config.php"); ?>
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="css/main.css"/>
    <link rel="stylesheet" href="css/normalize.css"/>
    <link href='http://fonts.googleapis.com/css?family=Ultra|Fjalla+One|Francois+One' rel='stylesheet' type='text/css'>
    <script type="text/javascript"
            src="https://maps.googleapis.com/maps/api/js?key=<? echo OLDASTORIA_API_KEY ?>">
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
            <li><a href="#">Before the fire of 1922</a></li>
            <li><a href="#">After 1922</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Feedback</a></li>
        </ul>
    </nav>
</header>