var contactLatitude = 42;
var contactLongitude = -72;

function initialize() {
  var mapCanvas = document.getElementById('map_canvas2');
  var myLatLng = {
    lat: contactLatitude,
    lng: contactLongitude
  };
  var mapOptions = {
    center: new google.maps.LatLng(contactLatitude, contactLongitude),
    zoom: 8,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);
  addMarker(myLatLng, map);
}

function addMarker(location, map) {
  var marker = new google.maps.Marker({
    position: location,
    title: 'Home Center',
    map: map
  });
}

google.maps.event.addDomListener(window, 'load', initialize);