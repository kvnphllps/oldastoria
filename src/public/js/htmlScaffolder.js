


var numRecords = infos.length;

htmlScaffold = '<ul id="og-grid" class="og-grid">' ;

for (var i = 0; i < numRecords; i++) {
	htmlScaffold += '<li>' +
						'<a href= "" data-largesrc= "' +  infos[i].largesrc  +  '" >' +
							'<img src= "' + infos[i].src + '"/>' +
						'</a>' +
					'</li>';
};


htmlScaffold += '</ul>' ;