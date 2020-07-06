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
    ['<div style="width: 170px;">POS SADIKIN</div>', -6.87939, 107.61272],
	['<div style="width: 170px;">POS BESKEM</div>', -6.87333, 107.61254],
	['<div style="width: 170px;">POS MEKDI DAGO</div>', -6.88497, 107.61344],
	['<div style="width: 170px;">POS CIWALK</div>', -6.89324, 107.60546],
	['<div style="width: 170px;">POS GASIBU</div>', -6.89902, 107.61701],
	['<div style="width: 170px;">POS BORMA</div>', -6.87713, 107.6181],
	['<div style="width: 170px;">POS MONJU</div>', -6.89343, 107.61855],
	['<div style="width: 170px;">POS BALTOS</div>', -6.89908, 107.60817]
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
