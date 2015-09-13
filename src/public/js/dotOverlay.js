/**
 * Created by kevinGphillips on 9/13/15.
 */

// Generate html for each dot-bound overlay.

function dotOverlayGenerator(id){
// Define Overlay components:
    // Overlay container
    var $overlay = $("<div id = 'overlay'></div>");
    // Close button
    var $closeButton = $('<button id = "closeButton">&times</button>');
    // Title = location
    var $title = $("<h2></h2>");
    $title.append(id);
    // The image(s) container
    var $gePrevContainer = $("<ul id='og-grid' class='og-grid'></ul>");
    // Social media container: your facebooks, twitters, instagrams
    var $socialMedia = $("<div></div>");
    // Historical society emblem
    //var $cchsIco = $('<img id = "cchsIcon" src = "/static/img/cchs_icon.png">');

// Build grid expanding viewer content

    // The available images
    var currPics = dotData[id].imgSrc;

    // If we have images for this location
    if (currPics.length>0) {

    // Build out gePrev
        for (var currKey in currPics) {
            // The images to be placed in the container
            // build gePrev... here is the pattern

//        <li>
//          <a href="http://cargocollective.com/jaimemartinez/" data-largesrc="images/1.jpg" data-title="Azuki bean" data-description="Swiss chard pumpkin bunya nuts maize plantain aubergine napa cabbage soko coriander sweet pepper water spinach winter purslane shallot tigernut lentil beetroot.">
//          <img src="images/thumbs/1.jpg" alt="img01"/>
//        </a>
//        </li>


        }
    }
    // Else we don't have images and ask for help getting them!
    else {
            currImgHTML += '<h2>There is no image currently available for this location. <br>'
                +  'Have one you would like to contribute? Get in touch!</h2>';
    }

// Build Overlay out of components

    // Add close button
    $overlay.append($closeButton);
    // Add title
    $overlay.append($title);
    // Add gePrev
    //$overlay.append($gePrev);
    // Add cchs icon to our overlay
    //$overlay.append($cchsIco);

    return $overlay;

}
