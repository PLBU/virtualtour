var map;
var pano;
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
  pano = new google.maps.StreetViewPanorama(document.getElementById('funday'), panoOptions);

  var infowindow = new google.maps.InfoWindow();
  var marker, i;
  var markers = [];
  
  // Add Locations HERE (Can also add icons on each marker, to be added)
  // [Marker's caption, lattitude, longitude, icon location]
  var locations = [
	// Paris
	['<button onclick="toParis()">EKSTERNAL GOES TO FRANCE</button><br><b>Ini merupakan keterangan</b>', -6.87939, 107.61272], //sadikin
	['<button onclick="toParis()">EKSTERNAL GOES TO FRANCE</button><br><b>Ini merupakan keterangan</b>', -6.89343, 107.61855], //monju
	['<div style="width: 170px;">POS MENARA EIFFEL</div>', 48.857931, 2.295467],
	['<button onclick="goBack()">BACK TO BANDUNG</button>', 48.855454, 2.301249],
	
	// Italy
	['<button onclick="toPisa()">EKSTERNAL GOES TO ITALY</button><br><b>Ini merupakan keterangan</b>', -6.888931, 107.608089], //jeprut
	['<button onclick="toPisa()">EKSTERNAL GOES TO ITALY</button><br><b>Ini merupakan keterangan</b>', -6.898178, 107.613641], //upnormal
	['<div style="width: 170px;">POS MENARA PISA</div>', 43.722897, 10.396467], 
	['<button onclick="goBack()">BACK TO BANDUNG</button>', 43.7215745, 10.3971504],
	
	// Jogja
	['<button onclick="toJogja()">EKSTERNAL GOES TO JOGJA</button><br><b>Ini merupakan keterangan</b>', -6.88497, 107.61344], //mcd dago
	['<button onclick="toJogja()">EKSTERNAL GOES TO JOGJA</button><br><b>Ini merupakan keterangan</b>', -6.898794, 107.609274], //baltos 
	['<div style="width: 170px;">POS BOROBUDUR</div>', -7.607521, 110.203681], 
	['<button onclick="goBack()">BACK TO BANDUNG</button>', -7.606929, 110.202715],
	
	// Jakarta
	['<button onclick="toJakarta()">EKSTERNAL GOES TO JAKARTA</button><br><b>Ini merupakan keterangan</b>', -6.890169, 107.613247], //spbu
	['<button onclick="toJakarta()">EKSTERNAL GOES TO JAKARTA</button><br><b>Ini merupakan keterangan</b>', -6.876435, 107.611753], //angcis
	['<div style="width: 170px;">POS MONAS</div>', -6.173288, 106.827659],
	['<button onclick="goBack()">BACK TO BANDUNG</button>', -6.171659, 106.826946],
	
	// Rio
	['<button onclick="toRio()">EKSTERNAL GOES TO RIO</button><br><b>Ini merupakan keterangan</b>', -6.898686, 107.607746], //taman film
	['<button onclick="toRio()">EKSTERNAL GOES TO RIO</button><br><b>Ini merupakan keterangan</b>', -6.879173, 107.620036], //kanayakan
	['<div style="width: 170px;">POS JESUS</div>', -22.951827, -43.210497],
	['<button onclick="goBack()">BACK TO BANDUNG</button>', -22.951940, -43.210898],
	
	// Kuala Lumpur
	['<button onclick="toKualaLumpur()">EKSTERNAL GOES TO KUALA LUMPUR</button><br><b>Ini merupakan keterangan</b>', -6.885179, 107.610161], //baksil
	['<button onclick="toKualaLumpur()">EKSTERNAL GOES TO KUALA LUMPUR</button><br><b>Ini merupakan keterangan</b>', -6.878426, 107.609397], //sangkuriang 	
	['<div style="width: 170px;">POS PETRONAS</div>', 3.158228, 101.711308],
	['<button onclick="goBack()">BACK TO BANDUNG</button>', 3.158845, 101.709261]
  ];


  for (i = 0; i < locations.length; i++) {
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
      map: pano,
      visible: false,
      zIndex: 999,
      zoomControl: false,
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


function goBack() {
	pano.setPano("L4WNkSLF-mB52zujd2oR6g");
}

function toParis() {
	pano.setPano("sTl4iz8yrMDvwZgi6aeFgw");
}

function toPisa() {
	pano.setPano("B2MSxoluho_KlmONMS4zCA");
}

function toJogja() {
	pano.setPano("CyRjGnaBGjIvXiMFP-4jig");
}

function toJakarta() {
	pano.setPano("r18eyTnCRT90PGcqsy-hnQ");
}

function toRio() {
	pano.setPano("PrOCBIKiwp0_AW0ULdmqJA");
}

function toKualaLumpur() {
	pano.setPano("l5GdBeZBIys3jKbp4ijn4w");
}

google.maps.event.addDomListener(window, 'load', initialize);
