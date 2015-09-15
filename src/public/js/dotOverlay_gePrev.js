/**
 * Created by kevinGphillips on 9/13/15.
 */


// Get image directory for thumbs and expanded image sizes
// Eventually we will consume our API via AWS to access images on s3
// s3 = simple service storage service.
// Images get the same name in both directories.

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

$(function() {

    // update image source as needed
    var infos = $.map(dotData, function (info, id) {
        return $.extend({
            largesrc: imageUrl(id),
            src: thumbUrl(id)
        }, info);
    });

    // Build the expandable grid.
    $('.main')
        .show()
        .expandableGrid({
            rowHeight: 200
        }, infos);

    // Build the details aspect of the grid
    $('.main').on('og-fill', 'li', function(e, div) {
        var id = $(this).data('image-id');
        $(div).empty().append(
            $('#og-details-template').clone().removeAttr('id').show());
        $(div).find('.title').text(dotData[id].loc);
    });



});




var rowHeight = 200;

// Details template for each image
var $details = '<div id="og-details-template" style="display:none">' +
                '<h3 class="title">TESTING</h3>' +
                '<p class="description"> Placeholder </p>'
               '</div>';

// Todo (kvnphllps) Expand the image details page according to this guide from danvk's oldnyc.org

// Full image details template from oldnyc.org //
//<div id="image-details-template" style="display: none;">
//    <div class="details">
//    <div class="description"></div>
//    <div class="text"></div>
//    <div class="more-on-back" style="display:none">
//    There's no description available for this photo, but there may be some
//text on the back of the image in the
//<a class="nypl" href="/" target="_blank">NYPL Digital Collections</a>.
//If so, you can help OldNYC by
//<a class="ocr-tool" href="/" target="_blank">transcribing it</a>.
//</div>
//<div class="feedback-link">Errors? <a href="#" class="feedback-button">Send feedback</a></div>
//<div class="social">
//    <div class="copy-link">
//    <span class="octicon octicon-clippy"></span>
//    <a href="#" class="email-share">Copy Link</a>
//</div>
//<div class="tweet"></div>
//    <div class="facebook-holder"></div>
//    </div>
//    <div class="comments"></div>
//    </div>
//    <div class="feedback" style="display: none;">
//    <p><a class="back" href="#">← back</a></p>
//<p>Tell us more about this image!</p>
//<button feedback="cut-in-half">It's only part of an image</button>
//<button feedback="large-border">It has an excessively large border</button>
//<button feedback="multiples">It's actually multiple images</button>
//<button feedback="wrong-location">It's in the wrong location</button>
//<p class="suggest-date">Suggest a date:
//    <input type="text" placeholder="Sept. 7, 1941">
//    <button feedback-param="true" feedback="date">Suggest</button></p>
//<p></p>
//</div>
//</div>


// HTML for the div that gets inserted when an image is clicked on.




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
