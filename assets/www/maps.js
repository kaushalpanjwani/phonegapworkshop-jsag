var getLocation = function(callback) {
	var suc = function(p) {
		callback(p);
	};
	var locFail = function(e) {
		alert('Location not found! ' + e.code + ' ' + e.message);
	};
	navigator.geolocation.getCurrentPosition(suc, locFail, {
		maximumAge : 3000,
		timeout : 5000,
		enableHighAccuracy : true
	});
};

var mapMyLocation = function(position) {
	alert('callback');
	var geocoder = new google.maps.Geocoder();
	var infowindow = new google.maps.InfoWindow();

	var lat = position.coords.latitude;
	var long = position.coords.longitude;
	var myLatlng = new google.maps.LatLng(lat, long);
	alert (lat +' , '+long);
	var mapOptions = {
		center : myLatlng,
		zoom : 12,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	};

	map_element = document.getElementById("map_canvas");
	try {
		var map = new google.maps.Map(map_element, mapOptions);
		var markerOptions = {
				map : map,
				position : myLatlng,
				draggable : false
			}
		var marker = new google.maps.Marker(markerOptions);
		geocoder.geocode({'latLng': myLatlng}, function(results, status) {
		      if (status == google.maps.GeocoderStatus.OK) {
		    	  if (results[1]) {
		    		  infowindow.setContent(results[1].formatted_address);
		              infowindow.open(map, marker);		    		  
		    	  }
		      } else {
		    	  alert ('Google Maps error : ' + status);
		      }
		});

	} catch (e) {
		alert(e.message);
	}
};
var findLocation = function () {
	getLocation(mapMyLocation);
};