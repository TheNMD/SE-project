var center_coord = {
  lat: 10.772325279030063,
  lng: 106.65787274967713
};
var mcp1_coord = {
  lat: 10.763035854173207,
  lng: 106.68246094011415
};
var mcp2_coord = {
  lat: 10.807461510643742,
  lng: 106.7129661503155
};
var mcp3_coord = {
  lat: 10.767649200012244,
  lng: 106.70569705539162
};
var mcp4_coord = {
  lat: 10.754494315628872,
  lng: 106.66330532431057
};
var mcp5_coord = {
  lat: 10.739462641227524,
  lng: 106.67810084368435
};
var mcp6_coord = {
  lat: 10.733917145654353,
  lng: 106.69970700584479
};
var mcp7_coord = {
  lat: 10.783912861419154,
  lng: 106.69633268494414
};
var mcp8_coord = {
  lat: 10.799854635183715,
  lng: 106.67465338186025
};
var mcp9_coord = {
  lat: 10.835935689528208,
  lng: 106.66151748208313
};
var mcp10_coord = {
  lat: 10.749064297916597,
  lng: 106.62904141245609
};
var mcp11_coord = {
  lat: 10.859690658744025,
  lng: 106.613576747598
};
var mcp12_coord = {
  lat: 10.892775694208593,
  lng: 106.59075931485505
};


function initialize() {
  var map_canvas = document.getElementById('map');
  var map_opt = {
    center: new google.maps.LatLng(10.7721165, 106.6579187),
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  var map = new google.maps.Map(map_canvas, map_opt);
  add_marker(center_coord, map, "HQ");
  add_marker(mcp1_coord, map, "MCP1");
  add_marker(mcp2_coord, map, "MCP2");
  add_marker(mcp3_coord, map, "MCP3");
  add_marker(mcp4_coord, map, "MCP4");
  add_marker(mcp5_coord, map, "MCP5");
  add_marker(mcp6_coord, map, "MCP6");
  add_marker(mcp7_coord, map, "MCP7");
  add_marker(mcp8_coord, map, "MCP8");
  add_marker(mcp9_coord, map, "MCP9");
  add_marker(mcp10_coord, map, "MCP10");
  add_marker(mcp11_coord, map, "MCP11");
  add_marker(mcp12_coord, map, "MCP12");
}

function add_marker(location, map, title) {
  var marker = new google.maps.Marker({
    position: location,
    map: map,
    title: title
  });
  return marker
}

google.maps.event.addDomListener(window, 'load', initialize);