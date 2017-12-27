function main() {
  // initmap
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 21.028511, lng: 105.804817},
    zoom: 12
  });

  // Add autocomplete function to searchbox
  var input = $('.search-box');
  for (i = 0; i < input.length; i++) {
    autocomplete = new google.maps.places.Autocomplete(input[i]);
  };
}
