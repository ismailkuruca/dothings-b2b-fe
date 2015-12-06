
function generateMapImage(center, markers) {

    var baseURL = 'https://maps.googleapis.com/maps/api/staticmap';
    var mapFocus = '?center=' +  center.lat + ',' + center.lon + '&zoom=18&size=400x300&style=saturation:-100';
    var marker = '&markers=size:mid|color:red|';
    var imageURL = baseURL + mapFocus;
    for(var i = 0; i < markers.length; i++) {
      imageURL += marker + markers[i].lat + ',' + markers[i].lon;
    }

    return imageURL;
}
