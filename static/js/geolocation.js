// $(document).ready(function () {
//
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 11,
//     center: {lat: 21.028511, lng: 105.804817}
//   });
//
//   function geocodeAddress(geocoder, resultsMap, address) {
//     // var address = $('.address').value;
//     geocoder.geocode({'address': address}, function(results, status) {
//       if (status === 'OK') {
//         resultsMap.setCenter(results[0].geometry.location);
//         var marker = new google.maps.Marker({
//           map: resultsMap,
//           position: results[0].geometry.location
//         });
//       } else {
//         alert('Geocode was not successful for the following reason: ' + status);
//       }
//     });
//   }
//
//
//   console.log('buzz');
//   $('.submit').click(function () {
//     var address = $(this).prev().val();
//     console.log(address);
//     geocodeAddress(geocoder, map, address);
//   });
// });

$(document).ready(function () {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: {lat: 21.028511, lng: 105.804817}
  });

  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  function getLocation () {

  }

  $('.submit').click(function () {
    var address = $(this).prev().val();
  });
});
