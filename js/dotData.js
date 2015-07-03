/**
 * Created by kevinGphillips on 7/3/15.
 */
// An array of dot marker objects

// Notes:
// use: http://www.mapcoordinates.net/en
// to get your list of for desired lat/lng
// store as array? database?
// associate each with a set of images.


function infoBoxHTML(loc, imgSrc){
    var html = '<div>'
        + '<h1 style="float: left">' + loc + '</h1>'
        + '<img style = "float: left; display: inline-block" src = img/' + imgSrc + '.png>'
        + '</div>';
    return html;
}

var dotData = [
    //{
    //    id: 1, // Loc. ID, in order of creation in model.
    //    timeEra: 'bf',//before fire = bf, after fire = af
    //    loc: 'Marine Dr. & 11th St.', //Approximate address
    //    imgSrc : 'image_id_001', //image file name
    //    position: {              // Lat & Lng of address
    //        lat: 46.18966929,
    //        lng: -123.83172154
    //    }
    //},
    {
        id: 1,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Marine Dr. & 11th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.18966929,
            lng: -123.83172154
        }
    }



];