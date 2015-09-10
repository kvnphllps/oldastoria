/**
 * Created by kevinGphillips on 7/3/15.
 */
// An array of dot marker objects

// Notes:
// use: http://www.mapcoordinates.net/en
// to get your list of for desired lat/lng
// store as array? database?
// associate each with a set of images.

// Original function, here imgSrc is a single string
//function infoBoxHTML(id, imgSrc){
//    var html = '<div id="currPics">'
//        + '<h2>' + id + '</h2>' + '<br>'
//        + '<img style = "float: left; display: inline-block" src = img/' + imgSrc + '.png>'
//        + '</div>';
//    return html;
//}

// Generalize to accept imgSrc as an array
function infoBoxHTML(id, imgSrc){
    var html = '<div id="currPics">'
        + '<h2>' + id + '</h2>' + '<br>';

    var endHTML = '</div>';

    var currImgHTML = '';

    if (imgSrc[0].length>0){
        for (var currImg in imgSrc){
            currImgHTML += '<img style = "float: left; display: inline-block" src = img/' + imgSrc[currImg] + '.png>';
        }
    } else {
        currImgHTML += '<h2>There is no image currently available for this location. <br>'
                    +  'Have one you would like to contribute? Get in touch!</h2>';

    }

    return html+currImgHTML+endHTML;
}


// Third generation: use the grid expanding viewer


var dotData = [
    //{
    //    id: 1, // Loc. ID, in order of creation in model.
    //    imageSource: 'CCHS', imageSource: 'CCHS',
    //    desc: [array of descriptors for each image]
    //    loc: 'Marine Dr. & 11th St.', //Approximate address
    //    imgSrc : ['image_id_001'], //array of image file names
    //    position: {              // Lat & Lng of address
    //        lat: 46.18966929,
    //        lng: -123.83172154
    //    }
    //},
    {
        id: 1,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Marine Dr. & 11th St.',
        imgSrc : [''], // wire up to test images
        position: {
            lat: 46.1897300,
            lng: -123.83172154
        }
    }
];


