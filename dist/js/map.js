"use strict";

function initMap() {
  var location = {
    lat: 10.959780,
    lng: 106.789631
  };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: location
  });
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}