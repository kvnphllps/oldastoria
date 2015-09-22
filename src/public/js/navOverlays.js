/**
 * Created by kevinGphillips on 9/9/15.
 */

// Build overlay for nav elements

// Define Overlay components to be bound to dot click events.
var $overlay = $("<div id = 'navOverlay'></div>");
var $closeButton = $('<button class = "navCloseButton">&times</button>');

// Todo: Template these out using Jade ... will require express routing and rendering (i think)
var aboutText = "Inspired by <a href = 'http://oldnyc.org' target='_blank'><strong>oldnyc.org</strong></a> and" +
    " <a href = 'http://oldsf.org' target='_blank'> <strong> oldsf.org </strong></a> this map presents " +
    "a mapping of historical photos of Astoria, OR.";

var feedbackText = "Find an error? Please let us know! Please email us a description of the error you found including the location and image in question! Thank you.";

var contributeText = "Want to help make this resource better for everyone? Send us your pictures! Help us scan new ones! Update our database and image collection! All inquiries welcome.";

// Capture the click event on a link (anchor element) to an image. Get the href.
$(".navBits a").click(function (event) {
        event.preventDefault();

        // Add close button to nav overlay first
        $overlay.append($closeButton);

        // Determine which nav element we clicked on.
        var navText = this.innerHTML;

        $overlay.append("<h1>"+navText+"</h1>");

        // Add content based on selection
        if (navText.toLowerCase() === 'about'){
            $overlay.append("<p>"+aboutText+"<p>");
        } else if (navText.toLowerCase() === 'feedback'){
            $overlay.append("<p>"+feedbackText+"<p>");
        } else {
            $overlay.append("<p>"+contributeText+"<p>");
        }


        // Build Overlay

        // Add an overlay to the body
        $("body").append($overlay);
        $overlay.fadeIn("fast");

        $closeButton.on('click', function (e) {
            $overlay.fadeOut("fast");
            $overlay.children().remove();

        });

    }
);

