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
            currImgHTML += '<img style = "float: left; display: inline-block" src = static/img/' + imgSrc[currImg] + '.png>';
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
    }, {
        id: 2,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Marine Dr. & 10th St.',
        imgSrc: ['image_id_001','image_id_001'],
        position: {
            lat: 46.18973980,
            lng: -123.83271154
        }
    },
    {
        id: 3,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Marine Dr. & 9th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.18975609,
            lng: -123.83370154
        }
    },
    {
        id: 4,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Marine Dr. & 12th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.189693,
            lng: -123.830137
        }
    },
    {
        id: 5,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Commercial St. & 12th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.189030,
            lng: -123.830169
        }
    },
    {
        id: 6,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Commercial St. & 11th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.189040,
            lng: -123.831750
        }
    },
    {
        id: 7,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Commercial St. & 10th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.189065,
            lng: -123.832710
        }
    },
    {
        id: 8,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Commercial St. & 9th St.',
        imgSrc: ['image_id_001'],
        position: {
            lat: 46.189071,
            lng: -123.833720
        }
    },
    {
        id: 9,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Duane St. & 12th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.188350,
            lng: -123.830181
        }
    },
    {
        id: 10,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Duane St. & 11th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.188355,
            lng: -123.831776
        }
    },
    {
        id: 11,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Duane St. & 10th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.188391,
            lng: -123.832738
        }
    },
    {
        id: 12,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Duane St. & 9th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.188400,
            lng: -123.833734
        }
    },
    {
        id: 13,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Exchange St. & 12th St.',
        imgSrc: ['image_id_001'],
        position: {
            lat: 46.187643,
            lng: -123.830204
        }
    },
    {
        id: 14,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Exchange St. & 11th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.187658,
            lng: -123.831789
        }
    },
    {
        id: 15,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Exchange St. & 10th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.187710,
            lng: -123.832766
        }
    },
    {
        id: 16,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Exchange St. & 9th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.187715,
            lng: -123.833752
        }
    },
    {
        id: 17,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Franklin Ave. & 12th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.186952,
            lng: -123.830230
        }
    },
    {
        id: 18,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Franklin Ave. & 11th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.186954,
            lng: -123.831822
        }
    },
    {
        id: 19,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Franklin Ave. & 10th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.186994,
            lng: -123.832767
        }
    },
    {
        id: 20,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Franklin Ave. & 9th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.187015,
            lng: -123.833796
        }
    },
    {
        id: 21,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Grand Ave. & 12th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.186240,
            lng: -123.830255
        }
    },
    {
        id: 22,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Grand Ave. & 11th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.186248,
            lng: -123.831848
        }
    },
    {
        id: 23,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Grand Ave. & 10th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.186279,
            lng: -123.832803
        }
    },
    {
        id: 24,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Grand Ave. & 9th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.186290,
            lng: -123.833801
        }
    },
    {
        id: 25,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Marine Dr. & 8th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.189774,
            lng: -123.834691
        }
    },
    {
        id: 26,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Commercial St. & 8th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.189090,
            lng: -123.834691
        }
    },
    {
        id: 27,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Duane St. & 8th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.188422,
            lng: -123.834725
        }
    },
    {
        id: 28,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Exchange St. & 8th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.187722,
            lng: -123.834745
        }
    },
    {
        id: 29,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Franklin Ave. & 8th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.187042,
            lng: -123.834756
        }
    },
    {
        id: 30,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Grand Ave. & 8th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.186308,
            lng: -123.834777
        }
    },
    {
        id: 31,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Bond St. & 7th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.189787,
            lng: -123.835669
        }
    },
    {
        id: 32,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Commercial St. & 7th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.189109,
            lng: -123.835670
        }
    },
    {
        id: 33,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Duane St. & 7th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.188410,
            lng: -123.835711
        }
    },
    {
        id: 34,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Exchange St. & 7th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.187738,
            lng: -123.835732
        }
    },
    {
        id: 35,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Franklin Ave. & 7th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.1870355,
            lng: -123.835721
        }
    },
    {
        id: 36,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Grand Ave. & 7th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.186331,
            lng: -123.835753
        }
    },
    {
        id: 38,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Duane St. & 13th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.188374,
            lng: -123.829423
        }
    },
    {
        id: 39,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Exchange St. & Exchange St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.187928,
            lng: -123.829377
        }
    },
    {
        id: 40,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Marine Dr. & 14th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.189628,
            lng: -123.828688
        }
    },
    {
        id: 41,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Commercial St. & 14th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.188999,
            lng: -123.828621
        }
    },
    {
        id: 42,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Duane St. & 14th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.188496,
            lng: -123.828565
        }
    },
    {
        id: 43,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Exchange St. & 14th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.187993,
            lng: -123.828505
        }
    },
    {
        id: 44,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Franklin Ave. & 14th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.186994,
            lng: -123.828400
        }
    },
    {
        id: 45,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Grand Ave. & 14th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.185990,
            lng: -123.828299
        }
    },
    {
        id: 46,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Irving Ave. & 14th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.184999,
            lng: -123.828198
        }
    },
    {
        id: 47,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Marine Dr. & 15th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.189375,
            lng: -123.827301
        }
    },
    {
        id: 48,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Commercial St. & 15th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.189040,
            lng: -123.827237
        }
    },
    {
        id: 49,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Duane St. & 15th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.188565,
            lng: -123.827151
        }
    },
    {
        id: 50,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Exchange St. & 15th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.188030,
            lng: -123.827100
        }
    },
    {
        id: 51,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Franklin Ave. & 15th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.187050,
            lng: -123.826998
        }
    },
    {
        id: 52,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Grand Ave. & 15th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.186080,
            lng: -123.826888
        }
    },
    {
        id: 53,
        imageSource: 'CCHS',
        desc : ['image_id_001_desc'],
        loc: 'Irving Ave. & 15th St.',
        imgSrc : ['image_id_001'],
        position: {
            lat: 46.185098,
            lng: -123.826770
        }
    }

];


