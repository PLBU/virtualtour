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
    ["<div class='qung'>https://meet.google.com/hxe-cwzp-ycn</div>", -6.87939, 107.61272, 'img/daWRpdA.png'],			
	['<div style="width: 170px;">https://meet.google.com/suj-aywh-jis</div>', -6.888931, 107.608089, 'img/kYWhpbXNla2plbg.png'], 
	['<div style="width: 170px;">https://meet.google.com/nme-ftmh-aye</div>', -6.88497, 107.61344, 'img/abG15cmE.png'],	
	['<button onclick="portalTest()">EKSTERNAL GOES TO ITALY</button>', -6.893224, 107.610439, 'img/roamFw.png'], 
	['<div style="width: 170px;">https://meet.google.com/vjp-sbhx-buk</div>', -6.898686, 107.607746, 'img/nYXJhZGl0YQ.png'], 
	['<div style="width: 170px;">https://meet.google.com/taa-druk-dak</div>', -6.885179, 107.610161, 'img/riZHdhbg.png'], 
	['<div style="width: 170px;">https://meet.google.com/kga-vaff-ekj</div>', -6.89343, 107.61855, 'img/fYXJhYmk.png'], 
	['<div style="width: 170px;">https://meet.google.com/dne-bfov-fht</div>', -6.898178, 107.613641, 'img/jdXJv.png'],
	['<button onclick="goBack()">GO BACK!</button>', 43.722828, 10.392177, 'img/gYXJkYQ.png']
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

function portalTest() {
	pano.setPano("_tfTouCq7SDErkInK11UnA");
}

function goBack() {
	pano.setPano("L4WNkSLF-mB52zujd2oR6g");
}

google.maps.event.addDomListener(window, 'load', initialize);
