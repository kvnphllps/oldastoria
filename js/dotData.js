/**
 * Created by kevinGphillips on 7/3/15.
 */
// An array of dot marker objects

// Notes:
// use: http://www.mapcoordinates.net/en
// to get your list of for desired lat/lng
// store as array? database?
// associate each with a set of images.


function infoBoxHTML(id, imgSrc){
    var html = '<div id="currPics">'
        + '<h2>' + id + '</h2>' + '<br>'
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
    }, {
        id: 2,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Marine Dr. & 10th St.',
        imgSrc: 'image_id_001',
        position: {
            lat: 46.18966929,
            lng: -123.83271154
        }
    },
    {
        id: 3,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Marine Dr. & 9th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.18966929,
            lng: -123.83370154
        }
    },
    {
        id: 4,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Marine Dr. & 12th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.189603,
            lng: -123.830137
        }
    },
    {
        id: 5,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Commercial St. & 12th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.188950,
            lng: -123.830169
        }
    },
    {
        id: 6,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Commercial St. & 11th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.188982,
            lng: -123.831743
        }
    },
    {
        id: 7,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Commercial St. & 10th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.188991,
            lng: -123.832710
        }
    },
    {
        id: 8,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Commercial St. & 9th St.',
        imgSrc: 'image_id_001',
        position: {
            lat: 46.189001,
            lng: -123.833720
        }
    },
    {
        id: 9,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Duane St. & 12th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.188239,
            lng: -123.830181
        }
    },
    {
        id: 10,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Duane St. & 11th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.188285,
            lng: -123.831776
        }
    },
    {
        id: 11,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Duane St. & 10th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.188291,
            lng: -123.832738
        }
    },
    {
        id: 12,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Duane St. & 9th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.188320,
            lng: -123.833734
        }
    },
    {
        id: 13,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Exchange St. & 12th St.',
        imgSrc: 'image_id_001',
        position: {
            lat: 46.187553,
            lng: -123.830234
        }
    },
    {
        id: 14,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Exchange St. & 11th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.187588,
            lng: -123.831811
        }
    },
    {
        id: 15,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Exchange St. & 10th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.187610,
            lng: -123.832766
        }
    },
    {
        id: 16,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Exchange St. & 9th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.187615,
            lng: -123.833752
        }
    },
    {
        id: 17,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Franklin Ave. & 12th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.186872,
            lng: -123.830255
        }
    },
    {
        id: 18,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Franklin Ave. & 11th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.186894,
            lng: -123.831822
        }
    },
    {
        id: 19,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Franklin Ave. & 10th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.186914,
            lng: -123.832767
        }
    },
    {
        id: 20,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Franklin Ave. & 9th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.186934,
            lng: -123.833776
        }
    },
    {
        id: 21,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Grand Ave. & 12th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.186175,
            lng: -123.830255
        }
    },
    {
        id: 22,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Grand Ave. & 11th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.186208,
            lng: -123.831848
        }
    },
    {
        id: 23,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Grand Ave. & 10th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.186220,
            lng: -123.832803
        }
    },
    {
        id: 24,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Grand Ave. & 9th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.186250,
            lng: -123.833801
        }
    },
    {
        id: 25,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Marine Dr. & 8th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.189674,
            lng: -123.834691
        }
    },
    {
        id: 26,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Commercial St. & 8th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.188993,
            lng: -123.834691
        }
    },
    {
        id: 27,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Duane St. & 8th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.188355,
            lng: -123.834725
        }
    },
    {
        id: 28,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Exchange St. & 8th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.187654,
            lng: -123.834745
        }
    },
    {
        id: 29,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Franklin Ave. & 8th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.186986,
            lng: -123.834766
        }
    },
    {
        id: 30,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Grand Ave. & 8th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.186258,
            lng: -123.834777
        }
    },
    {
        id: 31,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Bond St. & 7th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.189697,
            lng: -123.835669
        }
    },
    {
        id: 32,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Commercial St. & 7th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.189019,
            lng: -123.835670
        }
    },
    {
        id: 33,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Duane St. & 7th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.188350,
            lng: -123.835711
        }
    },
    {
        id: 34,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Exchange St. & 7th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.187685,
            lng: -123.835732
        }
    },
    {
        id: 35,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Franklin Ave. & 7th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.186964,
            lng: -123.835721
        }
    },
    {
        id: 36,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Grand Ave. & 7th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.186271,
            lng: -123.835753
        }
    },
    {
        id: 38,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Duane St. & 13th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.188274,
            lng: -123.829423
        }
    },
    {
        id: 39,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Exchange St. & Exchange St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.187828,
            lng: -123.829377
        }
    },
    {
        id: 40,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Marine Dr. & 14th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.189538,
            lng: -123.828688
        }
    },
    {
        id: 41,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Commercial St. & 14th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.188899,
            lng: -123.828621
        }
    },
    {
        id: 42,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Duane St. & 14th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.188396,
            lng: -123.828565
        }
    },
    {
        id: 43,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Exchange St. & 14th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.187893,
            lng: -123.828495
        }
    },
    {
        id: 44,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Franklin Ave. & 14th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.186897,
            lng: -123.828400
        }
    },
    {
        id: 45,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Grand Ave. & 14th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.185950,
            lng: -123.828299
        }
    },
    {
        id: 46,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Irving Ave. & 14th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.184940,
            lng: -123.828198
        }
    },
    {
        id: 47,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Marine Dr. & 15th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.189290,
            lng: -123.827341
        }
    },
    {
        id: 48,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Commercial St. & 15th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.188974,
            lng: -123.827237
        }
    },
    {
        id: 49,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Duane St. & 15th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.188465,
            lng: -123.827151
        }
    },
    {
        id: 50,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Exchange St. & 15th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.187960,
            lng: -123.827109
        }
    },
    {
        id: 51,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Franklin Ave. & 15th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.186978,
            lng: -123.826998
        }
    },
    {
        id: 52,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Grand Ave. & 15th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.185983,
            lng: -123.826888
        }
    },
    {
        id: 53,
        timeEra: 'bf',//before fire = bf, after fire = af
        loc: 'Irving Ave. & 15th St.',
        imgSrc : 'image_id_001',
        position: {
            lat: 46.185006,
            lng: -123.826770
        }
    }

];


