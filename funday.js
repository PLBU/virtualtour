var map;
var panorama;
var panoramaService;
var streetView;

function initialize() {
	
  var panoOptions = {
    pano: 'L4WNkSLF-mB52zujd2oR6g',
    pov: {
      heading: 0,
      pitch: 0
    },
    zoom: 0
  };
  var pano = new google.maps.StreetViewPanorama(document.getElementById('funday'), panoOptions);

  var infowindow = new google.maps.InfoWindow();
  var marker, i;
  var markers = [];
  
  // Add Locations HERE (Can also add icons on each marker, to be added)
  // [Marker's caption, lattitude, longitude, icon location]
  var locations = [
    ['<div style="width: 170px;">meet.google.com/haha-haha</div>', -6.878710, 107.612570],
	['<div style="width: 170px;">meet.google.com/hehe-hehe</div>', -6.893248, 107.610424]
  ];


  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: pano,
      visible: false,
      zIndex: 999,
      zoomControl: false
	  //icon: locations[i][3]
    });

    google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i][0]);
        infowindow.open(pano, marker);
      }
    })(marker, i));
    markers.push(marker); // save all markers
  }

  for (i = 0; i < locations.length; i++) {
    markers[i].setVisible(true);
    markers[i].setMap(pano);
  }

  pano.setPano('L4WNkSLF-mB52zujd2oR6g');
}

google.maps.event.addDomListener(window, 'load', initialize);
