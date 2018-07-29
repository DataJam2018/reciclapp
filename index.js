var map, mapInitialSetup;

function onGoogleMapResponse() {     
    initialLocation = {lat: 4.639729, lng: -74.107818};
    mapInitialSetup = {
        center: initialLocation,
        zoom: 11
    }
    map = new google.maps.Map(document.getElementById("mapContainer"), mapInitialSetup);
}



/*  Obtiene escuelas del dataset y las pone en el mapa */
var schools = [];
function getSchools() {

    $.getJSON("institucionesedsuperior.json", function(data){
        console.log(data);
        var marker;
        for(var i = 0; i < data.length ; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(data[i].coord_y, data[i].coord_x),
                map: map
            });
            schools.push(marker);
        }

        var markerCluster = new MarkerClusterer(map, schools,
            {imagePath: './m'});
      
    })
    
}

$(document).ready(function() {
    getSchools();
});