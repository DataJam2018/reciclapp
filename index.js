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
function getSchools() {

    $.ajax({
        url: "http://datosabiertos.bogota.gov.co/api/action/datastore_search?resource_id=8e3cdb48-266f-45bd-8006-21040db5b876",
        data: "data",
        type: "GET",
        dataType: "jsonp",        
        success: function(result) {
            console.log(result);
        }
    })
}

$(document).ready(function() {
    getSchools();
});