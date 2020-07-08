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
    ['<div style="width: 170px;">POS SADIKIN</div>', -6.87939, 107.61272, 'img/didit.png'],			
	['<div style="width: 170px;">POS JEPRUT</div>', -6.889113, 107.608057, 'img/kahimsejken.png'], 
	['<div style="width: 170px;">POS MEKDI DAGO</div>', -6.88497, 107.61344, 'img/almyra.png'],	//
	['<div style="width: 170px;">POS SPBU PERTAMINA</div>', -6.890169, 107.613247, 'img/rojap.png'], // 
	['<div style="width: 170px;">POS TAMAN FILM</div>', -6.898686, 107.607746, 'img/naradita.png'], 
	['<div style="width: 170px;">POS BAKSIL</div>', -6.885179, 107.610161, 'img/ridwan.png'], 
	['<div style="width: 170px;">POS MONJU</div>', -6.89343, 107.61855, 'img/farabi.png'], 
	['<div style="width: 170px;">POS UPNORMAL DU</div>', -6.898178, 107.613641, 'img/juro.png'],
	['<div style="width: 170px;">POS BALTOS</div>', -6.898794, 107.609274, 'img/garda.png']
  ];


  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: pano,
      visible: false,
      zIndex: 999,
      zoomControl: false,
	  icon: locations[i][3]
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
