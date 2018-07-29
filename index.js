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
var currentSchool = "";

var schools = [];
function getSchools() {

    $.getJSON("institucionesedsuperior.json", function(data){        
        var marker, infoWindow, content, name;
        for(var i = 0; i < data.length ; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(data[i].coord_y, data[i].coord_x),
                map: map
            });
            name = data[i].Institución
            content = "<div style='font-weight:bold;'>" + name + "<br>"+ data[i].Dirección+"</div>";
            infoWindow = new google.maps.InfoWindow({
                content: content
              });
              listenMarker(marker);
              function listenMarker(marker){
                google.maps.event.addListener(marker, 'click', (function(marker, content, infoWindow){
                  return function(){
                    infoWindow.setContent(content);
                    infoWindow.open(map, marker);
                    showContent(content);
                  };
                })(marker, content, infoWindow));      
              }
            schools.push(marker);
        }

        var markerCluster = new MarkerClusterer(map, schools,
            {imagePath: './m'});
      
    })    
}

function showContent(name) {
    $("#woodcheck").removeAttr('checked');
    $("#glasscheck").removeAttr('checked');
    $("#metalcheck").removeAttr('checked');
    var num = Math.floor(Math.random() * 20);
    $("#schoolName").html(name.toUpperCase());
    if(num%2 == 0) {
        $("#woodcheck").attr('checked', 'checked');
        $("#glasscheck").attr('checked', 'checked');
    } else {
        $("#metalcheck").attr('checked', 'checked');
    }
    $("#num-kgs").text(num);
}

$(document).ready(function() {
    //getSchools();
});