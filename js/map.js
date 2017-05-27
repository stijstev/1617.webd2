var map;

google.maps.event.addDomListener(window, "load", initMaps);

function initMaps(){
    var divMap = document.getElementById("map");

    var mapOptions = {
        zoom: 12,
        center: new google.maps.LatLng(51.057054, 3.73097)
    };
    map = new google.maps.Map(divMap, mapOptions);

    fetchJSONFile("https://api.myjson.com/bins/86xs1", function(data){
        map.setOptions({
            styles: data
        });
    });

}

function fetchJSONFile(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send(); 
}
