/**
 * Created by kevinGphillips on 9/13/15.
 */

// HTML for the div that gets inserted when an image is clicked on.



//<div class="og-expander">
//    <div class="og-expander-inner">
//    <span class="og-close"></span>
//    <div class="og-fullimg">
//    <div class="og-loading"></div>
//    <img src="images/2.jpg">
//    </div>
//    <div class="og-details">
//    <h3>Veggies sunt bona vobis</h3>
//<p>Komatsuna prairie turnip wattle seed artichoke mustard horseradish taro rutabaga ricebean carrot black-eyed pea turnip greens beetroot yarrow watercress kombu.</p>
//<a href="http://cargocollective.com/jaimemartinez/">Visit website</a>
//</div>
//</div>
//</div>


// Generate html for each dot-bound overlay.

function dotOverlayGenerator(dotID){
// Define Overlay components:
    // Overlay container
    var $overlay = $("<div id = 'overlay' class = 'main' ></div>");
    // Close button
    var $closeButton = $('<button id = "closeButton">&times</button>');
    // Title = location
    var $title = $("<h2></h2>");
    $title.append(dotID);
    // The image(s) container
    var $gePrevContainer = $("<ul id='og-grid' class='og-grid'></ul>");
    // Social media container: your facebooks, twitters, instagrams
    var $socialMedia = $("<div></div>");
    // Historical society emblem
    //var $cchsIco = $('<img id = "cchsIcon" src = "/static/img/cchs_icon.png">');

// Build grid expanding viewer content

    // The available images
    var currPics = dotData[dotID].imgSrc;
    var currDesc = dotData[dotID].desc;
    var currLoc = dotData[dotID].loc;

    // HTML to be generated for imported pics
    var $currImgHTML = '';

    // If we have images for this location
    if (currPics.length>0) {

    // Build out gePrev
        for (var currKey in currPics) {
            // The images to be placed in the container
            // build gePrev... here is the pattern

            $currImgHTML += '<li>' +
                '<a href = "" data-largesrc = " ' + '/static/img/' + currPics[currKey] +  ' " ' + 'data-title = "' + currLoc + '"' + ' data-description = "' + currDesc[currKey] + '">' +
                '<img src = "' + '/static/img/thumbs/' + currPics[currKey] + ' " alt = " '+ currPics[currKey] + '">' +
                '</a>' +
                '</li>';

        }
    }
    // Else we don't have images and ask for help getting them!
    else {
            $currImgHTML += '<h2>There is no image currently available for this location. <br>'
                +  'Have one you would like to contribute? Get in touch!</h2>';
    }

// Build Overlay out of components

    // Add close button
    $overlay.append($closeButton);
    // Add title
    $overlay.append($title);
    // Add gePrev
    $overlay.append($currImgHTML);
    // Add cchs icon to our overlay
    //$overlay.append($cchsIco);

    return $overlay;

}
