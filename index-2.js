var map, mapInitialSetup;

function onGoogleMapResponse() {     
    initialLocation = {lat: 4.639729, lng: -74.107818};
    mapInitialSetup = {
        center: initialLocation,
        zoom: 11
    }
    map = new google.maps.Map(document.getElementById("mapContainer"), mapInitialSetup);
    getSchools();
}



/*  Obtiene escuelas del dataset y las pone en el mapa */
var schools = [];
function getSchools() {

    $.getJSON("centrosreciclaje.json", function(data){    
        console.log(data);    
        var marker, infoWindow, content;
        for(var i = 2; i < data.length ; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(data[i][2], data[i][3]),
                map: map
            });

            content = "<div style='font-weight:bold;'>" + data[i][0] + "<br>"+ data[i][1]+"</div>";
            infoWindow = new google.maps.InfoWindow({
                content: content
              });
              listenMarker(marker);
              function listenMarker(marker){
                google.maps.event.addListener(marker, 'click', (function(marker, content, infoWindow){
                  return function(){
                    infoWindow.setContent(content);
                    infoWindow.open(map, marker);
                  };
                })(marker, content, infoWindow));      
              }
            schools.push(marker);
        }

        //var markerCluster = new MarkerClusterer(map, schools,
          //  {imagePath: './m'});
      
    })
    
}

$(document).ready(function() {
    //getSchools();
});