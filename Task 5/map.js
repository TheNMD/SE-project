var center_coord = {
  lat: 10.7721165,
  lng: 106.6579187
};
var mcp1_coord = {
  lat: 10.7630909,
  lng: 106.6824733
};
var mcp2_coord = {
  lat: 10.8073401,
  lng: 106.7130697
};
var mcp3_coord = {
  lat: 10.7678868,
  lng: 106.7056941
};
var mcp4_coord = {
  lat: 10.754651,
  lng: 106.6632992
};

function initialize() {
  var map_canvas = document.getElementById('map');
  var map_opt = {
    center: new google.maps.LatLng(10.7721165, 106.6579187),
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(map_canvas, map_opt);
  add_marker(center_coord, map, "HQ", "red");
  add_marker(mcp1_coord, map, "MCP1", "blue");
  add_marker(mcp2_coord, map, "MCP2", "blue");
  add_marker(mcp3_coord, map, "MCP3", "blue");
  add_marker(mcp4_coord, map, "MCP4", "blue");
}

function add_marker(location, map, title, color) {
  var marker = new google.maps.Marker({
    position: location,
    title: title,
    color: color,
    map: map
  });
  return marker
}

google.maps.event.addDomListener(window, 'load', initialize);