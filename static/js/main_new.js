var positionList = [];

function addMarker(location, map) {
  // Add the marker at the clicked location, and add the next-available label
  // from the array of alphabetical characters.
  var marker = new google.maps.Marker({
    position: location,
    map: map,

  });
}

function setupInputAsAutoPlace(input, map) {
  var autocompleteBox = new google.maps.places.Autocomplete(input, {
          bounds: map.getBounds(),
          types: ['geocode']
  });

  autocompleteBox.addListener('place_changed', function() {
    var place = autocompleteBox.getPlace();
    if (!place) {
      console.log("Something wrong with google map API :( ");
      return;
    }
    if (!place.geometry) {
      console.log("Cannot get geometry");
      return;
    }

    var location = place.geometry.location;
    var position = {
      lat: location.lat(),
      lng: location.lng()
    };

    addMarker(location, map);

    positionList.push(position);

    centerPointCalculation(positionList);
  });
}

function createPlaceInputs(num, map) {
  var container = document.getElementById("location-input");

  // delete previous fields
  while (container.hasChildNodes()) {
    container.removeChild(container.lastChild);
  };

  for (i = 0; i < num; i++) {
    var new_input = $('<input>', {
      class : 'form-control address-box',
      placeholder : "Địa chỉ người " + (i+1)

    })
    .appendTo('#location-input')[0];

    setupInputAsAutoPlace(new_input, map);
  }
}

function centerPointCalculation(positionList) {
  var lat_sum = 0;
  var lng_sum = 0;

  for (i=0; i<positionList.length; i++) {
    var position = positionList[i];
    lat_sum += position.lat;
    lng_sum += position.lng;
  }

  var lat_avg = lat_sum / positionList.length;
  var lng_avg = lng_sum / positionList.length;
  centerPoint = {
    lat: lat_avg,
    lng: lng_avg
  };
  console.log(centerPoint);
}

function search(centerPoint, searchInput) {
  var service = new google.maps.places.PlacesService(document.getElementById('map'));
  var request = {
    location: centerPoint,
    radius: 500,
    query: searchInput
  };


  service.textSearch(request, callback);
  function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      console.log(results);
      result = results[Math.floor(Math.random() * results.length)];
      console.log(result)
      createResult(centerPoint, result);
    }
  }
}


function createResult(centerPoint, result) {
  var resultMap = new google.maps.Map(document.getElementById('map2'), {
    center: centerPoint,
    zoom: 12
  });

  var resultMarker = new google.maps.Marker({
    position: centerPoint,
    map: resultMap
  });

  var resultLogo = $('<h1>', {
    class: 'logo result-logo'
  }).text('Đi ra đây này');
  resultLogo.appendTo('#result-info')[0];

  var resultDiv = $('<div>', {
    class: 'infomation',
    id: 'result'
  })
  .appendTo('#result-info')[1];

  var resultName = $('<h2>').text(result.name);
  resultName.appendTo('#result')[0];

  var resultAddress = $('<p>').text(result.formatted_address);
  resultAddress.appendTo('#result')[1];

  var resultText = $('<h4>').text('Đi ra thôi còn chờ đợi cái gì nũa');
  resultText.appendTo('#result')[2];

  // var resultImage = $('<img>', {
  //   class: 'result-img',
  //   src: result.photos[0]
  // }).appendTo('result-info')[2];
}


$(document).ready(function main() {
  // create map
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 21.028511, lng: 105.804817},
    zoom: 12
  });

  $('#result-area').hide();

  $("#number-submit").click(function(event){
    var num = $('#number-input').val();
    createPlaceInputs(num, map);

    $('#search-submit').click(function() {
      var searchInput = $('#search-input').val();
      $('#result-area').show();
      search(centerPoint, searchInput);

    })
  });
})
