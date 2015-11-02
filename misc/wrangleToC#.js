// Wrangle to Geo in Configuration.cs

// for (var i = 0; i<numEl; i++){ console.log('new Geo() {Id='+dotData[i].id+', lat ='+dotData[i].position.lat+', lng='+dotData[i].position.lng+', loc='+ '"'  + dotData[i].loc + '"},'  )}


// Wrangle to GeoDetails in Configuration.cs

numEl = Object.keys(dotData).length;
numRec = 4; // set equal to the number of test images we have from codrops
var k = 1;
for (var i = 0; i < numEl; i++){

    geoId = dotData[i].id;

    for (var j = 1; j < numRec; j++) {



        console.log('new GeoDetails() {' +
            'Id = '  + k  +
            ', imgName = "' + 'image_00' + j + '"'+
            ', year = ' + '189' + j +
            ', cumtuxId = "' + '0' +j+  '0.23"'  +
            ', desc = "' + 'Mumblecore yr wayfarers, vinyl hashtag cray biodiesel Neutra raw denim Helvetica selvage single-origin coffee. Vice PBR irony, vinyl trust fund literally gentrify. Taxidermy cornhole Carles flannel, cold-pressed lumbersexual 90s you probably have not heard of them High Life kale chips. Hella typewriter +1, readymade organic distillery flannel. Portland butcher pork belly, church-key mustache beard mlkshk. Distillery occupy mixtape, flexitarian listicle leggings slow-carb Marfa mlkshk Thundercats church-key gentrify DIY. Chillwave fashion axe Odd Future Bushwick next level mumblecore, irony cray Truffaut authentic stumptown.Mumblecore yr wayfarers, vinyl hashtag cray biodiesel Neutra raw denim Helvetica selvage single-origin coffee. Vice PBR irony, vinyl trust fund literally gentrify. Taxidermy cornhole Carles flannel, cold-pressed lumbersexual 90s you probably have heard of them High Life kale chips. Hella typewriter +1, readymade organic distillery flannel. Portland butcher pork belly, church-key mustache beard mlkshk. Distillery occupy mixtape, flexitarian listicle leggings slow-carb Marfa mlkshk Thundercats church-key gentrify DIY. Chillwave fashion axe Odd Future Bushwick next level mumblecore, irony cray Truffaut authentic stumptown."'  +
            ', tags = "' + 'people signage river boat salmon children school victorian flavel"' +
            ', geoId = ' + geoId  +
            '}' );

        k+=1;

    }

}