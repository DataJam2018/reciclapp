var map, mapInitialSetup;

function onGoogleMapResponse() {     
    initialLocation = {lat: 4.639729, lng: -74.107818};
    mapInitialSetup = {
        center: initialLocation,
        zoom: 11
    }
    map = new google.maps.Map(document.getElementById("mapContainer"), mapInitialSetup);
}